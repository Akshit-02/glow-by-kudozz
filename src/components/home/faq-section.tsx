import { siteFaqs } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently asked questions"
          align="center"
        />
        <FaqAccordion items={siteFaqs} />
      </Reveal>
    </section>
  );
}
