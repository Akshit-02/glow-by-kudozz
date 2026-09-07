# Foxtale Cleansers — Research Inventory

**Research date:** 2026-09-07
**Primary source:** Official Foxtale website (foxtale.in), enumerated via the live product sitemap (`sitemap_products.xml`, 81 total product URLs fetched and scanned directly, not summarized) and confirmed on each individual product page.
**Method:** Downloaded the full products sitemap, grepped it locally for cleanser/wash/foam/scrub/exfoliating/clay/duet/purify-related paths, then fetched each candidate product page directly to confirm it is a live, standalone, currently-sold facial cleanser (not a bundle, discontinued SKU, or a different product category like body wash, mask, or toner).

> Note on reliability: prices, review counts, and INCI lists were extracted via automated page-content fetches, not a manual browser session. Spot-check the live product page before republishing pricing, since promotional pricing changes frequently.

---

## Products confirmed live and in scope (3)

Scope is **facial cleansers / face wash only**, matching this project's brief. Body wash and body scrub products found on the same site are a different product category and are excluded (see below).

| Product | Type | Key Ingredients | Skin Type | Skin Concern | Official URL | Blog Status |
|---|---|---|---|---|---|---|
| Super Glow De-Tan Face Wash | Gel/liquid cleanser, mild exfoliant | Papaya enzymes (Papain), Vitamin C (3-O-ethyl ascorbic acid), Sodium Hyaluronate | All skin types | Dullness, daily tan buildup, uneven tone | https://foxtale.in/products/super-glow-face-wash | Published: /blog/foxtale-super-glow-de-tan-face-wash-review |
| True Clarity Oil & Acne Control Face Wash | Gel cleanser | 2% Salicylic Acid, 1% Niacinamide, Hyaluronic Acid, Centella Asiatica (Cica) | Oily, acne-prone, combination | Excess oil, active acne, clogged pores | https://foxtale.in/products/true-clarity-oil-acne-control-face-wash | Published: /blog/foxtale-oil-acne-control-face-wash-review |
| The Daily Duet Hydrating Cleanser | 2-in-1 cleanser + makeup remover | Sodium Hyaluronate, Red Algae (Chondrus Crispus) Extract, Panthenol | All skin types | Makeup removal, dehydration, routine simplification | https://foxtale.in/products/the-daily-duet-cleanser | Published: /blog/foxtale-daily-duet-hydrating-face-wash-review |

**Hub page:** Published: /blog/foxtale-cleansers-guide — links to all 3 product articles above.

---

## Items found but excluded, with reasons

| Item | URL | Reason for exclusion |
|---|---|---|
| Pore Minimizing Essentials (Hydrating Face Wash + 0.15% Retinol Serum) | /products/cleanser-retinol-enlarged-pores-pore-tightening | Multi-product bundle/combo set, not a standalone cleanser SKU. The face wash inside it is the same formula already covered as The Daily Duet Hydrating Cleanser. |
| Purify & Glow Cleanser + Mask | /products/purify-glow-cleanser-mask | Live-fetching this URL returns a 404 "Page Not Found" on foxtale.in as of the research date. Still referenced in some search results and site navigation text, but appears discontinued/delisted from the brand's own store. Not published per the brief's instruction to skip discontinued products without a specific editorial reason. |
| Foxtale Refreshing Face Wash (Niacinamide + Chamomile), aka "Essentials Gel Face Wash" | No live foxtale.in product URL found | Still sold on Amazon, Nykaa, and Flipkart with older listings, but no corresponding live page exists on foxtale.in itself (checked the full product sitemap directly — no matching URL). Treated as discontinued on the brand's primary channel and excluded, consistent with using foxtale.in as the source of truth rather than older marketplace listings. |
| Brightening Body Wash with Glycolic Acid & Niacinamide (Hula Hoop) | /products/brightening-body-wash-with-glycolic-acid-niacinamide-hula-hoop | Body wash, not a facial cleanser — different product category. |
| 8% De-Tan Body Wash | /products/8-de-tan-body-wash | Body wash, not a facial cleanser. |
| Foaming De-Tan Body Scrub | /products/foaming-de-tan-body-scrub | Body scrub, not a facial cleanser. |
| Cherry Collagen Clay Mask | /products/cherry-collagen-clay-mask | Face mask, not a cleanser. |
| Exfoliating Facial Toner | /products/exfoliating-facial-toner | Toner, not a cleanser. |

---

## Publication decision

All 3 confirmed live, standalone Foxtale facial cleansers will each receive one dedicated article, plus one hub/pillar page comparing all three. This is a smaller cluster than Foxtale's sunscreen range, which reflects the brand's actual current cleanser catalogue — padding the cluster with the bundle, the discontinued cleanser-mask, or marketplace-only listings would violate the brief's instruction not to publish thin or outdated content.

---

## Sources used

- https://foxtale.in/collections/cleansers (collection listing)
- https://foxtale.in/collections/oil-control, https://foxtale.in/collections/face-wash-for-dry-skin (skin-type collection pages, cross-check)
- https://foxtale.in/sitemap.xml, https://foxtale.in/sitemap_products.xml (full product URL enumeration, fetched directly via curl and grepped locally)
- Individual product pages (linked in table above) — primary source for ingredients, price, size, directions, claims, and on-site review counts
