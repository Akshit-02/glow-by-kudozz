import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedArticle } from "@/components/home/featured-article";
import { TrendingArticles } from "@/components/home/trending-articles";
import { LatestArticles } from "@/components/home/latest-articles";
import { CategoriesSection } from "@/components/home/categories-section";
import { EditorsPicks } from "@/components/home/editors-picks";
import { MostPopular } from "@/components/home/most-popular";
import { FeaturedProducts } from "@/components/home/featured-products";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { InstagramGallery } from "@/components/home/instagram-gallery";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <FeaturedArticle /> */}
      <TrendingArticles />
      <LatestArticles />
      <CategoriesSection />
      <EditorsPicks />
      {/* <MostPopular /> */}
      <FeaturedProducts />
      <NewsletterCta />
      {/* <InstagramGallery /> */}
      {/* <TestimonialsSection /> */}
      <FaqSection />
    </>
  );
}
