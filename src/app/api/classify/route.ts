import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { item } = await request.json();

  if (!item || typeof item !== "string" || item.trim().length === 0) {
    return NextResponse.json({ error: "Item is required" }, { status: 400 });
  }

  const trimmed = item.trim().slice(0, 200);
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiKey = process.env.CLOUDFLARE_API_KEY;

  if (!accountId || !apiKey) {
    return NextResponse.json({ type: "whole" });
  }

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `You classify food inputs into exactly one of three categories.

WHOLE — A single whole food or traditional ingredient eaten on its own.
Examples: salmon, avocado, blueberries, bone broth, ghee, dark chocolate 90%, kombucha.

COMBINATION — A dish or meal made by combining multiple whole foods with minimal processing. The kind of thing you'd cook at home from real ingredients.
Examples: grilled salmon with asparagus, steak and eggs, chicken salad (homemade), vegetable stir-fry with olive oil.

PROCESSED — Anything involving industrial processing, seed oils, refined flour, refined sugar, artificial ingredients, deep frying in seed oil, or mass-produced packaged food. If it comes from a fast food chain, a deli counter, a factory, or a freezer aisle, it is processed.
Examples: french fries, chicken nuggets, store-bought lasagne, pizza, kebab, instant ramen, mayonnaise, breakfast cereal, protein bars, any fast food item.

IMPORTANT RULES:
- Deep frying = PROCESSED (always, even if the base ingredient is whole food)
- Fast food / takeaway / deli counter = PROCESSED
- Contains seed oils, refined flour, or refined sugar = PROCESSED
- Restaurant dishes with sauces are usually PROCESSED (commercial sauces use seed oils)
- "Homemade" or "with olive oil" qualifiers can make something COMBINATION
- When in doubt between COMBINATION and PROCESSED, choose PROCESSED

For COMBINATION items, also decompose into ingredients with prominence weights.

Reply with ONLY valid JSON, no markdown fences, in one of these formats:

For WHOLE: {"type": "whole"}
For PROCESSED: {"type": "processed"}
For COMBINATION: {"type": "combination", "ingredients": [{"name": "ingredient", "weight": 0.5}, ...]}

Ingredient rules (COMBINATION only):
- Use simple names a food database would recognize
- Include cooking fats/oils as ingredients (e.g. "olive oil", "butter")
- Weights must sum to 1.0, maximum 8 ingredients
- No explanations, just the JSON`,
            },
            {
              role: "user",
              content: `Classify: "${trimmed}"`,
            },
          ],
          max_tokens: 300,
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json({ type: "whole" });
    }

    const data = await response.json();
    const text: string = data.result?.response || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ type: "whole" });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const type = parsed.type;

    if (type === "processed") {
      return NextResponse.json({ type: "processed" });
    }

    if (type === "combination" && Array.isArray(parsed.ingredients) && parsed.ingredients.length >= 2) {
      const ingredients = parsed.ingredients
        .filter(
          (i: unknown): i is { name: string; weight: number } =>
            i !== null &&
            typeof i === "object" &&
            "name" in (i as Record<string, unknown>) &&
            "weight" in (i as Record<string, unknown>) &&
            typeof (i as Record<string, unknown>).name === "string" &&
            typeof (i as Record<string, unknown>).weight === "number"
        )
        .slice(0, 8)
        .map((i: { name: string; weight: number }) => ({
          name: i.name.trim().toLowerCase().slice(0, 100),
          weight: Math.max(0, Math.min(1, i.weight)),
        }));

      if (ingredients.length >= 2) {
        const totalWeight = ingredients.reduce((sum: number, i: { weight: number }) => sum + i.weight, 0);
        const normalized = ingredients.map((i: { name: string; weight: number }) => ({
          ...i,
          weight:
            totalWeight > 0
              ? +(i.weight / totalWeight).toFixed(3)
              : +(1 / ingredients.length).toFixed(3),
        }));

        return NextResponse.json({ type: "combination", ingredients: normalized });
      }
    }

    // Default: treat as single whole food (will go to /api/check)
    return NextResponse.json({ type: "whole" });
  } catch {
    return NextResponse.json({ type: "whole" });
  }
}
