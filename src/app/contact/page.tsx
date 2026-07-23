import type { Metadata } from "next";
import { Mail, Clock, Megaphone, PenSquare, HelpCircle, Handshake } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/shared/contact-form";
import { InstagramIcon, TwitterIcon, YoutubeIcon, FacebookIcon, PinterestIcon } from "@/components/shared/social-icons";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE_CONFIG.name} editorial team — pitches, partnerships, corrections, and reader questions.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/contact`,
  },
};

const CONTACT_INFO = [
  { Icon: Mail, label: "Email", value: SITE_CONFIG.contactEmail, href: `mailto:${SITE_CONFIG.contactEmail}` },
  { Icon: Clock, label: "Response Time", value: "1-2 business days" },
];

const REACH_OUT_FOR = [
  { Icon: PenSquare, label: "Story Pitches & Corrections", text: "Spot an error or have an idea for a guide we should write? Tell us." },
  { Icon: Handshake, label: "Partnerships & Collaborations", text: "Brand partnerships, affiliate programs, and collaboration proposals." },
  { Icon: Megaphone, label: "Press & Media", text: "Press inquiries, interview requests, and media mentions." },
  { Icon: HelpCircle, label: "Reader Questions", text: "Questions about a routine, product, or article you read on Glow." },
];

const SOCIAL_LINKS = [
  { key: "instagram", href: SITE_CONFIG.social.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "twitter", href: SITE_CONFIG.social.twitter, Icon: TwitterIcon, label: "Twitter" },
  { key: "pinterest", href: SITE_CONFIG.social.pinterest, Icon: PinterestIcon, label: "Pinterest" },
  { key: "youtube", href: SITE_CONFIG.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
  { key: "facebook", href: SITE_CONFIG.social.facebook, Icon: FacebookIcon, label: "Facebook" },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">Get in Touch</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Have a pitch, partnership idea, correction, or just a question about a routine? We&apos;d love to
          hear from you.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What to Reach Out About
            </h2>
            <div className="flex flex-col gap-4">
              {REACH_OUT_FOR.map(({ Icon, label, text }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Follow Along
            </h2>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ key, href, Icon, label }) => (
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
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
