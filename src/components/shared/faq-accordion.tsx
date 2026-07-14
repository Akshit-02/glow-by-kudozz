import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema } from "@/schemas/site-schema";

export function FaqAccordion({
  items,
  withSchema = true,
}: {
  items: { id?: string; question: string; answer: string }[];
  withSchema?: boolean;
}) {
  return (
    <>
      {withSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
        />
      )}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id ?? index}
            value={item.id ?? String(index)}
            className="border-border"
          >
            <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
