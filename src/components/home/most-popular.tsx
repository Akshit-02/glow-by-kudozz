import Link from "next/link";
import Image from "next/image";
import { Flame } from "lucide-react";
import { posts } from "@/data/posts";
import { getCategoryBySlug } from "@/lib/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function MostPopular() {
  const popular = [...posts].sort((a, b) => b.viewCount - a.viewCount).slice(0, 5);

  return (
    <section className="bg-cream/60 py-16 dark:bg-card/40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading eyebrow="Most Popular" title="Reader favorites" align="center" />
          <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
            {popular.map((post, index) => {
              const category = getCategoryBySlug(post.categorySlug);
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted sm:p-5"
                >
                  <span className="font-display text-2xl font-semibold text-primary/40 w-8 shrink-0 text-center">
                    {index + 1}
                  </span>
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-20">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    {category && (
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                        {category.name}
                      </span>
                    )}
                    <h3 className="line-clamp-1 font-display text-base font-semibold text-foreground group-hover:text-primary sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Flame className="h-3 w-3 text-accent" /> {post.viewCount.toLocaleString()} views
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
