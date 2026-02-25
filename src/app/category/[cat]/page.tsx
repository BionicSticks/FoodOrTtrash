import Link from "next/link";
import { foods, trash, categories, type FoodItem, type TrashItem } from "@/lib/foods";
import { slugify } from "@/lib/slugify";
import { ScoreMeterStatic } from "@/components/score-meter-static";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function getAllCategories(): string[] {
  const cats = new Set<string>();
  for (const f of foods) cats.add(f.category);
  for (const t of trash) cats.add(t.category);
  return Array.from(cats);
}

function getItemsInCategory(cat: string): Array<{ item: FoodItem | TrashItem; kind: "food" | "trash" }> {
  const items: Array<{ item: FoodItem | TrashItem; kind: "food" | "trash" }> = [];
  for (const f of foods) {
    if (f.category === cat) items.push({ item: f, kind: "food" });
  }
  for (const t of trash) {
    if (t.category === cat) items.push({ item: t, kind: "trash" });
  }
  return items.sort((a, b) => b.item.score - a.item.score);
}

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({ cat }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const label = categories[cat] || cat;
  const items = getItemsInCategory(cat);
  if (items.length === 0) return {};

  return {
    title: `${label} — ${items.length} Items | Food or Trash`,
    description: `Browse all ${items.length} ${label.toLowerCase()} items rated by Food or Trash.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const items = getItemsInCategory(cat);
  if (items.length === 0) notFound();

  const label = categories[cat] || cat;
  const foodCount = items.filter((i) => i.kind === "food").length;
  const trashCount = items.filter((i) => i.kind === "trash").length;
  const avgScore = Math.round(items.reduce((sum, i) => sum + i.item.score, 0) / items.length);
  const isTrashCategory = foodCount === 0;

  return (
    <div className="min-h-screen bg-void text-bone">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link
          href="/category"
          className="inline-block mb-12 text-[10px] text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
        >
          &larr; All categories
        </Link>

        <h1
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          {label}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted">
            {items.length} items
          </span>
          {foodCount > 0 && (
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-food-green border border-food-green/30">
              {foodCount} food
            </span>
          )}
          {trashCount > 0 && (
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-trash-red border border-trash-red/30">
              {trashCount} trash
            </span>
          )}
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-muted/60 border border-border">
            avg score: {avgScore}
          </span>
        </div>

        <ScoreMeterStatic score={avgScore} />

        {/* Items list */}
        <div className="mt-8 space-y-2">
          {items.map(({ item, kind }) => {
            const isFood = kind === "food";
            return (
              <Link
                key={item.name}
                href={`/item/${slugify(item.name)}`}
                className="flex items-center gap-4 p-4 border border-border hover:border-bone/20 transition-colors group"
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isFood ? "bg-food-green" : "bg-trash-red"
                  }`}
                />
                <span className="flex-1 text-sm text-bone uppercase tracking-[0.1em] font-body group-hover:text-food-green transition-colors">
                  {item.name}
                </span>
                <span
                  className={`text-sm font-heading font-bold ${
                    isFood ? "text-food-green" : isTrashCategory ? "text-trash-red" : "text-muted"
                  }`}
                >
                  {item.score}
                </span>
              </Link>
            );
          })}
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
