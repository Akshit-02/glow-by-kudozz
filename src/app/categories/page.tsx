import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryCard } from "@/components/shared/category-card";
import { categories } from "@/data/categories";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore every Glow by Kudozz category — skincare, haircare, makeup, grooming, fragrance, and wellness.",
  alternates: { canonical: "/categories" },
  openGraph: {
    title: `Categories | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/categories`,
  },
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Categories", href: "/categories" }]} />
      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Categories</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Every Glow guide, organized by the topics you care about most.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
