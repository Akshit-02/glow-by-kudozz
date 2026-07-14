import { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogFilters } from "@/components/blog/blog-filters";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogGridSkeleton } from "@/components/blog/blog-grid-skeleton";
import { BlogCard } from "@/components/blog/blog-card";
import { posts } from "@/data/posts";
import { SITE_CONFIG } from "@/constants/site";
import type { PostFilters } from "@/lib/get-posts";

export const metadata: Metadata = {
  title: "All Articles",
  description:
    "Browse every Glow by Kudozz guide across skincare, haircare, makeup, grooming, fragrance, and wellness.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `All Articles | ${SITE_CONFIG.name}`,
    description: "Browse every Glow by Kudozz guide across skincare, haircare, makeup, grooming, fragrance, and wellness.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

interface BlogPageProps {
  searchParams: Promise<{ q?: string; category?: string; sort?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const hasFilters = Boolean(params.q || params.category || (params.page && params.page !== "1"));

  const filters: PostFilters = {
    q: params.q,
    category: params.category,
    sort: (params.sort as PostFilters["sort"]) ?? "newest",
    page: params.page ? Number(params.page) : 1,
  };

  const featured = !hasFilters ? posts.find((p) => p.featured) ?? posts[0] : null;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Articles", href: "/blog" }]} />

      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">All Articles</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Expert-vetted guides across skincare, haircare, makeup, grooming, fragrance, and wellness —
          filter by category or search to find exactly what you need.
        </p>
      </div>

      {featured && (
        <div className="mt-10">
          <BlogCard post={featured} variant="horizontal" priority />
        </div>
      )}

      <div className="mt-10">
        <BlogFilters />
      </div>

      <div className="mt-8">
        <Suspense key={JSON.stringify(filters)} fallback={<BlogGridSkeleton />}>
          <BlogGrid filters={filters} />
        </Suspense>
      </div>
    </div>
  );
}
