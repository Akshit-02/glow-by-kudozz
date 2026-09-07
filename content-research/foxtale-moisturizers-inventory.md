# Foxtale Moisturizers — Research Inventory

**Research date:** 2026-09-07
**Primary source:** Official Foxtale website (foxtale.in), enumerated via the live product sitemap (`sitemap_products.xml`, 81 total product URLs, fetched and grepped locally) and cross-checked against the official `/collections/moisturizers` collection page.
**Method:** Grepped the full product sitemap for moisturizer/cream/gel/lotion/hydration-related paths, then fetched each candidate product page directly. Where two URLs pointed to what looked like the same product, compared the actual on-page product name/tagline (not just the meta `<title>`) and cross-checked against the official collection listing to determine the canonical URL.

---

## Products confirmed live and in scope (5)

All five appear as individual product cards on `https://foxtale.in/collections/moisturizers` as of the research date, confirming they are the brand's current, canonical facial moisturizer lineup.

| Product | Product Type | Skin Type | Key Ingredients | Texture | Finish | Official URL | Blog Status |
|---|---|---|---|---|---|---|---|
| Bright As Day — Brightening Moisturizer | Gel-cream moisturizer | Normal, combination, dry | Vitamin C (3-O-ethyl ascorbic acid), Vitamin E, Niacinamide, Peptide (Oligopeptide-68), Papain, 5-ceramide complex | Gel-cream | Dewy, radiant glow | https://foxtale.in/products/brightening-moisturizer | Published: /blog/foxtale-brightening-moisturizer-review |
| Pearlfection — Oil Balancing Moisturizer | Gel moisturizer | Oily, acne-prone, combination | Niacinamide, Ectoin, Azelaic acid (encapsulated pearls), Centella asiatica (Cica) | Feather-light gel, oil-free | Pearl-like glow, non-greasy | https://foxtale.in/products/oil-balancing-moisturizer | Published: /blog/foxtale-oil-balancing-moisturizer-review |
| In The Limelight — Super Glow Illuminating Moisturizer | 3-in-1 moisturizer/primer/highlighter | All skin types | Encapsulated Vitamin C, Niacinamide, Oligopeptide-68, Mica (light-reflecting) | Lightweight cream with light-reflecting particles | Satin-skin, luminous/highlighter-like glow | https://foxtale.in/products/super-glow-moisturizer | Published: /blog/foxtale-super-glow-illuminating-moisturizer-review |
| Pure Bliss — Nourishing Ceramide Moisturizer | Cream moisturizer | All skin types, especially sensitive | 5-ceramide complex, Niacinamide, Hyaluronic acid, Kokum (Garcinia indica) butter | Ultra-light, feather-light, 10-second absorption | Non-greasy, breathable | https://foxtale.in/products/nourishing-moisturizer-with-ceramides | Published: /blog/foxtale-nourishing-ceramide-moisturizer-review |
| Ceramide Supercream — Hydrating Moisturizer with Ceramide | Cream moisturizer | All skin types | Ceramides 1, 2, 3, 6-II, Sodium Hyaluronate Crosspolymer | Lightweight, fast-absorbing | Dewy, hydrating | https://foxtale.in/products/ceramide-supercream | Published: /blog/foxtale-ceramide-supercream-moisturizer-review |

**Hub page:** Published: /blog/foxtale-moisturizers-guide — links to all 5 product articles above.

Note: Foxtale sells two distinct ceramide-based moisturizers — Pure Bliss (Nourishing Ceramide Moisturizer, ₹275, a 5-ceramide-blend + kokum butter formula) and Ceramide Supercream (₹495, using named ceramide fractions 1/2/3/6-II + sodium hyaluronate crosspolymer). These are genuinely different formulations at different price points, not duplicate listings — confirmed by comparing their distinct INCI lists, and by an official Foxtale blog post ("Foxtale's Best-Selling Moisturizers: Which One Should You Choose?") that treats them as separate products.

---

## Items found but excluded, with reasons

| Item | URL | Reason for exclusion |
|---|---|---|
| Intense Moisture Lock | /products/intense-moisture-lock-for-dry-dehydrated-skin | Combo set (hydrating serum + the Ceramide Supercream moisturizer), not a standalone product. The moisturizer inside it is already covered as Ceramide Supercream. |
| Happy Hydration Duo | /products/happy-hydration-duo | Bundle of two body-care products (body wash + body lotion) — not a facial moisturizer at all. |
| Brightening Moisturizer (100ml variant URL) | /products/brightening-moisturizer-100-ml | Duplicate URL for the same product as /products/brightening-moisturizer (identical name/formula); the canonical URL is the one linked from the official collections page. |
| Hydrating Moisturizer with Ceramide ("copy-1") | /products/hydrating-moisturizer-with-ceramide-copy-1 | Same product name and tagline as Ceramide Supercream, but at a different (likely stale) price, and not linked from the official collection page. The "-copy-1" slug is a typical Shopify duplicate-listing artifact. Treated as a legacy duplicate of /products/ceramide-supercream, which is the canonical, currently-promoted URL. |
| Brightening Lip Balm with SPF 30 / Lip Balm Kit of 4 | /products/brightening-lip-balm-with-spf-30, /products/brightening-lip-balm-kit-of-4 | Lip care products, not facial moisturizers. |

---

## Publication decision

All 5 confirmed live, standalone Foxtale facial moisturizers will each receive one dedicated article, plus one hub/pillar page comparing all five. This matches the brand's actual current moisturizer collection exactly (5 product cards on the official collections page), avoiding both under- and over-counting from duplicate/legacy URLs.

---

## Sources used

- https://foxtale.in/collections/moisturizers (collection listing — used to confirm the canonical 5-product lineup)
- https://foxtale.in/sitemap.xml, https://foxtale.in/sitemap_products.xml (full product URL enumeration, fetched via curl and grepped locally)
- Individual product pages (linked in table above) — primary source for ingredients, price, size, directions, claims, and on-site review counts
- Foxtale blog: "Foxtale's Best-Selling Moisturizers: Which One Should You Choose?" — used only to confirm Pure Bliss and Ceramide Supercream are treated as distinct products by the brand itself, not as a content source
