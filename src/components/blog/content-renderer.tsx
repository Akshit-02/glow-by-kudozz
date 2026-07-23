import Image from "next/image";
import type { ContentBlock } from "@/types";
import { Callout } from "@/components/blog/blocks/callout";
import { QuoteBlock } from "@/components/blog/blocks/quote-block";
import { ProsCons } from "@/components/blog/blocks/pros-cons";
import { ComparisonTable } from "@/components/blog/blocks/comparison-table";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ProductCard } from "@/components/product/product-card";
import { getProductsBySlugs } from "@/lib/content";
import { products as allProducts } from "@/data";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-base leading-[1.85] text-foreground/90">
                {block.text}
              </p>
            );

          case "heading": {
            const HeadingTag = block.level === 2 ? "h2" : "h3";
            return (
              <HeadingTag
                key={index}
                id={block.id}
                className={
                  block.level === 2
                    ? "scroll-mt-28 font-display text-2xl font-semibold text-foreground sm:text-3xl"
                    : "scroll-mt-28 font-display text-xl font-semibold text-foreground sm:text-2xl"
                }
              >
                {block.text}
              </HeadingTag>
            );
          }

          case "image":
            return (
              <figure key={index} className="flex flex-col gap-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image src={block.src} alt={block.alt} fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover" />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground">{block.caption}</figcaption>
                )}
              </figure>
            );

          case "quote":
            return <QuoteBlock key={index} text={block.text} attribution={block.attribution} />;

          case "callout":
            return <Callout key={index} variant={block.variant} title={block.title} text={block.text} />;

          case "list":
            return block.ordered ? (
              <ol key={index} className="flex flex-col gap-2.5 pl-1 text-base leading-relaxed text-foreground/90 [counter-reset:item]">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 [counter-increment:item]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="flex flex-col gap-2.5 text-base leading-relaxed text-foreground/90">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "prosCons":
            return <ProsCons key={index} pros={block.pros} cons={block.cons} />;

          case "table":
            return (
              <ComparisonTable key={index} caption={block.caption} headers={block.headers} rows={block.rows} />
            );

          case "faq":
            return <FaqAccordion key={index} items={block.items} withSchema={false} />;

          case "newsletterCta":
            return null;

          case "productGrid": {
            const selected = getProductsBySlugs(block.productSlugs);
            const fillers = allProducts.filter((p) => !selected.some((s) => s.id === p.id));
            const products = [...selected, ...fillers].slice(0, 6);
            return (
              <div key={index} className="not-prose grid grid-cols-2 gap-5 sm:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
