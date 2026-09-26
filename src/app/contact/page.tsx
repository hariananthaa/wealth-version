import type { Metadata } from "next";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Newsletter",
  description:
    "Get in touch or join the Wealth Version newsletter for new tools and posts.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[70vh] bg-navy py-16">
      <div className="container max-w-xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-deep">
          Contact
        </p>
        <h1 className="mb-3 font-serif text-4xl font-extrabold text-offwhite">
          Get in touch
        </h1>
        <p className="mb-8 text-muted">
          Questions, collab requests, or a tool you'd like to see next — send it
          over. Or find {siteConfig.name} on:
        </p>
        <div className="mb-8 flex gap-4">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-offwhite hover:bg-gold/10"
          >
            <FaInstagram size={16} /> Instagram
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-offwhite hover:bg-gold/10"
          >
            <FaYoutube size={16} /> YouTube
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
