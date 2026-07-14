import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon, TwitterIcon, PinterestIcon } from "@/components/shared/social-icons";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "You're Subscribed!",
  description: "Thanks for subscribing to the Glow by Kudozz newsletter.",
  robots: { index: false, follow: true },
};

export default function NewsletterSuccessPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">You&apos;re on the list!</h1>
      <p className="text-base leading-relaxed text-muted-foreground">
        Thanks for subscribing to the {SITE_CONFIG.name} newsletter. Check your inbox for a confirmation
        email — your first routine-worthy read arrives this Thursday.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">
            <Home className="mr-1.5 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full px-8">
          <Link href="/blog">
            <BookOpen className="mr-1.5 h-4 w-4" /> Start Reading
          </Link>
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        <a
          href={SITE_CONFIG.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary"
        >
          <TwitterIcon className="h-4 w-4" />
        </a>
        <a
          href={SITE_CONFIG.social.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary"
        >
          <PinterestIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
