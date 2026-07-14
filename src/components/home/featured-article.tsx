import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { getCategoryBySlug } from "@/lib/content";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedArticle() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const category = getCategoryBySlug(featured.categorySlug);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 gap-0 overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-elevated lg:grid-cols-2"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-auto">
            <Image
              src={featured.heroImage}
              alt={featured.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Featured
              </span>
              {category && (
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.name}
                </span>
              )}
            </div>
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
              {featured.title}
            </h2>
            <p className="line-clamp-3 text-base leading-relaxed text-muted-foreground">{featured.summary}</p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {featured.readingTimeMinutes} min read
              </span>
            </div>
            <span className="mt-2 inline-flex w-fit items-center gap-2 font-semibold text-primary">
              Read the full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
