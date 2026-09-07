import { getPostsByCategory } from "@/data/posts";
import type { BlogPost } from "@/types";

/**
 * Picks the most representative articles for a category using signals that
 * already exist in the content model (editorsPick/featured, then
 * viewCount) — never a hand-picked slug list, so this can't go stale as
 * articles are added, removed, or renamed.
 */
export function curatedPostsForCategory(categorySlug: string, limit = 5): BlogPost[] {
  return [...getPostsByCategory(categorySlug)]
    .sort((a, b) => {
      const aFlag = Number(Boolean(a.editorsPick || a.featured));
      const bFlag = Number(Boolean(b.editorsPick || b.featured));
      return bFlag - aFlag || b.viewCount - a.viewCount;
    })
    .slice(0, limit);
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
