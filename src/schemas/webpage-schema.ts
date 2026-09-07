import { SITE_CONFIG } from "@/constants/site";

/**
 * Generic WebPage entity for pages that aren't an Article or a
 * CollectionPage (home, about, contact, legal pages). Links back to the
 * global Organization/WebSite nodes by @id instead of re-embedding them.
 */
export function webPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-IN",
  };
}
