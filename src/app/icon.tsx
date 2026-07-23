import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width={32} height={32} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="6" y1="6" x2="94" y2="94" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#b76e79" />
            <stop offset="1" stopColor="#e8836f" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="94" height="94" rx="29" fill="url(#g)" />
        <path d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 71 61 C71 51 65 40 50 25 Z" fill="white" />
        <path
          d="M78 13 C79 19.5 82 22.5 88.5 24 C82 25.5 79 28.5 78 35 C77 28.5 74 25.5 67.5 24 C74 22.5 77 19.5 78 13 Z"
          fill="white"
        />
      </svg>
    ),
    { ...size }
  );
}
