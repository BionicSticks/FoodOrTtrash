import { NextResponse } from "next/server";
import { lookupFood } from "@/lib/food-lookup";

export async function POST(request: Request) {
  const { image, mimeType } = await request.json();

  if (!image || typeof image !== "string") {
    return NextResponse.json(
      { error: "Image is required" },
      { status: 400 }
    );
  }

  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiKey = process.env.CLOUDFLARE_API_KEY;

  if (!accountId || !apiKey) {
    return NextResponse.json({
      name: "unknown",
      isFood: false,
      score: 25,
      reason: "AI not configured.",
    });
  }

  try {
    // Step 1: Identify the food using Llama 3.2 Vision
    const dataUri = `data:${mimeType || "image/jpeg"};base64,${image}`;

    const visionResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.2-11b-vision-instruct`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image_url",
                  image_url: { url: dataUri },
                },
                {
                  type: "text",
                  text: "What is the main food or dish in this image? Reply with ONLY the name (e.g. \"omelette\", \"grilled salmon\", \"caesar salad\"). Just the name, nothing else.",
                },
              ],
            },
          ],
          max_tokens: 20,
        }),
      }
    );

    if (!visionResponse.ok) {
      return NextResponse.json({
        name: "unknown",
        isFood: false,
        score: 25,
        reason: "Couldn't identify this image.",
      });
    }

    const visionData = await visionResponse.json();
    const rawResponse = (visionData.result?.response || "").trim();
    const identifiedName = rawResponse
      .replace(/^(it('s| is| looks like)|this is|i see|the (main )?(food|dish) is)\s*/i, "")
      .replace(/^(a |an |the )/i, "")
      .replace(/[.!,"]+$/g, "")
      .split("\n")[0] // only take the first line
      .trim()
      .toLowerCase();

    if (!identifiedName) {
      return NextResponse.json({
        name: "unknown",
        isFood: false,
        score: 25,
        reason: "Couldn't identify what's in this image.",
      });
    }

    // Step 2: Check local database first
    const localResult = lookupFood(identifiedName);
    if (localResult) {
      return NextResponse.json({
        name: identifiedName,
        isFood: localResult.verdict === "food",
        score: localResult.score,
        calories: localResult.calories,
        reason: localResult.verdict === "food"
          ? localResult.item?.fun_fact || `${identifiedName} is real food.`
          : localResult.trashItem?.reason || `${identifiedName} is trash.`,
        category: localResult.item?.category || localResult.trashItem?.category,
      });
    }

    // Step 3: Fall back to text AI for the verdict
    const checkResponse = await fetch(
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
              content: `Is "${identifiedName}" real food or trash?`,
            },
          ],
          max_tokens: 100,
        }),
      }
    );

    if (!checkResponse.ok) {
      return NextResponse.json({
        name: identifiedName,
        isFood: false,
        score: 25,
        reason: `Identified as "${identifiedName}" but couldn't verify. When in doubt... trash.`,
      });
    }

    const checkData = await checkResponse.json();
    const text: string = checkData.result?.response || "";
    const lines = text.trim().split("\n").filter((l: string) => l.trim());
    const firstLine = lines[0]?.toLowerCase().trim() || "";
    const isFood = firstLine.startsWith("yes");

    let score = isFood ? 75 : 25;
    if (lines.length > 1) {
      const scoreMatch = lines[1].match(/\d+/);
      if (scoreMatch) {
        const parsed = parseInt(scoreMatch[0], 10);
        if (parsed >= 0 && parsed <= 100) score = parsed;
      }
    }

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
        : isFood
          ? `${identifiedName} counts as real food.`
          : `${identifiedName} is definitely not food.`;

    return NextResponse.json({ name: identifiedName, isFood, score, calories, reason });
  } catch {
    return NextResponse.json({
      name: "unknown",
      isFood: false,
      score: 25,
      reason: "Something went wrong identifying this image.",
    });
  }
}
