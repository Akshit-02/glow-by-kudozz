"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data/categories";

function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <Icon className={className} strokeWidth={1.75} />;
}

export function MegaMenu() {
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 hover:text-foreground data-[state=open]:text-foreground">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-1 p-3">
              {categories.map((category) => (
                <NavigationMenuLink asChild key={category.id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-muted"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-105">
                      <CategoryIcon name={category.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-foreground">{category.name}</span>
                      <span className="text-xs leading-snug text-muted-foreground">
                        {category.shortDescription}
                      </span>
                    </span>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
            <div className="border-t border-border p-3">
              <NavigationMenuLink asChild>
                <Link
                  href="/categories"
                  className="flex items-center justify-center rounded-xl py-2 text-sm font-medium text-primary hover:bg-muted"
                >
                  View all categories →
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {categories.slice(0, 5).map((category) => (
          <NavigationMenuItem key={category.id}>
            <NavigationMenuLink asChild>
              <Link
                href={`/category/${category.slug}`}
                className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {category.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
