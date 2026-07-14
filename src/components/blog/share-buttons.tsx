"use client";

import * as React from "react";
import { Link2, Check, Share2 } from "lucide-react";
import { TwitterIcon, FacebookIcon, PinterestIcon } from "@/components/shared/social-icons";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = React.useState(false);

  const shareLinks = [
    {
      key: "twitter",
      label: "Share on X",
      Icon: TwitterIcon,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      key: "facebook",
      label: "Share on Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      key: "pinterest",
      label: "Share on Pinterest",
      Icon: PinterestIcon,
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    },
  ];

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled share sheet
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Share2 className="h-3.5 w-3.5" /> Share this article
      </span>
      <div className="flex items-center gap-2">
        {shareLinks.map(({ key, label, Icon, href }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {copied ? <Check className="h-4 w-4 text-success" /> : <Link2 className="h-4 w-4" />}
        </button>
        <button
          onClick={handleNativeShare}
          aria-label="Share"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
