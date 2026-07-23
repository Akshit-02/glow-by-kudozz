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
        <div style={{ display: "flex", marginBottom: 28 }}>
          <svg width={88} height={88} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="6" y1="6" x2="94" y2="94" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#b76e79" />
                <stop offset="1" stopColor="#e8836f" />
              </linearGradient>
              <linearGradient id="s" x1="30" y1="30" x2="70" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f2dfc7" stopOpacity="0.9" />
                <stop offset="1" stopColor="#f2dfc7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="94" height="94" rx="29" fill="url(#g)" />
            <path d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 71 61 C71 51 65 40 50 25 Z" fill="white" />
            <path
              d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 46 81.5 C41 74 38 65 40 56 C42 46 46 37 50 25 Z"
              fill="url(#s)"
            />
            <path
              d="M78 13 C79 19.5 82 22.5 88.5 24 C82 25.5 79 28.5 78 35 C77 28.5 74 25.5 67.5 24 C74 22.5 77 19.5 78 13 Z"
              fill="white"
            />
          </svg>
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
