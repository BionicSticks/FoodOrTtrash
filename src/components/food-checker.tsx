"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { lookupFood, lookupFoodExact, resolveComponentsLocally, computeCompositeResult } from "@/lib/food-lookup";
import type { LookupResult, AnyResult, ComponentResult } from "@/lib/foods";
import { isCompositeResult } from "@/lib/foods";
import { Verdict } from "./verdict";
import { ShareButton } from "./share-button";
import { StatsModal } from "./stats-modal";

interface HistoryEntry {
  query: string;
  result: AnyResult;
  timestamp: number;
}

function resizeImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const MAX = 512;
        let w = img.width;
        let h = img.height;
        if (w > MAX || h > MAX) {
          const ratio = Math.min(MAX / w, MAX / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("No canvas context"));
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        // Strip the data:image/jpeg;base64, prefix
        const base64 = dataUrl.split(",")[1];
        resolve(base64);
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function FoodChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<AnyResult | null>(null);
  const [currentQuery, setCurrentQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Consulting the oracle...");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [statsOpen, setStatsOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage after mount (avoids hydration mismatch)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("foodortrash-history");
      if (stored) setHistory(JSON.parse(stored));
    } catch {
      // localStorage unavailable
    }
  }, []);

  const saveHistory = useCallback(
    (entries: HistoryEntry[]) => {
      setHistory(entries);
      try {
        localStorage.setItem("foodortrash-history", JSON.stringify(entries));
      } catch {
        // localStorage full or unavailable
      }
    },
    []
  );

  const checkSingleItemAI = async (
    name: string
  ): Promise<LookupResult> => {
    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: name }),
      });
      const data = await res.json();
      return {
        found: data.isFood,
        source: "ai",
        verdict: data.isFood ? "food" : "trash",
        score: data.score ?? (data.isFood ? 75 : 25),
        calories: data.calories,
        aiReason: data.reason,
      };
    } catch {
      return {
        found: false,
        source: "ai",
        verdict: "trash",
        score: 25,
        aiReason: "Could not verify this ingredient.",
      };
    }
  };

  const addToHistory = (q: string, r: AnyResult) => {
    const entry: HistoryEntry = { query: q, result: r, timestamp: Date.now() };
    saveHistory([entry, ...history].slice(0, 50));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setCurrentQuery(trimmed);
    setResult(null);
    setPreview(null);

    // ── Tier 1: Local DB ──
    // Multi-word → exact match only (avoids fuzzy-matching "chicken roll" to "chicken")
    // Single-word → full fuzzy match (handles typos like "appel" → "apple")
    const isMultiWord = trimmed.includes(" ");
    const localResult = isMultiWord
      ? lookupFoodExact(trimmed)
      : lookupFood(trimmed);

    if (localResult) {
      setResult(localResult);
      addToHistory(trimmed, localResult);
      setQuery("");
      return;
    }

    // ── Tier 2: AI Classification ──
    setLoading(true);
    setLoadingMessage("Classifying...");

    try {
      const classifyRes = await fetch("/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: trimmed }),
      });
      const classification = await classifyRes.json();

      // ── Path A: Whole food or Processed → holistic AI verdict ──
      if (classification.type === "whole" || classification.type === "processed") {
        setLoadingMessage("Consulting the oracle...");
        const aiResult = await checkSingleItemAI(trimmed);
        setResult(aiResult);
        addToHistory(trimmed, aiResult);
        setQuery("");
        return;
      }

      // ── Path B: Combination → ingredient decomposition + composite score ──
      if (classification.type === "combination" && Array.isArray(classification.ingredients)) {
        setLoadingMessage("Scoring ingredients...");
        const ingredients: Array<{ name: string; weight: number }> = classification.ingredients;

        const { resolved, unresolved } = resolveComponentsLocally(ingredients);

        // Resolve unmatched ingredients via AI in parallel
        const aiComponents: ComponentResult[] = await Promise.all(
          unresolved.map(async (ing) => ({
            name: ing.name,
            lookupResult: await checkSingleItemAI(ing.name),
            weight: ing.weight,
          }))
        );

        // Merge and preserve original ingredient order
        const allComponents = [...resolved, ...aiComponents].sort((a, b) => {
          const aIdx = ingredients.findIndex((i) => i.name === a.name);
          const bIdx = ingredients.findIndex((i) => i.name === b.name);
          return aIdx - bIdx;
        });

        const compositeResult = computeCompositeResult(trimmed, allComponents);
        setResult(compositeResult);
        addToHistory(trimmed, compositeResult);
        setQuery("");
        return;
      }

      // Fallback: unknown classification type → AI check
      setLoadingMessage("Consulting the oracle...");
      const aiResult = await checkSingleItemAI(trimmed);
      setResult(aiResult);
      addToHistory(trimmed, aiResult);
      setQuery("");
    } catch {
      // Network/parse error → AI check as last resort
      setLoadingMessage("Consulting the oracle...");
      try {
        const aiResult = await checkSingleItemAI(trimmed);
        setResult(aiResult);
        addToHistory(trimmed, aiResult);
      } catch {
        setResult({
          found: false,
          source: "ai",
          verdict: "trash",
          score: 25,
          aiReason: "Couldn't verify this one. When in doubt... trash.",
        });
      }
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset file input so the same file can be selected again
    e.target.value = "";

    // Show preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setResult(null);
    setCurrentQuery("");
    setLoading(true);
    setLoadingMessage("Scanning your food...");

    try {
      const base64 = await resizeImage(file);

      const res = await fetch("/api/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, mimeType: file.type }),
      });
      const data = await res.json();

      const identifiedName = data.name || "unknown";
      setCurrentQuery(identifiedName);

      const imageResult: LookupResult = {
        found: data.isFood,
        source: "ai",
        verdict: data.isFood ? "food" : "trash",
        score: data.score ?? (data.isFood ? 75 : 25),
        calories: data.calories,
        aiReason: data.reason,
      };
      setResult(imageResult);

      const entry: HistoryEntry = {
        query: identifiedName,
        result: imageResult,
        timestamp: Date.now(),
      };
      saveHistory([entry, ...history].slice(0, 50));
    } catch {
      const fallback: LookupResult = {
        found: false,
        source: "ai",
        verdict: "trash",
        score: 25,
        aiReason: "Couldn't process this image. When in doubt... trash.",
      };
      setCurrentQuery("uploaded image");
      setResult(fallback);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    saveHistory([]);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="TYPE ANYTHING..."
            className="flex-1 px-6 py-4 rounded-none bg-surface border border-border text-bone text-base sm:text-lg font-body uppercase tracking-[0.1em] placeholder:text-muted/30 placeholder:uppercase focus:outline-none focus:border-bone/30 transition-colors"
            disabled={loading}
            autoFocus
          />

          {/* Camera/upload button */}
          <motion.button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-4 rounded-none bg-surface border border-border text-muted hover:text-bone hover:border-bone/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            title="Upload a photo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </motion.button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            className="hidden"
          />

          <motion.button
            type="submit"
            disabled={loading || !query.trim()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-none bg-bone text-void font-heading font-bold text-base uppercase tracking-[0.15em] disabled:opacity-20 disabled:cursor-not-allowed transition-all hover:bg-bone/90"
          >
            {loading ? (
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ...
              </motion.span>
            ) : (
              "Judge"
            )}
          </motion.button>
        </div>
      </form>

      {/* Image preview */}
      {preview && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex justify-center"
        >
          <div className="relative w-32 h-32 border border-border overflow-hidden">
            <img
              src={preview}
              alt="Uploaded food"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Loading state */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted/50 mt-8 text-xs font-body uppercase tracking-[0.2em]"
        >
          {loadingMessage}
        </motion.p>
      )}

      {/* Verdict */}
      <Verdict result={result} query={currentQuery} />

      {/* Share + Stats buttons */}
      {result && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <ShareButton query={currentQuery} result={result} />
          {history.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => setStatsOpen(true)}
              className="px-5 py-2 text-[10px] font-body text-muted/40 uppercase tracking-[0.25em] border border-border hover:border-bone/20 hover:text-muted transition-all"
            >
              Stats ({history.length})
            </motion.button>
          )}
        </div>
      )}

      {/* Stats button when no result shown but history exists */}
      {!result && history.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setStatsOpen(true)}
            className="px-5 py-2 text-[10px] font-body text-muted/40 uppercase tracking-[0.25em] border border-border hover:border-bone/20 hover:text-muted transition-all"
          >
            Stats ({history.length})
          </button>
        </motion.div>
      )}

      {/* Stats modal */}
      <StatsModal
        entries={history}
        isOpen={statsOpen}
        onClose={() => setStatsOpen(false)}
        onClear={clearHistory}
      />
    </div>
  );
}
