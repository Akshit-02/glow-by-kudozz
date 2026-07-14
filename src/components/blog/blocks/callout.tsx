import { Lightbulb, AlertTriangle, Info, StickyNote } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  tip: { Icon: Lightbulb, className: "border-success/30 bg-success/10 text-success" },
  warning: { Icon: AlertTriangle, className: "border-accent/30 bg-accent/10 text-coral-dark" },
  info: { Icon: Info, className: "border-primary/30 bg-secondary text-primary" },
  note: { Icon: StickyNote, className: "border-border bg-muted text-foreground" },
} as const;

export function Callout({
  variant,
  title,
  text,
}: {
  variant: keyof typeof VARIANTS;
  title: string;
  text: string;
}) {
  const { Icon, className } = VARIANTS[variant];

  return (
    <div className={cn("flex gap-3 rounded-2xl border p-5 not-prose", className)}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="flex flex-col gap-1">
        <p className="font-display text-base font-semibold text-foreground">{title}</p>
        <p className="text-sm leading-relaxed text-foreground/80">{text}</p>
      </div>
    </div>
  );
}
