import Link from "next/link";
import { foods, trash, categories } from "@/lib/foods";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse by Category | Food or Trash",
  description:
    "Browse all foods and trash items by category — fruits, vegetables, meats, seed oils, ultra-processed, and more.",
};

interface CategoryInfo {
  slug: string;
  label: string;
  foodCount: number;
  trashCount: number;
  total: number;
  kind: "food" | "trash" | "mixed";
}

function getCategories(): CategoryInfo[] {
  const catMap = new Map<string, { food: number; trash: number }>();

  for (const f of foods) {
    const entry = catMap.get(f.category) || { food: 0, trash: 0 };
    entry.food++;
    catMap.set(f.category, entry);
  }

  for (const t of trash) {
    const entry = catMap.get(t.category) || { food: 0, trash: 0 };
    entry.trash++;
    catMap.set(t.category, entry);
  }

  return Array.from(catMap.entries())
    .map(([slug, counts]) => ({
      slug,
      label: categories[slug] || slug,
      foodCount: counts.food,
      trashCount: counts.trash,
      total: counts.food + counts.trash,
      kind: counts.food > 0 && counts.trash > 0
        ? "mixed" as const
        : counts.food > 0
          ? "food" as const
          : "trash" as const,
    }))
    .sort((a, b) => b.total - a.total);
}

export default function CategoryIndexPage() {
  const allCategories = getCategories();
  const foodCats = allCategories.filter((c) => c.kind === "food");
  const trashCats = allCategories.filter((c) => c.kind === "trash");

  return (
    <div className="min-h-screen bg-void text-bone">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-12 text-[10px] text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
        >
          &larr; Back to judge
        </Link>

        <h1
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          Browse by Category
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          {allCategories.length} categories &middot; {foods.length} foods &middot; {trash.length} trash items
        </p>

        {/* Food categories */}
        <h2 className="mt-12 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-food-green">
          Real Food ({foodCats.length})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {foodCats.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block p-4 border border-border hover:border-food-green/30 transition-colors group"
            >
              <span className="text-sm text-bone uppercase tracking-[0.1em] font-heading font-bold group-hover:text-food-green transition-colors">
                {cat.label}
              </span>
              <span className="block mt-1 text-[10px] text-muted/40">
                {cat.total} items
              </span>
            </Link>
          ))}
        </div>

        {/* Trash categories */}
        <h2 className="mt-12 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-trash-red">
          Trash ({trashCats.length})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {trashCats.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block p-4 border border-border hover:border-trash-red/30 transition-colors group"
            >
              <span className="text-sm text-bone uppercase tracking-[0.1em] font-heading font-bold group-hover:text-trash-red transition-colors">
                {cat.label}
              </span>
              <span className="block mt-1 text-[10px] text-muted/40">
                {cat.total} items
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <Link
            href="/"
            className="text-xs text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
          >
            Judge something &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
