import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/shared/newsletter-form";

export function InlineNewsletter() {
  return (
    <div className="not-prose flex flex-col items-center gap-4 rounded-3xl bg-gradient-champagne p-8 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-soft">
        <Mail className="h-5 w-5" />
      </span>
      <p className="font-display text-xl font-semibold text-foreground">Enjoying this guide?</p>
      <p className="max-w-sm text-sm text-muted-foreground">
        Get more routines like this delivered straight to your inbox every week.
      </p>
      <NewsletterForm className="w-full max-w-sm" />
    </div>
  );
}
