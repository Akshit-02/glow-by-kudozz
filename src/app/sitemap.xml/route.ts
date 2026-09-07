import { SITE_CONFIG } from "@/constants/site";
import { buildSitemapIndex, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const xml = buildSitemapIndex([
    `${SITE_CONFIG.url}/sitemap-pages.xml`,
    `${SITE_CONFIG.url}/sitemap-posts.xml`,
    `${SITE_CONFIG.url}/sitemap-categories.xml`,
  ]);
  return xmlResponse(xml);
}
