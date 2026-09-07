import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbSchema } from "@/schemas/site-schema";
import { JsonLd } from "@/schemas/json-ld";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [{ name: "Home", url: "/" }, ...items.map((i) => ({ name: i.name, url: i.href }))];

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" aria-label="Home" className="flex items-center hover:text-foreground">
          <Home className="h-3.5 w-3.5" />
        </Link>
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            {index === items.length - 1 ? (
              <span className="truncate max-w-[220px] font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="truncate max-w-[220px] hover:text-foreground">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
