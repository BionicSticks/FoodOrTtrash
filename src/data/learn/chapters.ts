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
        title: "Luise Light — What the USDA Doesn't Want You to Know (archived)",
        url: "https://web.archive.org/web/20140701000000*/whale.to/a/light.html",
        type: "article",
      },
      {
        title:
          "Marion Nestle — Food Politics: How the Food Industry Influences Nutrition and Health",
        url: "https://www.ucpress.edu/books/food-politics/paper",
        type: "book",
      },
      {
        title: "Nina Teicholz — The Big Fat Surprise",
        url: "https://www.goodreads.com/book/show/18517776-the-big-fat-surprise",
        type: "book",
      },
      {
        title: "Dr. Paul Mason — The Corrupt History of the Food Pyramid",
        url: "https://www.youtube.com/watch?v=SOgH9LDwBzY",
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
        title: "Gary Taubes — The Case Against Sugar (Penguin Random House)",
        url: "https://www.goodreads.com/book/show/29874881-the-case-against-sugar",
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
        url: "https://www.goodreads.com/book/show/18517776-the-big-fat-surprise",
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
          "Lin et al. — Rapeseed/Canola Oil and Health (Nutrition Reviews, 2013)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24147921/",
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
    slug: "ultra-processed",
    title: "The Ultra-Processed Epidemic",
    subtitle: "70% of an American child's diet is now ultra-processed food",
    description:
      "Ultra-processed foods now dominate the American diet. The U.S. government says 90% of healthcare spending goes to chronic diseases linked to what we eat. Here's what ultra-processed actually means and why it matters.",
    sections: [
      {
        heading: "What ultra-processed actually means",
        body: "The term \"ultra-processed food\" was coined by Brazilian epidemiologist Carlos Monteiro as part of the NOVA food classification system, published in 2009. NOVA divides all food into four groups: unprocessed or minimally processed foods (fruits, vegetables, meat, eggs), processed culinary ingredients (butter, oil, salt), processed foods (canned vegetables, cheese, bread), and ultra-processed food products. That last category — ultra-processed — is defined by the presence of industrial ingredients that you would never find in a home kitchen: high-fructose corn syrup, hydrogenated oils, protein isolates, emulsifiers, humectants, flavour enhancers, and artificial colours.",
      },
      {
        body: "The key distinction is not how much processing occurs, but what kind. Churning cream into butter is processing. Extracting soy protein isolate, adding maltodextrin and artificial flavours, then extruding it into a shelf-stable bar is ultra-processing. The first transforms a whole food. The second manufactures a food-like product from industrial ingredients.",
        pullQuote:
          "Ultra-processed food is not food that has been processed. It is industrial product manufactured from extracted and modified substances, assembled with additives you would never find in a home kitchen.",
      },
      {
        heading: "The American diet by the numbers",
        body: "According to RealFood.gov, the U.S. government's 2025-2030 Dietary Guidelines platform, 70% of an American child's diet is now classified as ultra-processed. Internationally, that figure is below 20%. The same source reports that 50% of Americans have prediabetes or diabetes, 75% of adults report at least one chronic condition, and 90% of U.S. healthcare spending — trillions of dollars per year — goes to treating chronic diseases linked to diet and lifestyle.",
      },
      {
        body: "A 2024 umbrella review published in The BMJ analysed 45 pooled meta-analyses covering nearly 10 million participants. It found that higher ultra-processed food intake was associated with a 50% greater risk of cardiovascular disease-related death, a 48-53% increased risk of anxiety and common mental disorders, a 12% greater risk of type 2 diabetes, and higher risks of obesity, depression, sleep problems, and all-cause mortality. The authors described the strength of the evidence for cardiovascular mortality and metabolic outcomes as \"convincing.\"",
        pullQuote:
          "A BMJ umbrella review of nearly 10 million participants found ultra-processed food linked to 50% higher cardiovascular death risk. The evidence was rated 'convincing.'",
      },
      {
        heading: "Why these products exist",
        body: "Ultra-processed foods are engineered for profit, not nutrition. They use the cheapest possible raw materials — refined flour, sugar, seed oils, and chemical additives — and transform them into products with long shelf lives, low production costs, and intense flavour profiles designed to override satiety signals. The food science term is \"hyper-palatable\": combinations of sugar, fat, and salt calibrated to drive overconsumption. A 2019 randomised controlled trial at the NIH by Kevin Hall found that participants eating ultra-processed diets consumed approximately 500 more calories per day than those eating unprocessed food, even when both diets were matched for available calories, macronutrients, sugar, fat, and fibre.",
      },
      {
        heading: "The government finally agrees",
        body: "For decades, official U.S. dietary guidance avoided naming ultra-processed food as a category to limit. The 2025-2030 Dietary Guidelines, published at RealFood.gov, changed that. For the first time, the U.S. government explicitly advises Americans to \"avoid highly processed food\" — including packaged foods with added sugars, artificial flavours, petroleum-based dyes, artificial preservatives, and non-nutritive sweeteners. The guidelines define real food as \"whole or minimally processed and recognizable as food,\" prepared \"without added sugars, industrial oils, artificial flavors, or preservatives.\"",
      },
    ],
    sources: [
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
      {
        title: "RealFood.gov — Facts: Diet & Health in America",
        url: "https://realfood.gov/facts",
        type: "article",
      },
      {
        title:
          "Lane et al. — Ultra-processed food exposure and adverse health outcomes (BMJ, 2024)",
        url: "https://doi.org/10.1136/bmj-2023-077310",
        type: "study",
      },
      {
        title:
          "Hall et al. — Ultra-Processed Diets Cause Excess Calorie Intake (Cell Metabolism, 2019)",
        url: "https://doi.org/10.1016/j.cmet.2019.05.008",
        type: "study",
      },
      {
        title:
          "Monteiro et al. — NOVA classification of food processing (World Nutrition, 2016)",
        url: "https://archive.wphna.org/wp-content/uploads/2016/01/WN-2016-7-1-3-28-38-Monteiro-Cannon-Levy-et-al-NOVA.pdf",
        type: "study",
      },
    ],
  },
  {
    slug: "added-sugar",
    title: "Added Sugar Is Not Food",
    subtitle: "The government now says added sugars are not recommended — period",
    description:
      "The 2025-2030 U.S. Dietary Guidelines state that added sugars 'are not part of eating real foods and are not recommended.' Here's what the science says and why official policy finally caught up.",
    sections: [
      {
        heading: "A policy shift decades in the making",
        body: "For years, official U.S. dietary guidance treated added sugar as something to \"limit\" — keep it under 10% of daily calories, the 2020-2025 guidelines said. The 2025-2030 Dietary Guidelines, published at RealFood.gov, went further than any previous edition: \"Added sugars are not part of eating real foods and are not recommended.\" For children, the guidance is even more explicit — added sugars should be avoided entirely. This is not a fringe position. It is now official U.S. government policy.",
      },
      {
        heading: "What counts as added sugar",
        body: "Added sugars are sugars and syrups that are added to foods during processing or preparation. They include sucrose (table sugar), high-fructose corn syrup, honey, agave, maple syrup, and dozens of other names that appear on ingredient labels. They do not include the sugars naturally present in whole fruits, vegetables, or plain dairy — those come packaged with fibre, water, vitamins, and minerals that slow absorption and provide nutritional value. The distinction matters because a whole apple and a glass of apple juice deliver sugar in fundamentally different ways to your body.",
      },
      {
        body: "The average American consumes approximately 17 teaspoons (71 grams) of added sugar per day, according to the CDC. The American Heart Association recommends no more than 6 teaspoons for women and 9 for men. The new Dietary Guidelines say the ideal amount is zero.",
        pullQuote:
          "The 2025-2030 U.S. Dietary Guidelines: 'Added sugars are not part of eating real foods and are not recommended.'",
      },
      {
        heading: "Where the sugar hides",
        body: "Added sugar is not just in desserts and soft drinks. It is in bread, pasta sauce, salad dressing, yogurt, granola bars, ketchup, canned soup, crackers, and most packaged foods sold in American supermarkets. Sugar-sweetened beverages — sodas, fruit drinks, energy drinks, sweetened coffees and teas — remain the single largest source of added sugar in the American diet. RealFood.gov explicitly names these as products to avoid.",
      },
      {
        heading: "The metabolic case against sugar",
        body: "Robert Lustig, a paediatric endocrinologist at UCSF, has argued since 2009 that fructose — the sweet component of sucrose and high-fructose corn syrup — is metabolised by the liver in a pathway similar to ethanol (alcohol). His lecture \"Sugar: The Bitter Truth\" laid out the biochemistry: excessive fructose consumption drives de novo lipogenesis (the liver converting sugar to fat), insulin resistance, visceral fat accumulation, and elevated uric acid. A 2014 study in JAMA Internal Medicine found that participants who consumed 17-21% of their calories from added sugar had a 38% higher risk of cardiovascular death compared to those consuming 8% or less.",
      },
      {
        body: "The 2024 BMJ umbrella review on ultra-processed food found that diets high in these products — which are typically the primary vehicle for added sugars — were associated with increased risks of cardiovascular disease, type 2 diabetes, depression, anxiety, and all-cause mortality. RealFood.gov states that diets dominated by processed foods are \"strongly linked to obesity, Type 2 diabetes, depression, heart disease, certain cancers, and shortened life expectancy.\"",
        pullQuote:
          "A JAMA Internal Medicine study found that consuming 17-21% of calories from added sugar increased cardiovascular death risk by 38%.",
      },
      {
        heading: "Natural sugar is different",
        body: "Eating a whole orange is not the same as drinking orange juice. The whole fruit contains fibre that slows sugar absorption, water that provides volume, and micronutrients that support metabolic health. The juice strips out the fibre and concentrates the sugar. This is why RealFood.gov recommends whole fruits (2 servings daily) while advising against sugar-sweetened beverages entirely. The sugar in a strawberry is not the problem. The 71 grams of added sugar per day is.",
      },
    ],
    sources: [
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
      {
        title: "RealFood.gov — Guidelines: What to Eat",
        url: "https://realfood.gov/guidelines",
        type: "article",
      },
      {
        title:
          "Yang et al. — Added Sugar Intake and Cardiovascular Diseases Mortality (JAMA Internal Medicine, 2014)",
        url: "https://doi.org/10.1001/jamainternmed.2013.13563",
        type: "study",
      },
      {
        title:
          "Robert Lustig — Sugar: The Bitter Truth (UCSF, 2009)",
        url: "https://www.youtube.com/watch?v=dBnniua6-oM",
        type: "video",
      },
      {
        title:
          "CDC — Get the Facts: Added Sugars",
        url: "https://www.cdc.gov/nutrition/php/data-research/added-sugars.html",
        type: "article",
      },
      {
        title:
          "Lane et al. — Ultra-processed food exposure and adverse health outcomes (BMJ, 2024)",
        url: "https://doi.org/10.1136/bmj-2023-077310",
        type: "study",
      },
    ],
  },
  {
    slug: "real-food-guidelines",
    title: "The Guidelines Finally Changed",
    subtitle: "What the 2025-2030 U.S. Dietary Guidelines actually say — and why it matters",
    description:
      "For the first time, official U.S. dietary guidance tells Americans to avoid ultra-processed food, prioritise protein, and eat real food. Here's what changed and what RealFood.gov recommends.",
    sections: [
      {
        heading: "A break from 50 years of bad advice",
        body: "Every five years, the U.S. government publishes updated Dietary Guidelines for Americans. For decades, these guidelines promoted a grain-heavy, low-fat diet that favoured processed food industry interests over public health. The 2025-2030 edition, launched under the banner RealFood.gov, represents a fundamental shift. For the first time, the guidelines explicitly tell Americans to eat real food and avoid highly processed products. The central message: \"What we eat shapes how long and how well we live — and choosing real food is one of the most powerful health decisions a person, a family, and a nation can make.\"",
        pullQuote:
          "RealFood.gov: 'Choosing real food is one of the most powerful health decisions a person, a family, and a nation can make.'",
      },
      {
        heading: "What the guidelines recommend",
        body: "The 2025-2030 guidelines define real food as \"whole or minimally processed and recognizable as food,\" prepared \"with few ingredients and without added sugars, industrial oils, artificial flavors, or preservatives.\" The specific recommendations: prioritise high-quality protein from both animal and plant sources (1.2-1.6 grams per kilogram of body weight daily), eat 3 servings of vegetables and 2 servings of fruit daily, consume 2-4 servings of whole grains (oats, rice, true sourdough — not refined or packaged grain products), and pair meals with healthy fats from whole foods.",
      },
      {
        heading: "Protein and fat are back",
        body: "Perhaps the most striking shift is the rehabilitation of protein and fat. The guidelines state: \"Every meal must prioritize high-quality, nutrient-dense protein from both animal and plant sources, paired with healthy fats from whole foods such as eggs, seafood, meats, full-fat dairy, nuts, seeds, olives, and avocados.\" Full-fat dairy is explicitly recommended. Healthy fats are described as supporting \"brain health, hormone function, and nutrient absorption.\" This directly contradicts decades of low-fat guidance that told Americans to choose skim milk, margarine, and lean cuts while avoiding egg yolks and butter.",
        pullQuote:
          "The 2025-2030 guidelines: 'Every meal must prioritize high-quality, nutrient-dense protein paired with healthy fats from whole foods such as eggs, seafood, meats, full-fat dairy, nuts, seeds, olives, and avocados.'",
      },
      {
        heading: "What to avoid",
        body: "The guidelines explicitly name the categories to avoid: packaged, prepared, and ready-to-eat foods with added sugars and salt (chips, cookies, candy); foods containing artificial flavours, petroleum-based dyes, artificial preservatives, and non-nutritive sweeteners; sugar-sweetened beverages including sodas, fruit drinks, and energy drinks; and all added sugars, which are described as \"not part of eating real foods and not recommended.\" Water or unsweetened beverages are the recommended drinks.",
      },
      {
        heading: "The numbers that forced the change",
        body: "The guidelines cite stark statistics about the current state of American health: 50% of Americans have prediabetes or diabetes, 75% of adults report at least one chronic condition, 90% of U.S. healthcare spending goes to treating chronic diseases linked to diet and lifestyle, and 70% of an American child's diet is classified as ultra-processed (compared to below 20% internationally). These are not hypothetical risks. They are a public health emergency driven by the food supply.",
        pullQuote:
          "90% of U.S. healthcare spending goes to treating chronic diseases linked to diet and lifestyle. 70% of an American child's diet is ultra-processed. — RealFood.gov",
      },
      {
        heading: "What this means for you",
        body: "The gap between what nutrition researchers have known for years and what official guidelines recommended has finally closed — at least partially. The government now agrees: eat whole foods, prioritise protein and healthy fats, avoid ultra-processed products, and eliminate added sugars. These are the same principles Food or Trash has scored against from the beginning. The question now is whether the food industry will adapt or fight back, as it has for the past fifty years.",
      },
    ],
    sources: [
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
      {
        title: "RealFood.gov — Facts: Diet & Health in America",
        url: "https://realfood.gov/facts",
        type: "article",
      },
      {
        title: "RealFood.gov — Guidelines: What to Eat",
        url: "https://realfood.gov/guidelines",
        type: "article",
      },
    ],
  },
  {
    slug: "traditional-fats",
    title: "Traditional Fats vs Industrial Oils",
    subtitle: "Butter, tallow, and olive oil sustained civilisations. Seed oils were invented in a factory.",
    description:
      "For thousands of years, humans cooked with animal fats and cold-pressed plant oils. Industrial seed oils replaced them in a single century. Here's what the science and the new U.S. guidelines say about which fats to eat.",
    sections: [
      {
        heading: "The fats humans evolved on",
        body: "Before the 20th century, the cooking fats available to humans were limited to what could be rendered, churned, or pressed with simple tools. Animal fats — tallow (beef), lard (pork), schmaltz (poultry), butter, and ghee — were staples in nearly every traditional cuisine. Plant-based fats came from fatty fruits and nuts: olive oil in the Mediterranean, coconut oil in the tropics, sesame oil in Asia. These fats share a common trait: they can be extracted mechanically, without chemical solvents, at low temperatures.",
      },
      {
        heading: "What changed",
        body: "The industrial revolution brought a new category of fat into the food supply: oils extracted from seeds using chemical solvents. Soybean oil, corn oil, cottonseed oil, canola oil, sunflower oil, and safflower oil all require multi-step industrial processes — solvent extraction with hexane, degumming, bleaching, and deodorising — to produce a shelf-stable product. These oils did not exist in the human diet before the early 1900s. By 2000, soybean oil alone accounted for more than 7% of total caloric intake in the United States, according to USDA Economic Research Service data.",
        pullQuote:
          "Soybean oil went from nonexistent in the human diet to more than 7% of total U.S. caloric intake in under a century.",
      },
      {
        heading: "What the new guidelines say about fat",
        body: "The 2025-2030 U.S. Dietary Guidelines, published at RealFood.gov, take a notably different stance on fat than previous editions. Rather than warning Americans to limit fat intake, the guidelines state: \"Healthy fats are a natural part of real foods such as meat, seafood, dairy, nuts, olives, and avocados. These fats support brain health, hormone function, and nutrient absorption.\" Full-fat dairy, eggs, nuts, seeds, olives, and avocados are all explicitly recommended. The guidelines define real food as being prepared \"without added sugars, industrial oils, artificial flavors, or preservatives\" — naming industrial oils as something to avoid.",
        pullQuote:
          "RealFood.gov: 'Healthy fats are a natural part of real foods. These fats support brain health, hormone function, and nutrient absorption.'",
      },
      {
        heading: "Stability and oxidation",
        body: "One of the key differences between traditional fats and seed oils is chemical stability. Saturated fats (butter, tallow, coconut oil) and monounsaturated fats (olive oil) are relatively stable when heated — their chemical bonds resist oxidation. Polyunsaturated fats, which dominate seed oils, are unstable. They oxidise readily when exposed to heat, light, and air, producing aldehydes and other reactive compounds. A 2012 study published in Food Chemistry by Grootveld et al. found that heating polyunsaturated-rich oils (sunflower, corn) produced significantly higher concentrations of toxic aldehyde compounds compared to olive oil, coconut oil, or butter.",
      },
      {
        heading: "The displacement effect",
        body: "The rise of seed oils did not add new fats to the diet — it displaced the fats humans had eaten for millennia. Butter consumption in the U.S. dropped from 18 pounds per person per year in 1910 to under 4 pounds by 2000. Lard virtually disappeared from home kitchens. Tallow was removed from restaurant fryers (McDonald's switched from beef tallow to vegetable oil in 1990). These traditional fats were replaced almost entirely by soybean oil, canola oil, and other industrial seed oils — a shift driven by cost, shelf life, and decades of flawed dietary guidance that demonised saturated fat.",
      },
      {
        heading: "Choosing fats today",
        body: "The principles are simple and now align with official U.S. guidance: cook with fats that humans have used for generations. Extra virgin olive oil for low-to-medium heat and dressings. Butter, ghee, tallow, or coconut oil for higher-heat cooking. Avoid oils that require chemical solvents to produce — if it needs hexane to extract, it is not a traditional food. Check ingredient labels for soybean oil, canola oil, sunflower oil, and \"vegetable oil\" (usually soybean). These are in virtually every packaged product, fast food item, and restaurant kitchen. Replacing them is the single most impactful change most people can make to their fat intake.",
      },
    ],
    sources: [
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
      {
        title: "RealFood.gov — Guidelines: What to Eat",
        url: "https://realfood.gov/guidelines",
        type: "article",
      },
      {
        title:
          "Grootveld et al. — Adverse Health Effects of Dietary Lipid Oxidation Products from Fried Foods (Nutrients, 2020)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32244669/",
        type: "study",
      },
      {
        title:
          "USDA ERS — U.S. Per Capita Fat and Oil Consumption",
        url: "https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system/",
        type: "article",
      },
      {
        title: "Nina Teicholz — The Big Fat Surprise",
        url: "https://www.goodreads.com/book/show/18517776-the-big-fat-surprise",
        type: "book",
      },
    ],
  },
  {
    slug: "reading-labels",
    title: "How to Read a Food Label",
    subtitle: "The ingredient list tells you more than the nutrition panel ever will",
    description:
      "Nutrition labels are designed to confuse. The ingredient list is where the truth hides. Here's how to read labels like a whole food advocate — and what the new U.S. guidelines say to watch for.",
    sections: [
      {
        heading: "Ignore the front of the package",
        body: "Food packaging is marketing. Claims like \"natural,\" \"heart-healthy,\" \"whole grain,\" \"lightly sweetened,\" and \"made with real fruit\" are designed to make you feel good about buying the product. Most of these terms have no strict legal definition or are defined so loosely that nearly anything qualifies. \"Natural\" can appear on products containing high-fructose corn syrup. \"Whole grain\" can appear on bread that is mostly refined flour with a token amount of whole wheat. The front of the package tells you what the manufacturer wants you to believe. The back tells you what is actually in the food.",
      },
      {
        heading: "The ingredient list is everything",
        body: "Ingredients are listed in descending order by weight. The first ingredient is what the product contains the most of. If sugar, enriched wheat flour, or a seed oil is in the first three ingredients, the product is built on cheap industrial inputs. Look for ingredients you recognise as actual food. A good rule: if your great-grandmother wouldn't recognise an ingredient, question why it's there. The 2025-2030 U.S. Dietary Guidelines define real food as \"whole or minimally processed and recognizable as food,\" prepared \"with few ingredients and without added sugars, industrial oils, artificial flavors, or preservatives.\"",
        pullQuote:
          "RealFood.gov defines real food as 'whole or minimally processed and recognizable as food, prepared with few ingredients and without added sugars, industrial oils, artificial flavors, or preservatives.'",
      },
      {
        heading: "The many names for sugar",
        body: "Added sugar appears under dozens of names on ingredient labels: sucrose, high-fructose corn syrup, dextrose, maltose, corn syrup solids, cane juice, agave nectar, rice syrup, barley malt, fruit juice concentrate, and more. Manufacturers sometimes use multiple types of sugar in a single product so that no single sugar appears as the first ingredient — even though, combined, sugar may be the dominant component. The 2025-2030 guidelines state that added sugars \"are not part of eating real foods and are not recommended.\" Any product with added sugar in any form is, by the government's own definition, not real food.",
      },
      {
        heading: "Spotting seed oils",
        body: "Seed oils appear on labels as: soybean oil, canola oil (rapeseed oil), sunflower oil, safflower oil, corn oil, cottonseed oil, grapeseed oil, rice bran oil, and the catch-all \"vegetable oil\" (which is almost always soybean oil). They are in bread, crackers, chips, cookies, mayonnaise, salad dressing, frozen meals, protein bars, and virtually every packaged food in a conventional supermarket. RealFood.gov lists \"industrial oils\" among the things that real food is prepared without. If the ingredient list contains any of these oils, the product does not meet the government's definition of real food.",
      },
      {
        heading: "Additives the guidelines flag",
        body: "The 2025-2030 Dietary Guidelines specifically name several categories of additives to avoid: artificial flavours, petroleum-based dyes (Red 40, Yellow 5, Yellow 6, Blue 1 — all derived from petroleum), artificial preservatives (BHA, BHT, TBHQ, sodium benzoate), and non-nutritive sweeteners (aspartame, sucralose, acesulfame potassium, saccharin). If any of these appear on the label, the product falls into the \"highly processed food\" category that the guidelines say to avoid.",
      },
      {
        heading: "The nutrition panel is secondary",
        body: "Most nutrition advice focuses on the Nutrition Facts panel — calories, macros, percentages. But the panel tells you how much of something is in a serving. The ingredient list tells you what that something actually is. A product can have a \"good\" macro profile — moderate calories, adequate protein, low sugar — and still be built on seed oils, refined flour, and chemical additives. The ingredient list is the truth the nutrition panel cannot convey. Read it first. If the ingredients are not real food, the macros do not matter.",
        pullQuote:
          "A product can have a 'good' macro profile and still be built on seed oils, refined flour, and chemical additives. The ingredient list is the truth the nutrition panel cannot convey.",
      },
      {
        heading: "A simple test",
        body: "Before buying any packaged food, apply this filter: Can I recognise every ingredient as something that occurs in nature or in a traditional kitchen? Is it free of added sugars, seed oils, artificial colours, and artificial preservatives? Could I, in theory, make this product at home with whole food ingredients? If the answer to any of these is no, the product is ultra-processed. The 2025-2030 guidelines, the BMJ's umbrella review of nearly 10 million participants, and decades of independent research all point the same direction: ultra-processed food is associated with worse health outcomes. The ingredient list is where you catch it.",
      },
    ],
    sources: [
      {
        title: "RealFood.gov — 2025-2030 U.S. Dietary Guidelines",
        url: "https://realfood.gov",
        type: "article",
      },
      {
        title: "RealFood.gov — Guidelines: What to Eat",
        url: "https://realfood.gov/guidelines",
        type: "article",
      },
      {
        title: "RealFood.gov — Facts: Diet & Health in America",
        url: "https://realfood.gov/facts",
        type: "article",
      },
      {
        title:
          "Lane et al. — Ultra-processed food exposure and adverse health outcomes (BMJ, 2024)",
        url: "https://doi.org/10.1136/bmj-2023-077310",
        type: "study",
      },
      {
        title:
          "FDA — How to Understand and Use the Nutrition Facts Label",
        url: "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
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
        url: "https://www.goodreads.com/book/show/18517776-the-big-fat-surprise",
        type: "book",
      },
      {
        title: "What I've Learnt — YouTube Channel",
        url: "https://www.youtube.com/@WhatIveLearned",
        type: "video",
      },
      {
        title: "Huberman Lab — YouTube Channel",
        url: "https://www.youtube.com/@hubermanlab",
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
