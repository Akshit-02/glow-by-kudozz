import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-7.2L4.2 22H1l8.1-9.3L1 2h7.2l5.1 6.6L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5 15 12l-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M15 8h2V4.5h-2.5A4 4 0 0 0 10 8.5V11H8v3.5h2V22h3.5v-7.5H16l.5-3.5h-3V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.5 19c.7-2.2 1.6-5.9 1.6-5.9m0 0c-.4-.8-.4-3.4 1.4-3.4 1.4 0 1.8 1.1 1.4 2.6-.5 1.7-1.5 3.2.6 3.6 2.1.4 3.5-2.2 3.5-4.7 0-2.3-1.9-4.2-4.7-4.2-3.4 0-5.2 2.4-5.2 4.9 0 1.1.4 1.9.9 2.4" />
    </svg>
  );
}
