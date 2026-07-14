import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "serif",
          }}
        >
          G
        </div>
        <div
          style={{
            position: "absolute",
            top: 5,
            right: 6,
            display: "flex",
            width: 4,
            height: 4,
            borderRadius: 1,
            background: "white",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
