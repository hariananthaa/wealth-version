// Save as: components/calculators/sip-calculator.tsx
"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CalculatorLineChart,
  type YearlyDataPoint,
} from "@/components/calculators/calculator-line-chart";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

function futureValueAtMonths(
  monthly: number,
  monthlyRate: number,
  months: number,
) {
  if (months <= 0) return 0;
  return monthlyRate === 0
    ? monthly * months
    : monthly *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
}

export function SipCalculator() {
  const [monthly, setMonthly] = React.useState(10000);
  const [years, setYears] = React.useState(20);
  const [rate, setRate] = React.useState(12);

  const { invested, corpus, gains, yearly } = React.useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const futureValue = futureValueAtMonths(monthly, monthlyRate, months);
    const totalInvested = monthly * months;

    const yearlyData: YearlyDataPoint[] = [];
    for (let y = 1; y <= years; y++) {
      yearlyData.push({
        year: y,
        invested: monthly * y * 12,
        corpus: futureValueAtMonths(monthly, monthlyRate, y * 12),
      });
    }

    return {
      invested: totalInvested,
      corpus: futureValue,
      gains: futureValue - totalInvested,
      yearly: yearlyData,
    };
  }, [monthly, years, rate]);

  return (
    <Card className="border-ink/10 bg-white text-ink shadow-md space-y-2">
      {/* <CardHeader>
        <CardTitle className="text-ink">SIP Growth Calculator</CardTitle>
        <CardDescription>
          See how a monthly SIP compounds over time at an assumed annual return.
        </CardDescription>
      </CardHeader> */}
      <CardContent className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="space-y-5">
          <Field label="Monthly investment" suffix="₹/month">
            <Input
              type="number"
              min={500}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value) || 0)}
              className="border-ink/20 bg-offwhite text-ink"
            />
          </Field>
          <Field label="Investment period" suffix="years">
            <Input
              type="number"
              min={1}
              max={40}
              value={years}
              onChange={(e) => setYears(Number(e.target.value) || 0)}
              className="border-ink/20 bg-offwhite text-ink"
            />
          </Field>
          <Field label="Expected annual return" suffix="% CAGR">
            <Input
              type="number"
              min={1}
              max={30}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value) || 0)}
              className="border-ink/20 bg-offwhite text-ink"
            />
          </Field>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-lg bg-navy p-6 text-offwhite">
          <Stat label="Total invested" value={formatINR(invested)} />
          <Stat label="Estimated gains" value={formatINR(gains)} accent />
          <div className="h-px bg-white/10" />
          <Stat label="Maturity corpus" value={formatINR(corpus)} big />
        </div>

        {yearly.length > 1 && <CalculatorLineChart data={yearly} />}
      </CardContent>
      <p className="px-6 pb-6 text-xs text-ink/50">
        Assumes {rate}% CAGR, compounded monthly. Illustrative only — returns
        are not guaranteed.
      </p>
    </Card>
  );
}

function Field({
  label,
  suffix,
  children,
}: {
  label: string;
  suffix: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-ink">
        {label}
        <span className="text-xs font-normal text-ink/50">{suffix}</span>
      </span>
      {children}
    </label>
  );
}

function Stat({
  label,
  value,
  accent,
  big,
}: {
  label: string;
  value: string;
  accent?: boolean;
  big?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted">{label}</span>
      <span
        className={
          big
            ? "font-serif text-2xl font-bold text-gold-bright"
            : accent
              ? "text-lg font-bold text-gold-bright"
              : "text-lg font-bold text-offwhite"
        }
      >
        {value}
      </span>
    </div>
  );
}
