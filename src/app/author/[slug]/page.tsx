import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { BadgeCheck, GraduationCap, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogCard } from "@/components/blog/blog-card";
import { authors } from "@/data/authors";
import { getPostsByAuthor } from "@/data/posts";
import { getAuthorBySlug } from "@/lib/content";
import { personSchema } from "@/schemas/site-schema";
import { SITE_CONFIG } from "@/constants/site";
import {
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
} from "@/components/shared/social-icons";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return {
    title: author.name,
    description: author.shortBio,
    alternates: { canonical: `/author/${author.slug}` },
    openGraph: {
      title: `${author.name} | ${SITE_CONFIG.name}`,
      description: author.shortBio,
      url: `${SITE_CONFIG.url}/author/${author.slug}`,
      images: [{ url: author.avatar, width: 400, height: 400, alt: author.name }],
    },
  };
}

const SOCIAL_LINKS = [
  { key: "instagram", Icon: InstagramIcon },
  { key: "twitter", Icon: TwitterIcon },
  { key: "pinterest", Icon: PinterestIcon },
  { key: "website", Icon: Globe },
] as const;

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorPosts = getPostsByAuthor(author.id);

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            personSchema({
              name: author.name,
              slug: author.slug,
              bio: author.bio,
              image: author.avatar,
              jobTitle: author.jobTitle,
              sameAs: Object.values(author.social).filter(Boolean) as string[],
            })
          ),
        }}
      />
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Authors", href: "/author" }, { name: author.name, href: `/author/${author.slug}` }]} />

        <div className="mt-8 flex flex-col items-center gap-5 rounded-[2rem] border border-border bg-card p-8 text-center sm:p-12">
          <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-soft">
            <Image src={author.avatar} alt={author.name} fill sizes="112px" className="object-cover" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5">
              <h1 className="font-display text-3xl font-semibold text-foreground">{author.name}</h1>
              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">{author.jobTitle}</p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{author.bio}</p>

          {author.credentials.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {author.credentials.map((credential) => (
                <span
                  key={credential}
                  className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary"
                >
                  <GraduationCap className="h-3.5 w-3.5" /> {credential}
                </span>
              ))}
            </div>
          )}

          {author.expertise.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {author.expertise.map((area) => (
                <span key={area} className="rounded-full border border-border px-3.5 py-1.5 text-xs text-foreground">
                  {area}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            {SOCIAL_LINKS.map(({ key, Icon }) => {
              const href = author.social[key as keyof typeof author.social];
              if (!href) return null;
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {authorPosts.length > 0 && (
          <div className="mt-14 flex flex-col gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Articles by {author.name} ({authorPosts.length})
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {authorPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
