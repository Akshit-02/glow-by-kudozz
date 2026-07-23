"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { icon: BookOpen, label: "Expert Guides", value: "500+" },
  { icon: Users, label: "Monthly Readers", value: "2.4M" },
  { icon: Star, label: "Avg. Rating", value: "4.8" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-champagne dark:bg-none">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary backdrop-blur-sm dark:bg-white/10">
            Beauty · Grooming · Wellness
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-charcoal dark:text-foreground sm:text-5xl lg:text-6xl">
            Beauty advice worth{" "}
            <span className="text-gradient-rose">trusting</span>, not just
            trending
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-charcoal/70 dark:text-muted-foreground">
            Expert-vetted skincare, haircare, grooming, and fragrance guidance —
            researched, tested, and written by people who actually know the
            science behind the glow.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full px-8 text-base font-semibold shadow-glow"
            >
              <Link href="/blog">
                Explore Articles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-charcoal/15 bg-white/60 px-8 text-base font-semibold backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
            >
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary shadow-soft dark:bg-white/10">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-base font-semibold text-charcoal dark:text-foreground">
                    {value}
                  </span>
                  <span className="text-xs text-charcoal/60 dark:text-muted-foreground">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-elevated">
            <Image
              src="/hero.jpeg"
              alt="Editorial beauty portrait with soft, dewy skin finish"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 600px"
              className="object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 hidden w-48 rounded-2xl p-4 shadow-elevated sm:block"
          >
            <p className="font-display text-2xl font-semibold text-foreground">
              98%
            </p>
            <p className="text-xs text-muted-foreground">
              of readers say our routines actually work
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="glass absolute -bottom-6 right-2 hidden w-52 rounded-2xl p-4 shadow-elevated sm:block"
          >
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary" />
              ))}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Rated 4.8/5 by 12,000+ readers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
