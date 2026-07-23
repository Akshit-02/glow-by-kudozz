export function LogoMark({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Glow by Kudozz logomark"
    >
      <defs>
        <linearGradient id="glowMarkGradient" x1="6" y1="6" x2="94" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-rose-gold)" />
          <stop offset="1" stopColor="var(--color-coral)" />
        </linearGradient>
        <linearGradient id="glowMarkSheen" x1="30" y1="30" x2="70" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-champagne)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--color-champagne)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Signet-style squircle base */}
      <rect x="3" y="3" width="94" height="94" rx="29" fill="url(#glowMarkGradient)" />
      <rect x="3.75" y="3.75" width="92.5" height="92.5" rx="28.25" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* Glow drop — the brand's signature dewdrop mark */}
      <path
        d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 71 61 C71 51 65 40 50 25 Z"
        fill="white"
      />

      {/* Gem-cut sheen inside the drop */}
      <path
        d="M50 25 C35 40 29 51 29 61 A21 21 0 0 0 46 81.5 C41 74 38 65 40 56 C42 46 46 37 50 25 Z"
        fill="url(#glowMarkSheen)"
      />

      {/* Twin sparkle accent — the "glow" */}
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
  );
}
