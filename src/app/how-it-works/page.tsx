import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Food or Trash",
  description:
    "How Food or Trash scores foods on a 0\u2013100 scale using a three-tier system: curated database, AI classification, and ingredient decomposition. Based on whole food principles aligned with the 2025-2030 U.S. Dietary Guidelines.",
  openGraph: {
    title: "How It Works | Food or Trash",
    description:
      "Our three-tier scoring system rates every food on a 0\u2013100 scale based on whole food principles.",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-void text-bone">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-12 text-[10px] text-muted/50 uppercase tracking-[0.25em] hover:text-bone transition-colors"
        >
          &larr; Home
        </Link>

        <h1
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          How It Works
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          A detailed look at how Food or Trash scores every food on a 0&ndash;100
          scale and the principles behind the ratings.
        </p>

        <div className="mt-12 space-y-12 text-sm text-bone/80 leading-relaxed font-body">
          {/* The principle */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              The core principle
            </h2>
            <p>
              Food or Trash is built on a simple idea:{" "}
              <strong className="text-bone">
                the closer a food is to its natural, whole state, the better it
                is for you.
              </strong>{" "}
              This is not a fringe position. The 2025&ndash;2030 U.S. Dietary
              Guidelines, published at{" "}
              <a
                href="https://realfood.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-bone transition-colors"
              >
                RealFood.gov
              </a>
              , define real food as &ldquo;whole or minimally processed and
              recognizable as food, prepared with few ingredients and without
              added sugars, industrial oils, artificial flavors, or
              preservatives.&rdquo;
            </p>
            <p className="mt-3">
              Our scoring system translates this principle into a number. Every
              food gets a score from 0 (ultra-processed, industrial product) to
              100 (whole, single-ingredient, nutrient-dense food). The score
              reflects how closely an item aligns with the way humans have eaten
              for thousands of years.
            </p>
          </section>

          {/* Three-tier system */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              The three-tier scoring system
            </h2>

            <div className="space-y-6">
              <div className="p-6 border border-food-green/30">
                <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-food-green mb-3">
                  Tier 1 &mdash; Curated Database
                </h3>
                <p>
                  Over 1,300 items have been hand-classified and scored by human
                  review. Each item in the database includes a score, a category,
                  and an explanation of why it scored the way it did. This is the
                  most reliable tier &mdash; no AI involved, no automation, just
                  direct assessment against whole food principles.
                </p>
                <p className="mt-3">
                  The database includes 1,159 real foods and 186 trash items
                  across 13 categories. Items are scored based on: whether they
                  are a single whole ingredient, how much processing they
                  undergo, whether they contain seed oils or added sugars, and
                  how long humans have been eating them.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-bone mb-3">
                  Tier 2 &mdash; AI Classification
                </h3>
                <p>
                  When you search for something not in our curated database, an
                  AI classifier evaluates it. The AI is prompted with the same
                  whole food framework used to build the database. It classifies
                  the item as whole food, combination, or processed, then
                  generates a score and explanation.
                </p>
                <p className="mt-3">
                  AI classification is useful for covering the long tail of
                  foods, branded products, and regional items that the curated
                  database does not include. However, it is inherently less
                  reliable than human-reviewed entries. AI-classified items are
                  clearly marked so you know the source of the rating.
                </p>
              </div>

              <div className="p-6 border border-border">
                <h3 className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-bone mb-3">
                  Tier 3 &mdash; Ingredient Decomposition
                </h3>
                <p>
                  Combination foods &mdash; a salad, a stir-fry, a sandwich
                  &mdash; are not single ingredients. Tier 3 breaks them down
                  into individual components. Each component is scored
                  independently (using Tier 1 or Tier 2), then a weighted
                  composite score is calculated based on the relative proportion
                  of each ingredient.
                </p>
                <p className="mt-3">
                  This means a salad with olive oil dressing scores differently
                  from a salad with canola oil dressing. A burger with real
                  cheese on a sourdough bun scores differently from one with
                  processed cheese on a refined flour bun. The decomposition
                  reveals exactly which ingredients are pulling the score up or
                  down.
                </p>
              </div>
            </div>
          </section>

          {/* What scores high */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              What scores high
            </h2>
            <p>
              Foods that score 80&ndash;100 are whole, single-ingredient, and
              minimally processed. Examples: a fresh egg, a wild-caught salmon
              fillet, extra virgin olive oil, grass-fed butter, broccoli, sweet
              potato, liver, sardines, avocado, raw almonds.
            </p>
            <p className="mt-3">
              These are foods that the 2025&ndash;2030 Dietary Guidelines
              explicitly recommend. RealFood.gov states: &ldquo;Every meal must
              prioritize high-quality, nutrient-dense protein from both animal
              and plant sources, paired with healthy fats from whole foods such
              as eggs, seafood, meats, full-fat dairy, nuts, seeds, olives, and
              avocados.&rdquo;
            </p>
          </section>

          {/* What scores low */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              What scores low
            </h2>
            <p>
              Foods that score 0&ndash;20 are ultra-processed products built on
              industrial ingredients. Examples: canola oil, margarine, soda,
              artificial sweeteners, processed cheese singles, most breakfast
              cereals, protein bars with seed oils, candy, fast food chicken
              nuggets.
            </p>
            <p className="mt-3">
              These products typically contain seed oils, added sugars, artificial
              colours, preservatives, or other additives that the 2025&ndash;2030
              guidelines specifically name as things to avoid. RealFood.gov
              identifies &ldquo;foods containing artificial flavors,
              petroleum-based dyes, artificial preservatives, and non-nutritive
              sweeteners&rdquo; as highly processed products that are not real
              food.
            </p>
          </section>

          {/* The middle ground */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              The middle ground
            </h2>
            <p>
              Many foods fall in the 40&ndash;70 range. These are typically
              minimally processed foods (cheese, yogurt, sourdough bread, dark
              chocolate) or combination foods where some ingredients are whole
              and others are not. A homemade stew with real ingredients might
              score 75. The same stew from a can with added seed oils and
              preservatives might score 35.
            </p>
            <p className="mt-3">
              The score is not a moral judgement. It is a signal: how close is
              this food to what humans have eaten for generations? The further
              from whole food, the lower the score. Use it as a guide, not a
              commandment.
            </p>
          </section>

          {/* Scoring criteria */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              Scoring criteria
            </h2>
            <p className="mb-4">
              Every item is evaluated against these factors, weighted by
              importance:
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-border">
                <p className="text-[10px] text-food-green uppercase tracking-[0.15em] font-bold mb-1">
                  Whole food status
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Is this a single, recognisable ingredient? Can it be found in
                  nature? How many steps separate it from its raw state?
                </p>
              </div>
              <div className="p-4 border border-border">
                <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-1">
                  Processing level
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Minimal processing (washing, cutting, fermenting) preserves
                  nutritional value. Industrial processing (solvent extraction,
                  bleaching, hydrogenation) degrades it. Traditional methods
                  (butter churning, olive pressing) score higher than chemical
                  processes.
                </p>
              </div>
              <div className="p-4 border border-border">
                <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-1">
                  Ingredient quality
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Does the product contain seed oils, added sugars, artificial
                  colours, artificial preservatives, or non-nutritive
                  sweeteners? Each of these is flagged by the 2025&ndash;2030
                  Dietary Guidelines as something to avoid.
                </p>
              </div>
              <div className="p-4 border border-border">
                <p className="text-[10px] text-bone uppercase tracking-[0.15em] font-bold mb-1">
                  Ancestral precedent
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  How long have humans been eating this food? Foods with
                  thousands of years of dietary history (eggs, olive oil, liver,
                  fermented vegetables) are trusted. Foods invented in the 20th
                  century through industrial chemistry (margarine, canola oil,
                  high-fructose corn syrup) are not.
                </p>
              </div>
            </div>
          </section>

          {/* Alignment with guidelines */}
          <section className="p-6 border border-food-green/30 bg-food-green-dim">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-food-green mb-3">
              Aligned with the 2025&ndash;2030 U.S. Dietary Guidelines
            </h2>
            <p className="text-sm text-bone/80 leading-relaxed">
              Food or Trash was built on whole food principles before the
              government caught up. The 2025&ndash;2030 Dietary Guidelines,
              published at RealFood.gov, now officially recommend the same
              approach: eat real food, prioritise protein and healthy fats, avoid
              ultra-processed products, and eliminate added sugars. Our scoring
              system is fully aligned with these guidelines.
            </p>
            <a
              href="https://realfood.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-bold uppercase tracking-[0.15em] text-food-green hover:text-bone transition-colors"
            >
              Read the guidelines at RealFood.gov &rarr;
            </a>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-[10px] text-muted/50 uppercase tracking-[0.25em] mb-4">
              Limitations
            </h2>
            <p>
              No scoring system is perfect. Food or Trash does not account for
              individual allergies, intolerances, medical conditions, or personal
              dietary requirements. It does not measure portion sizes, caloric
              needs, or micronutrient balance for specific individuals. It
              reflects one evidence-based perspective on food quality, not a
              complete nutritional assessment.
            </p>
            <p className="mt-3">
              AI-classified items (Tier 2) may occasionally misclassify products,
              especially branded or regional items with unusual formulations.
              When in doubt, read the ingredient list yourself &mdash; our{" "}
              <Link
                href="/learn/reading-labels"
                className="underline underline-offset-2 hover:text-bone transition-colors"
              >
                guide to reading food labels
              </Link>{" "}
              can help.
            </p>
          </section>

          <section className="pt-4 border-t border-border">
            <p className="text-xs text-muted/40 leading-relaxed">
              Food or Trash is an educational tool, not medical advice. Always
              consult a qualified healthcare professional for personal dietary
              decisions. Guidelines referenced from{" "}
              <a
                href="https://realfood.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                RealFood.gov
              </a>{" "}
              (2025&ndash;2030 U.S. Dietary Guidelines for Americans).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
