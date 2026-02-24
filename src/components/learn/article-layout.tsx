import type { Chapter } from "@/data/learn/chapters";
import { ChapterNav } from "./chapter-nav";

export function ArticleLayout({ chapter }: { chapter: Chapter }) {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-16">
        <h1
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          {chapter.title}
        </h1>
        <p className="mt-4 text-sm text-muted tracking-[0.05em] leading-relaxed">
          {chapter.subtitle}
        </p>
      </header>

      {/* Sections */}
      <div className="space-y-8">
        {chapter.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-bone mb-4 mt-12">
                {section.heading}
              </h2>
            )}
            <p className="text-sm text-bone/70 leading-[1.8] font-body">
              {section.body}
            </p>
            {section.pullQuote && (
              <blockquote className="my-8 pl-5 border-l-2 border-crimson-bright">
                <p className="text-sm text-bone/90 leading-[1.8] italic">
                  {section.pullQuote}
                </p>
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Sources */}
      {chapter.sources.length > 0 && (
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-bone mb-6">
            Sources
          </h2>
          <ul className="space-y-3">
            {chapter.sources.map((source, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5 text-[9px] uppercase tracking-[0.15em] text-muted/40 border border-border px-2 py-0.5">
                  {source.type}
                </span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-bone transition-colors leading-relaxed"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Chapter navigation */}
      <ChapterNav currentSlug={chapter.slug} />
    </article>
  );
}
