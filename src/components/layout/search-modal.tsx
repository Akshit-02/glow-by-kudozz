"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posts } from "@/data/posts";

export function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return posts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categorySlug.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 rounded-full"
        aria-label="Open search"
        onClick={() => setOpen(true)}
      >
        <Search className="h-[1.15rem] w-[1.15rem]" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-[12%] max-w-xl translate-y-0 gap-0 overflow-hidden p-0 sm:rounded-3xl"
        >
          <VisuallyHidden.Root>
            <DialogTitle>Search Glow by Kudozz</DialogTitle>
          </VisuallyHidden.Root>
          <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-border px-5 py-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, categories, ingredients..."
              className="border-none px-0 shadow-none focus-visible:ring-0 text-base"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close search"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </form>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {query.trim() && results.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                No results for &ldquo;{query}&rdquo;. Try a different term.
              </p>
            )}
            {results.map((post) => {
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-muted"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                    <Image src={post.heroImage} alt="" fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{post.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{post.categorySlug}</p>
                  </div>
                </Link>
              );
            })}
            {!query.trim() && (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                Start typing to search the Glow archive, or press{" "}
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-sans text-xs">Esc</kbd> to
                close.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
