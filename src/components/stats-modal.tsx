"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AnyResult } from "@/lib/foods";
import { isCompositeResult } from "@/lib/foods";

function getVerdict(r: AnyResult): "food" | "trash" {
  return isCompositeResult(r) ? r.compositeVerdict : r.verdict;
}

interface HistoryEntry {
  query: string;
  result: AnyResult;
  timestamp: number;
}

interface StatsModalProps {
  entries: HistoryEntry[];
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

const PERSONAS: { min: number; label: string; color: string }[] = [
  { min: 0.8, label: "Clean Machine", color: "text-food-green" },
  { min: 0.6, label: "Mostly Clean", color: "text-food-green/70" },
  { min: 0.4, label: "On the Fence", color: "text-bone" },
  { min: 0.2, label: "Questionable Taste", color: "text-trash-red/70" },
  { min: 0, label: "Trash Panda", color: "text-trash-red" },
];

function getPersona(ratio: number) {
  return PERSONAS.find((p) => ratio >= p.min) || PERSONAS[PERSONAS.length - 1];
}

// SVG donut chart
function DonutChart({ foodCount, trashCount }: { foodCount: number; trashCount: number }) {
  const total = foodCount + trashCount;
  if (total === 0) return null;

  const foodRatio = foodCount / total;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const foodArc = circumference * foodRatio;
  const trashArc = circumference - foodArc;

  return (
    <div className="relative w-52 h-52 mx-auto">
      <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
        {/* Trash arc (red) */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="#ff1a1a"
          strokeWidth="14"
          strokeDasharray={`${trashArc} ${circumference}`}
          strokeDashoffset={-foodArc}
          strokeLinecap="butt"
        />
        {/* Food arc (green) */}
        <motion.circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="#00cc66"
          strokeWidth="14"
          strokeLinecap="butt"
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${foodArc} ${circumference}` }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-heading font-bold text-bone"
        >
          {Math.round(foodRatio * 100)}%
        </motion.span>
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">food</span>
      </div>
    </div>
  );
}

// Category bar
function CategoryBar({
  label,
  count,
  max,
  color,
  delay,
}: {
  label: string;
  count: number;
  max: number;
  color: string;
  delay: number;
}) {
  const width = max > 0 ? (count / max) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-muted uppercase tracking-[0.15em] w-24 text-right shrink-0">
        {label}
      </span>
      <div className="flex-1 h-2 bg-surface-light rounded-none overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
      </div>
      <span className="text-[10px] text-muted/60 w-6 text-right">{count}</span>
    </div>
  );
}

export function StatsModal({ entries, isOpen, onClose, onClear }: StatsModalProps) {
  const stats = useMemo(() => {
    const foodEntries = entries.filter((e) => getVerdict(e.result) === "food");
    const trashEntries = entries.filter((e) => getVerdict(e.result) === "trash");

    // Category breakdown for food
    const foodCategories: Record<string, number> = {};
    foodEntries.forEach((e) => {
      const r = e.result;
      const cat = isCompositeResult(r) ? "combo" : r.item?.category || "uncategorized";
      foodCategories[cat] = (foodCategories[cat] || 0) + 1;
    });

    // Category breakdown for trash
    const trashCategories: Record<string, number> = {};
    trashEntries.forEach((e) => {
      const r = e.result;
      const cat = isCompositeResult(r) ? "combo" : r.trashItem?.category || "uncategorized";
      trashCategories[cat] = (trashCategories[cat] || 0) + 1;
    });

    // Current streak
    let streak = 0;
    let streakType: "food" | "trash" | null = null;
    for (const entry of entries) {
      const v = getVerdict(entry.result);
      if (streakType === null) {
        streakType = v;
        streak = 1;
      } else if (v === streakType) {
        streak++;
      } else {
        break;
      }
    }

    // Sort categories by count
    const sortedFoodCats = Object.entries(foodCategories).sort((a, b) => b[1] - a[1]);
    const sortedTrashCats = Object.entries(trashCategories).sort((a, b) => b[1] - a[1]);

    return {
      total: entries.length,
      foodCount: foodEntries.length,
      trashCount: trashEntries.length,
      foodRatio: entries.length > 0 ? foodEntries.length / entries.length : 0,
      streak,
      streakType,
      sortedFoodCats,
      sortedTrashCats,
    };
  }, [entries]);

  const persona = getPersona(stats.foodRatio);
  const maxCatCount = Math.max(
    ...stats.sortedFoodCats.map((c) => c[1]),
    ...stats.sortedTrashCats.map((c) => c[1]),
    1
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="max-w-xl mx-auto bg-surface border border-border border-b-0 p-8 sm:p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading font-bold text-bone text-lg uppercase tracking-[0.15em]">
                  Your Stats
                </h2>
                <button
                  onClick={onClose}
                  className="text-muted/40 hover:text-bone transition-colors text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              {entries.length === 0 ? (
                <p className="text-center text-muted/50 text-xs uppercase tracking-[0.2em] py-12">
                  No judgements yet. Go type something.
                </p>
              ) : (
                <>
                  {/* Donut + Persona */}
                  <div className="mb-10">
                    <DonutChart foodCount={stats.foodCount} trashCount={stats.trashCount} />
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className={`text-center mt-4 font-heading font-bold text-xl uppercase tracking-[0.1em] ${persona.color}`}
                    >
                      {persona.label}
                    </motion.p>
                  </div>

                  {/* Quick stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="text-center p-4 border border-border">
                      <p className="text-2xl font-heading font-bold text-bone">{stats.total}</p>
                      <p className="text-[9px] text-muted/50 uppercase tracking-[0.2em] mt-1">Judged</p>
                    </div>
                    <div className="text-center p-4 border border-food-green/20">
                      <p className="text-2xl font-heading font-bold text-food-green">{stats.foodCount}</p>
                      <p className="text-[9px] text-muted/50 uppercase tracking-[0.2em] mt-1">Food</p>
                    </div>
                    <div className="text-center p-4 border border-trash-red/20">
                      <p className="text-2xl font-heading font-bold text-trash-red">{stats.trashCount}</p>
                      <p className="text-[9px] text-muted/50 uppercase tracking-[0.2em] mt-1">Trash</p>
                    </div>
                  </div>

                  {/* Streak */}
                  {stats.streak > 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mb-10 text-center"
                    >
                      <p className="text-[10px] text-muted/50 uppercase tracking-[0.25em]">Current streak</p>
                      <p
                        className={`text-3xl font-heading font-bold mt-1 ${
                          stats.streakType === "food" ? "text-food-green" : "text-trash-red"
                        }`}
                      >
                        {stats.streak} {stats.streakType === "food" ? "FOOD" : "TRASH"}
                      </p>
                    </motion.div>
                  )}

                  {/* Category breakdown */}
                  {(stats.sortedFoodCats.length > 0 || stats.sortedTrashCats.length > 0) && (
                    <div className="mb-10">
                      <p className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
                        Categories
                      </p>
                      <div className="space-y-2">
                        {stats.sortedFoodCats.map(([cat, count], i) => (
                          <CategoryBar
                            key={cat}
                            label={cat}
                            count={count}
                            max={maxCatCount}
                            color="bg-food-green"
                            delay={0.3 + i * 0.05}
                          />
                        ))}
                        {stats.sortedTrashCats.map(([cat, count], i) => (
                          <CategoryBar
                            key={cat}
                            label={cat}
                            count={count}
                            max={maxCatCount}
                            color="bg-trash-red"
                            delay={0.3 + (stats.sortedFoodCats.length + i) * 0.05}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recent history */}
                  <div className="mb-6">
                    <p className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-3">
                      Recent
                    </p>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {entries.slice(0, 20).map((entry) => (
                        <div
                          key={entry.timestamp}
                          className="flex items-center justify-between px-3 py-2 border border-border"
                        >
                          <span className="text-xs text-muted font-body uppercase tracking-[0.1em]">
                            {entry.query}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                              getVerdict(entry.result) === "food"
                                ? "text-food-green"
                                : "text-trash-red"
                            }`}
                          >
                            {getVerdict(entry.result) === "food" ? "FOOD" : "TRASH"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clear */}
                  <button
                    onClick={onClear}
                    className="text-[10px] text-muted/30 hover:text-trash-red transition-colors font-body uppercase tracking-[0.2em]"
                  >
                    Clear all history
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
