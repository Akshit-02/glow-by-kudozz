import { SearchX } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { Pagination } from "@/components/shared/pagination";
import { getFilteredPosts, type PostFilters } from "@/lib/get-posts";
import { collectionPageSchema, postsToListItems } from "@/schemas/collection-schema";
import { JsonLd } from "@/schemas/json-ld";

interface CollectionMeta {
  name: string;
  description: string;
  url: string;
}

export async function BlogGrid({
  filters,
  basePath = "/blog",
  collection,
}: {
  filters: PostFilters;
  basePath?: string;
  /** Pass only for the canonical, unfiltered view of a listing page — the
   * resulting ItemList always mirrors exactly the posts rendered below, so
   * it must never be attached to a search/filtered result set. */
  collection?: CollectionMeta;
}) {
  const { posts, total, page, totalPages } = await getFilteredPosts(filters);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border py-20 text-center">
        <SearchX className="h-10 w-10 text-muted-foreground" />
        <p className="font-display text-lg font-semibold text-foreground">No articles found</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Try adjusting your search or filters to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {collection && (
        <JsonLd
          id="collection-schema"
          data={collectionPageSchema({ ...collection, items: postsToListItems(posts) })}
        />
      )}
      <p className="text-sm text-muted-foreground">
        Showing {posts.length} of {total} article{total === 1 ? "" : "s"}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard key={post.id} post={post} priority={i < 3} />
        ))}
      </div>
      <Pagination
        basePath={basePath}
        currentPage={page}
        totalPages={totalPages}
        params={{
          q: filters.q,
          category: filters.category,
          sort: filters.sort,
        }}
      />
    </div>
  );
}
