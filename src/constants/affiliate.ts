export const AMAZON_AFFILIATE_TAG = "mytech0575-21";

export const AFFILIATE_DISCLOSURE =
  "As an Amazon Associate, we earn from qualifying purchases. Links may earn a small commission at no extra cost to you.";

export function buildAmazonAffiliateUrl(asinOrUrl: string): string {
  const base = /^[A-Z0-9]{10}$/.test(asinOrUrl)
    ? `https://www.amazon.in/dp/${asinOrUrl}`
    : asinOrUrl;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}tag=${AMAZON_AFFILIATE_TAG}`;
}
