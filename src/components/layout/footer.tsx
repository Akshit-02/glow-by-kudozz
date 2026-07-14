import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { InstagramIcon, TwitterIcon, YoutubeIcon, FacebookIcon } from "@/components/shared/social-icons";
import { SITE_CONFIG, NAV_LINKS, FOOTER_LINKS } from "@/constants/site";

const SOCIAL_ICONS = [
  { key: "instagram", href: SITE_CONFIG.social.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "twitter", href: SITE_CONFIG.social.twitter, Icon: TwitterIcon, label: "Twitter" },
  { key: "youtube", href: SITE_CONFIG.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
  { key: "facebook", href: SITE_CONFIG.social.facebook, Icon: FacebookIcon, label: "Facebook" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_ICONS.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay in the Glow
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Weekly editor-vetted picks, routines, and trend reports — straight to your inbox.
            </p>
            <NewsletterForm compact className="mt-4" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. A {SITE_CONFIG.publisher} publication. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
