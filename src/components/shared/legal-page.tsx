import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalPage({
  title,
  path,
  updatedAt,
  intro,
  sections,
}: {
  title: string;
  path: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: title, href: path }]} />
      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold text-foreground">{title}</h1>
        <p className="text-sm text-muted-foreground">Last updated: {updatedAt}</p>
        <p className="text-base leading-relaxed text-muted-foreground">{intro}</p>
      </div>
      <div className="mt-10 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-3">
            <h2 className="font-display text-xl font-semibold text-foreground">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
