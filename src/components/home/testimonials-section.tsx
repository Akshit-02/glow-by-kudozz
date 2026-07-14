import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-cream/60 py-16 dark:bg-card/40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-10">
          <SectionHeading eyebrow="Loved by Readers" title="What our community says" align="center" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <Quote className="h-6 w-6 text-primary/40" />
                <p className="flex-1 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="36px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
