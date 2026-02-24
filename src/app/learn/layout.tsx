import Link from "next/link";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void text-bone">
      {/* Simple header */}
      <header className="border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-bone hover:text-food-green transition-colors"
          >
            Food or Trash
          </Link>
          <Link
            href="/learn"
            className="text-[10px] text-muted/50 uppercase tracking-[0.2em] hover:text-bone transition-colors"
          >
            How We Got Here
          </Link>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <Link
            href="/"
            className="text-[10px] text-muted/40 uppercase tracking-[0.25em] hover:text-bone transition-colors"
          >
            Check your food &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
