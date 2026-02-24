import Link from "next/link";
import { CHAPTERS } from "@/data/learn/chapters";

export function ChapterNav({ currentSlug }: { currentSlug: string }) {
  const idx = CHAPTERS.findIndex((c) => c.slug === currentSlug);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  return (
    <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={`/learn/${prev.slug}`}
          className="text-[10px] text-muted/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          &larr; {prev.title}
        </Link>
      ) : (
        <Link
          href="/learn"
          className="text-[10px] text-muted/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          &larr; All chapters
        </Link>
      )}
      {next ? (
        <Link
          href={`/learn/${next.slug}`}
          className="text-[10px] text-muted/50 uppercase tracking-[0.2em] hover:text-bone transition-colors text-right"
        >
          {next.title} &rarr;
        </Link>
      ) : (
        <Link
          href="/"
          className="text-[10px] text-muted/50 uppercase tracking-[0.2em] hover:text-bone transition-colors text-right"
        >
          Back to the tool &rarr;
        </Link>
      )}
    </nav>
  );
}
