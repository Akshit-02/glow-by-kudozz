import { SITE_CONFIG } from "@/constants/site";
import { posts } from "@/data/posts";
import { buildUrlset, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const xml = buildUrlset(
    posts.map((post) => ({
      loc: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastmod: post.updatedAt,
    }))
  );
  return xmlResponse(xml);
}
