export interface Source {
  title: string;
  url: string;
  type: "study" | "book" | "video" | "article";
}

export interface Section {
  heading?: string;
  body: string;
  pullQuote?: string;
}

export interface Chapter {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sections: Section[];
  sources: Source[];
}

export const CHAPTERS: Chapter[] = [
  {
    slug: "food-pyramid",
    title: "The Food Pyramid Lie",
    subtitle: "How the USDA sold your health to the highest bidder",
    description:
      "The USDA food pyramid told you to eat 6-11 servings of grains and avoid fat. It was wrong. Here's how lobbying, politics, and bad science shaped the dietary guidelines that made us sick.",
    sections: [
      {
        heading: "The pyramid that changed everything",
        body: "In 1992, the USDA released the Food Guide Pyramid. It told 260 million Americans to make grains the foundation of their diet — 6 to 11 servings a day. Fat was placed at the tiny tip: use sparingly. Meat, eggs, and dairy were squeezed into a thin strip. This wasn't science. It was politics.",
      },
      {
        body: "The original pyramid, designed by nutritionist Luise Light, looked nothing like what was published. Light's version put fruits and vegetables at the base, limited grains to 2-3 servings, and recommended 5-9 servings of fresh produce. When the USDA got hold of it, grains were moved to the base and the serving sizes were tripled.",
        pullQuote:
          "The original pyramid was designed by scientists. The published pyramid was designed by lobbyists.",
      },
      {
        heading: "Follow the money",
        body: "The grain industry had everything to gain. The National Association of Wheat Growers, the corn lobby, and the cereal industry spent millions making sure their products sat at the foundation of American nutrition. The meat and dairy industries pushed back too — not to reduce their presence, but to make sure they weren't placed alongside junk food. Nobody was fighting for vegetables. There was no Big Broccoli lobby.",
      },
      {
        body: "Luise Light later wrote that the USDA's changes were \"ichly tweaked to be tweaked by the food industry.\" The grains group went from 2-3 servings to 6-11. The reasoning wasn't nutritional. It was economic. Grain-based products — bread, cereal, pasta, crackers — are cheap to produce and hugely profitable. An entire industry depended on Americans believing that a bowl of Cheerios was the foundation of good health.",
        pullQuote:
          "There was no Big Broccoli lobby.",
      },
      {
        heading: "The fat myth",
        body: "At the same time, dietary fat was demonised. The pyramid told Americans to eat as little fat as possible. Butter, eggs, red meat, and full-fat dairy were treated like toxins. The food industry responded by flooding supermarkets with \"low-fat\" products — which replaced fat with sugar, refined starch, and seed oils. The result? Americans got fatter and sicker than ever.",
      },
      {
        body: "Between 1980 and 2000 — the peak years of low-fat dietary guidance — obesity rates in the US doubled. Type 2 diabetes tripled. Heart disease remained the number one killer. The foods we were told to eat were making us ill, and the foods we were told to avoid were the ones our grandparents thrived on.",
      },
      {
        heading: "The quiet replacement",
        body: "The Food Pyramid was officially retired in 2011, replaced by MyPlate. But the damage was done. Two generations grew up believing that grains were essential, fat was dangerous, and a processed cereal bar was healthier than an egg. These beliefs are still deeply embedded in nutrition education, medical training, and public health policy. The pyramid is gone, but its ghost still haunts every hospital cafeteria and school lunch tray.",
      },
    ],
    sources: [
      {
        title: "Luise Light — What the USDA Doesn't Want You to Know",
        url: "https://web.archive.org/web/2023/https://www.whale.to/a/light.html",
        type: "article",
      },
      {
        title:
          "Marion Nestle — Food Politics: How the Food Industry Influences Nutrition and Health",
        url: "https://www.ucpress.edu/book/9780520275966/food-politics",
        type: "book",
      },
      {
        title: "Nina Teicholz — The Big Fat Surprise",
        url: "https://thebigfatsurprise.com",
        type: "book",
      },
      {
        title: "What I've Learnt — What the Food Pyramid Got Wrong",
        url: "https://www.youtube.com/watch?v=yWNIjOaYfBo",
        type: "video",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
  {
    slug: "sugar-lobby",
    title: "The Sugar Conspiracy",
    subtitle: "How Harvard was paid to blame fat for sugar's crimes",
    description:
      "In the 1960s, the sugar industry paid Harvard scientists to publish research blaming fat — not sugar — for heart disease. The fraud shaped 50 years of nutrition policy.",
    sections: [
      {
        heading: "The paper trail",
        body: "In 2016, researchers at UCSF discovered documents in a university archive that blew the lid off one of the biggest scandals in nutrition history. Internal documents from the Sugar Research Foundation (SRF) — now the Sugar Association — showed that in 1967, the industry paid three Harvard scientists the equivalent of $50,000 in today's money to publish a review in the New England Journal of Medicine. The conclusion they were paid to reach: fat, not sugar, was the primary dietary cause of heart disease.",
      },
      {
        body: "The three scientists — Mark Hegsted, Robert McGandy, and Fredrick Stare — never disclosed the funding. The SRF selected the studies to include, reviewed drafts, and provided feedback before publication. The resulting paper systematically downplayed the evidence linking sugar to coronary heart disease and shifted blame squarely onto saturated fat and cholesterol.",
        pullQuote:
          "The sugar industry paid Harvard scientists to lie. They never disclosed the funding. The fraud shaped 50 years of dietary policy.",
      },
      {
        heading: "The man who knew",
        body: "British physiologist John Yudkin had been sounding the alarm about sugar since the 1960s. His 1972 book Pure, White and Deadly laid out the case that sugar — not fat — was driving the epidemic of heart disease, obesity, and diabetes. The sugar industry and its allies in academia destroyed his reputation. Yudkin was mocked, marginalised, and his research was buried. He died in 1995, largely forgotten.",
      },
      {
        body: "Meanwhile, Ancel Keys — the champion of the fat-heart disease hypothesis — became the most influential nutritionist of the 20th century. His Seven Countries Study, which appeared to show a clear link between saturated fat intake and heart disease, was deeply flawed. Keys cherry-picked 7 countries from the 22 for which data was available. When all 22 countries are plotted, the correlation vanishes. But Keys had the backing of the food industry, the American Heart Association, and the US government.",
        pullQuote:
          "Ancel Keys cherry-picked 7 countries from 22. When all 22 are plotted, the correlation vanishes.",
      },
      {
        heading: "The fifty-year hangover",
        body: "The consequences of this fraud were staggering. Dietary guidelines across the Western world were built on the foundation that fat was the enemy. Low-fat products exploded. To make food palatable without fat, manufacturers pumped in sugar and refined starch. The entire food supply was reformulated around a lie.",
      },
      {
        body: "It took until 2016 for the truth to surface. The JAMA Internal Medicine paper that exposed the SRF's payments was a landmark moment. But by then, generations of doctors, dietitians, and consumers had internalised the fat-is-bad, sugar-is-fine narrative. Changing fifty years of institutional belief takes more than one paper.",
      },
      {
        heading: "Sugar today",
        body: "The average American now consumes about 17 teaspoons of added sugar per day — more than triple what the American Heart Association recommends. Sugar is in bread, pasta sauce, salad dressing, \"health\" bars, yogurt, and virtually every processed food on supermarket shelves. The industry that paid to hide its product's dangers now puts it in everything.",
      },
    ],
    sources: [
      {
        title:
          "Kearns et al. — Sugar Industry and Coronary Heart Disease Research (JAMA Internal Medicine, 2016)",
        url: "https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2548255",
        type: "study",
      },
      {
        title: "John Yudkin — Pure, White and Deadly (1972)",
        url: "https://www.penguin.co.uk/books/56788/pure-white-and-deadly-by-yudkin-john/9780241257456",
        type: "book",
      },
      {
        title: "Gary Taubes — The Case Against Sugar",
        url: "https://www.penguinrandomhouse.com/books/533644/the-case-against-sugar-by-gary-taubes/",
        type: "book",
      },
      {
        title: "What I've Learnt — How the Sugar Industry Tricked Us",
        url: "https://www.youtube.com/watch?v=oLtQLDfFQYM",
        type: "video",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
  {
    slug: "seed-oils",
    title: "What Are Seed Oils?",
    subtitle: "Hexane, bleaching, and deodorising — how industrial oils are made",
    description:
      "Seed oils like canola, soybean, and sunflower oil are extracted using chemical solvents, bleached, and deodorised. Here's what actually happens in the factory.",
    sections: [
      {
        heading: "Not your grandmother's cooking oil",
        body: "For most of human history, the fats we cooked with came from animals (tallow, lard, butter) or were mechanically pressed from fatty fruits (olive oil, coconut oil). These fats required minimal processing — render the fat, press the fruit, done. Seed oils are different. Getting oil out of a soybean, corn kernel, or rapeseed requires an industrial process that would be unrecognisable to anyone who lived before the 20th century.",
      },
      {
        heading: "The extraction process",
        body: "Here's how most seed oils are made, step by step. First, the seeds are cleaned and crushed. Then they're heated to high temperatures — up to 250°F — to begin breaking down the cell structure. The crushed, heated seeds are then washed with hexane, a chemical solvent derived from petroleum. Hexane dissolves the oil out of the seed material. The hexane-oil mixture is then heated again to evaporate off the hexane (mostly — trace amounts remain in the final product).",
        pullQuote:
          "The seeds are washed with hexane — a petroleum-derived chemical solvent. Then bleached. Then deodorised. Then sold as 'heart-healthy.'",
      },
      {
        body: "But we're not done. The crude oil is then degummed with phosphoric acid to remove phospholipids. Then it's neutralised with sodium hydroxide (lye) to remove free fatty acids. Then it's bleached — not for colour, but to remove remaining impurities, pigments, and oxidation products. Finally, it's deodorised by heating to over 450°F under a vacuum to strip out the volatile compounds that would otherwise make the oil smell rancid. The result is a clear, odourless, flavourless liquid that bears no resemblance to anything found in nature.",
      },
      {
        heading: "Compare this to butter",
        body: "Butter: cream from a cow, churned until the fat separates. That's it. Olive oil: olives crushed, oil collected. Tallow: beef fat rendered with heat. Coconut oil: coconut meat pressed. These are all one-step or two-step processes that humans have used for thousands of years. Seed oil production is a multi-step industrial chemical process invented in the early 1900s.",
      },
      {
        heading: "The omega-6 problem",
        body: "Beyond the processing, seed oils are extremely high in linoleic acid — an omega-6 polyunsaturated fatty acid. In small amounts, omega-6 is essential. But seed oils deliver it in quantities our bodies never evolved to handle. Soybean oil is about 55% linoleic acid. Sunflower oil can be over 65%. Humans evolved on a diet with an omega-6 to omega-3 ratio of roughly 1:1 to 4:1. The modern Western diet, thanks to seed oils, has pushed that ratio to 20:1 or higher.",
        pullQuote:
          "Humans evolved on an omega-6 to omega-3 ratio of 1:1. Modern diets are at 20:1.",
      },
      {
        heading: "They're in everything",
        body: "Walk into any supermarket and pick up a random packaged product. Read the ingredients. Chances are you'll find soybean oil, canola oil, sunflower oil, or \"vegetable oil\" (which is usually soybean). They're in bread, crackers, chips, cookies, salad dressings, mayonnaise, frozen meals, restaurant fryers, and fast food. Avoiding seed oils in a modern food environment requires active effort — which tells you everything about how embedded they've become.",
      },
    ],
    sources: [
      {
        title: "Dr. Chris Knobbe — Diseases of Civilisation: Are Seed Oil Excesses the Unifying Mechanism?",
        url: "https://www.youtube.com/watch?v=7kGnfXXIKZM",
        type: "video",
      },
      {
        title:
          "Ramsden et al. — Re-evaluation of the traditional diet-heart hypothesis (BMJ, 2016)",
        url: "https://www.bmj.com/content/353/bmj.i1246",
        type: "study",
      },
      {
        title:
          "Andrew Huberman — How Seed Oils Affect Your Health",
        url: "https://www.youtube.com/results?search_query=huberman+seed+oils",
        type: "video",
      },
      {
        title: "What I've Learnt — Are Seed Oils Toxic?",
        url: "https://www.youtube.com/watch?v=rQmqVVmMB3k",
        type: "video",
      },
      {
        title: "Nina Teicholz — The Big Fat Surprise",
        url: "https://thebigfatsurprise.com",
        type: "book",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
  {
    slug: "canola",
    title: "The Canola Deception",
    subtitle: "From toxic rapeseed to 'heart-healthy' oil — a masterclass in rebranding",
    description:
      "Canola oil comes from rapeseed, a plant so toxic it was used as an industrial lubricant. Here's how it was rebranded into a 'health food' through selective breeding and marketing.",
    sections: [
      {
        heading: "It started as a poison",
        body: "Rapeseed oil has been used for centuries — but not as food. It was an industrial lubricant, lamp fuel, and in manufacturing. Why? Because rapeseed naturally contains high levels of erucic acid, a fatty acid that's toxic to the heart in animal studies. It also contains glucosinolates, which are bitter-tasting compounds that cause thyroid problems in livestock. Nobody was eating this stuff.",
      },
      {
        heading: "The Canadian rebrand",
        body: "In the 1970s, Canadian scientists selectively bred rapeseed varieties to reduce erucic acid and glucosinolate content. The result was a new cultivar with less than 2% erucic acid. They needed a name that didn't include the word \"rape.\" The solution: \"Canola\" — short for \"Canadian Oil, Low Acid.\" It's a marketing name, not a plant name. There is no canola plant. It's rapeseed, rebranded.",
        pullQuote:
          "There is no canola plant. 'Canola' is a marketing name — short for 'Canadian Oil, Low Acid.' It's rapeseed, rebranded.",
      },
      {
        heading: "The health claims",
        body: "The canola industry spent millions positioning its product as a healthy alternative to saturated fat. It's low in saturated fat, high in monounsaturated fat, and contains some omega-3s — all technically true. What they don't advertise: canola oil is extracted with hexane, is heavily processed through the same degumming-bleaching-deodorising pipeline as other seed oils, and the omega-3s (ALA) it contains are poorly converted by the body to the forms humans actually need (EPA and DHA).",
      },
      {
        body: "In 2006, the FDA allowed canola oil to carry a qualified health claim for heart disease — a claim that was based largely on the displacement of saturated fat, not on canola's own merits. The fine print was full of qualifiers, but the headline was all the industry needed. Suddenly \"heart-healthy canola oil\" was everywhere — in restaurants, in \"healthy\" meal kits, and on every supermarket shelf.",
      },
      {
        heading: "The processing problem",
        body: "Canola oil is one of the most heavily processed oils you can buy. The industrial process — solvent extraction, degumming, bleaching, deodorising — is identical to other seed oils. By the time it reaches your kitchen, it's been heated multiple times, treated with chemicals, and stripped of virtually everything except fat molecules. Some of those fat molecules have been transformed by the high-heat processing into trans fats — even in oils labelled \"trans fat free\" (labelling regulations allow anything under 0.5g per serving to be listed as zero).",
      },
      {
        heading: "What to use instead",
        body: "If you want monounsaturated fat, use extra virgin olive oil — it's cold-pressed from olives with no chemicals involved. For high-heat cooking, use butter, ghee, tallow, or coconut oil — stable saturated fats that don't oxidise easily. These are the fats humans have cooked with for millennia. Canola oil was invented in the 1970s and required an entire industry to convince you it was safe to eat.",
      },
    ],
    sources: [
      {
        title: "History of Canola Breeding — Canola Council of Canada",
        url: "https://www.canolacouncil.org/about-canola/",
        type: "article",
      },
      {
        title:
          "FDA Qualified Health Claim for Canola Oil (2006)",
        url: "https://www.fda.gov/food/food-labeling-nutrition/qualified-health-claims",
        type: "article",
      },
      {
        title:
          "O'Keefe & O'Keefe — Canola Oil: Is It Harmful or Helpful? (Review)",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
        type: "study",
      },
      {
        title: "What I've Learnt — Canola Oil: Good or Bad?",
        url: "https://www.youtube.com/results?search_query=what+i%27ve+learnt+canola+oil",
        type: "video",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
  {
    slug: "omega-6",
    title: "The Omega-6 Explosion",
    subtitle: "How linoleic acid went from 2% of your body fat to 20%",
    description:
      "The amount of omega-6 linoleic acid stored in human body fat has increased dramatically over the past century, driven by seed oil consumption. Here's why that matters.",
    sections: [
      {
        heading: "A ratio gone wrong",
        body: "Your body needs both omega-6 and omega-3 fatty acids. They're essential — you have to get them from food. But the ratio matters. Omega-6 and omega-3 compete for the same enzymes and pathways in your body. Too much omega-6 relative to omega-3 promotes inflammation. Too little, and you lack the building blocks for cell membranes and signalling molecules. For most of human history, we ate them in roughly equal amounts.",
      },
      {
        body: "Estimates of the ancestral omega-6 to omega-3 ratio range from 1:1 to 4:1. The current ratio in the typical Western diet is somewhere between 15:1 and 20:1. Some estimates go higher. This shift happened almost entirely in the last 100 years, and it's driven almost entirely by one thing: the explosion of seed oil consumption.",
        pullQuote:
          "The ancestral omega-6 to omega-3 ratio was roughly 1:1. Today it's 20:1. The shift happened in a single century.",
      },
      {
        heading: "Linoleic acid in your body",
        body: "Linoleic acid (LA) is the primary omega-6 fatty acid in seed oils. Soybean oil is 55% LA. Sunflower oil can be 65%+. Corn oil is about 55%. When you eat these oils, the linoleic acid gets incorporated into your cell membranes and stored in your adipose tissue (body fat). Studies analysing adipose tissue samples from Americans over the last century show that linoleic acid has gone from about 2-3% of body fat in the early 1900s to 18-22% today. That's a roughly tenfold increase.",
      },
      {
        heading: "Why it matters",
        body: "Linoleic acid, when present in excess, gets converted into oxidised metabolites — including 4-HNE and other aldehydes — that are associated with oxidative stress, inflammation, and cellular damage. These metabolites have been implicated in everything from cardiovascular disease to non-alcoholic fatty liver disease to neurodegenerative conditions. The research is still evolving, but the signal is clear: flooding your body with omega-6 from industrial seed oils is an experiment with consequences we're only beginning to understand.",
      },
      {
        body: "Dr. Chris Knobbe, an ophthalmologist, has presented compelling data linking the rise in seed oil consumption to the parallel rise in chronic diseases of civilisation — heart disease, cancer, diabetes, macular degeneration, obesity. His thesis is that seed oils are the single most significant dietary change of the last century, and the most underrecognised driver of chronic disease.",
        pullQuote:
          "Linoleic acid in human body fat went from 2% to 20% in a century. That's a tenfold increase driven almost entirely by seed oils.",
      },
      {
        heading: "The fix is simple",
        body: "Reducing your omega-6 intake doesn't require a radical diet change. It requires replacing seed oils with traditional fats: butter, ghee, tallow, lard, olive oil, coconut oil, avocado oil. Eat wild-caught fish for omega-3. Avoid packaged foods that list soybean oil, canola oil, sunflower oil, or \"vegetable oil\" in their ingredients. Your ancestors didn't eat seed oils. You don't need to either.",
      },
    ],
    sources: [
      {
        title:
          "Guyenet & Carlson — Increase in Adipose Tissue Linoleic Acid (American Journal of Clinical Nutrition, 2015)",
        url: "https://academic.oup.com/ajcn/article/101/3/510/4569421",
        type: "study",
      },
      {
        title:
          "Dr. Chris Knobbe — Diseases of Civilisation (Ancestral Health Symposium)",
        url: "https://www.youtube.com/watch?v=7kGnfXXIKZM",
        type: "video",
      },
      {
        title:
          "Simopoulos — The Importance of the Omega-6/Omega-3 Ratio",
        url: "https://pubmed.ncbi.nlm.nih.gov/12442909/",
        type: "study",
      },
      {
        title:
          "Ramsden et al. — Sydney Diet Heart Study (BMJ, 2013)",
        url: "https://www.bmj.com/content/346/bmj.e8707",
        type: "study",
      },
      {
        title:
          "Andrew Huberman — Omega-3, Omega-6 & Their Impact on Health",
        url: "https://www.youtube.com/results?search_query=huberman+omega+3+omega+6",
        type: "video",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
  {
    slug: "resources",
    title: "Resources",
    subtitle: "Where to learn more — the books, channels, and studies that matter",
    description:
      "A curated list of the best books, YouTube channels, podcasts, and scientific studies on real food, seed oils, and metabolic health.",
    sections: [
      {
        heading: "Books",
        body: "Nina Teicholz — The Big Fat Surprise. The definitive investigation into how the low-fat diet was based on flawed science and industry influence. Gary Taubes — The Case Against Sugar. A rigorous look at sugar's role in the obesity and diabetes epidemics. John Yudkin — Pure, White and Deadly. The 1972 book that called out sugar decades before the evidence caught up. Yudkin was right, and the industry destroyed him for it. Catherine Shanahan — Deep Nutrition. A physician's guide to how traditional diets support health at the cellular level.",
      },
      {
        heading: "YouTube channels",
        body: "What I've Learnt — Exceptional deep dives into seed oils, fasting, metabolic health, and the science behind nutrition claims. Clear, well-sourced, and engaging. Highly recommended starting point. Andrew Huberman (Huberman Lab) — Neuroscientist at Stanford covering omega-3/omega-6 balance, metabolic health, and the science of nutrition. Long-form but thorough. Dr. Chris Knobbe — Ophthalmologist whose presentations on seed oils and diseases of civilisation are among the most cited in the ancestral health community.",
      },
      {
        heading: "Key studies",
        body: "Kearns et al. (2016) — Sugar Industry and Coronary Heart Disease Research. Published in JAMA Internal Medicine, this paper exposed the Sugar Research Foundation's payments to Harvard scientists in the 1960s. The paper that started the modern reckoning with sugar industry fraud. Ramsden et al. (2016) — Re-evaluation of the traditional diet-heart hypothesis. Re-analysed recovered data from the Minnesota Coronary Experiment and found that replacing saturated fat with omega-6 linoleic acid increased mortality. Ramsden et al. (2013) — Sydney Diet Heart Study. Re-analysis showed that a diet high in omega-6 from safflower oil increased death rates from heart disease. Guyenet & Carlson (2015) — Documented the tenfold increase in linoleic acid in American adipose tissue over the 20th century. Simopoulos (2002) — Landmark review on the importance of the omega-6/omega-3 ratio in health and disease.",
      },
      {
        heading: "Organisations and websites",
        body: "RealFood.gov — The 2025-2030 U.S. Dietary Guidelines finally align with what real food advocates have been saying for decades. For the first time, official government guidance calls Americans to avoid highly processed food, industrial seed oils, and added sugars. A landmark shift. The Weston A. Price Foundation — Named after the dentist who studied traditional diets around the world in the 1930s. Advocates for nutrient-dense whole foods and traditional fats. Zero Acre Farms — A company working to replace seed oils with healthier alternatives. Their blog has excellent summaries of seed oil research. Seed Oil Scout — A browser extension and community dedicated to identifying and avoiding seed oils in restaurants and food products.",
      },
    ],
    sources: [
      {
        title: "Nina Teicholz — The Big Fat Surprise",
        url: "https://thebigfatsurprise.com",
        type: "book",
      },
      {
        title: "What I've Learnt — YouTube Channel",
        url: "https://www.youtube.com/@WhatIveLearned",
        type: "video",
      },
      {
        title: "Huberman Lab — YouTube Channel",
        url: "https://www.youtube.com/@hubaboratoryab",
        type: "video",
      },
      {
        title: "Weston A. Price Foundation",
        url: "https://www.westonaprice.org",
        type: "article",
      },
      {
        title: "Zero Acre Farms — Blog",
        url: "https://www.zeroacre.com/blog",
        type: "article",
      },
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
    ],
  },
];
