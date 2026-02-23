import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

function getScoreColor(score: number): string {
  if (score <= 30) return "#ff1a1a";
  if (score <= 45) return "#ff6633";
  if (score <= 55) return "#ddaa00";
  if (score <= 70) return "#88cc33";
  return "#00cc66";
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const item = searchParams.get("item") || "something";
  const verdict = searchParams.get("verdict") || "trash";
  const score = parseInt(searchParams.get("score") || "0", 10);
  const isFood = verdict === "food";
  const scoreColor = getScoreColor(score);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#060606",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#949292",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            marginBottom: 40,
          }}
        >
          FOOD OR TRASH
        </div>

        {/* Item name */}
        <div
          style={{
            fontSize: 22,
            color: "#949292",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          {`\u201C${item}\u201D`}
        </div>

        {/* Verdict */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: isFood ? "#00cc66" : "#ff1a1a",
            letterSpacing: "-0.04em",
            textTransform: "uppercase" as const,
            lineHeight: 0.85,
          }}
        >
          {isFood ? "FOOD" : "TRASH"}
        </div>

        {/* Score */}
        {score > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 36,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: scoreColor,
                letterSpacing: "0.05em",
              }}
            >
              {score}/100
            </div>
          </div>
        )}

        {/* Score bar */}
        {score > 0 && (
          <div
            style={{
              display: "flex",
              marginTop: 16,
              width: 400,
              height: 8,
              backgroundColor: "#1a1a1a",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${score}%`,
                height: "100%",
                backgroundColor: scoreColor,
              }}
            />
          </div>
        )}

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            color: "#94929250",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
          }}
        >
          foodortrash.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
