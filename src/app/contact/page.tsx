import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/shared/contact-form";
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
  { Icon: Mail, label: "Email", value: SITE_CONFIG.contactEmail },
  { Icon: Clock, label: "Response Time", value: "1-2 business days" },
  { Icon: MapPin, label: "Based In", value: "Remote-first, worldwide" },
];

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
        <div className="flex flex-col gap-4">
          {CONTACT_INFO.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
