import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated",
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {(product.editorsPick || product.bestseller) && (
          <Badge className="absolute left-3 top-3 rounded-full border-none bg-accent text-accent-foreground shadow-soft">
            {product.editorsPick ? "Editor's Pick" : "Bestseller"}
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg font-semibold text-foreground">
            {formatPrice(product.price, product.currency)}
          </span>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-1 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Shop <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
