import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dan Thomson - Founder & CEO of Sensay";
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
          backgroundColor: "#ffffff",
          padding: 60,
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
              fontSize: 72,
              fontWeight: 600,
              color: "#171717",
              marginBottom: 24,
            }}
          >
            Dan Thomson
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#525252",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Founder & CEO of Sensay · Author · Angel Investor · Explorer of 110 Countries
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
              fontSize: 20,
              color: "#737373",
            }}
          >
            <span>AI</span>
            <span>·</span>
            <span>Digital Immortality</span>
            <span>·</span>
            <span>Web3</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#a3a3a3",
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
