import Fuse from "fuse.js";
import { foods, trash, type FoodItem, type TrashItem, type LookupResult } from "./foods";

const foodFuse = new Fuse(foods, {
  keys: [
    { name: "name", weight: 2 },
    { name: "aliases", weight: 1 },
  ],
  threshold: 0.3,
  includeScore: true,
});

const trashFuse = new Fuse(trash, {
  keys: [
    { name: "name", weight: 2 },
    { name: "aliases", weight: 1 },
  ],
  threshold: 0.3,
  includeScore: true,
});

function findTrashExact(query: string): TrashItem | null {
  const match = trash.find(
    (t) =>
      t.name === query ||
      t.aliases.some((a) => a.toLowerCase() === query)
  );
  return match || null;
}

function findFoodExact(query: string): FoodItem | null {
  const match = foods.find(
    (f) =>
      f.name === query ||
      f.aliases.some((a) => a.toLowerCase() === query)
  );
  return match || null;
}

export function lookupFood(query: string): LookupResult | null {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return null;

  // 1. Check trash list first (exact match)
  const exactTrash = findTrashExact(trimmed);
  if (exactTrash) {
    return {
      found: true,
      trashItem: exactTrash,
      source: "local",
      verdict: "trash",
      score: exactTrash.score,
      calories: exactTrash.calories,
    };
  }

  // 2. Check food list (exact match)
  const exactFood = findFoodExact(trimmed);
  if (exactFood) {
    return { found: true, item: exactFood, source: "local", verdict: "food", score: exactFood.score, calories: exactFood.calories };
  }

  // 3. Fuzzy search both lists
  const trashResults = trashFuse.search(trimmed);
  const foodResults = foodFuse.search(trimmed);

  const bestTrash = trashResults.length > 0 ? trashResults[0] : null;
  const bestFood = foodResults.length > 0 ? foodResults[0] : null;

  // If trash has a confident match, check if food also matches but with lower score (higher confidence)
  if (bestTrash && bestTrash.score !== undefined && bestTrash.score < 0.3) {
    // If food also matches with better score, prefer food
    if (bestFood && bestFood.score !== undefined && bestFood.score < bestTrash.score) {
      return {
        found: true,
        item: bestFood.item,
        source: "local",
        verdict: "food",
        score: bestFood.item.score,
        calories: bestFood.item.calories,
      };
    }
    return {
      found: true,
      trashItem: bestTrash.item,
      source: "local",
      verdict: "trash",
      score: bestTrash.item.score,
      calories: bestTrash.item.calories,
    };
  }

  // 4. Food fuzzy match
  if (bestFood && bestFood.score !== undefined && bestFood.score < 0.3) {
    return {
      found: true,
      item: bestFood.item,
      source: "local",
      verdict: "food",
      score: bestFood.item.score,
      calories: bestFood.item.calories,
    };
  }

  // No match — caller should fall back to AI
  return null;
}
