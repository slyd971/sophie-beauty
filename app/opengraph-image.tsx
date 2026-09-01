import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoBuffer = readFileSync(join(process.cwd(), "public", "assets", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  const logoWidth = 460;
  const logoHeight = (logoWidth * brand.logoMark.height) / brand.logoMark.width;

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
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D98C93",
            marginBottom: 32,
          }}
        >
          Prothésiste ongulaire
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={logoWidth} height={logoHeight} alt={brand.name} />
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#EADFD6",
            marginTop: 36,
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
