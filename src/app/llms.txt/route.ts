import { SITE_CONFIG } from "@/constants/site";
import { categories } from "@/data/categories";
import { curatedPostsForCategory, textResponse } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [`# ${SITE_CONFIG.name}`, "", `> ${SITE_CONFIG.description}`, ""];

  for (const category of categories) {
    const featured = curatedPostsForCategory(category.slug);
    if (featured.length === 0) continue; // no placeholder sections for empty categories

    lines.push(`## ${category.name}`);
    lines.push("");
    lines.push(
      `- [${category.name} Hub](${SITE_CONFIG.url}/category/${category.slug}): ${category.shortDescription}`
    );
    for (const post of featured) {
      lines.push(`- [${post.title}](${SITE_CONFIG.url}/blog/${post.slug}): ${post.excerpt}`);
    }
    lines.push("");
  }

  lines.push(
    "## About",
    "",
    `- [About ${SITE_CONFIG.name}](${SITE_CONFIG.url}/about): Who publishes this site and how content is researched.`,
    `- [Contact](${SITE_CONFIG.url}/contact): Reach the editorial team.`,
    `- [Disclaimer](${SITE_CONFIG.url}/disclaimer): Medical, affiliate, and testing disclosures.`,
    `- [Privacy Policy](${SITE_CONFIG.url}/privacy-policy)`,
    `- [Terms of Service](${SITE_CONFIG.url}/terms)`,
    "",
    "## Optional",
    "",
    `- [Full Article Index](${SITE_CONFIG.url}/llms-full.txt): every published guide on the site, organized by category.`,
    `- [XML Sitemap](${SITE_CONFIG.url}/sitemap.xml)`
  );

  return textResponse(lines.join("\n") + "\n");
}
