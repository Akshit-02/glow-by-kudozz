import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Microscope,
  Users,
  Heart,
  BookOpen,
  Star,
  Sparkles,
  Rocket,
  FlaskConical,
  TrendingUp,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name}'s editorial standards, mission, and journey behind our beauty, grooming, and wellness coverage.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/about`,
  },
};

const STATS = [
  { Icon: BookOpen, value: `${posts.length}+`, label: "Expert Guides Published" },
  { Icon: Users, value: "2.4M", label: "Monthly Readers" },
  { Icon: Star, value: "4.8/5", label: "Average Reader Rating" },
  { Icon: Globe2, value: `${categories.length}`, label: "Categories Covered" },
];

const VALUES = [
  {
    Icon: Microscope,
    title: "Evidence Over Trends",
    text: "Every clinical claim is checked against research and reviewed by our clinical review process before it goes live.",
  },
  {
    Icon: ShieldCheck,
    title: "No Pay-for-Praise",
    text: "Affiliate links may earn a commission, but product placement and ratings are never for sale.",
  },
  {
    Icon: Users,
    title: "Real Testing",
    text: "We test the majority of products we feature in real routines before recommending them.",
  },
  {
    Icon: Heart,
    title: "Inclusive by Default",
    text: "Beauty and grooming content written for every skin tone, hair texture, gender, and budget.",
  },
];

const JOURNEY = [
  {
    Icon: Rocket,
    year: "The Beginning",
    title: "A frustration turned into a mission",
    text: "Glow by Kudozz started as a reaction to noisy, trend-chasing beauty content — a small team decided to build something that prioritized evidence over virality.",
  },
  {
    Icon: FlaskConical,
    year: "Building the Standard",
    title: "A clinical review process, from day one",
    text: "Every guide was routed through a structured research-and-review process before publishing, so claims about actives and routines could actually hold up to scrutiny.",
  },
  {
    Icon: BookOpen,
    year: "Scaling the Library",
    title: `Crossing ${posts.length}+ published guides`,
    text: "From vitamin C serums to seasonal routines and life-stage-specific skincare, our library grew into one of the most comprehensive, dermatologist-informed resources online.",
  },
  {
    Icon: TrendingUp,
    year: "Today",
    title: "2.4 million readers a month",
    text: "Glow is now a trusted destination across skincare, haircare, makeup, grooming, fragrance, and wellness — and we're just getting started.",
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
            {SITE_CONFIG.name} started with a simple frustration: most beauty
            content online is written to chase trends, not to actually help
            readers make better decisions. We set out to build something
            different — an editorial process built around licensed
            estheticians, grooming specialists, and clinical review,
            publishing guidance that holds up to scrutiny.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Today, over 2.4 million readers a month trust Glow for routines that
            actually work, honest product reviews, and trend reporting that
            separates what&apos;s genuinely useful from what&apos;s just noise.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button asChild size="lg" className="h-12 w-fit rounded-full px-7 font-semibold">
              <Link href="/blog">
                Explore Our Guides <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 w-fit rounded-full px-7 font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal
          delay={0.1}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-elevated"
        >
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80"
            alt="Glow by Kudozz editorial team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </Reveal>
      </div>

      <Reveal className="mt-16 grid grid-cols-2 gap-4 rounded-[2rem] border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
        {STATS.map(({ Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{value}</p>
            <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-20">
        <SectionHeading eyebrow="Our Journey" title="From frustration to a trusted destination" align="center" />
        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-10">
            {JOURNEY.map(({ Icon, year, title, text }, index) => (
              <Reveal key={year} delay={index * 0.05} className="relative flex gap-6">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-soft">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 rounded-3xl border border-border bg-card p-5 sm:p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{year}</span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="What We Stand For" title="The principles behind every guide" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ Icon, title, text }) => (
            <Reveal key={title} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Explore" title="What we cover" align="center" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-hover:scale-110">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <Reveal className="mt-20 flex flex-col items-center gap-4 rounded-[2rem] bg-gradient-champagne p-10 text-center dark:bg-none dark:border dark:border-border sm:p-14">
        <span className="w-fit rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-white/10">
          Stay in the Glow
        </span>
        <h2 className="max-w-xl text-balance font-display text-2xl font-semibold text-charcoal dark:text-foreground sm:text-3xl">
          Weekly, editor-vetted routines and trend reports — straight to your inbox
        </h2>
        <NewsletterForm className="mt-2 w-full max-w-md" />
      </Reveal>
    </div>
  );
}
