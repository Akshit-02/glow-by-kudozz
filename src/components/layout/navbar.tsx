"use client";

import { Logo } from "@/components/layout/logo";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchModal } from "@/components/layout/search-modal";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollPosition(8);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-soft" : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <MegaMenu />
        <div className="flex items-center gap-1">
          <SearchModal />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
