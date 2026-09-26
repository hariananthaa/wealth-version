// app/calculators/page.tsx

import { CALCULATORS } from "@/components/calculators/calculators-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Financial Calculators | SIP & Investment Tools",
  description:
    "Use free financial calculators to plan your investments, estimate SIP returns, and understand how increasing your monthly investment can grow your wealth over time.",
  alternates: {
    canonical: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <main className="section-light min-h-[70vh] py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/60">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-ink/80">Calculators</span>
        </nav>

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold-deep">
            Free Tools
          </p>

          <h1 className="mb-4 font-serif text-4xl font-extrabold text-ink md:text-5xl">
            Financial Calculators
          </h1>

          <p className="text-lg leading-8 text-ink/70">
            Plan your investments with real numbers, not vague promises. Explore
            our free calculators to estimate potential returns and understand
            how different investment strategies can affect your future corpus.
          </p>
        </div>

        {/* Calculator cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {CALCULATORS.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${calculator.slug}`}
              className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-deep">
                Free Calculator
              </p>

              <h2 className="mb-3 font-serif text-2xl font-bold text-ink group-hover:text-gold-deep">
                {calculator.label}
              </h2>

              <p className="mb-6 leading-7 text-ink/70">
                {calculator.description}
              </p>

              <span className="font-semibold text-ink">Open calculator →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
