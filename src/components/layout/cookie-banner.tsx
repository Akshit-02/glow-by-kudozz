"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";

const STORAGE_KEY = "glow-cookie-consent";

export function CookieBanner() {
  const { value: consent, set: setConsent, hydrated } = useLocalStorage(STORAGE_KEY);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (hydrated && !consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [hydrated, consent]);

  function respond(value: "accepted" | "declined") {
    setConsent(value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="glass fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-3xl p-5 shadow-elevated sm:inset-x-auto sm:right-6 sm:max-w-sm"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <Cookie className="h-4 w-4" />
            </span>
            <p className="text-sm leading-relaxed text-foreground">
              We use cookies to personalize content and analyze traffic. Read our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 rounded-full" onClick={() => respond("declined")}>
              Decline
            </Button>
            <Button className="flex-1 rounded-full" onClick={() => respond("accepted")}>
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
