export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "callout";
      variant: "tip" | "warning" | "info" | "note";
      title: string;
      text: string;
    }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "prosCons";
      pros: string[];
      cons: string[];
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "faq";
      items: { question: string; answer: string }[];
    }
  | { type: "newsletterCta" }
  | { type: "productGrid"; productSlugs: string[] };

export interface KeyTakeaway {
  text: string;
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  summary: string;
  keyTakeaways: KeyTakeaway[];
  heroImage: string;
  heroImageAlt: string;
  categorySlug: string;
  tagSlugs: string[];
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  content: ContentBlock[];
  faqs: { question: string; answer: string }[];
  sources: ArticleSource[];
  relatedProductSlugs: string[];
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  popular?: boolean;
  viewCount: number;
}

export interface Comment {
  id: string;
  postId: string;
  name: string;
  avatar?: string;
  text: string;
  createdAt: string;
  replies?: Comment[];
}
