import { Suspense } from "react";
import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogGridSkeleton } from "@/components/blog/blog-grid-skeleton";
import { SearchForm } from "@/components/blog/search-form";
import type { PostFilters } from "@/lib/get-posts";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Glow by Kudozz for skincare, haircare, makeup, grooming, fragrance, and wellness guides.",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const query = sp.q ?? "";

  const filters: PostFilters = {
    q: query,
    page: sp.page ? Number(sp.page) : 1,
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Search", href: "/search" }]} />

      <div className="mt-6 flex flex-col gap-4">
        <h1 className="flex items-center gap-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
          <Search className="h-8 w-8 text-primary" /> Search
        </h1>
        {query ? (
          <p className="text-base text-muted-foreground">
            Showing results for <span className="font-semibold text-foreground">&ldquo;{query}&rdquo;</span>
          </p>
        ) : (
          <p className="text-base text-muted-foreground">Search our full archive of beauty and grooming guides.</p>
        )}
        <SearchForm initialQuery={query} />
      </div>

      <div className="mt-10">
        {query ? (
          <Suspense key={query + (sp.page ?? "1")} fallback={<BlogGridSkeleton />}>
            <BlogGrid filters={filters} basePath="/search" />
          </Suspense>
        ) : (
          <p className="rounded-3xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            Start typing above to search the Glow archive.
          </p>
        )}
      </div>
    </div>
  );
}
