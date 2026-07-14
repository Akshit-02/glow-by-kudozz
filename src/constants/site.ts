export const SITE_CONFIG = {
  name: "Glow by Kudozz",
  shortName: "Glow",
  tagline: "Beauty • Grooming • Wellness",
  description:
    "Glow by Kudozz is a premium editorial destination for skincare, haircare, fragrance, grooming, and wellness — expert-vetted guides, honest product reviews, and trend reporting you can trust.",
  url: "https://glow.kudozz.in",
  author: "Glow by Kudozz Editorial Team",
  publisher: "Kudozz",
  keywords: [
    "beauty",
    "skincare",
    "grooming",
    "haircare",
    "fragrance",
    "wellness",
    "makeup",
    "beauty routine",
    "skincare tips",
    "beauty trends",
  ],
  locale: "en_US",
  themeColor: {
    light: "#faf3ec",
    dark: "#171310",
  },
  social: {
    instagram: "https://instagram.com/glowbykudozz",
    twitter: "https://twitter.com/glowbykudozz",
    pinterest: "https://pinterest.com/glowbykudozz",
    youtube: "https://youtube.com/@glowbykudozz",
    facebook: "https://facebook.com/glowbykudozz",
  },
  contactEmail: "hello@glow.kudozz.in",
  links: {
    rss: "/rss.xml",
    sitemap: "/sitemap.xml",
  },
} as const;

export const NAV_LINKS = [
  { label: "Skincare", href: "/category/skincare" },
  { label: "Haircare", href: "/category/haircare" },
  { label: "Makeup", href: "/category/makeup" },
  { label: "Grooming", href: "/category/grooming" },
  { label: "Fragrance", href: "/category/fragrance" },
  { label: "Wellness", href: "/category/wellness" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Authors", href: "/author" },
    { label: "Categories", href: "/categories" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;
