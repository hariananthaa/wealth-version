// components/calculators/calculator-sidebar.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// If you already have a Sheet component (shadcn), use it.
// Otherwise a simple native <select> or a custom dropdown also works.

export interface CalculatorNavItem {
  id: string;
  label: string;
}

interface CalculatorSidebarProps {
  items: CalculatorNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  /** When true, render the compact mobile version */
  mobile?: boolean;
}

export function CalculatorSidebar({
  items,
  activeId,
  onSelect,
  mobile = false,
}: CalculatorSidebarProps) {
  const [open, setOpen] = React.useState(false);
  const activeItem = items.find((i) => i.id === activeId);

  // ---------- Mobile: compact trigger + sheet/dropdown ----------
  if (mobile) {
    return (
      <div className="mb-6 lg:hidden">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-ink/50">
          Switch calculator
        </p>

        <Button
          variant="outline"
          className="w-full justify-between text-navy/70 border-ink/20 bg-white font-semibold"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{activeItem?.label ?? "Select calculator"}</span>
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </Button>

        {open && (
          <div className="mt-2 max-h-64 overflow-y-auto rounded-md border border-ink/15 bg-white shadow-sm">
            {items.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelect(item.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm font-semibold transition-colors",
                    active
                      ? "bg-navy text-offwhite"
                      : "text-navy hover:bg-offwhite",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ---------- Desktop: original sticky sidebar ----------
  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
      <h2 className="mb-3 font-serif text-lg font-bold text-ink">
        Popular calculators
      </h2>
      <nav className="flex flex-col gap-3">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors",
                active
                  ? "border-navy bg-navy text-offwhite"
                  : "border-ink/15 bg-white text-navy hover:border-navy/40 hover:bg-offwhite",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
