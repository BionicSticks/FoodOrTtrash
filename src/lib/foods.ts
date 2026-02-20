export interface FoodItem {
  name: string;
  category: string;
  aliases: string[];
  fun_fact: string;
  score: number;
  calories: number;
}

export interface TrashItem {
  name: string;
  category: string;
  aliases: string[];
  reason: string;
  score: number;
  calories: number;
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
};
