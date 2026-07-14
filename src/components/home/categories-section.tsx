import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/shared/category-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Explore"
          title="Find your category"
          description="From skin barrier science to signature scents — dive into the topics you care about most."
          align="center"
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
