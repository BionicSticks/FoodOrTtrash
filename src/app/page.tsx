"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FoodChecker } from "@/components/food-checker";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-void/60 backdrop-blur-sm border-b border-border/20">
        <span className="text-sm font-heading font-bold uppercase tracking-[0.15em] text-bone">
          Food or Trash
        </span>
        <div className="flex items-center gap-5">
          <a
            href="/learn"
            className="text-sm text-bone/90 font-body font-semibold uppercase tracking-[0.15em] hover:text-bone transition-colors"
          >
            How we got here
          </a>
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
          className="mt-4 text-sm sm:text-base text-bone/80 font-body max-w-lg mx-auto leading-relaxed uppercase tracking-[0.15em]"
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

      {/* Ad slot — below verdict area */}
      <div className="w-full max-w-xl mx-auto mt-12 px-4">
        <div
          id="ad-container"
          className="min-h-[90px] flex items-center justify-center border border-border/10"
        >
          {/*
            AdSense placeholder — replace with your ad unit:
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          */}
          <span className="text-[9px] text-muted/20 uppercase tracking-[0.2em]">ad</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-20 pb-8 text-center space-y-4">
        <a
          href="https://ko-fi.com/foodortrash"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-xs font-body font-semibold uppercase tracking-[0.2em] text-bone/70 border border-border hover:border-bone/30 hover:text-bone transition-all"
        >
          Support this project
        </a>
        <p className="text-xs text-muted/50 font-body uppercase tracking-[0.3em]">
          foodortrash.com &mdash; no seed oils &middot; no bias &middot; just
          truth
        </p>
      </footer>
    </main>
    </>
  );
}
