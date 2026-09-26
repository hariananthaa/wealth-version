// Save as: components/calculators/calculator-sidebar.tsx
"use client";

import { cn } from "@/lib/utils";

export interface CalculatorNavItem {
  id: string;
  label: string;
}

export function CalculatorSidebar({
  items,
  activeId,
  onSelect,
}: {
  items: CalculatorNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
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
