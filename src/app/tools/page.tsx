import type { Metadata } from "next";
import { SipCalculator } from "@/components/calculators/sip-calculator";
import { StepUpSipCalculator } from "@/components/calculators/step-up-sip-calculator";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free Financial Calculators — SIP & Step-Up SIP",
  description:
    "Free SIP and Step-Up SIP calculators to plan your investments with real numbers, not vague promises.",
};

export default function ToolsPage() {
  return (
    <div className="section-light min-h-[70vh] py-16">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          Free Tools
        </p>
        <h1 className="mb-3 font-serif text-4xl font-extrabold text-ink">
          Calculators
        </h1>
        <p className="mb-10 max-w-2xl text-ink/70">
          Two calculators to start — more coming as new posts go live. All
          figures are illustrative; {siteConfig.disclaimer.toLowerCase()}
        </p>

        <div className="grid gap-10">
          <SipCalculator />
          <StepUpSipCalculator />
        </div>

        {/* <div className="mt-12">
          <AdSlot label="Ad space — below calculators" />
        </div> */}
      </div>
    </div>
  );
}
