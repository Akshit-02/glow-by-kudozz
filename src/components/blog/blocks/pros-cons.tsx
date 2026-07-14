import { Check, X } from "lucide-react";

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-2xl border border-success/30 bg-success/5 p-5">
        <p className="flex items-center gap-2 font-display text-base font-semibold text-success">
          <Check className="h-4 w-4" /> Pros
        </p>
        <ul className="flex flex-col gap-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5">
        <p className="flex items-center gap-2 font-display text-base font-semibold text-destructive">
          <X className="h-4 w-4" /> Cons
        </p>
        <ul className="flex flex-col gap-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
              <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
