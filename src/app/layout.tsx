import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} — Financial Tips & Savings Tips`,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "wealth version",
    "SIP calculator",
    "savings tips India",
    "personal finance India",
    "step-up SIP",
    "salary budgeting",
  ],

  authors: [{ name: siteConfig.name }],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} — Financial Tips & Savings Tips`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Financial Tips & Savings Tips`,
    description: siteConfig.description,
  },

  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable}`}
    >
      <body className="min-h-screen bg-navy font-sans text-offwhite antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
