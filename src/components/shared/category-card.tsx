import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

export function CategoryCard({ category, className }: { category: Category; className?: string }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Sparkles;

  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated",
        className
      )}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
      <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="relative flex flex-col gap-1 p-5">
        <h3 className="font-display text-xl font-semibold text-white">{category.name}</h3>
        <p className="text-xs text-white/80">{category.articleCount} articles</p>
      </div>
    </Link>
  );
}
