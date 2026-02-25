export interface FoodItem {
  name: string;
  category: string;
  aliases: string[];
  fun_fact: string;
  score: number;
  calories: number;
  explanation?: string;
}

export interface TrashItem {
  name: string;
  category: string;
  aliases: string[];
  reason: string;
  score: number;
  calories: number;
  explanation?: string;
  swap?: string;
}

export interface LookupResult {
  found: boolean;
  item?: FoodItem;
  trashItem?: TrashItem;
  source: "local" | "ai";
  verdict: "food" | "trash";
  score: number;
  calories?: number;
  aiReason?: string;
}

export interface ComponentResult {
  name: string;
  lookupResult: LookupResult;
  weight: number;
}

export interface CompositeLookupResult {
  query: string;
  isComposite: true;
  components: ComponentResult[];
  compositeScore: number;
  compositeVerdict: "food" | "trash";
  compositeCalories: number;
  source: "composite";
}

export type AnyResult = LookupResult | CompositeLookupResult;

export function isCompositeResult(r: AnyResult): r is CompositeLookupResult {
  return "isComposite" in r && r.isComposite === true;
}

import foodsData from "@/data/foods.json";
import trashData from "@/data/trash.json";

export const foods: FoodItem[] = foodsData as FoodItem[];
export const trash: TrashItem[] = trashData as TrashItem[];

export const categories: Record<string, string> = {
  fruit: "Fruit",
  vegetable: "Vegetable",
  grain: "Grain",
  legume: "Legume",
  nut: "Nut",
  seed: "Seed",
  meat: "Meat",
  poultry: "Poultry",
  fish: "Fish",
  shellfish: "Shellfish",
  dairy: "Dairy",
  egg: "Egg",
  herb: "Herb",
  spice: "Spice",
  oil: "Oil",
  sweetener: "Sweetener",
  fermented: "Fermented",
  fungi: "Fungi",
  seaweed: "Seaweed",
  beverage: "Beverage",
  "seed oil": "Seed Oil",
  "seed oil product": "Seed Oil Product",
  "seed oil derivative": "Seed Oil Derivative",
  "ultra-processed": "Ultra-Processed",
  "processed meat": "Processed Meat",
  "deep fried": "Deep Fried",
  "fast food": "Fast Food",
};
