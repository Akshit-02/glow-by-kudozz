import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width={180} height={180} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <rect x="0" y="0" width="100" height="100" fill="url(#g)" />
        <path d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 71 61 C71 51 65 40 50 25 Z" fill="white" />
        <path
          d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 46 81.5 C41 74 38 65 40 56 C42 46 46 37 50 25 Z"
          fill="url(#s)"
        />
        <path
          d="M78 13 C79 19.5 82 22.5 88.5 24 C82 25.5 79 28.5 78 35 C77 28.5 74 25.5 67.5 24 C74 22.5 77 19.5 78 13 Z"
          fill="white"
        />
        <path
          d="M23 66 C23.6 69.4 25.2 71 28.5 71.7 C25.2 72.4 23.6 74 23 77.4 C22.4 74 20.8 72.4 17.5 71.7 C20.8 71 22.4 69.4 23 66 Z"
          fill="white"
          fillOpacity="0.85"
        />
      </svg>
    ),
    { ...size }
  );
}
