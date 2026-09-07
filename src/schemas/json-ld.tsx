/**
 * Renders one or more JSON-LD objects as <script type="application/ld+json">
 * tags. `<` is escaped to < so a literal "</script>" inside stringified
 * content (a title, an answer, etc.) can't break out of the script tag.
 */
export function JsonLd({ data, id }: { data: object | (object | false | null | undefined)[]; id?: string }) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (item): item is object => Boolean(item)
  );

  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          id={items.length > 1 && id ? `${id}-${index}` : id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
