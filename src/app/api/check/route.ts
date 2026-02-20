import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { item } = await request.json();

  if (!item || typeof item !== "string" || item.trim().length === 0) {
    return NextResponse.json(
      { error: "Item is required" },
      { status: 400 }
    );
  }

  const trimmed = item.trim().slice(0, 200);

  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiKey = process.env.CLOUDFLARE_API_KEY;

  if (!accountId || !apiKey) {
    return NextResponse.json({
      isFood: false,
      score: 25,
      reason: "Couldn't verify this one. When in doubt... trash.",
    });
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
              content:
                "You are a strict whole-food evaluator. FOOD means: whole, unprocessed foods that humans evolved to eat — meat, fish, eggs, vegetables, fruits, nuts, seeds, traditional fats (butter, ghee, tallow, lard, olive oil, coconut oil, avocado oil). TRASH means: anything containing seed oils (canola, soybean, corn, sunflower, safflower, cottonseed, grapeseed oil), ultra-processed foods, artificial ingredients, refined sugars, or industrially produced ingredients. Reply with exactly four lines:\nLine 1: Yes (it is real food) or No (it is trash)\nLine 2: A score from 0 to 100 (0 = pure trash, 100 = pure whole food)\nLine 3: Estimated calories per 100g (just the number)\nLine 4: One punchy sentence explaining why.\nBe opinionated and direct.",
            },
            {
              role: "user",
              content: `Is "${trimmed}" real food or trash?`,
            },
          ],
          max_tokens: 100,
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json({
        isFood: false,
        score: 25,
        reason: "Couldn't verify this one. When in doubt... trash.",
      });
    }

    const data = await response.json();
    const text: string = data.result?.response || "";
    const lines = text.trim().split("\n").filter((l: string) => l.trim());
    const firstLine = lines[0]?.toLowerCase().trim() || "";
    const isFood = firstLine.startsWith("yes");

    // Parse score from second line
    let score = isFood ? 75 : 25;
    if (lines.length > 1) {
      const scoreMatch = lines[1].match(/\d+/);
      if (scoreMatch) {
        const parsed = parseInt(scoreMatch[0], 10);
        if (parsed >= 0 && parsed <= 100) score = parsed;
      }
    }

    // Parse calories from third line
    let calories: number | undefined;
    if (lines.length > 2) {
      const calMatch = lines[2].match(/\d+/);
      if (calMatch) {
        const parsed = parseInt(calMatch[0], 10);
        if (parsed >= 0 && parsed <= 2000) calories = parsed;
      }
    }

    const reason =
      lines.length > 3
        ? lines.slice(3).join(" ").trim()
        : lines.length > 2 && !lines[2].match(/^\d+$/)
          ? lines.slice(2).join(" ").trim()
          : isFood
            ? "The AI says this counts as food."
            : "The AI says this is definitely not food.";

    return NextResponse.json({ isFood, score, calories, reason });
  } catch {
    return NextResponse.json({
      isFood: false,
      score: 25,
      reason: "Couldn't verify this one. When in doubt... trash.",
    });
  }
}
