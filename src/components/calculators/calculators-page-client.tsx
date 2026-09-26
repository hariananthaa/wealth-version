"use client";

import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

import { CalculatorSidebar } from "./calculator-sidebar";
import { CalculatorDefinition, CALCULATORS } from "./calculators-config";
import { Download } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";

interface CalculatorsPageClientProps {
  calculator: CalculatorDefinition;
}

export function CalculatorsPageClient({
  calculator,
}: CalculatorsPageClientProps) {
  const ActiveCalculator = calculator.Component;

  const handleSelect = React.useCallback((slug: string) => {
    window.location.href = `/calculators/${slug}`;
  }, []);

  return (
    <main className="section-light min-h-[70vh] py-8">
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-ink/60">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link href="/calculators" className="hover:text-ink">
            Calculators
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-ink/80">{calculator.label}</span>
        </nav>
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          Free Tools
        </p>
        <div className="flex flex-col sm:flex-row justify-between space-y-4 mb-5">
          <div className="flex flex-col gap-3">
            <h1 className="font-serif text-4xl font-extrabold text-ink">
              {calculator.label}
            </h1>

            <p className="max-w-2xl text-ink/70">
              {calculator.description} {siteConfig.disclaimer.toLowerCase()}
            </p>
          </div>

          <Button className="w-max">
            <a
              href={calculator?.resource?.driveUrl ?? "#"}
              target="_blank"
              // rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download size={15} />
              Download file
            </a>
          </Button>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            {/* Mobile switcher – appears only on small screens */}
            <CalculatorSidebar
              items={CALCULATORS}
              activeId={calculator.id}
              onSelect={handleSelect}
              mobile
            />

            <ActiveCalculator />
          </div>

          {/* Desktop sidebar – hidden on mobile */}
          <CalculatorSidebar
            items={CALCULATORS}
            activeId={calculator.id}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </main>
  );
}
