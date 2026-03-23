import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Food or Trash",
  description:
    "Frequently asked questions about Food or Trash — how we score foods, what makes something trash, why we distrust mainstream nutrition advice, and what the new U.S. dietary guidelines say.",
  openGraph: {
    title: "FAQ | Food or Trash",
    description:
      "Frequently asked questions about Food or Trash — scoring, methodology, seed oils, and the 2025-2030 dietary guidelines.",
  },
};

interface FAQItem {
  question: string;
  answer: string;
  link?: { text: string; href: string };
}

const faqs: FAQItem[] = [
  {
    question: "What is Food or Trash?",
    answer:
      "Food or Trash is a free, independent tool that rates foods on a 0\u2013100 scale based on whole food principles. We maintain a curated database of over 1,300 items, each hand-scored and explained. If an item is not in the database, an AI classifier analyses it using the same whole food framework. There is no sign-up, no paywall, and no sponsored content.",
    link: { text: "Read more about our methodology", href: "/about" },
  },
  {
    question: "How does the scoring system work?",
    answer:
      "Every item is scored using a three-tier system. Tier 1: a curated database of 1,300+ items, each hand-classified with a score and explanation. Tier 2: an AI classifier that evaluates items not in the database using the same whole food principles. Tier 3: ingredient decomposition \u2014 combination foods like salads or stir-fries are broken into individual ingredients, each scored separately, then a weighted composite score is calculated. Whole, single-ingredient foods score highest. Ultra-processed products, seed oils, and artificial ingredients score lowest.",
    link: { text: "See how it works in detail", href: "/how-it-works" },
  },
  {
    question: "Why do seed oils score so low?",
    answer:
      "Seed oils \u2014 soybean, canola, sunflower, corn, safflower, cottonseed, and grapeseed oil \u2014 are extracted using hexane (a petroleum-derived solvent), then degummed, bleached, and deodorised in a multi-step industrial process. They are extremely high in omega-6 linoleic acid, which humans evolved to consume in much smaller quantities. The 2025\u20132030 U.S. Dietary Guidelines, published at RealFood.gov, define real food as being prepared \u201cwithout added sugars, industrial oils, artificial flavors, or preservatives\u201d \u2014 naming industrial oils as something to avoid.",
    link: { text: "Read our deep dive on seed oils", href: "/learn/seed-oils" },
  },
  {
    question: "Is butter really better than canola oil?",
    answer:
      "Butter is a single-ingredient food: cream, churned. It has been a dietary staple for thousands of years. Canola oil is extracted from selectively bred rapeseed using hexane, then industrially processed through degumming, bleaching, and deodorising. The 2025\u20132030 U.S. Dietary Guidelines state that \u201chealthy fats are a natural part of real foods such as meat, seafood, dairy, nuts, olives, and avocados\u201d and support \u201cbrain health, hormone function, and nutrient absorption.\u201d Butter qualifies. Canola oil does not meet the guidelines\u2019 definition of real food.",
    link: { text: "The full canola story", href: "/learn/canola" },
  },
  {
    question: "What do the 2025\u20132030 U.S. Dietary Guidelines say?",
    answer:
      "The guidelines, published at RealFood.gov, represent a major shift from previous editions. For the first time, the U.S. government explicitly tells Americans to eat real food and avoid highly processed products. Key recommendations: prioritise protein (1.2\u20131.6g per kg of body weight daily), eat healthy fats from whole foods like eggs, dairy, nuts, and avocados, consume 3 servings of vegetables and 2 of fruit daily, and avoid added sugars entirely \u2014 which are described as \u201cnot part of eating real foods and not recommended.\u201d",
    link: { text: "Read our breakdown of the new guidelines", href: "/learn/real-food-guidelines" },
  },
  {
    question: "Why don\u2019t you trust mainstream nutrition advice?",
    answer:
      "Decades of dietary guidance were shaped by food industry lobbying and flawed science. The USDA food pyramid (1992) tripled grain servings based on industry pressure, not nutritional evidence. The sugar industry paid Harvard scientists in the 1960s to publish research blaming fat for heart disease \u2014 a fraud exposed by JAMA Internal Medicine in 2016 (Kearns et al.). The result was 50 years of low-fat guidance that replaced natural fats with sugar, refined starch, and seed oils. During the peak low-fat era (1980\u20132000), U.S. obesity rates doubled and type 2 diabetes tripled.",
    link: { text: "The full history", href: "/learn/food-pyramid" },
  },
  {
    question: "Is added sugar really that bad?",
    answer:
      "The 2025\u20132030 U.S. Dietary Guidelines state: \u201cAdded sugars are not part of eating real foods and are not recommended.\u201d The average American consumes approximately 17 teaspoons (71 grams) of added sugar per day, according to the CDC. A 2014 study in JAMA Internal Medicine (Yang et al.) found that consuming 17\u201321% of calories from added sugar increased cardiovascular death risk by 38%. RealFood.gov reports that 50% of Americans have prediabetes or diabetes and attributes the chronic disease crisis to diets dominated by processed food.",
    link: { text: "Read more about added sugar", href: "/learn/added-sugar" },
  },
  {
    question: "What is ultra-processed food?",
    answer:
      "Ultra-processed food is defined by the NOVA classification system (Monteiro et al., 2009) as products made from industrial ingredients not found in home kitchens: high-fructose corn syrup, hydrogenated oils, protein isolates, emulsifiers, artificial colours, and flavour enhancers. RealFood.gov reports that 70% of an American child\u2019s diet is ultra-processed (vs. below 20% internationally). A 2024 BMJ umbrella review of nearly 10 million participants found ultra-processed food linked to 50% higher cardiovascular death risk, with the evidence rated \u201cconvincing.\u201d",
    link: { text: "Read our deep dive on ultra-processed food", href: "/learn/ultra-processed" },
  },
  {
    question: "How do I know if a product is real food?",
    answer:
      "Read the ingredient list, not the front of the package. RealFood.gov defines real food as \u201cwhole or minimally processed and recognizable as food, prepared with few ingredients and without added sugars, industrial oils, artificial flavors, or preservatives.\u201d A simple test: can you recognise every ingredient as something that occurs in nature or in a traditional kitchen? Is it free of added sugars, seed oils, artificial colours, and preservatives? If not, it is ultra-processed.",
    link: { text: "Our guide to reading food labels", href: "/learn/reading-labels" },
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. Food or Trash is an educational tool that reflects one evidence-based perspective on nutrition, grounded in whole food principles and supported by published research and the 2025\u20132030 U.S. Dietary Guidelines. It is not a substitute for professional medical advice. Always consult a qualified healthcare professional for personal dietary decisions.",
  },
  {
    question: "How is this site funded?",
    answer:
      "Food or Trash is an independent project built and maintained by a solo developer. It is not affiliated with any food company, supplement brand, or health organisation. The site is funded by voluntary donations and non-intrusive advertising. There is no sponsored content, no affiliate links, and no industry funding.",
    link: { text: "Support the project", href: "/contact" },
  },
];

export default function FAQPage() {
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
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          Common questions about Food or Trash, our scoring methodology, and the
          science behind our approach.
        </p>

        <div className="mt-12 space-y-10">
          {faqs.map((faq, i) => (
            <section key={i} className="border-b border-border pb-8 last:border-b-0">
              <h2 className="text-sm font-heading font-bold uppercase tracking-[0.1em] text-bone">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm text-bone/70 leading-[1.8] font-body">
                {faq.answer}
              </p>
              {faq.link && (
                <Link
                  href={faq.link.href}
                  className="inline-block mt-3 text-[10px] text-muted uppercase tracking-[0.2em] underline underline-offset-2 hover:text-bone transition-colors"
                >
                  {faq.link.text} &rarr;
                </Link>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 border border-food-green/30 bg-food-green-dim">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-food-green mb-2">
            Sources
          </p>
          <p className="text-sm text-bone/80 leading-relaxed font-body">
            Facts and statistics cited on this page are drawn from{" "}
            <a
              href="https://realfood.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone transition-colors"
            >
              RealFood.gov
            </a>{" "}
            (2025-2030 U.S. Dietary Guidelines),{" "}
            <a
              href="https://doi.org/10.1136/bmj-2023-077310"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone transition-colors"
            >
              Lane et al. (BMJ, 2024)
            </a>
            ,{" "}
            <a
              href="https://doi.org/10.1001/jamainternmed.2013.13563"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone transition-colors"
            >
              Yang et al. (JAMA Internal Medicine, 2014)
            </a>
            ,{" "}
            <a
              href="https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2548255"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone transition-colors"
            >
              Kearns et al. (JAMA Internal Medicine, 2016)
            </a>
            , and the{" "}
            <a
              href="https://www.cdc.gov/nutrition/php/data-research/added-sugars.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone transition-colors"
            >
              CDC
            </a>
            .
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted/40 leading-relaxed">
            Food or Trash is an educational tool, not medical advice. Always
            consult a qualified healthcare professional for personal dietary
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
