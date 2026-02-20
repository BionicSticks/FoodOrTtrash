"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { LookupResult } from "@/lib/foods";
import { ScoreMeter } from "./score-meter";

interface VerdictProps {
  result: LookupResult | null;
  query: string;
}

export function Verdict({ result, query }: VerdictProps) {
  if (!result) return null;

  const isFood = result.verdict === "food";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${query}-${result.verdict}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl mx-auto mt-12"
      >
        {/* Verdict card */}
        <div
          className={`border p-8 sm:p-10 text-center ${
            isFood
              ? "border-food-green/20 bg-food-green-dim"
              : "border-trash-red/20 bg-trash-red-dim"
          }`}
        >
          {/* The item name */}
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
            &ldquo;{query}&rdquo;
          </p>

          {/* The verdict — massive */}
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: isFood ? 200 : 400,
              damping: isFood ? 20 : 12,
            }}
            className={`font-heading font-bold uppercase leading-[0.85] tracking-[-0.05em] ${
              isFood ? "text-food-green" : "text-trash-red"
            }`}
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {isFood ? "FOOD" : "TRASH"}
          </motion.h2>

          {/* Category badge */}
          {isFood && result.item && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mt-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-food-green border border-food-green/30"
            >
              {result.item.category}
            </motion.span>
          )}

          {!isFood && result.trashItem && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mt-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-trash-red border border-trash-red/30"
            >
              {result.trashItem.category}
            </motion.span>
          )}

          {/* Calories badge */}
          {result.calories != null && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="inline-block mt-3 ml-2 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted/70 border border-border"
            >
              ~{result.calories} kcal / 100g
            </motion.span>
          )}

          {/* AI badge */}
          {result.source === "ai" && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="inline-block mt-3 ml-2 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted/50 border border-border"
            >
              AI verified
            </motion.span>
          )}

          {/* AI reason */}
          {result.source === "ai" && result.aiReason && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xs text-muted leading-relaxed"
            >
              {result.aiReason}
            </motion.p>
          )}

        </div>

        {/* Fun fact (food) */}
        {isFood && result.item?.fun_fact && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 p-5 border border-border"
          >
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-bone font-semibold uppercase tracking-[0.1em] text-[10px]">
                Did you know
              </span>
              <br />
              <span className="mt-1 block">{result.item.fun_fact}</span>
            </p>
          </motion.div>
        )}

        {/* Trash reason */}
        {!isFood && result.trashItem?.reason && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 p-5 border border-trash-red/10"
          >
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-trash-red font-semibold uppercase tracking-[0.1em] text-[10px]">
                Why trash
              </span>
              <br />
              <span className="mt-1 block">{result.trashItem.reason}</span>
            </p>
          </motion.div>
        )}

        {/* Score meter — outside the verdict card */}
        <ScoreMeter score={result.score} />
      </motion.div>
    </AnimatePresence>
  );
}
