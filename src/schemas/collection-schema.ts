import { SITE_CONFIG } from "@/constants/site";
import type { BlogPost, Category } from "@/types";

interface ListItemLike {
  url: string;
  name: string;
}

/**
 * Describes exactly the items rendered on the current page — call this with
 * the same paginated/filtered list that's actually on screen (or the full
 * set for a genuinely complete index like /categories), never a superset the
 * visitor can't see.
 */
export function collectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: ListItemLike[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url,
        name: item.name,
      })),
    },
  };
}

export function postsToListItems(posts: BlogPost[]): ListItemLike[] {
  return posts.map((post) => ({ url: `${SITE_CONFIG.url}/blog/${post.slug}`, name: post.title }));
}

export function categoriesToListItems(categories: Category[]): ListItemLike[] {
  return categories.map((category) => ({
    url: `${SITE_CONFIG.url}/category/${category.slug}`,
    name: category.name,
  }));
}
