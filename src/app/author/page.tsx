import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { authors } from "@/data/authors";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Our Authors",
  description: "Meet the editors, estheticians, and medical reviewers behind Glow by Kudozz.",
  alternates: { canonical: "/author" },
  openGraph: {
    title: `Our Authors | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/author`,
  },
};

export default function AuthorsIndexPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Authors", href: "/author" }]} />
      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Our Authors</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Estheticians, grooming specialists, and a board-certified dermatologist — meet the team behind
          every Glow guide.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/author/${author.slug}`}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image src={author.avatar} alt={author.name} fill sizes="96px" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <p className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                  {author.name}
                </p>
                <BadgeCheck className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{author.jobTitle}</p>
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">{author.shortBio}</p>
            {author.articleCount > 0 && (
              <span className="text-xs text-muted-foreground">{author.articleCount} articles</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
