import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema } from "@/schemas/faq-schema";
import { JsonLd } from "@/schemas/json-ld";

export function FaqAccordion({
  items,
  withSchema = true,
}: {
  items: { id?: string; question: string; answer: string }[];
  withSchema?: boolean;
}) {
  return (
    <>
      {withSchema && <JsonLd id="faq-schema" data={faqSchema(items)} />}
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
