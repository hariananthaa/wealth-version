import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site-config";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy-panel">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-radial font-serif text-base font-extrabold text-navy">
              W
            </div>
            <span className="font-serif text-lg font-bold text-offwhite">
              {siteConfig.name}
            </span>
          </div>
          <p className="max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-gold-bright"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted hover:text-gold-bright"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-deep">
            Explore
          </p>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-gold-bright"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/disclaimer"
                className="text-sm text-muted hover:text-gold-bright"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold-deep">
            Disclosure
          </p>
          <p className="text-sm text-muted">{siteConfig.disclaimer}</p>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
