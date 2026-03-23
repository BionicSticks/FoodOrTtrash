"use client";

interface ExpandingNavProps {
  short: string;
  full: string;
  href: string;
}

export function ExpandingNav({ short, full, href }: ExpandingNavProps) {
  return (
    <a
      href={href}
      className="group relative text-xs text-bone font-body font-semibold uppercase tracking-[0.15em] hover:text-bone transition-colors"
    >
      <span className="group-hover:hidden">{short}</span>
      <span className="hidden group-hover:inline">{full}</span>
    </a>
  );
}
