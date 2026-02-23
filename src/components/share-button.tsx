"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { AnyResult } from "@/lib/foods";
import { isCompositeResult } from "@/lib/foods";

interface ShareButtonProps {
  query: string;
  result: AnyResult;
}

export function ShareButton({ query, result }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const verdict = isCompositeResult(result)
    ? result.compositeVerdict
    : result.verdict;

  const shareText = `I asked foodortrash.com about "${query}" and the verdict is: ${
    verdict === "food" ? "FOOD" : "TRASH"
  }`;

  const shareUrl = "https://foodortrash.com";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FOOD OR TRASH",
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      onClick={handleShare}
      className="px-5 py-2 text-[10px] font-body text-muted/40 uppercase tracking-[0.25em] border border-border hover:border-bone/20 hover:text-muted transition-all"
    >
      {copied ? "Copied" : "Share verdict"}
    </motion.button>
  );
}
