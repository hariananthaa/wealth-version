import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import { resources } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free Resources — Spreadsheets & Guides",
  description:
    "Free downloadable spreadsheets, trackers, and worksheets for budgeting, saving, and investing — from Wealth Version.",
};

export default function ResourcesPage() {
  return (
    <div className="section-light min-h-[70vh] py-16">
      <div className="container">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          Free Resources
        </p>
        <h1 className="mb-3 font-serif text-4xl font-extrabold text-ink">
          Every spreadsheet, in one place
        </h1>
        <p className="mb-10 max-w-2xl text-ink/70">
          The tools promised across Instagram and YouTube posts, all hosted here
          and kept in sync with Google Drive — no need to comment and wait for a
          DM.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>

        {/* <div className="mt-12">
          <AdSlot label="Ad space — in-feed" />
        </div> */}
      </div>
    </div>
  );
}
