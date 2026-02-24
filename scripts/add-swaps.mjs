import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../src/data");
const trashPath = resolve(dataDir, "trash.json");

// Load env from .env.local
const envPath = resolve(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const match = line.match(/^(\w+)=(.+)$/);
  if (match) process.env[match[1]] = match[2].trim();
}

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_KEY = process.env.CLOUDFLARE_API_KEY;
if (!ACCOUNT_ID || !API_KEY) {
  console.error("Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_KEY in .env.local");
  process.exit(1);
}

const MODEL = "@cf/meta/llama-3.1-8b-instruct";
const API_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL}`;
const BATCH_SIZE = 10;
const BATCH_DELAY_MS = 2000;

// Category-level swaps for common categories (skip AI for these)
const CATEGORY_SWAPS = {
  "seed oil": "Butter, ghee, tallow, or extra virgin olive oil",
  "refined sugar": "Raw honey, maple syrup, or dates",
  "artificial sweetener": "Raw honey, maple syrup, or stevia leaf",
  "margarine": "Real butter or ghee",
};

async function callAI(systemPrompt, userPrompt) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 50,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return (data.result?.response || "").trim();
}

const SWAP_SYSTEM_PROMPT = `You suggest whole-food alternatives for trash food items on foodortrash.com. The site values whole, unprocessed foods: meat, fish, eggs, vegetables, fruits, nuts, seeds, butter, ghee, tallow, olive oil, coconut oil.

Suggest a clean swap in under 10 words. Be direct, no hedging. Just list the alternatives separated by commas or "or".

Examples:
- "canola oil" → "Butter, ghee, tallow, or coconut oil"
- "instant ramen" → "Bone broth with rice noodles"
- "diet coke" → "Sparkling water with lemon"
- "hot dog" → "Grass-fed beef sausage without fillers"

Reply with ONLY the swap suggestion, nothing else.`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("=== FoodOrTrash Clean Swaps Generator ===\n");

  const items = JSON.parse(readFileSync(trashPath, "utf-8"));
  const needsSwap = items.filter((item) => !item.swap);

  console.log(`${items.length} total trash items, ${needsSwap.length} need swaps`);

  if (needsSwap.length === 0) {
    console.log("All items already have swaps. Done.");
    return;
  }

  let processed = 0;
  let categoryMatched = 0;
  let failed = 0;

  // First pass: apply category-level swaps
  for (const item of needsSwap) {
    const categorySwap = CATEGORY_SWAPS[item.category];
    if (categorySwap) {
      item.swap = categorySwap;
      categoryMatched++;
    }
  }
  console.log(`Applied ${categoryMatched} category-level swaps`);

  // Save category swaps
  writeFileSync(trashPath, JSON.stringify(items, null, 2) + "\n", "utf-8");

  // Second pass: AI for remaining
  const stillNeeds = items.filter((item) => !item.swap);
  console.log(`${stillNeeds.length} items need AI-generated swaps\n`);

  for (let i = 0; i < stillNeeds.length; i += BATCH_SIZE) {
    const batch = stillNeeds.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(stillNeeds.length / BATCH_SIZE);

    console.log(
      `Batch ${batchNum}/${totalBatches}: ${batch.map((b) => b.name).join(", ")}`
    );

    const results = await Promise.allSettled(
      batch.map(async (item) => {
        try {
          const swap = await callAI(
            SWAP_SYSTEM_PROMPT,
            `Suggest a clean swap for: ${item.name} (category: ${item.category})`
          );
          if (swap && swap.length > 3 && swap.length < 100) {
            item.swap = swap;
            return true;
          }
          return false;
        } catch (err) {
          console.error(`  Failed: ${item.name} — ${err.message}`);
          return false;
        }
      })
    );

    for (const r of results) {
      if (r.status === "fulfilled" && r.value) processed++;
      else failed++;
    }

    // Save after each batch
    writeFileSync(trashPath, JSON.stringify(items, null, 2) + "\n", "utf-8");

    if (i + BATCH_SIZE < stillNeeds.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  console.log(`\nDone: ${categoryMatched} category swaps, ${processed} AI swaps, ${failed} failed`);
  console.log("Review the changes before committing.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
