"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FoodChecker } from "@/components/food-checker";
import { Background } from "@/components/background";
import { SiteFooter } from "@/components/site-footer";
import { ExpandingNav } from "@/components/nav-dropdown";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pt-[max(1rem,env(safe-area-inset-top))] bg-void/60 backdrop-blur-sm border-b border-border/20">
        <span className="text-sm font-heading font-bold uppercase tracking-[0.15em] text-bone">
          Food or Trash
        </span>
        <div className="flex items-center gap-5">
          <ExpandingNav short="Browse" full="Browse the food lists" href="/category" />
          <ExpandingNav short="Learn" full="Learn how we got here" href="/learn" />
          <ExpandingNav short="How to use" full="How to use FoodOrTrash" href="/how-it-works" />
        </div>
      </nav>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-8 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4"
        >
          <Image
            src="/branding/logo.png"
            alt="Food or Trash logo"
            width={120}
            height={120}
            priority
            className="mx-auto drop-shadow-lg"
          />
        </motion.div>

        <h1
          className="font-heading font-bold text-bone uppercase leading-none tracking-[-0.04em]"
          style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
        >
          Food <span className="text-muted">or</span> Trash
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-sm sm:text-base text-bone font-body max-w-lg mx-auto leading-relaxed uppercase tracking-[0.15em]"
        >
          Whole foods are food &middot; Seed oils are trash &middot; Processed is not food
        </motion.p>
      </motion.div>

      {/* Checker */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <FoodChecker />
      </motion.div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-3xl mx-auto mt-20 px-4"
      >
        <h2 className="text-[10px] text-bone uppercase tracking-[0.25em] text-center mb-8">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 border border-border text-center">
            <p className="text-2xl font-heading font-bold text-bone mb-2">1</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-2">
              Search
            </p>
            <p className="text-xs text-bone leading-relaxed">
              Type any food, ingredient, or product into the search bar above
            </p>
          </div>
          <div className="p-6 border border-border text-center">
            <p className="text-2xl font-heading font-bold text-bone mb-2">2</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-2">
              Score
            </p>
            <p className="text-xs text-bone leading-relaxed">
              Get an instant 0–100 rating based on whole food principles, not industry guidelines
            </p>
          </div>
          <div className="p-6 border border-border text-center">
            <p className="text-2xl font-heading font-bold text-bone mb-2">3</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-2">
              Learn
            </p>
            <p className="text-xs text-bone leading-relaxed">
              Read why it scored that way, discover swaps, and explore our deep-dive articles
            </p>
          </div>
        </div>
      </motion.div>

      {/* What we believe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full max-w-2xl mx-auto mt-16 px-4"
      >
        <div className="p-8 border border-border">
          <h2 className="text-[10px] text-bone uppercase tracking-[0.25em] mb-4">
            Why this exists
          </h2>
          <p className="text-sm text-bone leading-relaxed font-body">
            Mainstream nutrition advice has been shaped by decades of food
            industry lobbying and flawed science. The USDA food pyramid
            told a generation to eat 6–11 servings of grains while demonising
            natural fats. Most AI tools and nutrition apps are trained on this
            same biased data. Food or Trash starts from first principles: what
            have humans eaten for thousands of years? That&apos;s your baseline.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="text-[10px] text-bone uppercase tracking-[0.2em] underline underline-offset-2 hover:text-bone transition-colors"
            >
              Our methodology
            </Link>
            <Link
              href="/learn"
              className="text-[10px] text-bone uppercase tracking-[0.2em] underline underline-offset-2 hover:text-bone transition-colors"
            >
              The full story
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="w-full max-w-3xl mx-auto mt-12 px-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 border border-border">
            <p className="text-lg font-heading font-bold text-bone">1,345</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] mt-1">
              Foods rated
            </p>
          </div>
          <div className="p-4 border border-border">
            <p className="text-lg font-heading font-bold text-food-green">1,159</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] mt-1">
              Real foods
            </p>
          </div>
          <div className="p-4 border border-border">
            <p className="text-lg font-heading font-bold text-trash-red">186</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] mt-1">
              Trash items
            </p>
          </div>
          <div className="p-4 border border-border">
            <p className="text-lg font-heading font-bold text-bone">11</p>
            <p className="text-[10px] text-bone uppercase tracking-[0.15em] mt-1">
              <Link href="/learn" className="hover:text-bone transition-colors">Deep-dive articles</Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Browse links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="w-full max-w-xl mx-auto mt-12 px-4 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/category"
          className="px-5 py-3 text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-bone border border-bone/20 hover:border-bone/40 hover:text-bone transition-all"
        >
          Browse all categories
        </Link>
        <Link
          href="/learn"
          className="px-5 py-3 text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-bone border border-bone/20 hover:border-bone/40 hover:text-bone transition-all"
        >
          How we got here
        </Link>
        <Link
          href="/how-it-works"
          className="px-5 py-3 text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-bone border border-bone/20 hover:border-bone/40 hover:text-bone transition-all"
        >
          How it works
        </Link>
        <Link
          href="/faq"
          className="px-5 py-3 text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-bone border border-bone/20 hover:border-bone/40 hover:text-bone transition-all"
        >
          FAQ
        </Link>
      </motion.div>

      <SiteFooter />
    </main>
    </>
  );
}
