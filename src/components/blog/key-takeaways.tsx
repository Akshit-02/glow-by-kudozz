import { Sparkles } from "lucide-react";
import type { KeyTakeaway } from "@/types";

export function KeyTakeaways({ items }: { items: KeyTakeaway[] }) {
  if (items.length === 0) return null;

  return (
    <div className="not-prose rounded-3xl border border-primary/20 bg-secondary/50 p-6 sm:p-8">
      <p className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <Sparkles className="h-[18px] w-[18px] text-primary" /> Key Takeaways
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
