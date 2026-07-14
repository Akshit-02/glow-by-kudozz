import { Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Reveal } from "@/components/shared/reveal";

export function NewsletterCta() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-rose px-6 py-16 text-center shadow-elevated sm:px-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Get the glow guide, weekly
            </h2>
            <p className="text-base leading-relaxed text-white/90">
              Editor-vetted routines, honest product reviews, and trend reports — delivered every Thursday.
              Join 120,000+ subscribers.
            </p>
            <NewsletterForm
              redirectOnSuccess
              className="mt-2 w-full max-w-md [&_button]:bg-white [&_button]:text-primary [&_button]:hover:bg-white/90 [&_input]:bg-white [&_input]:text-charcoal [&_p]:text-white/80 [&_p_a]:text-white"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
