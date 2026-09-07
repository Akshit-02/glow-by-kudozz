# Foxtale Master Product Inventory

**Research date:** 2026-09-07
**Discovery sources used:**
1. `https://foxtale.in/sitemap_products.xml` (fetched fresh via curl, multiple times across research sessions — the sitemap's exact contents vary slightly between fetches, which appears to reflect Foxtale's live/rotating catalogue rather than a crawl error; both snapshots were unioned for completeness)
2. Official category/collection pages: `/collections/sunscreens`, `/collections/cleansers`, `/collections/moisturizers`, `/collections/sp-masks`, `/collections/serums`, `/collections/toners`, `/collections/lip-balms`, `/collections/bodycare`
3. Individual product page verification for every candidate URL (to confirm live status, exact name, and whether standalone vs. combo)
4. `robots.txt` and `sitemap.xml` index — confirmed AI/research crawlers are explicitly allowed (`Allow: /` for Claude, ClaudeBot, anthropic-ai, GPTBot, PerplexityBot, etc.), and crawling was limited to publicly accessible pages only, no authentication or technical restrictions bypassed.

This document covers the full audit across all research sessions to date. For the complete field-level raw data (including `null`/`unknown` fields), see the companion file `foxtale-master-product-inventory.json`.

---

## Category Summary

| Category | Eligible Individual Products | Status |
|---|---|---|
| Sunscreens | 6 | All previously published |
| Cleansers | 3 | All previously published |
| Moisturizers | 5 | All previously published |
| Face Masks | 4 | All previously published |
| Face Serums | 9 | All previously published |
| Toners | 2 | All previously published |
| Lip Care | 2 | All previously published |
| Body Care | 10 | **Newly discovered — missing until this audit** |
| Fragrance | 1 | **Newly discovered — missing until this audit** |
| **Total eligible individual products** | **42** | 31 previously published, 11 newly identified and published in this audit |

See `foxtale-eligible-individual-products.md` for the full per-product table and `foxtale-content-audit.md` for the existing-vs-missing comparison.

---

## Excluded Products (Combos, Bundles, Kits, Duplicates, Discontinued)

The following were identified during discovery and excluded from individual article creation, with reasons:

### Bundles / Combos / Kits / Gift Sets (confirmed via direct page verification, not keyword alone)
- `cleanser-retinol-enlarged-pores-pore-tightening` — combo (face wash + retinol serum)
- `morning-glory-with-coverup-matte-sunscreen` — combo
- `morning-glory-full-morning-routine-range` — combo (multi-product routine)
- `niacinamide-serum-mattifying-sunscreen` — combo
- `intense-moisture-lock-for-dry-dehydrated-skin` — combo (serum + moisturizer)
- `happy-hydration-duo` — combo (body wash + body lotion)
- `glow-reset-combo` — combo (toner-related)
- `brightening-lip-balm-kit-of-4` — same formula as the Kit of 2, larger pack size, not a distinct product
- `de-pigmentation-booster` — combo (Rapid Spot Reduction Drops + Vitamin C Serum)
- `rapid-wrinkle-reduction` — combo ("Matte Sunscreen & Retinol Night Serum Combo")
- `the-ultimate-acne-treatment` — combo (AHA-BHA Serum + Acne Spot Corrector Gel)
- `sensitive-skin-squad` — combo (Retinol Night Serum + Ceramide Moisturizer)
- `abc-of-acne-control` — combo (3-product routine trio)
- `360-age-protection-comb` — combo (Retinol Serum + Vitamin C Serum)
- `am-pm-spot-reduction` — combo (Retinol Night Serum + Rapid Spot Reduction Drops)
- `anti-ageing-duo`, `blackhead-reduction-duo`, `firmer-skin-duo`, `foxtale-date-night-glow-duo`, `getting-even-combo`, `glow-at-first-sight-gift-set`, `glow-polish-duo`, `glow-protect-duo`, `golden-glow-duo`, `goodbye-tan-kit`, `heart-shaped-pouch-gift-kit`, `holi-kit`, `hydraglow` (= "HydraGlow Trio", a 3-product bundle despite the non-"duo/kit" name — verified by page content, not keyword), `hydraglow-duo`, `oil-free-brightening-duo`, `on-the-glow-travel-kit`, `radiance-ritual-duo`, `silk-skin-kit`, `smooth-radiance-kit`, `smoothn-glow-kit-by-hula-hoop`, `super-glow-up-duo`, `ultra-glow-duo`, `unstoppable-glow-combo`, `bodycare-kit`, `detan-essential-kit`, `exfoliating-duo`, `break-free-from-breakouts-kit` — all confirmed multi-product bundles via naming and/or direct page check.

### Duplicate / Legacy Listings (same product, different or stale URL)
- `brightening-moisturizer-100-ml` — duplicate of `brightening-moisturizer`
- `hydrating-moisturizer-with-ceramide-copy-1` — duplicate/stale-priced clone of `ceramide-supercream` ("-copy-1" is a Shopify duplicate-listing artifact)
- `12-niacinamide-clarifying-serum-copy` — duplicate of `niacinamide-clarifying-serum`
- `10-gluta-vit-c-advanced-brightening-serum-pf` — duplicate/fragrance-free variant of `vit-c-gluta-advanced-brightening-serum`
- `50-glow-sunscreen` — duplicate of `glow-sunscreen`
- `50-oil-control-water-gel-sunscreen` — duplicate of `foxtale-cool-shade-oil-control-water-gel-sunscreen`

### Discontinued / No Longer Live (verified via direct fetch)
- `purify-glow-cleanser-mask` — 404 on foxtale.in
- `acne-clarifying` — 404 on foxtale.in
- `aha-bha-serum-with-salicylic-and-glycolic-acid` — this URL now redirects to the general Face Serums collection page rather than showing its own product; treated as discontinued as a standalone SKU (it survives only as a named component inside combo products like "The Ultimate Acne Treatment")

### Different Category, Not "Skincare/Bodycare/Fragrance Product"
- `brightening-lip-balm-with-spf-30` and its ingredients are covered under Lip Care (already published) — listed here only to note it is not a body care or skincare item.

---

## Notes on Sitemap Reliability

Foxtale's `sitemap_products.xml` returned 81 URLs on each fetch, but the *specific* 81 URLs differed meaningfully between fetches taken weeks apart in this research process — several body-care and combo/seasonal-kit products appeared in one fetch and not the other. This is consistent with Shopify regenerating the sitemap in real time as products are published/unpublished (the sitemap index itself states "kept up to date in real time"), rather than a caching bug. Because of this, **category collection pages (`/collections/...`) were treated as the primary source of truth** for "what's currently live," with the sitemap used only as a supplementary discovery aid — this is why the Body Care line (10 products) and the Valley of Flowers Perfume were found only after directly checking `/collections/bodycare` rather than relying on the sitemap alone.
