import { SITE_CONFIG } from "@/constants/site";
import { categories } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import { buildUrlset, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const xml = buildUrlset(
    categories
      .filter((category) => getPostsByCategory(category.slug).length > 0)
      .map((category) => ({ loc: `${SITE_CONFIG.url}/category/${category.slug}` }))
  );
  return xmlResponse(xml);
}
