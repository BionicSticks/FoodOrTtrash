"use client";

import { motion } from "framer-motion";

interface ScoreMeterProps {
  score: number; // 0 (pure trash) to 100 (pure food)
}

function getColor(score: number): string {
  if (score <= 30) return "#ff1a1a";
  if (score <= 45) return "#ff6633";
  if (score <= 55) return "#ddaa00";
  if (score <= 70) return "#88cc33";
  return "#00cc66";
}

export function ScoreMeter({ score }: ScoreMeterProps) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const color = getColor(clampedScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6"
    >
      {/* Labels */}
      <div className="flex items-center justify-between mb-2">
        {/* Trash can icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
        <span
          className="text-sm font-heading font-bold uppercase tracking-[0.1em]"
          style={{ color }}
        >
          {clampedScore}/100
        </span>
        {/* Apple icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00cc66"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 5-2.55 5-6.5 0-4.15-2.85-7.5-6.5-7.5-1.65 0-2.3.7-3 .7s-1.15-.7-2.5-.7C5.35 8 2.5 11.35 2.5 15.5c0 3.95 2 6.5 5 6.5 1.25 0 2.5-1.06 4-1.06z" />
          <path d="M12 2c1 .5 2 2 2 3.5C14 7 13 8 12 8s-2-1-2-2.5C10 4 11 2.5 12 2z" />
        </svg>
      </div>

      {/* Track */}
      <div className="relative h-3 bg-surface-light border border-border overflow-hidden">
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${clampedScore}%` }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* Needle */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 bg-bone"
          initial={{ left: "0%" }}
          animate={{ left: `${clampedScore}%` }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-[9px] text-muted/30 uppercase tracking-[0.15em]">Trash</span>
        <span className="text-[9px] text-muted/30 uppercase tracking-[0.15em]">Food</span>
      </div>
    </motion.div>
  );
}
