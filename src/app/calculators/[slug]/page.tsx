import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CalculatorsPageClient } from "@/components/calculators/calculators-page-client";
import {
  CALCULATORS,
  getCalculatorBySlug,
} from "@/components/calculators/calculators-config";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return CALCULATORS.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return {};
  }

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    keywords: calculator.seo.keywords,

    alternates: {
      canonical: `/calculators/${calculator.slug}`,
    },

    openGraph: {
      title: calculator.seo.title,
      description: calculator.seo.description,
      url: `/calculators/${calculator.slug}`,
      type: "website",
    },

    twitter: {
      card: "summary",
      title: calculator.seo.title,
      description: calculator.seo.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  return <CalculatorsPageClient calculator={calculator} />;
}
