import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function TrendingArticles() {
  const trending = posts.filter((p) => p.trending).slice(0, 3);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Trending Now"
            title="What everyone's reading"
            description="The stories our readers can't stop sharing this week."
          />
          <Link
            href="/blog?sort=trending"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            <TrendingUp className="h-4 w-4" /> View all trending <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((post, i) => (
            <BlogCard key={post.id} post={post} priority={i === 0} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
