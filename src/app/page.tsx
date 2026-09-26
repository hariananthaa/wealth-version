import Link from "next/link";
import { TrendingUp, Wallet, PiggyBank, ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { ResourceCard } from "@/components/resource-card";
import { resources } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  {
    icon: Wallet,
    title: "Salary-day systems",
    body: "Automate savings the moment your salary lands, before lifestyle inflation gets a vote.",
  },
  {
    icon: TrendingUp,
    title: "SIPs done right",
    body: "Step-up SIPs, fund selection basics, and how to read your own portfolio without the jargon.",
  },
  {
    icon: PiggyBank,
    title: "Numbers, not hype",
    body: "Every claim comes with the assumption behind it — like '12% CAGR' — never a vague promise.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-white/5 bg-navy py-16">
        <div className="container grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="animate-fade-up rounded-xl border border-white/5 bg-navy-card p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p.icon className="mb-4 text-gold-bright" size={28} />
              <h3 className="mb-2 font-serif text-lg font-bold text-offwhite">
                {p.title}
              </h3>
              <p className="text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-light py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
                Free Resources
              </p>
              <h2 className="font-serif text-3xl font-extrabold text-ink">
                Spreadsheets &amp; guides
              </h2>
            </div>
            <Link
              href="/resources"
              className="hidden items-center gap-1 text-sm font-semibold text-navy hover:text-gold-deep md:flex"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.slice(0, 3).map((r) => (
              <ResourceCard key={r.title} {...r} />
            ))}
          </div>
          <Link
            href="/resources"
            className={
              buttonVariants({ variant: "default" }) +
              " mt-6 w-full md:hidden border border-navy"
            }
          >
            View all resources <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* <section className="container py-10">
        <AdSlot label="Ad space — 320x100 / responsive" />
      </section> */}

      <section className="border-t border-white/5 bg-navy-panel py-16">
        <div className="container flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
            Free Tools
          </p>
          <h2 className="max-w-lg font-serif text-3xl font-extrabold text-offwhite">
            Run the numbers on your own SIP before you commit
          </h2>
          <p className="max-w-md text-sm text-muted">
            Step-up your SIP with your appraisal, and watch the corpus compound.
          </p>
          <Link href="/tools" className={buttonVariants({ size: "lg" })}>
            Open Calculators
          </Link>
        </div>
      </section>
    </>
  );
}
