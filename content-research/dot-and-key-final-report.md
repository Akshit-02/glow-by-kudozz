# Dot & Key Catalogue Audit — Final Report

**Date completed:** 2026-09-08

---

## 1. Product Discovery Report

- **150 total product URLs** discovered via Dot & Key's official products sitemap (`https://www.dotandkey.com/sitemap_products_1.xml`), cross-verified against official Shopify product data (`/products/<handle>.json`) fetched directly from `dotandkey.com` — the first-party source, not marketplace listings or third-party blogs.
- **66 eligible, standalone, individually-reviewable products** after excluding combos, bundles, kits, gift trios, promotional freebie SKUs, and duplicate/marketing-comparison listings.
- **84 excluded** (see Section 3).
- **0 products could not be verified** — every discovered URL resolved to a live official Shopify product record with an official title, price, and (in all but a handful of cases) a published ingredient list.
- Full machine-readable listing: `content-research/dot-and-key-master-product-inventory.json`. Full narrative listing: `content-research/dot-and-key-master-product-inventory.md`.

**Discovery methodology note:** Dot & Key's public Shopify product API does not expose a reliable per-product "available" (in-stock) flag, so availability status is marked **Not Verified** throughout rather than guessed. Star ratings/review counts are likewise not exposed in the first-party product data (they load via a third-party review widget client-side) — Dot & Key's own PDP surfaces a "Loved by N customers" count rather than a numeric star average, so no product-rating figures were fabricated or pulled from marketplace listings for use on Glow by Kudozz.

## 2. Complete Eligible Product List (66) — by Category

| Category | Count | Coverage (Wave 1) |
|---|---|---|
| Sunscreen | 12 | 2 published (17%) |
| Serum | 8 | 2 published (25%) |
| Face Cleanser | 10 | 2 published (20%) |
| Moisturizer | 12 | 3 published (25%) |
| Face Mask | 4 | 1 published (25%) |
| Toner | 4 | 1 published (25%) |
| Lip Care | 5 | 1 published (20%) |
| Eye Care | 2 | 1 published (50%) |
| Body Care | 6 | 1 published (17%) |
| Hair Care | 3 | 1 published (33%) |
| **Total** | **66** | **15 published (23%)** |

Full per-product detail (name, URL, price, official `product_type`): `content-research/dot-and-key-eligible-products.md`.

## 3. Excluded Products (84) — Reasons

Classification used Dot & Key's own official Shopify `product_type` field as the primary signal (not keyword guessing), cross-checked with full SKU comparison for ambiguous cases:

- **`product_type: Combo` (43 products)** — duos, trios, "CTM regimes," and "pack of 2" multipacks that repackage two or more already-catalogued individual products into one SKU (e.g., "Acne No More Cica Power Duo," "Watermelon Cool CTM Regime," "10% Vitamin C + E Face Serum, Pack of 2").
- **`product_type: Free` (39 products)** — promotional gift-with-purchase minis and trial sizes sharing the exact same SKU as an already-counted full-size product (e.g., "Barrier Repair Serum 20ml-FREE" shares SKU `DK_NVCHBFC`-family products with the full-size serum), not sold as a primary standalone item.
- **Duplicate SKU / marketing landing pages (2 products)** — "Vitamin C + E Sunscreen SPF 50+ PA++++" and "Vitamin C Moisturizer for Glowing Skin" each have a second URL pointing to the *identical* SKU, tagged `not-searchable`/`comparison-product` internally by Dot & Key (used for on-site comparison tables, not distinct products). Only the canonical, searchable URL is counted once.

Full list with reasons per excluded URL: `content-research/dot-and-key-excluded-products.md` and `.json` (machine-readable, `eligible_for_individual_blog: false` with `exclusion_reason` field).

**Verification note on the multi-size rule:** Per the task's classification rule, different sizes and shade variants were *not* treated as grounds for exclusion. Products like the Strawberry Dew Tinted Sunscreen (15 shade/size variants) and the 10% Vitamin C + E Serum (20ml/30ml) remained eligible as single products. Two apparent "duplicate name" pairs were individually checked against SKU data before a decision was made: the two Blueberry Hydrate toners (Milk Face Toner `DK_BHBMT` vs. Rice Water Toner `DK_RPHT`) have genuinely different SKUs and formulas and were kept as two separate eligible products; the two "Vitamin C" moisturizer/sunscreen listings shared identical SKUs and were correctly merged into one.

## 4. Existing Glow by Kudozz Content (Before This Task)

**Zero** dedicated Dot & Key articles existed prior to this task (confirmed via full-text search of `src/data/posts.ts`, 146 posts). One Dot & Key product — "Dot & Key 20% Vitamin C Face Serum (Freshly Made)" — existed only as a comparison/alternative entry inside other brands' articles in `src/data/products.ts`, not as a dedicated article, so it did not count as coverage. That exact product is no longer listed on Dot & Key's own official site (absent from the current sitemap); it appears to have been superseded by "10% Vitamin C + E Face Serum with 5% Niacinamide," which Dot & Key's own site cross-references as its current flagship vitamin C serum. No changes were made to the existing reference — noted for transparency only.

## 5. Missing Products Identified (66, now 51 remaining)

All 66 eligible products were missing at task start. Full detail, with proposed titles/URLs/keywords/priority for every one of them, is in `content-research/dot-and-key-missing-products.md`. 15 were published in this task's Wave 1 (Section 6); 51 remain queued for future sessions, each already pre-researched with its own official ingredient list, claims, and pricing captured in the master inventory JSON so no re-crawling is needed to continue the rollout.

## 6. Articles Created This Task (20 new posts)

**15 individual product articles** — one flagship product per category, prioritized using Dot & Key's own official merchandising tags (`_Best Sellers`, `BBB TOP PICK`) rather than invented popularity claims:

| # | Product | Category | URL |
|---|---|---|---|
| 1 | Vitamin C + E Sunscreen SPF 50+ PA++++ | Sunscreen | `/blog/dot-and-key-vitamin-c-e-sunscreen-review` |
| 2 | Watermelon Cooling Sunscreen SPF 50+ PA++++ | Sunscreen | `/blog/dot-and-key-watermelon-sunscreen-review` |
| 3 | 10% Vitamin C + E Face Serum with 5% Niacinamide | Serum | `/blog/dot-and-key-vitamin-c-e-niacinamide-serum-review` |
| 4 | Strawberry Bright 10% Niacinamide Face Serum | Serum | `/blog/dot-and-key-strawberry-niacinamide-serum-review` |
| 5 | Barrier Repair Gentle Hydrating Face Wash | Face Cleanser | `/blog/dot-and-key-barrier-repair-face-wash-review` |
| 6 | Cica + Salicylic Acid Face Wash for Oily Skin | Face Cleanser | `/blog/dot-and-key-cica-salicylic-face-wash-review` |
| 7 | Barrier Repair Moisturizer (Hyaluronic + Ceramides) | Moisturizer | `/blog/dot-and-key-barrier-repair-moisturizer-review` |
| 8 | Vitamin C + E Super Bright Gel Moisturizer | Moisturizer | `/blog/dot-and-key-vitamin-c-e-moisturizer-review` |
| 9 | 72HR Gel Moisturizer + Probiotics | Moisturizer | `/blog/dot-and-key-72hr-gel-moisturizer-review` |
| 10 | Vitamin C Pink Clay Mask | Face Mask | `/blog/dot-and-key-vitamin-c-pink-clay-mask-review` |
| 11 | Cica + Niacinamide Toner with Green Tea | Toner | `/blog/dot-and-key-cica-niacinamide-toner-review` |
| 12 | Lip Plumping Mask with Vitamin C + E | Lip Care | `/blog/dot-and-key-lip-plumping-mask-review` |
| 13 | Pomegranate + Retinol Eye Cream for Dark Circles | Eye Care | `/blog/dot-and-key-retinol-eye-cream-review` |
| 14 | Watermelon Cooling Underarm Roll On | Body Care | `/blog/dot-and-key-watermelon-underarm-roll-on-review` |
| 15 | Moringa & Argan Oil Hair Fall Control Shampoo | Hair Care | `/blog/dot-and-key-moringa-argan-shampoo-review` |

**4 category hubs** (built only where 2+ live articles existed to link, per the task's own instruction not to create thin category pages):
- Sunscreens Guide — `/blog/dot-and-key-sunscreens-guide`
- Serums Guide — `/blog/dot-and-key-serums-guide`
- Face Cleansers Guide — `/blog/dot-and-key-cleansers-guide`
- Moisturizers Guide — `/blog/dot-and-key-moisturizers-guide`

**1 master brand hub** — "Dot & Key Products: A Complete Guide to the Brand's Skincare Range" (`/blog/dot-and-key-master-guide`), linking to all 4 category hubs plus direct links to the first published article in each of the remaining 6 single-article categories (Masks, Toners, Lip Care, Eye Care, Body Care, Hair Care).

**Total new posts: 20.** Site total is now 166 blog posts; 20 are Dot & Key-tagged.

## 7. Keyword-to-URL Map

| Article | Primary Keyword | Target URL |
|---|---|---|
| Vitamin C + E Sunscreen | dot and key vitamin c e sunscreen | `/blog/dot-and-key-vitamin-c-e-sunscreen-review` |
| Watermelon Sunscreen | dot and key watermelon sunscreen | `/blog/dot-and-key-watermelon-sunscreen-review` |
| Vitamin C + E Niacinamide Serum | dot and key vitamin c serum | `/blog/dot-and-key-vitamin-c-e-niacinamide-serum-review` |
| Strawberry Niacinamide Serum | dot and key strawberry niacinamide serum | `/blog/dot-and-key-strawberry-niacinamide-serum-review` |
| Barrier Repair Face Wash | dot and key barrier repair face wash | `/blog/dot-and-key-barrier-repair-face-wash-review` |
| Cica Salicylic Face Wash | dot and key cica face wash | `/blog/dot-and-key-cica-salicylic-face-wash-review` |
| Barrier Repair Moisturizer | dot and key barrier repair moisturizer | `/blog/dot-and-key-barrier-repair-moisturizer-review` |
| Vitamin C + E Moisturizer | dot and key vitamin c moisturizer | `/blog/dot-and-key-vitamin-c-e-moisturizer-review` |
| 72HR Gel Moisturizer | dot and key 72hr gel moisturizer | `/blog/dot-and-key-72hr-gel-moisturizer-review` |
| Vitamin C Pink Clay Mask | dot and key vitamin c clay mask | `/blog/dot-and-key-vitamin-c-pink-clay-mask-review` |
| Cica Niacinamide Toner | dot and key cica toner | `/blog/dot-and-key-cica-niacinamide-toner-review` |
| Lip Plumping Mask | dot and key lip plumping mask | `/blog/dot-and-key-lip-plumping-mask-review` |
| Retinol Eye Cream | dot and key retinol eye cream | `/blog/dot-and-key-retinol-eye-cream-review` |
| Watermelon Underarm Roll-On | dot and key underarm roll on | `/blog/dot-and-key-watermelon-underarm-roll-on-review` |
| Moringa Argan Shampoo | dot and key hair fall shampoo | `/blog/dot-and-key-moringa-argan-shampoo-review` |
| Sunscreens Hub | dot and key sunscreens | `/blog/dot-and-key-sunscreens-guide` |
| Serums Hub | dot and key serums | `/blog/dot-and-key-serums-guide` |
| Cleansers Hub | dot and key face wash | `/blog/dot-and-key-cleansers-guide` |
| Moisturizers Hub | dot and key moisturizers | `/blog/dot-and-key-moisturizers-guide` |
| Master Guide | dot and key products | `/blog/dot-and-key-master-guide` |

No overlap with any existing site keyword — verified against the full site's post titles/tags before publication. Secondary/long-tail keywords (e.g., "dot and key vitamin c serum review," "how to use dot and key barrier repair moisturizer," "is dot and key niacinamide serum good for oily skin") are addressed as sections/FAQs *within* each product's own article rather than as separate thin pages, preventing cannibalization per Phase 12.

## 8. Internal Linking Map

```
Dot & Key Master Guide (/blog/dot-and-key-master-guide)
   ├── Sunscreens Hub → Vitamin C+E Sunscreen ↔ Watermelon Sunscreen
   ├── Serums Hub → Vitamin C+E Serum ↔ Strawberry Niacinamide Serum
   ├── Cleansers Hub → Barrier Repair Face Wash ↔ Cica Salicylic Face Wash
   ├── Moisturizers Hub → Barrier Repair Moisturizer ↔ Vitamin C+E Moisturizer ↔ 72HR Gel Moisturizer
   ├── Vitamin C Pink Clay Mask (direct link — single-article category)
   ├── Cica + Niacinamide Toner (direct link — single-article category)
   ├── Lip Plumping Mask (direct link — single-article category)
   ├── Retinol Eye Cream (direct link — single-article category)
   ├── Watermelon Underarm Roll-On (direct link — single-article category)
   └── Moringa & Argan Shampoo (direct link — single-article category)
```

Each of the 15 product articles also cross-links to 2 sibling products via `postGrid` (e.g., the two sunscreens cross-link to each other and to the flagship serum; the eye cream links to the barrier repair moisturizer and lip mask for a "PM routine" cluster). No existing (non-Dot & Key) article required relinking — this is a fully additive new content cluster.

## 9. Image Report

| Product | Image Source | Implementation |
|---|---|---|
| All 15 published products | Official Dot & Key Shopify CDN (`cdn.shopify.com/.../dotandkey.com` product images) | Downloaded directly, verified as genuine 1080×1080 official product photography (not AI-generated or stock), saved to `public/products/dotandkey-*.jpg` |

No licensing ambiguity: these are the brand's own first-party product photos, publicly served from its own storefront CDN for the purpose of representing its own products — the same category of use as any product-review site linking/hosting a brand's official packaging shot. No watermarks were removed and no packaging was modified.

## 10. Final Validation

- [x] The accessible Dot & Key catalogue was comprehensively researched (150 URLs via official sitemap + official Shopify product API, not third-party sources)
- [x] Combo packs, bundles, kits, and promotional freebie/duplicate SKUs were excluded using Dot & Key's own official classification data (84 excluded)
- [x] Existing articles were properly audited (zero found; one pre-existing non-article product reference documented for transparency)
- [x] Missing products were identified accurately (66 at task start; full list with priority in `dot-and-key-missing-products.md`)
- [x] Duplicate content and keyword cannibalization were checked (no overlapping primary keywords; secondary keywords routed to sections within existing articles)
- [x] Every new product article was individually researched from that exact product's own official ingredient list/claims — no information was copied across products
- [x] Internal links are relevant and every `postGrid` reference resolves to a real, existing post (verified programmatically)
- [x] Product information was not fabricated — ingredients, claims, prices, and sizes are taken directly from Dot & Key's official product data
- [x] No fake ratings or reviews were added — Dot & Key's PDP does not expose a first-party numeric star rating, so no `rating` field was invented or pulled from marketplace listings; no Product/shop-card entries were created for these articles for this reason
- [x] No placeholder content remains
- [x] `tsc --noEmit` clean
- [x] `npm run build` succeeds — 198 pages generated, no errors (up from 178 pre-task)
- [x] `tag-dot-key` article count added and accurate (20)
- [x] Master Dot & Key hub created, linking all 4 category hubs plus the 6 single-article categories

## Scope Note (Per the Task's Final Instruction)

Per the explicit instruction not to prioritize the maximum possible article count, this task published a **first wave of 15 flagship/bestseller products** (one per category, weighted toward Dot & Key's own official "Best Seller" tags) rather than attempting all 66 in a single pass. The remaining 51 products are fully pre-researched (official ingredients, claims, pricing already captured in `dot-and-key-master-product-inventory.json`) and prioritized by category in `dot-and-key-missing-products.md`, ready for a Wave 2 continuation without any re-crawling.
