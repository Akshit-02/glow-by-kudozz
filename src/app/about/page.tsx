import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Microscope, Users, Heart } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { authors } from "@/data/authors";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name}'s editorial standards, mission, and the team behind our beauty, grooming, and wellness coverage.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/about`,
  },
};

const VALUES = [
  {
    Icon: Microscope,
    title: "Evidence Over Trends",
    text: "Every clinical claim is checked against research and reviewed by a board-certified dermatologist before it goes live.",
  },
  {
    Icon: ShieldCheck,
    title: "No Pay-for-Praise",
    text: "Affiliate links may earn a commission, but product placement and ratings are never for sale.",
  },
  {
    Icon: Users,
    title: "Real Testing",
    text: "Our editors test the majority of products we feature in their own routines before recommending them.",
  },
  {
    Icon: Heart,
    title: "Inclusive by Default",
    text: "Beauty and grooming content written for every skin tone, hair texture, gender, and budget.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Story
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Beauty advice built on evidence, not algorithms
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {SITE_CONFIG.name} started with a simple frustration: most beauty content online is written to
            chase trends, not to actually help readers make better decisions. We set out to build something
            different — an editorial team of licensed estheticians, grooming specialists, and a
            board-certified dermatologist, publishing guidance that holds up to scrutiny.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Today, over 2.4 million readers a month trust Glow for routines that actually work, honest
            product reviews, and trend reporting that separates what&apos;s genuinely useful from what&apos;s
            just noise.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-elevated">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80"
            alt="Glow by Kudozz editorial team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal className="flex flex-col gap-10">
          <SectionHeading eyebrow="What We Stand For" title="Our editorial standards" align="center" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal className="flex flex-col gap-10">
          <SectionHeading eyebrow="Meet the Team" title="The people behind Glow" align="center" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/author/${author.slug}`}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={author.avatar} alt={author.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                    {author.name}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{author.jobTitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
