import { SITE_CONFIG } from "@/constants/site";
import { buildUrlset, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "",
  "/blog",
  "/categories",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export function GET() {
  const xml = buildUrlset(
    STATIC_PATHS.map((path) => ({ loc: `${SITE_CONFIG.url}${path}` }))
  );
  return xmlResponse(xml);
}
