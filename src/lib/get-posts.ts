import { posts } from "@/data/posts";
import type { BlogPost } from "@/types";

export const POSTS_PER_PAGE = 9;

export interface PostFilters {
  q?: string;
  category?: string;
  tag?: string;
  sort?: "newest" | "oldest" | "trending" | "popular";
  page?: number;
  pageSize?: number;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}

function sortPosts(list: BlogPost[], sort: PostFilters["sort"]) {
  const sorted = [...list];
  switch (sort) {
    case "oldest":
      return sorted.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    case "trending":
      return sorted.sort((a, b) => Number(b.trending) - Number(a.trending) || b.viewCount - a.viewCount);
    case "popular":
      return sorted.sort((a, b) => b.viewCount - a.viewCount);
    case "newest":
    default:
      return sorted.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
}

/**
 * Simulates a CMS/database fetch so real loading states (Suspense skeletons)
 * are exercised even against the static mock dataset.
 */
export async function getFilteredPosts(filters: PostFilters = {}): Promise<PaginatedPosts> {
  await new Promise((resolve) => setTimeout(resolve, 350));

  const { q, category, tag, sort = "newest", page = 1, pageSize = POSTS_PER_PAGE } = filters;

  let filtered = posts;

  if (category) {
    filtered = filtered.filter((p) => p.categorySlug === category);
  }
  if (tag) {
    filtered = filtered.filter((p) => p.tagSlugs.includes(tag));
  }
  if (q) {
    const query = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query)
    );
  }

  filtered = sortPosts(filtered, sort);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  return { posts: pageItems, total, page: safePage, totalPages };
}
