"use client";

import * as React from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { subscribeToNewsletter, type NewsletterActionState } from "@/actions/newsletter";

const initialState: NewsletterActionState = { status: "idle" };

export function NewsletterForm({
  className,
  compact = false,
  redirectOnSuccess = false,
}: {
  className?: string;
  compact?: boolean;
  redirectOnSuccess?: boolean;
}) {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);
  const router = useRouter();

  React.useEffect(() => {
    if (state.status === "success" && redirectOnSuccess) {
      router.push("/newsletter-success");
    }
  }, [state.status, redirectOnSuccess, router]);

  if (state.status === "success" && !redirectOnSuccess) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full bg-success/15 px-5 py-3 text-sm font-medium text-success",
          className
        )}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        <span>{state.message}</span>
      </div>
    );
  }

  return (
    <form action={formAction} className={cn("flex flex-col gap-2", className)}>
      <div className={cn("flex flex-col gap-2", compact ? "sm:flex-row" : "sm:flex-row")}>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="h-12 rounded-full border-border bg-card pl-11 text-sm shadow-none"
            aria-label="Email address"
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="h-12 shrink-0 rounded-full px-7 font-semibold"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </Button>
      </div>
      {state.status === "error" && (
        <p className="px-2 text-xs font-medium text-destructive">{state.message}</p>
      )}
      <p className="px-2 text-xs text-muted-foreground">
        By subscribing, you agree to our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </a>
        . No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
