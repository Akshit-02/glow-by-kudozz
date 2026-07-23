import Link from "next/link";
import { LogoMark } from "@/components/layout/logo-mark";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 shrink-0",
        className
      )}
      aria-label="Glow by Kudozz — Home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
        <LogoMark size={40} className="h-10 w-10 shadow-soft" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">
          Glow
          <span className="text-primary"> by Kudozz</span>
        </span>
        <span className="hidden text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
          Beauty · Grooming · Wellness
        </span>
      </span>
    </Link>
  );
}
