import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dan Thomson - CEO, Author & Explorer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: "#fbbf24",
              marginBottom: 16,
              letterSpacing: "0.2em",
            }}
          >
            CEO · AUTHOR · EXPLORER
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "white",
              marginBottom: 24,
            }}
          >
            Dan Thomson
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Founder & CEO of Sensay · Author on Digital Immortality · Explorer of 100+ Countries
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#71717a",
            fontSize: 20,
          }}
        >
          danthomson.ai · @sensaydan
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
