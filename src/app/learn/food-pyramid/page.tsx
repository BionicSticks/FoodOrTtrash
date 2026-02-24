import { CHAPTERS } from "@/data/learn/chapters";
import { ArticleLayout } from "@/components/learn/article-layout";
import type { Metadata } from "next";

const chapter = CHAPTERS.find((c) => c.slug === "food-pyramid")!;

export const metadata: Metadata = {
  title: `${chapter.title} | Food or Trash`,
  description: chapter.description,
  openGraph: {
    title: `${chapter.title} | Food or Trash`,
    description: chapter.description,
  },
};

export default function FoodPyramidPage() {
  return <ArticleLayout chapter={chapter} />;
}
