import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../src/data");

function cleanQuotes(filePath, label) {
  const items = JSON.parse(readFileSync(filePath, "utf-8"));
  let fixed = 0;
  for (const item of items) {
    if (item.explanation) {
      const cleaned = item.explanation
        .replace(/^["\u201C\u201D]+|["\u201C\u201D]+$/g, "")
        .trim();
      if (cleaned !== item.explanation) {
        item.explanation = cleaned;
        fixed++;
      }
    }
  }
  writeFileSync(filePath, JSON.stringify(items, null, 2) + "\n", "utf-8");
  console.log(`${label}: fixed ${fixed} quoted explanations`);
}

cleanQuotes(resolve(dataDir, "foods.json"), "Foods");
cleanQuotes(resolve(dataDir, "trash.json"), "Trash");
