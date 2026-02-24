import Link from "next/link";
import { CHAPTERS } from "@/data/learn/chapters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Got Here | Food or Trash",
  description:
    "The story of how lobbying, bad science, and industrial food production corrupted modern nutrition. From the food pyramid to seed oils.",
  openGraph: {
    title: "How We Got Here | Food or Trash",
    description:
      "The story of how lobbying, bad science, and industrial food production corrupted modern nutrition.",
  },
};

export default function LearnPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <header className="mb-16">
        <h1
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          How We Got Here
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          The story of how lobbying, fraud, and industrial food production
          corrupted modern nutrition. Start from the beginning or jump to any
          chapter.
        </p>
      </header>

      <div className="space-y-4">
        {CHAPTERS.map((chapter, i) => (
          <Link
            key={chapter.slug}
            href={`/learn/${chapter.slug}`}
            className="block p-6 border border-border hover:border-bone/20 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 text-[10px] text-muted/30 font-heading font-bold uppercase tracking-[0.1em] mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-sm font-heading font-bold uppercase tracking-[0.1em] text-bone group-hover:text-food-green transition-colors">
                  {chapter.title}
                </h2>
                <p className="mt-1 text-xs text-muted/60 leading-relaxed">
                  {chapter.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-xs text-muted/40 leading-relaxed">
          This is not medical advice. It&apos;s a summary of publicly available
          research and historical events. Read the sources, think critically,
          and make your own decisions about what you eat.
        </p>
      </div>
    </div>
  );
}
