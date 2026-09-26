"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Logo from "./logo";

export function LogoBadge({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Image width={33} height={33} src={"/logos/logo.png"} alt={"Logo"} />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/90 backdrop-blur supports-backdrop-filter:bg-navy/70">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-gold-bright"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-gold-bright"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted transition-colors hover:text-gold-bright"
          >
            <FaYoutube size={18} />
          </a>
          <Link href="/calculators" className={buttonVariants({ size: "sm" })}>
            Try the Tools
          </Link>
        </div>

        <button
          className="text-offwhite md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-offwhite hover:bg-white/5"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-4 px-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} className="text-muted" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={20} className="text-muted" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
