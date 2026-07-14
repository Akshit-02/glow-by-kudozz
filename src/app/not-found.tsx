import Link from "next/link";
import { Home, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
        <Sparkles className="h-7 w-7" />
      </span>
      <p className="font-display text-7xl font-semibold text-primary/30">404</p>
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        This page has gone off the radar
      </h1>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        The page you&apos;re looking for might have been moved, renamed, or never existed. Let&apos;s get
        you back to the glow.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">
            <Home className="mr-1.5 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full px-8">
          <Link href="/blog">
            <Search className="mr-1.5 h-4 w-4" /> Browse Articles
          </Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {categories.slice(0, 6).map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
