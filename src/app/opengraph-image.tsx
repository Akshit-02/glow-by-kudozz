import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_CONFIG.name;

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
          background: "linear-gradient(135deg, #f2dfc7 0%, #faf3ec 60%, #f3e9dd 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 44,
            background: "linear-gradient(135deg, #b76e79 0%, #e8836f 100%)",
            color: "white",
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          G
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 16,
              display: "flex",
              width: 8,
              height: 8,
              borderRadius: 2,
              background: "white",
              transform: "rotate(45deg)",
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#2a2320" }}>
          Glow <span style={{ color: "#b76e79", marginLeft: 16 }}>by Kudozz</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b5f56", marginTop: 20, letterSpacing: 4 }}>
          BEAUTY · GROOMING · WELLNESS
        </div>
      </div>
    ),
    { ...size }
  );
}
