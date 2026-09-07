# Foxtale Sunscreens — Research Inventory

**Research date:** 2026-09-07
**Primary source:** Official Foxtale website (foxtale.in), fetched live via sitemap + individual product pages.
**Method:** Enumerated `https://foxtale.in/sitemap_products.xml` for every URL containing "sunscreen" or "spf", then fetched each candidate product page directly to confirm it is a live, standalone, currently-sold product (not a redirect, bundle, or discontinued SKU).

> Note on reliability: pages were fetched through an automated content-extraction pass, not viewed pixel-for-pixel in a browser. Prices, exact promotional pricing, and shade names should be spot-checked against the live product page before publishing, since Shopify stores update pricing/offers frequently. Full INCI lists below are transcribed as extracted and should be verified against the on-page list once more before final publish, since a single mis-transcribed ingredient is a factual error.

---

## Products confirmed live and in scope (6)

| Product | SPF | PA Rating | Skin Type (brand-stated) | Finish | Key Ingredients | Official URL | Blog Status |
|---|---|---|---|---|---|---|---|
| Glow Sunscreen | 50 | PA++++ | All skin types | Dewy / glowy, non-sticky | Vitamin C (3-O-ethyl ascorbic acid), Niacinamide, New-gen UV filters | https://foxtale.in/products/glow-sunscreen | Published: /blog/foxtale-glow-sunscreen-spf-50-review |
| Ultra Matte Sunscreen | 50 | PA++++ | Oily, combination, acne-prone | Matte, "second-skin" | Niacinamide, Provitamin B5, Palmitoyl Tetrapeptide-7 (peptide), New-gen UV filters | https://foxtale.in/products/matte-finish-sunscreen | Published: /blog/foxtale-ultra-matte-sunscreen-spf-50-review |
| Ice-burst Cooling Matte Gel Sunscreen | 50 | PA++++ | Oily, combination, sensitive | Cooling matte gel | Niacinamide, Centella Asiatica (Cica), New-gen UV filters, "Ice-Burst" cooling technology | https://foxtale.in/products/foxtale-cool-shade-oil-control-water-gel-sunscreen | Published: /blog/foxtale-ice-burst-cooling-gel-sunscreen-review |
| SPF 50 Tinted Fluid Sunscreen with Niacinamide | 50 | PA++++ | All skin types | Natural, non-oily tinted finish; 6 shades | Niacinamide, Vitamin E, Zinc Oxide + Titanium Dioxide (tint/mineral filters) + chemical filters, iron-oxide-style pigments (CI 77492/77491/77499) | https://foxtale.in/products/spf-50-tinted-fluid-sunscreen-with-niacinamide | Published: /blog/foxtale-tinted-fluid-sunscreen-spf-50-review |
| Dewy Finish Sunscreen | 50 | PA++++ | Normal to dry | Dewy, hydrating | Niacinamide, Provitamin B5/D-Panthenol, Peptides (Palmitoyl Tetrapeptide-7), Vitamin E | https://foxtale.in/products/spf-50-dewy-finish-sunscreen | Published: /blog/foxtale-dewy-finish-sunscreen-spf-50-review |
| Golden Armour Body Glow Sunscreen | 50 | PA+++ | Body skin, all types (brand does not segment) | Golden-glow, non-sticky | Vitamin C (3-O-ethyl ascorbic acid), Niacinamide, 5 Ceramides, Passionfruit extract, Vitamin E | https://foxtale.in/products/golden-armour-body-glow-sunscreen | Published: /blog/foxtale-golden-armour-body-sunscreen-review |

**Hub page:** Published: /blog/foxtale-sunscreens-guide — links to all 6 product articles above.

---

## Important finding: "SPF 70 Dewy Sunscreen" is not a separate current product

Search results and third-party sites (e.g. Skinsort) reference a **"Foxtale SPF 70 Dewy Finish Sunscreen"** at `foxtale.in/products/spf-70-dewy-finish-sunscreen`. Live-fetching that exact URL returns the same page as `spf-50-dewy-finish-sunscreen` — same title ("Dewy Finish Sunscreen SPF 50 PA++++"), same SPF 50 claim, same price/size. This strongly indicates Foxtale previously sold an SPF 70 version of the Dewy Finish Sunscreen and has since reformulated/relabeled it to SPF 50, with the old URL now serving the current SPF 50 product page.

**Decision: do not publish a standalone "SPF 70" article.** Only the current, live SPF 50 Dewy Finish Sunscreen will be covered. If historical SPF 70 packaging is still in market circulation, this can be noted as a single caveat sentence inside the Dewy Finish article rather than a separate page, to avoid publishing information about a product that is not actually being sold on-site today.

---

## Items found but excluded, with reasons

| Item | URL | Reason for exclusion |
|---|---|---|
| Morning Glory with Coverup (matte sunscreen bundle) | /products/morning-glory-with-coverup-matte-sunscreen | Multi-product bundle/kit, not a standalone sunscreen SKU. The matte sunscreen inside it is already covered as the Ultra Matte Sunscreen article. |
| Morning Glory Full Morning Routine Range | /products/morning-glory-full-morning-routine-range | Multi-product routine bundle, not a standalone sunscreen. |
| Brightening Lip Balm with SPF 30 | /products/brightening-lip-balm-with-spf-30 | This is a lip balm (lip-care category) that happens to contain SPF, not a facial/body sunscreen. Out of scope for a "Foxtale sunscreen" cluster; may be worth a separate lip-care article in future but not part of this project. |

---

## Publication decision

All 6 confirmed live sunscreens will each receive one standalone, dedicated article. No product is being skipped as discontinued — all 6 are currently listed for sale on foxtale.in as of the research date above.

---

## Sources used

- https://foxtale.in/collections/sunscreens (collection listing)
- https://foxtale.in/sitemap.xml, https://foxtale.in/sitemap_products.xml (full product URL enumeration)
- Individual product pages (linked in table above) — primary source for SPF/PA, price, size, INCI list, directions, claims
- https://foxtale.in/products/spf-70-dewy-finish-sunscreen (checked to confirm redirect/relabel behavior)
