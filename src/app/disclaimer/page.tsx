import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Investment disclaimer and terms for Wealth Version's content, tools, and downloads.",
};

export default function DisclaimerPage() {
  return (
    <div className="section-light min-h-[70vh] py-16">
      <div className="container max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          Legal
        </p>
        <h1 className="mb-6 font-serif text-4xl font-extrabold text-ink">
          Disclaimer
        </h1>
        <div className="space-y-5 text-ink/80">
          <p className="font-semibold text-ink">{siteConfig.disclaimer}</p>
          <p>
            All content on {siteConfig.name} — including posts, spreadsheets,
            worksheets, and calculators — is provided for general educational
            purposes only. It does not constitute financial, investment, tax,
            or legal advice, and should not be relied upon as a substitute for
            advice from a qualified professional.
          </p>
          <p>
            Calculators on this site use assumed rates of return (e.g. a
            stated % CAGR) purely for illustration. Actual returns from mutual
            funds, SIPs, or any other instrument will vary and are not
            guaranteed. Past performance is not indicative of future results.
          </p>
          <p>
            Before making any investment decision, please consult a SEBI-
            registered investment adviser or another qualified financial
            professional who can assess your individual circumstances.
          </p>
          <p className="text-sm text-ink/50">
            This page is a starting template — please confirm final wording
            and any additional regulatory disclosures (e.g. SEBI requirements
            for financial content creators in India) with a professional
            before publishing.
          </p>
        </div>
      </div>
    </div>
  );
}
