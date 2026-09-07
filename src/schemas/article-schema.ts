import { SITE_CONFIG } from "@/constants/site";
import type { BlogPost, ContentBlock } from "@/types";

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_CONFIG.url}${path}`;
}

function blockText(block: ContentBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
    case "quote":
      return block.text;
    case "callout":
      return `${block.title} ${block.text}`;
    case "list":
      return block.items.join(" ");
    case "prosCons":
      return [...block.pros, ...block.cons].join(" ");
    case "table":
      return [block.caption ?? "", block.headers.join(" "), ...block.rows.map((r) => r.join(" "))].join(" ");
    case "faq":
      return block.items.map((f) => `${f.question} ${f.answer}`).join(" ");
    default:
      return "";
  }
}

function wordCount(post: BlogPost): number {
  const text = post.content.map(blockText).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function articleSchema(post: BlogPost, categoryName: string) {
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.heroImage)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    // No individual named author exists for this content, so the
    // Organization is the author of record — a real, non-fabricated entity,
    // rather than inventing a byline. See report for why this is deliberate.
    author: { "@id": `${SITE_CONFIG.url}/#organization` },
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: categoryName,
    keywords: post.tagSlugs.join(", ") || undefined,
    wordCount: wordCount(post),
    inLanguage: "en-IN",
  };
}

interface HowToStepMatch {
  name: string;
  text: string;
}

/**
 * Auto-detects genuine sequential instructions already present in an
 * article's own content (consecutive H2s literally titled "Step 1: ...",
 * "Step 2: ...", etc.) rather than deciding by article topic/title. Returns
 * null unless at least two real, in-order steps are found, so HowTo is never
 * forced onto content that isn't actually structured as steps.
 */
export function howToSchema(post: BlogPost) {
  const steps: HowToStepMatch[] = [];
  let expected = 1;
  let collecting: string[] = [];

  const flush = () => {
    if (steps.length > 0) steps[steps.length - 1].text = collecting.join(" ").trim();
    collecting = [];
  };

  for (const block of post.content) {
    const match = block.type === "heading" && /^step\s+(\d+)\s*:\s*(.+)$/i.exec(block.text);
    if (match && Number(match[1]) === expected) {
      flush();
      steps.push({ name: match[2].trim(), text: "" });
      expected += 1;
      continue;
    }
    if (block.type === "heading") {
      // Any other heading ends the step run (e.g. moving into "Common
      // Mistakes" after the last real step).
      if (steps.length > 0) break;
      continue;
    }
    if (steps.length > 0 && (block.type === "paragraph" || block.type === "list")) {
      collecting.push(blockText(block));
    }
  }
  flush();

  if (steps.length < 2) return null;

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}/#howto`,
    name: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.heroImage),
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text || step.name,
    })),
  };
}
