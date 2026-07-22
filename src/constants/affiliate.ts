export const AMAZON_AFFILIATE_TAG = "mytech0d6-21";

export function buildAmazonAffiliateUrl(asinOrUrl: string): string {
  const base = /^[A-Z0-9]{10}$/.test(asinOrUrl)
    ? `https://www.amazon.in/dp/${asinOrUrl}`
    : asinOrUrl;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}tag=${AMAZON_AFFILIATE_TAG}`;
}
