import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../src/data");

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
      max_tokens: 150,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return (data.result?.response || "").trim();
}

const FOOD_SYSTEM_PROMPT = `You write short explanations for a food rating website called foodortrash.com. The site rates whole, unprocessed foods highly and considers seed oils and ultra-processed foods as trash.

Write exactly 2-3 sentences explaining why the given food is real food. Be opinionated and direct. Focus on nutritional density, traditional use, or what makes it a whole food humans evolved to eat. No hedging. Write in second person ("you"). Keep it under 60 words.

Example: "Salmon is packed with omega-3s your brain actually needs. Wild-caught is king — farmed is acceptable but not the same animal. One of the best things you can eat."

Reply with ONLY the explanation, nothing else.`;

const TRASH_SYSTEM_PROMPT = `You write short explanations for a food rating website called foodortrash.com. The site rates whole, unprocessed foods highly and considers seed oils and ultra-processed foods as trash.

Write exactly 2-3 sentences explaining why the given item is trash. Be opinionated and direct. Focus on industrial processing, seed oils, refined ingredients, or what makes it not real food. No hedging. Write in second person ("you"). Keep it under 60 words.

Example: "Margarine is solidified seed oil dressed up to look like butter. Your great-grandmother wouldn't recognize it as food. Just use real butter."

Reply with ONLY the explanation, nothing else.`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function enrichFile(filePath, systemPrompt, label) {
  const items = JSON.parse(readFileSync(filePath, "utf-8"));
  const needsEnrichment = items.filter((item) => !item.explanation);

  console.log(
    `\n${label}: ${items.length} total, ${needsEnrichment.length} need explanations`
  );

  if (needsEnrichment.length === 0) {
    console.log(`  All items already have explanations. Skipping.`);
    return;
  }

  let processed = 0;
  let failed = 0;

  for (let i = 0; i < needsEnrichment.length; i += BATCH_SIZE) {
    const batch = needsEnrichment.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(needsEnrichment.length / BATCH_SIZE);

    console.log(
      `  Batch ${batchNum}/${totalBatches}: ${batch.map((b) => b.name).join(", ")}`
    );

    const results = await Promise.allSettled(
      batch.map(async (item) => {
        try {
          const explanation = await callAI(
            systemPrompt,
            `Write an explanation for: ${item.name} (category: ${item.category})`
          );
          if (explanation && explanation.length > 10) {
            item.explanation = explanation;
            return true;
          }
          return false;
        } catch (err) {
          console.error(`    Failed: ${item.name} — ${err.message}`);
          return false;
        }
      })
    );

    for (const r of results) {
      if (r.status === "fulfilled" && r.value) processed++;
      else failed++;
    }

    // Save after each batch (crash-safe)
    writeFileSync(filePath, JSON.stringify(items, null, 2) + "\n", "utf-8");

    if (i + BATCH_SIZE < needsEnrichment.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  console.log(`  Done: ${processed} enriched, ${failed} failed`);
}

async function main() {
  console.log("=== FoodOrTrash Database Enrichment ===");

  await enrichFile(
    resolve(dataDir, "foods.json"),
    FOOD_SYSTEM_PROMPT,
    "FOODS"
  );

  await enrichFile(
    resolve(dataDir, "trash.json"),
    TRASH_SYSTEM_PROMPT,
    "TRASH"
  );

  console.log("\nDone! Review the changes before committing.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
