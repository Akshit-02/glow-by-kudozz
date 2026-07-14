import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { getCategoryBySlug, formatDate } from "@/lib/content";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  variant = "default",
  priority = false,
  className,
}: {
  post: BlogPost;
  variant?: "default" | "horizontal" | "compact";
  priority?: boolean;
  className?: string;
}) {
  const category = getCategoryBySlug(post.categorySlug);

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-muted",
          className
        )}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            sizes="64px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="min-w-0">
          {category && (
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
              {category.name}
            </span>
          )}
          <h3 className="mt-0.5 line-clamp-2 text-sm font-medium leading-snug text-foreground group-hover:text-primary">
            {post.title}
          </h3>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:flex-row",
          className
        )}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-square sm:w-56">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 224px"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 pt-0 sm:pt-5">
          {category && (
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
              {category.name}
            </span>
          )}
          <h3 className="line-clamp-2 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTimeMinutes} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-charcoal shadow-soft backdrop-blur-sm dark:bg-charcoal/85 dark:text-cream">
            {category.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-end pt-2 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt} className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readingTimeMinutes} min
          </time>
        </div>
      </div>
    </Link>
  );
}

export function formatPublishedDate(date: string) {
  return formatDate(date);
}
