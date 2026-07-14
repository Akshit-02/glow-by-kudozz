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
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#glowMarkGradient)" />

      {/* Ring forming the open "G" */}
      <circle cx="50" cy="50" r="26" stroke="white" strokeWidth="9" fill="none" />

      {/* Wedge that cuts the ring open on the right */}
      <rect x="64" y="34" width="22" height="32" fill="url(#glowMarkGradient)" />

      {/* Inward crossbar completing the "G" */}
      <rect x="57" y="46.5" width="18" height="7" rx="2" fill="white" />

      {/* Sparkle accent — the "glow" */}
      <rect
        x="73.5"
        y="19.5"
        width="9"
        height="9"
        rx="2"
        fill="white"
        transform="rotate(45 78 24)"
      />
    </svg>
  );
}
