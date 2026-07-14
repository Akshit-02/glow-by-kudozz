import { Mail, Megaphone } from "lucide-react";
import type { BlogPost } from "@/types";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { BlogCard } from "@/components/blog/blog-card";
import { ProductCard } from "@/components/product/product-card";
import { NewsletterForm } from "@/components/shared/newsletter-form";

export function RelatedArticlesWidget({ posts: related }: { posts: BlogPost[] }) {
  if (related.length === 0) return null;
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold text-foreground">Related Articles</h3>
      <div className="flex flex-col gap-1">
        {related.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>
    </div>
  );
}

export function TrendingWidget({ excludeId }: { excludeId?: string }) {
  const trending = posts.filter((p) => p.trending && p.id !== excludeId).slice(0, 4);
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold text-foreground">Trending Now</h3>
      <div className="flex flex-col gap-1">
        {trending.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>
    </div>
  );
}

export function LatestWidget({ excludeId }: { excludeId?: string }) {
  const latest = [...posts]
    .filter((p) => p.id !== excludeId)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold text-foreground">Latest Articles</h3>
      <div className="flex flex-col gap-1">
        {latest.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>
    </div>
  );
}

export function PopularProductsWidget() {
  const popular = [...products].sort((a, b) => b.rating.count - a.rating.count).slice(0, 2);
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-semibold text-foreground">Popular Products</h3>
      <div className="grid grid-cols-2 gap-3">
        {popular.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function NewsletterWidget() {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-gradient-champagne p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-soft">
        <Mail className="h-4 w-4" />
      </span>
      <h3 className="font-display text-base font-semibold text-foreground">Stay in the glow</h3>
      <p className="text-xs leading-relaxed text-foreground/70">
        Weekly routines and honest reviews, straight to your inbox.
      </p>
      <NewsletterForm compact />
    </div>
  );
}

export function AdPlaceholderWidget() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-border bg-muted/40 p-8 text-center">
      <Megaphone className="h-5 w-5 text-muted-foreground" />
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Advertisement</p>
      <p className="text-[0.65rem] text-muted-foreground/70">300 × 250 ad placement</p>
    </div>
  );
}
