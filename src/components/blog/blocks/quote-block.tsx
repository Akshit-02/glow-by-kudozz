import { Quote } from "lucide-react";

export function QuoteBlock({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <blockquote className="not-prose relative rounded-2xl bg-secondary/60 py-8 pl-14 pr-6">
      <Quote className="absolute left-5 top-6 h-8 w-8 text-primary/40" />
      <p className="font-display text-xl italic leading-snug text-foreground sm:text-2xl">{text}</p>
      {attribution && <cite className="mt-3 block text-sm not-italic text-muted-foreground">— {attribution}</cite>}
    </blockquote>
  );
}
