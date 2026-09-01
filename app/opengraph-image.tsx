import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(180deg, #2E1B14 0%, #201310 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D98C93",
            marginBottom: 28,
          }}
        >
          Prothésiste ongulaire
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#F9EFE7",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          {brand.name}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#EADFD6",
            marginTop: 32,
            textAlign: "center",
          }}
        >
          {brand.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
