import { foods, trash, type FoodItem, type TrashItem, categories } from "@/lib/foods";
import { slugify } from "@/lib/slugify";
import { ScoreMeterStatic } from "@/components/score-meter-static";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type ItemRecord =
  | { kind: "food"; item: FoodItem }
  | { kind: "trash"; item: TrashItem };

function findItem(slug: string): ItemRecord | null {
  const food = foods.find((f) => slugify(f.name) === slug);
  if (food) return { kind: "food", item: food };
  const trashItem = trash.find((t) => slugify(t.name) === slug);
  if (trashItem) return { kind: "trash", item: trashItem };
  return null;
}

function getRelated(item: FoodItem | TrashItem, kind: "food" | "trash"): (FoodItem | TrashItem)[] {
  const source = kind === "food" ? foods : trash;
  return source
    .filter((i) => i.category === item.category && i.name !== item.name)
    .slice(0, 6);
}

export function generateStaticParams() {
  const foodSlugs = foods.map((f) => ({ slug: slugify(f.name) }));
  const trashSlugs = trash.map((t) => ({ slug: slugify(t.name) }));
  return [...foodSlugs, ...trashSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = findItem(slug);
  if (!record) return {};

  const { kind, item } = record;
  const verdict = kind === "food" ? "FOOD" : "TRASH";
  const title = `${item.name} — ${verdict} | Food or Trash`;
  const description =
    item.explanation ||
    (kind === "food"
      ? (item as FoodItem).fun_fact
      : (item as TrashItem).reason);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        `/api/og?item=${encodeURIComponent(item.name)}&verdict=${kind}&score=${item.score}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `/api/og?item=${encodeURIComponent(item.name)}&verdict=${kind}&score=${item.score}`,
      ],
    },
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = findItem(slug);
  if (!record) notFound();

  const { kind, item } = record;
  const isFood = kind === "food";
  const foodItem = isFood ? (item as FoodItem) : null;
  const trashItem = !isFood ? (item as TrashItem) : null;
  const related = getRelated(item, kind);
  const categoryLabel = categories[item.category] || item.category;

  return (
    <div className="min-h-screen bg-void text-bone">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-block mb-12 text-[10px] text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
        >
          &larr; Judge something else
        </Link>

        {/* Item name */}
        <h1
          className="font-heading font-bold uppercase leading-[0.85] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          {item.name}
        </h1>

        {/* Verdict badge */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span
            className={`inline-block px-5 py-2 text-sm font-heading font-bold uppercase tracking-[0.2em] ${
              isFood
                ? "text-food-green border border-food-green/30 bg-food-green-dim"
                : "text-trash-red border border-trash-red/30 bg-trash-red-dim"
            }`}
          >
            {isFood ? "FOOD" : "TRASH"}
          </span>

          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-muted/70 border border-border">
            {categoryLabel}
          </span>

          {item.calories > 0 && (
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted/70 border border-border">
              ~{item.calories} kcal / 100g
            </span>
          )}
        </div>

        {/* Score meter */}
        <ScoreMeterStatic score={item.score} />

        {/* Explanation */}
        {item.explanation && (
          <div className="mt-10 p-6 border border-border">
            <p className="text-sm text-bone/80 leading-relaxed font-body">
              {item.explanation}
            </p>
          </div>
        )}

        {/* Fun fact or reason */}
        {foodItem?.fun_fact && (
          <div className="mt-4 p-5 border border-border">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-bone font-semibold uppercase tracking-[0.1em] text-[10px]">
                Did you know
              </span>
              <br />
              <span className="mt-1 block">{foodItem.fun_fact}</span>
            </p>
          </div>
        )}

        {trashItem?.reason && (
          <div className="mt-4 p-5 border border-trash-red/10">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-trash-red font-semibold uppercase tracking-[0.1em] text-[10px]">
                Why trash
              </span>
              <br />
              <span className="mt-1 block">{trashItem.reason}</span>
            </p>
          </div>
        )}

        {/* Clean swap */}
        {trashItem?.swap && (
          <div className="mt-4 p-5 border border-food-green/20 bg-food-green-dim">
            <p className="text-xs text-bone leading-relaxed">
              <span className="text-food-green font-semibold uppercase tracking-[0.1em] text-[10px]">
                Try instead
              </span>
              <br />
              <span className="mt-1 block text-bone/80">{trashItem.swap}</span>
            </p>
          </div>
        )}

        {/* Related items */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              More in {categoryLabel}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.name}
                  href={`/item/${slugify(r.name)}`}
                  className="block p-4 border border-border hover:border-bone/20 transition-colors"
                >
                  <span className="text-xs text-bone uppercase tracking-[0.1em] font-body">
                    {r.name}
                  </span>
                  <span className="block mt-1 text-[10px] text-muted/40">
                    {r.score}/100
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <Link
            href="/"
            className="text-xs text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
          >
            Judge something else &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
