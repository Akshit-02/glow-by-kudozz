import Image from "next/image";
import { Heart } from "lucide-react";
import { instagramPosts } from "@/data/testimonials";
import { InstagramIcon } from "@/components/shared/social-icons";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function InstagramGallery() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="@glowbykudozz"
          title="Follow along on Instagram"
          align="center"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-charcoal/0 text-white opacity-0 transition-all duration-300 group-hover:bg-charcoal/50 group-hover:opacity-100">
                <Heart className="h-4 w-4 fill-white" />
                <span className="text-sm font-semibold">{post.likes.toLocaleString()}</span>
              </div>
            </a>
          ))}
        </div>
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <InstagramIcon className="h-4 w-4" /> Follow @glowbykudozz
        </a>
      </Reveal>
    </section>
  );
}
