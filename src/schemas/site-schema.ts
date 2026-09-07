import { SITE_CONFIG } from "@/constants/site";

/** Singleton entity for the publisher. Referenced by @id from article,
 * website, and webpage schemas rather than re-embedded, so there is exactly
 * one Organization node across the whole site's structured data. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.shortName,
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/apple-icon`,
  },
  sameAs: Object.values(SITE_CONFIG.social),
  description: SITE_CONFIG.description,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.shortName,
  description: SITE_CONFIG.description,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
  // The /search route genuinely accepts ?q= and returns matching articles —
  // this isn't a placeholder action.
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
