import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ChevronDown, BookText } from "lucide-react";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/posts";
import { getCategoryBySlug, getProductsBySlugs } from "@/lib/content";
import { SITE_CONFIG } from "@/constants/site";
import { articleSchema, faqSchema } from "@/schemas/site-schema";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { LeftSidebar } from "@/components/blog/left-sidebar";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { KeyTakeaways } from "@/components/blog/key-takeaways";
import { ContentRenderer } from "@/components/blog/content-renderer";
import { BlogCard } from "@/components/blog/blog-card";
import { ProductCard } from "@/components/product/product-card";
import {
  RelatedArticlesWidget,
  TrendingWidget,
  LatestWidget,
  PopularProductsWidget,
  NewsletterWidget,
  AdPlaceholderWidget,
} from "@/components/blog/sidebar-widgets";
import type { TableOfContentsItem } from "@/types";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tagSlugs,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.heroImage, width: 1200, height: 750, alt: post.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

function extractToc(post: ReturnType<typeof getPostBySlug>): TableOfContentsItem[] {
  if (!post) return [];
  return post.content
    .filter((b): b is Extract<typeof b, { type: "heading" }> => b.type === "heading")
    .map((b) => ({ id: b.id, text: b.text, level: b.level }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategoryBySlug(post.categorySlug);
  const related = getRelatedPosts(post, 3);
  const relatedProducts = getProductsBySlugs(post.relatedProductSlugs);
  const toc = extractToc(post);
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return (
    <>
      <ReadingProgress targetId="article-content" />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.excerpt,
              slug: post.slug,
              image: post.heroImage,
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
              authorName: SITE_CONFIG.author,
              authorUrl: SITE_CONFIG.url,
              category: category?.name ?? "",
            })
          ),
        }}
      />
      {post.faqs.length > 0 && (
        <Script
          id="post-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            ...(category ? [{ name: category.name, href: `/category/${category.slug}` }] : []),
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_320px]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <LeftSidebar items={toc} readingTime={post.readingTimeMinutes} url={url} title={post.title} />
            </div>
          </aside>

          <main id="article-content" className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-5">
              {category && (
                <span className="w-fit rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {category.name}
                </span>
              )}
              <h1 className="text-balance font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
                <span>{post.readingTimeMinutes} min read</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {toc.length > 0 && (
              <details className="rounded-2xl border border-border bg-card p-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-foreground">
                  <span className="flex items-center gap-2">
                    <BookText className="h-4 w-4 text-primary" /> Jump to a section
                  </span>
                  <ChevronDown className="h-4 w-4 transition-transform [details[open]_&]:rotate-180" />
                </summary>
                <div className="mt-4">
                  <TableOfContents items={toc} />
                </div>
              </details>
            )}

            <KeyTakeaways items={post.keyTakeaways} />

            <ContentRenderer blocks={post.content} />

            {post.faqs.length > 0 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
                <FaqAccordion items={post.faqs} withSchema={false} />
              </div>
            )}

            {post.sources.length > 0 && (
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/40 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sources</h2>
                <ul className="flex flex-col gap-1.5">
                  {post.sources.map((source) => (
                    <li key={source.label}>
                      <a href={source.url} className="text-sm text-primary hover:underline">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-2xl font-semibold text-foreground">Related Products</h2>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-2xl font-semibold text-foreground">You Might Also Like</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-6 xl:hidden">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <RelatedArticlesWidget posts={related} />
                <TrendingWidget excludeId={post.id} />
              </div>
              <NewsletterWidget />
            </div>
          </main>

          <aside className="hidden xl:flex xl:flex-col xl:gap-6">
            <div className="sticky top-28 flex flex-col gap-6">
              <RelatedArticlesWidget posts={related} />
              <TrendingWidget excludeId={post.id} />
              <PopularProductsWidget />
              <NewsletterWidget />
              <AdPlaceholderWidget />
              <LatestWidget excludeId={post.id} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
