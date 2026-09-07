/**
 * Only call this with FAQ items that are also rendered visibly on the page —
 * it should never be the sole source of the answer text. FaqAccordion is the
 * one place both the visible accordion and this schema read from the same
 * `items` array, so they can't drift apart.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
