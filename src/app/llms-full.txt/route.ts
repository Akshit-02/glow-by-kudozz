import { SITE_CONFIG } from "@/constants/site";
import { categories } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import { textResponse } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${SITE_CONFIG.name} — Full Article Index`,
    "",
    `> Every guide published on ${SITE_CONFIG.url}, grouped by category and generated directly from the live content data. See /llms.txt for a shorter, curated overview.`,
    "",
  ];

  for (const category of categories) {
    const categoryPosts = getPostsByCategory(category.slug);
    lines.push(`## ${category.name} (${categoryPosts.length})`, "");

    if (categoryPosts.length === 0) {
      lines.push("_No guides published yet._");
    } else {
      for (const post of categoryPosts) {
        lines.push(`- [${post.title}](${SITE_CONFIG.url}/blog/${post.slug}): ${post.excerpt}`);
      }
    }
    lines.push("");
  }

  return textResponse(lines.join("\n") + "\n");
}
