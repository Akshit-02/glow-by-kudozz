import { AFFILIATE_DISCLOSURE } from "@/constants/affiliate";
import { cn } from "@/lib/utils";

export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-muted-foreground", className)}>
      {AFFILIATE_DISCLOSURE}
    </p>
  );
}
