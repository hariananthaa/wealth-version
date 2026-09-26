// Save as: components/calculators/calculator-line-chart.tsx
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export interface YearlyDataPoint {
  year: number;
  invested: number;
  corpus: number;
}

function formatCompactINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}

function formatINRFull(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string; color: string }[];
  label?: number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-ink/10 bg-white px-3 py-2 shadow-md">
      <p className="mb-1 text-xs font-semibold text-ink/70">Year {label}</p>
      {payload.map((entry) => (
        <p
          key={entry.name}
          className="text-xs font-medium"
          style={{ color: entry.color }}
        >
          {entry.name}: {formatINRFull(entry.value)}
        </p>
      ))}
    </div>
  );
}

export function CalculatorLineChart({ data }: { data: YearlyDataPoint[] }) {
  return (
    <div className="h-72 w-full md:col-span-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(11,17,32,0.08)"
            vertical={false}
          />
          <XAxis
            dataKey="year"
            tickFormatter={(y) => `Yr ${y}`}
            tick={{ fontSize: 12, fill: "rgba(11,17,32,0.6)" }}
            axisLine={{ stroke: "rgba(11,17,32,0.15)" }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatCompactINR}
            tick={{ fontSize: 12, fill: "rgba(11,17,32,0.6)" }}
            axisLine={false}
            tickLine={false}
            width={52}
          />
          <Tooltip content={<ChartTooltip />} />
          <Line
            type="monotone"
            dataKey="invested"
            name="Invested"
            stroke="#1e1b4b"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="corpus"
            name="Corpus"
            stroke="#be185d"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 flex items-center gap-4 text-xs text-ink/60">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#1e1b4b]" /> Invested
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#be185d]" /> Corpus
        </span>
      </div>
    </div>
  );
}
