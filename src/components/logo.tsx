import { siteConfig } from "@/lib/site-config";
import { LogoBadge } from "./site-header";

export default function Logo() {
  return (
    <>
      <LogoBadge />
      <span className="font-serif text-lg font-bold tracking-tight text-offwhite">
        {siteConfig.name}
      </span>
    </>
  );
}
