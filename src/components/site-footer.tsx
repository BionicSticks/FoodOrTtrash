import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto pt-20 pb-8 text-center space-y-6">
      <a
        href="https://ko-fi.com/foodortrash"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 text-xs font-body font-semibold uppercase tracking-[0.2em] text-bone/70 border border-border hover:border-bone/30 hover:text-bone transition-all"
      >
        Support this project
      </a>

      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <Link
          href="/about"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/how-it-works"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          How it works
        </Link>
        <Link
          href="/faq"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          FAQ
        </Link>
        <Link
          href="/privacy"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="text-[10px] text-bone/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
        >
          Terms
        </Link>
      </nav>

      <p className="text-xs text-muted/50 font-body uppercase tracking-[0.3em]">
        foodortrash.com &mdash; no seed oils &middot; no bias &middot; just truth
      </p>
    </footer>
  );
}
