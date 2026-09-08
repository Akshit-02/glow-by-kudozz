# Dot & Key — Content Audit of Glow by Kudozz

## Summary (Post-Task)

Before this task: **zero** dedicated Dot & Key articles existed on Glow by Kudozz (verified via full-text search of `src/data/posts.ts`, 146 posts). After this task: **15 of 66** eligible products have dedicated, ingredient-level articles; the remaining 51 are queued (see `dot-and-key-missing-products.md`).

One Dot & Key product — **"Dot & Key 20% Vitamin C Face Serum (Freshly Made)"** (`src/data/products.ts`, `prod-glow-drops-vitamin-c`) — exists in the product-recommendation dataset as a comparison/alternative product inside other brands' articles, not as its own article. Investigation note: this exact product is no longer listed on Dot & Key's own official site (absent from the current 150-URL product sitemap) though it remains sold on Amazon/Flipkart/other marketplaces — Dot & Key's own site now cross-references "10% Vitamin C + E Face Serum with 5% Niacinamide" as its flagship Vitamin C serum instead. No changes were made to this existing reference; noted here for transparency only.

| Dot & Key Product | Category | Official Product URL | Existing Article | Article URL | Status |
|---|---|---|---|---|---|
| 10% Vitamin C + E Face Serum with 5% Niacinamide | Serums | https://www.dotandkey.com/products/dot-key-10-vitamin-c-e-5-niacinamide-serum-for-glowing-skin-beginner-friendly | Yes | /blog/dot-and-key-vitamin-c-e-niacinamide-serum-review | ALREADY_COVERED |
| 12% Barrier Boost Serum (Hyaluronic + Ceramides) | Serums | https://www.dotandkey.com/products/barrier-repair-serum | None | — | MISSING |
| 72HR Gel Moisturizer + Probiotics for Face | Moisturizers | https://www.dotandkey.com/products/hydrating-gel-probiotics-72-hr | Yes | /blog/dot-and-key-72hr-gel-moisturizer-review | ALREADY_COVERED |
| Barrier Repair Gentle Hydrating Face Wash | Face Cleansers | https://www.dotandkey.com/products/dot-key-barrier-repair-gentle-hydrating-face-wash-with-5-essential-ceramides-hyaluronic-ph-5-5-fragrance-sulphate-free-for-sensitive-dry-skin | Yes | /blog/dot-and-key-barrier-repair-face-wash-review | ALREADY_COVERED |
| Barrier Repair Hyaluronic Acid Body Lotion | Body Care | https://www.dotandkey.com/products/barrier-repair-hydrating-body-lotion-1 | None | — | MISSING |
| Barrier Repair Hydrating Lip Balm In-Vivo Tested SPF 50+ PA+++ | Lip Care | https://www.dotandkey.com/products/hydrating-lip-balm | None | — | MISSING |
| Barrier Repair Hydrating Shower Gel for Dry Skin | Body Care | https://www.dotandkey.com/products/hydrating-shower-gel | None | — | MISSING |
| Barrier Repair Intense Moisturizer With Ceramides | Moisturizers | https://www.dotandkey.com/products/barrier-repair-intense-moisturizer | None | — | MISSING |
| Barrier Repair Moisturizer (Hyaluronic + Ceramides) | Moisturizers | https://www.dotandkey.com/products/dot-key-ceramides-hyaluronic-hydrating-face-cream-i-repairs-skin-barrier-intense-moisturization-sensitive-dry-skin-fragrance-free | Yes | /blog/dot-and-key-barrier-repair-moisturizer-review | ALREADY_COVERED |
| Barrier Repair Sunscreen, In-Vivo Tested SPF 50+ PA++++ | Sunscreens | https://www.dotandkey.com/products/barrier-repair-sunscreen | None | — | MISSING |
| Blueberry Hydrate Barrier Repair Milk Face Toner | Toners | https://www.dotandkey.com/products/blueberry-hydrate-barrier-repair-milky-toner-essence | None | — | MISSING |
| Blueberry Hydrate Barrier Repair Rice Water Toner | Toners | https://www.dotandkey.com/products/rice-water-probiotics-hydrating-toner-alcohol-free-new | None | — | MISSING |
| Ceramide + Peptide Lip Balm In-Vivo Tested SPF 50+ PA+++ | Lip Care | https://www.dotandkey.com/products/spf-50-barrier-repair-lip-balm | None | — | MISSING |
| Cica & Salicylic French Green Clay Face Mask | Face Masks | https://www.dotandkey.com/products/acne-green-clay-mask | None | — | MISSING |
| Cica + 1% Salicylic Acid Exfoliating Shower Gel | Body Care | https://www.dotandkey.com/products/salicylic-shower-gel | None | — | MISSING |
| Cica + 10% Niacinamide Face Serum for Oily Skin | Serums | https://www.dotandkey.com/products/dot-key-cica-10-niacinamide-serum-for-blemish-free-spotless-glowing-skin-3-tranexamic-reduces-acne-dark-spots-oily-acne-prone-sensitive-skin | None | — | MISSING |
| Cica + 2% Salicylic Acid Serum for Acne | Serums | https://www.dotandkey.com/products/dot-key-cica-2-salicylic-acne-control-serum-with-zinc-for-clear-skin-reduces-blackheads-whiteheads-oily-acne-prone-skin | None | — | MISSING |
| Cica + Niacinamide Oil-Free Gel Moisturizer For Face | Moisturizers | https://www.dotandkey.com/products/cica-5-niacinamide-oil-free-moisturizer-for-dark-spots-acne-fragrance-free-oily-sensitive-acne-prone-skin | None | — | MISSING |
| Cica + Niacinamide Sunscreen, In-Vivo Tested SPF 50+ PA++++ | Sunscreens | https://www.dotandkey.com/products/cica-calming-mattifying-sunscreen-spf-50-pa | None | — | MISSING |
| Cica + Niacinamide Toner with Green Tea | Toners | https://www.dotandkey.com/products/cica-calming-skin-clarifying-toner | Yes | /blog/dot-and-key-cica-niacinamide-toner-review | ALREADY_COVERED |
| Cica + Salicylic Acid Face Wash for Oily Skin | Face Cleansers | https://www.dotandkey.com/products/cica-calming-blemish-clearing-face-wash | Yes | /blog/dot-and-key-cica-salicylic-face-wash-review | ALREADY_COVERED |
| Cica Calming Night Gel (Niacinamide + Green Tea) | Moisturizers | https://www.dotandkey.com/products/cica-calming-skin-renewing-night-gel | None | — | MISSING |
| Deep Pore Clean Foaming Face Wash | Face Cleansers | https://www.dotandkey.com/products/deep-pore-clean-milky-foam-cleanser-120ml | None | — | MISSING |
| Dragon Fruit Bounce Gel Sunscreen SPF 50+ PA++++, With New-Age UV Filters | Sunscreens | https://www.dotandkey.com/products/dot-key-dragon-fruit-bounce-sunscreen-in-vivo-tested-spf-50-pa-50g | None | — | MISSING |
| Dragon Fruit Bounce Jelly Moisturizer With Plant PDRN | Moisturizers | https://www.dotandkey.com/products/dragon-fruit-bounce-jelly-moisturizer | None | — | MISSING |
| Hair Mask with Moringa + Argan Oil | Hair Care | https://www.dotandkey.com/products/pea-peptide-strengthening-moringa-argan-hair-mask | None | — | MISSING |
| Hyaluronic & Ceramides Hydrating Face Serum | Serums | https://www.dotandkey.com/products/hydrating-hyaluronic-face-serum | None | — | MISSING |
| Lip Plumping Mask with Vitamin C + E | Lip Care | https://www.dotandkey.com/products/lip-plumping-sleeping-mask | Yes | /blog/dot-and-key-lip-plumping-mask-review | ALREADY_COVERED |
| Mango Detan Clay Mask | Face Masks | https://www.dotandkey.com/products/mango-clay-mask | None | — | MISSING |
| Mango Detan Gel Face Wash | Face Cleansers | https://www.dotandkey.com/products/mango-face-wash | None | — | MISSING |
| Mango Detan Gel Sunscreen, In-Vivo Tested SPF 50+ PA++++ | Sunscreens | https://www.dotandkey.com/products/mango-detan-gel-sunscreen-spf-50 | None | — | MISSING |
| Meltie Lip Balm In-Vivo Tested SPF 50+ PA+++ | Lip Care | https://www.dotandkey.com/products/meltie-lipbalm | None | — | MISSING |
| Moringa & Argan Frizz Control Hair Conditioner | Hair Care | https://www.dotandkey.com/products/moringa-argan-oil-hair-conditioner-with-keratin-vitamin-e-for-frizzy-dry-hair-controls-hair-fall-for-strong-smooth-hair-silicone-free-120ml | None | — | MISSING |
| Moringa & Argan Oil Hair Fall Control Shampoo | Hair Care | https://www.dotandkey.com/products/moringa-argan-hair-fall-control-shampoo | Yes | /blog/dot-and-key-moringa-argan-shampoo-review | ALREADY_COVERED |
| Pomegranate + Multi-Peptide Anti Ageing Moisturizer SPF 30 | Moisturizers | https://www.dotandkey.com/products/pomegranate-miracle-vitamin-e-revitalizing-moisturizer-spf-30 | None | — | MISSING |
| Pomegranate + Retinol Eye Cream for Dark Circles | Eye Care | https://www.dotandkey.com/products/retinol-eye-cream | Yes | /blog/dot-and-key-retinol-eye-cream-review | ALREADY_COVERED |
| Pomegranate Youth 0.2% Retinol Complex Face Serum | Serums | https://www.dotandkey.com/products/0-2-retinol-complex-face-serum | None | — | MISSING |
| Retinol Night Repair Cream with Ceramides | Moisturizers | https://www.dotandkey.com/products/retinol-ceramide-age-defense-night-cream | None | — | MISSING |
| Strawberry + Niacinamide Moisturizer | Moisturizers | https://www.dotandkey.com/products/strawberry-moisturizer | None | — | MISSING |
| Strawberry Bright 10% Niacinamide Face Serum | Serums | https://www.dotandkey.com/products/10-niacinamide-strawberry-brightening-face-serum | Yes | /blog/dot-and-key-strawberry-niacinamide-serum-review | ALREADY_COVERED |
| Strawberry Bright Niacinamide Gel Face Wash | Face Cleansers | https://www.dotandkey.com/products/strawberry-bright-niacinamide-gel-face-wash | None | — | MISSING |
| Strawberry Dew Cleansing Balm for Dewy Skin | Face Cleansers | https://www.dotandkey.com/products/strawberry-dew-daily-cleansing-balm | None | — | MISSING |
| Strawberry Dew Micellar Face Wash | Face Cleansers | https://www.dotandkey.com/products/strawberry-micellar-facewash | None | — | MISSING |
| Strawberry Dew Tinted Sunscreen SPF 50+ PA++++ With New-Age UV Filters | Sunscreens | https://www.dotandkey.com/products/strawberry-dew-tinted-sunscreen-spf-50-pa | None | — | MISSING |
| Strawberry Sunscreen Face Mist In-Vivo Tested SPF 50+ PA+++ | Sunscreens | https://www.dotandkey.com/products/strawberry-dew-sunscreen-mist-spf-50 | None | — | MISSING |
| Strawberry Sunscreen Stick, In-Vivo Tested SPF 50+ PA++++ | Sunscreens | https://www.dotandkey.com/products/strawberry-sunstick | None | — | MISSING |
| Strobe Cream (Moisturizer + Highlighter) | Moisturizers | https://www.dotandkey.com/products/strobe-creams-highlighter-moisturizer | None | — | MISSING |
| Swim + Sports Sunscreen, In-Vivo Tested SPF 50+ PA++++ | Sunscreens | https://www.dotandkey.com/products/lime-rush-swim-sports-spf-50-sunscreen | None | — | MISSING |
| Vitamin C + E 100% Mineral Sunscreen IN-VIVO tested SPF 50+, PA++++ | Sunscreens | https://www.dotandkey.com/products/vitamin-c-e-mineral-sunscreen | None | — | MISSING |
| Vitamin C + E Body Lotion for Glowing Skin | Body Care | https://www.dotandkey.com/products/vitamin-c-e-super-bright-body-lotion-1 | None | — | MISSING |
| Vitamin C + E Gel Face Wash for Glowing Skin | Face Cleansers | https://www.dotandkey.com/products/vitamin-c-e-gel-facewash | None | — | MISSING |
| Vitamin C + E Gloss Boss Lip Balm In-Vivo Tested SPF 50+ PA+++ | Lip Care | https://www.dotandkey.com/products/spf-30-vitamin-c-e-lip-balm | None | — | MISSING |
| Vitamin C + E Sunscreen SPF 50+ PA++++ With New-Age UV Filters | Sunscreens | https://www.dotandkey.com/products/dot-key-vitamin-c-e-spf-50-pa-face-sunscreen-for-glowing-skin-uv-protection-for-dull-skin | Yes | /blog/dot-and-key-vitamin-c-e-sunscreen-review | ALREADY_COVERED |
| Vitamin C + E Super Bright Gel Moisturizer for Face | Moisturizers | https://www.dotandkey.com/products/vitamin-c-e-super-bright-moisturizer | Yes | /blog/dot-and-key-vitamin-c-e-moisturizer-review | ALREADY_COVERED |
| Vitamin C Foaming Face Wash | Face Cleansers | https://www.dotandkey.com/products/vitamin-c-super-bright-foaming-face-wash | None | — | MISSING |
| Vitamin C Pink Clay Mask | Face Masks | https://www.dotandkey.com/products/vitamin-c-pink-clay-mask | Yes | /blog/dot-and-key-vitamin-c-pink-clay-mask-review | ALREADY_COVERED |
| Watermelon & 10% Glycolic Serum | Serums | https://www.dotandkey.com/products/watermelon-10-glycolic-super-glow-serum-for-smooth-luminous-glowing-skin-controls-pigmentation-excess-oil-oily-dull-skin | None | — | MISSING |
| Watermelon + Glycolic Acid Pore Tightening Toner | Toners | https://www.dotandkey.com/products/watermelon-superglow-pore-tightening-toner | None | — | MISSING |
| Watermelon Cool Icy Plunge Clay Mask | Face Masks | https://www.dotandkey.com/products/watermelon-cool-icy-plunge-clay-mask | None | — | MISSING |
| Watermelon Cooling Glycolic Acid Shower Gel | Body Care | https://www.dotandkey.com/products/watermelon-shower-gel | None | — | MISSING |
| Watermelon Cooling Icy Gel Moisturizer With Hyaluronic | Moisturizers | https://www.dotandkey.com/products/watermelon-moisturizer-icy-gel | None | — | MISSING |
| Watermelon Cooling Sunscreen Body Spray In-Vivo Tested SPF 50+ PA+++ | Sunscreens | https://www.dotandkey.com/products/biphasic-sunscreen-spray | None | — | MISSING |
| Watermelon Cooling Sunscreen SPF 50+ PA++++ With New-Age UV Filters | Sunscreens | https://www.dotandkey.com/products/watermelon-cooling-spf-50-face-sunscreen | Yes | /blog/dot-and-key-watermelon-sunscreen-review | ALREADY_COVERED |
| Watermelon Cooling Underarm Roll On | Body Care | https://www.dotandkey.com/products/watermelon-cooling-underarm-roll-on | Yes | /blog/dot-and-key-watermelon-underarm-roll-on-review | ALREADY_COVERED |
| Watermelon Gel Face Wash | Face Cleansers | https://www.dotandkey.com/products/watermelon-vitamin-c-face-wash-gel-1 | None | — | MISSING |
| Watermelon Hydrogel Under-eye Patches | Eye Care | https://www.dotandkey.com/products/watermelon-cooling-hydrogel-eye-patches | None | — | MISSING |
