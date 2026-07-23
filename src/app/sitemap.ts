import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { SITE_CONFIG } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_CONFIG.url, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_CONFIG.url}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_CONFIG.url}/categories`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_CONFIG.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_CONFIG.url}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_CONFIG.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_CONFIG.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_CONFIG.url}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE_CONFIG.url}/category/${category.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
