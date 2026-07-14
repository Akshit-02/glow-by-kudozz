import Link from "next/link";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import type { Author } from "@/types";

export function AuthorBox({ author }: { author: Author }) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-7">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <Image src={author.avatar} alt={author.name} fill sizes="80px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <p className="font-display text-lg font-semibold text-foreground">{author.name}</p>
          <BadgeCheck className="h-4 w-4 text-primary" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{author.jobTitle}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{author.shortBio}</p>
        <Link
          href={`/author/${author.slug}`}
          className="mt-1 w-fit text-sm font-semibold text-primary hover:underline"
        >
          View full profile →
        </Link>
      </div>
    </div>
  );
}
