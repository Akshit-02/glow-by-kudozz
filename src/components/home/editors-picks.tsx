import { Gem } from "lucide-react";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function EditorsPicks() {
  const picks = posts.filter((p) => p.editorsPick).slice(0, 4);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Curated"
          title="Editor's picks"
          description="Hand-selected by our editorial team as the guides we return to again and again."
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {picks.map((post, i) => (
            <div key={post.id} className="relative">
              {i === 0 && (
                <span className="absolute -left-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elevated">
                  <Gem className="h-4 w-4" />
                </span>
              )}
              <BlogCard post={post} variant="horizontal" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
