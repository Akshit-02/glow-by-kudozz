import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #b76e79 0%, #e8836f 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 96,
            fontWeight: 700,
            fontFamily: "serif",
          }}
        >
          G
        </div>
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 34,
            display: "flex",
            width: 16,
            height: 16,
            borderRadius: 4,
            background: "white",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
