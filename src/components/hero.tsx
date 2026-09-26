"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,110,0.12),transparent_55%)]" />
      <div className="container relative flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-bright"
        >
          {siteConfig.handle} · Instagram &amp; YouTube
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-serif text-4xl font-extrabold leading-tight text-offwhite md:text-6xl"
        >
          Build wealth with{" "}
          <span className="text-gold-bright">real numbers</span>, not hype.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-base text-muted md:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/calculators" className={buttonVariants({ size: "lg" })}>
            Explore Calculators
          </Link>
          <Link
            href="/resources"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Free Resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
