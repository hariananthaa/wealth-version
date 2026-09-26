import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — mission, audience, and the person behind the posts.`,
};

export default function AboutPage() {
  return (
    <div className="section-light min-h-[70vh] py-16">
      <div className="container max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          About
        </p>
        <h1 className="mb-6 font-serif text-4xl font-extrabold text-ink">
          Why {siteConfig.name} exists
        </h1>
        <div className="space-y-5 text-ink/80">
          <p>{siteConfig.description}</p>
          <p>
            The audience is simple: salaried professionals in India, typically
            early-to-mid career, looking for practical guidance on saving,
            investing, and structuring their monthly income — not another
            motivational quote.
          </p>
          <p>
            Every post leads with a concrete rupee figure or percentage, not a
            vague claim, and every projected number is paired with the
            assumption behind it. That same standard applies to this website
            and every calculator on it.
          </p>
        </div>
      </div>
    </div>
  );
}
