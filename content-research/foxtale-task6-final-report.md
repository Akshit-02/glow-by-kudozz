# Foxtale Master Catalogue Audit — Final Report

**Date completed:** 2026-09-07

---

## 1. Total Products Discovered

- **93 total Foxtale product URLs** discovered across sitemap crawls, category collection pages (`/collections/bodycare`, `/collections/skincare`, etc.), and on-site navigation.
- **42 eligible, standalone, individually-reviewable products** after excluding combos/bundles/kits/gift-sets/duplicates/discontinued or redirected SKUs.
- **51 excluded** (see Section 3).
- Full machine-readable listing: `content-research/foxtale-master-product-inventory.json`. Full narrative listing: `content-research/foxtale-master-product-inventory.md`.

## 2. Complete Eligible Product List (42) — by Category

| Category | Count | Coverage |
|---|---|---|
| Sunscreen | 6 | 100% covered |
| Cleanser | 3 | 100% covered |
| Moisturizer | 5 | 100% covered |
| Face Mask | 4 | 100% covered |
| Serum | 9 | 100% covered |
| Toner | 2 | 100% covered |
| Lip Care | 2 | 100% covered |
| Body Care | 10 | 100% covered (newly published this task) |
| Fragrance | 1 | 100% covered (newly published this task) |
| **Total** | **42** | **100%** |

Full per-product detail (name, URL, price, key ingredients): `content-research/foxtale-eligible-individual-products.md`.

## 3. Excluded Products (51) — Reasons

Verified via direct product-page fetch, not keyword heuristics alone. Categories of exclusion:
- **Combo/bundle/kit/gift-set packs** (e.g., "HydraGlow Trio," "Tan Reset Kit," "Morning Skincare Kit," various "Combo" and "+ " duo listings) — repackage products already covered individually.
- **Discontinued or redirected SKUs** (e.g., `aha-bha-serum-with-salicylic-and-glycolic-acid` now redirects to a collection page, no longer a standalone product page).
- **Reformulated/relabeled duplicates** under a new URL (e.g., an old SPF 70 sunscreen URL now redirects to the current SPF 50 product already covered).
- **Non-product utility pages** picked up by sitemap noise (subscription/gift-card style entries).

Full list with reasons per excluded URL: `content-research/foxtale-master-product-inventory.md` (Excluded section) and `.json` (machine-readable, `eligible: false` with `reason` field).

## 4. Existing Content (Before This Task)

31 of 42 eligible products already had dedicated Glow by Kudozz articles from Tasks 1–4 (sunscreens, cleansers, moisturizers, masks, serums, toners, lip care — 100% of those seven categories). Body Care and Fragrance had never been audited as categories before this task. Full before/after table: `content-research/foxtale-content-audit.md`.

## 5. Missing Products Identified & Now Published (11)

All 11 gaps were in the two previously-unaudited categories:
1. 8% De-Tan Body Wash → `/blog/foxtale-de-tan-body-wash-review`
2. Exfoliating Body Acne Wash → `/blog/foxtale-exfoliating-body-acne-wash-review`
3. Brightening Body Wash → `/blog/foxtale-brightening-body-wash-review`
4. HydraLock Body Wash → `/blog/foxtale-hydralock-body-wash-review`
5. Keep It Bright Underarm Roll-On → `/blog/foxtale-keep-it-bright-roll-on-review`
6. Keep It Chill Men's Roll-On → `/blog/foxtale-keep-it-chill-roll-on-review`
7. Brightening Body Lotion SPF 30 → `/blog/foxtale-brightening-body-lotion-review`
8. Ultra Nourishing Body Lotion → `/blog/foxtale-ultra-nourishing-body-lotion-review`
9. Foaming De-Tan Body Scrub → `/blog/foxtale-foaming-de-tan-body-scrub-review`
10. Foaming Exfoliating Body Polish → `/blog/foxtale-foaming-exfoliating-body-polish-review`
11. Valley of Flowers Eau de Parfum → `/blog/foxtale-valley-of-flowers-perfume-review`

Prioritization rationale: `content-research/foxtale-missing-products.md`.

## 6. Articles Created This Task

- **11 individual product articles** (listed above).
- **1 category hub:** Foxtale Body Care Guide (`/blog/foxtale-bodycare-guide`), linking all 10 body-care articles.
- **1 pillar page:** Foxtale Master Guide (`/blog/foxtale-master-guide`) — "Foxtale Products: The Complete Guide to the Brand's Skincare & Beauty Range" — links to all 9 category hubs/guides (sunscreens, cleansers, moisturizers, masks, serums, toners, lip care, body care, fragrance).
- **Total new posts:** 13. Site total is now 146 blog posts; 51 are Foxtale-tagged.

## 7. Keyword Map (New Articles)

| Article | Primary Keyword |
|---|---|
| De-Tan Body Wash | foxtale de-tan body wash |
| Exfoliating Body Acne Wash | foxtale body acne wash |
| Brightening Body Wash | foxtale brightening body wash |
| HydraLock Body Wash | foxtale hydralock body wash |
| Keep It Bright Roll-On | foxtale underarm roll-on |
| Keep It Chill Roll-On | foxtale men's deodorant roll-on |
| Brightening Body Lotion | foxtale brightening body lotion |
| Ultra Nourishing Body Lotion | foxtale ultra nourishing body lotion |
| Foaming De-Tan Body Scrub | foxtale de-tan body scrub |
| Foaming Exfoliating Body Polish | foxtale exfoliating body polish |
| Valley of Flowers Perfume | foxtale valley of flowers perfume |
| Body Care Hub | foxtale body care |
| Master Guide | foxtale products guide |

No overlap with any of the 31 pre-existing Foxtale keywords or with general site keywords — verified against the full `tag-foxtale` set before publication.

## 8. Internal Linking Map

- Each of the 10 body-care product articles links to the Body Care hub and to 2–3 sibling body-care products via `postGrid`/`relatedProductSlugs` (e.g., the two roll-ons cross-link, the two body scrubs cross-link, the two lotions cross-link).
- The Body Care hub links out to all 10 individual body-care articles.
- The Valley of Flowers article links to the Master Guide and to two body-lotion articles (fragrance-layering context).
- The **Master Guide** links to all 9 category hubs/guides, making it the single top-level entry point for the entire Foxtale catalogue on the site.
- No existing article required relinking; the new cluster was additive only.

## 9. Image Report

- 11 new product images downloaded directly from Foxtale's official Shopify CDN (`public/products/`), one per new product, all visually verified via direct file inspection before use — no AI-generated or stock imagery.
- Total real, locally-hosted Foxtale product images on site: 42 (100% of eligible products have genuine photography).

## 10. Affiliate Link Conversion (Follow-up to Task 5)

Per the established Task 5 precedent (converting all Foxtale product links to Amazon affiliate links), the 11 new Task 6 products were researched against live Amazon.in listings and 10 of 11 were converted:

| Product | Amazon ASIN | Confidence |
|---|---|---|
| De-Tan Body Wash | B0GK6RLLC9 | High — exact ingredient/name match |
| Exfoliating Body Acne Wash | B0DQDLP75K | High |
| Brightening Body Wash | B0DC6T3FL4 | High |
| HydraLock Body Wash | B0DC6SS2N7 | High |
| Keep It Bright Roll-On | B0H23WZBJQ | Medium — Amazon lists it as "Brightening Underarm Roll-On" rather than "Keep It Bright," but size (40ml) and actives (5% AHA + vitamin C derivative) match |
| Keep It Chill Roll-On | B0GY4CNW7G | High — exact name match |
| Brightening Body Lotion SPF 30 | B0DC6T7HTL | High |
| Ultra Nourishing Body Lotion | B0DC6ZDRBH | High |
| Foaming De-Tan Body Scrub | B0GNMZKHQD | High |
| Valley of Flowers Perfume | B0DSLMH6DD | High — exact name and note match |
| **Foaming Exfoliating Body Polish** | *(not converted)* | **Left on direct foxtale.in link** — the closest Amazon candidate (dead sea salt + 2% lactic acid, matching two of three known ingredients) markets itself with a "fades tan" claim that doesn't match this product's texture-smoothing positioning, and doesn't reference the "Moroccan Silk" sub-line or "foaming/polish" naming. Not confident enough to assert as the same SKU — disclosing rather than guessing. |

Direct Amazon page verification (fetching the live listing) was blocked by Amazon's bot protection on WebFetch; matches above were made by cross-referencing multiple independent search-result snippets against the ingredient/size/price specifics already documented in our own researched product data.

## Final Validation Checklist

- [x] All 42 eligible Foxtale products have a dedicated Glow by Kudozz article
- [x] No combo/bundle/kit was published as if it were a standalone product
- [x] No fabricated ratings, reviews, or product claims — all sourced from official Foxtale product pages
- [x] All new product images are genuine, downloaded, locally-hosted Foxtale photography
- [x] `tsc --noEmit` clean
- [x] `npm run build` succeeds — 178 pages generated, no errors
- [x] `tag-foxtale` article count updated (51) to reflect actual count
- [x] No keyword cannibalization between new and existing Foxtale articles
- [x] Master Foxtale Hub created, linking all 9 category hubs
- [x] 10 of 11 new products converted to Amazon affiliate links; 1 left on direct link with disclosed reasoning
