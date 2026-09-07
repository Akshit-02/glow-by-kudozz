import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryFilters } from "@/components/blog/category-filters";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogGridSkeleton } from "@/components/blog/blog-grid-skeleton";
import { categories } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import { getCategoryBySlug } from "@/lib/content";
import { SITE_CONFIG } from "@/constants/site";
import type { PostFilters } from "@/lib/get-posts";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const isEmpty = getPostsByCategory(category.slug).length === 0;

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
    // Empty category hubs are noindexed to avoid indexing thin/placeholder
    // pages; this flips automatically once posts are added to the category.
    ...(isEmpty && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${category.name} | ${SITE_CONFIG.name}`,
      description: category.description,
      url: `${SITE_CONFIG.url}/category/${category.slug}`,
      images: [{ url: category.image, width: 1200, height: 630, alt: category.name }],
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string; sort?: string; page?: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const sp = await searchParams;
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Sparkles;
  const isEmpty = getPostsByCategory(category.slug).length === 0;

  const filters: PostFilters = {
    category: category.slug,
    q: sp.q,
    sort: (sp.sort as PostFilters["sort"]) ?? "newest",
    page: sp.page ? Number(sp.page) : 1,
  };

  // Only the canonical, unfiltered view of this page should claim a
  // CollectionPage/ItemList — a search or sort variant is a different,
  // non-canonical view of the same URL.
  const isDefaultView = !sp.q && !sp.sort && (!sp.page || sp.page === "1");

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Categories", href: "/categories" }, { name: category.name, href: `/category/${category.slug}` }]} />

      <div className="mt-6 flex flex-col gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">{category.name}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{category.description}</p>
      </div>

      {isEmpty ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
          <p className="max-w-md text-base text-muted-foreground">
            We&apos;re still building out {category.name.toLowerCase()} guides. In the
            meantime, explore our most active categories below.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories
              .filter((c) => c.slug !== category.slug && getPostsByCategory(c.slug).length > 0)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <>
          <div className="mt-10">
            <CategoryFilters />
          </div>

          <div className="mt-8">
            <Suspense key={JSON.stringify(filters)} fallback={<BlogGridSkeleton />}>
              <BlogGrid
                filters={filters}
                basePath={`/category/${category.slug}`}
                collection={
                  isDefaultView
                    ? {
                        name: category.name,
                        description: category.description,
                        url: `${SITE_CONFIG.url}/category/${category.slug}`,
                      }
                    : undefined
                }
              />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}
