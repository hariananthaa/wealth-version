// lib/calculators-config.ts

import type { ComponentType } from "react";

import { SipCalculator } from "@/components/calculators/sip-calculator";
import { StepUpSipCalculator } from "@/components/calculators/step-up-sip-calculator";

export interface CalculatorDefinition {
  id: string;
  slug: string;

  label: string;

  title: string;
  description: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  Component: ComponentType;

  resource: {
    title: string;
    description: string;
    type: string;
    driveUrl: string;
    tag: string;
  };
}

export const CALCULATORS: CalculatorDefinition[] = [
  {
    id: "sip",
    slug: "sip",

    label: "SIP Calculator",

    title: "SIP Calculator — Plan Your Monthly Investment",

    description:
      "Calculate how a monthly SIP can grow over time based on your investment amount, duration, and assumed annual return.",

    seo: {
      title: "SIP Calculator – Calculate SIP Returns & Investment Growth",
      description:
        "Use our free SIP Calculator to estimate your investment value, total contributions, and potential returns from monthly SIP investments.",
      keywords: [
        "SIP calculator",
        "SIP return calculator",
        "mutual fund SIP calculator",
        "monthly SIP calculator",
        "SIP investment calculator",
        "SIP maturity calculator",
      ],
    },

    Component: SipCalculator,
    resource: {
      title: "SIP Calculator",
      description: "Spreadsheet to plan and track a SIP",
      type: "Spreadsheet (.xlsx)",
      driveUrl:
        "https://docs.google.com/spreadsheets/d/1-Y71l6lMEnRPlbcAPkD1UV5kP1ESevRMhbD6yMTS9HQ/copy?usp=drivesdk",
      tag: "Investing",
    },
  },

  {
    id: "step-up-sip",
    slug: "step-up-sip",

    label: "Step-Up SIP Calculator",

    title: "Step-Up SIP Calculator — Increase Your SIP Every Year",

    description:
      "See how increasing your SIP every year can affect your total investment, returns, and final corpus.",

    seo: {
      title:
        "Step-Up SIP Calculator – Calculate SIP Returns with Annual Increase",
      description:
        "Use our free Step-Up SIP Calculator to see how increasing your monthly SIP every year can grow your investment corpus over time.",
      keywords: [
        "step up SIP calculator",
        "step-up SIP calculator",
        "SIP increase calculator",
        "annual SIP increase calculator",
        "SIP calculator with step up",
        "step up SIP returns",
      ],
    },

    Component: StepUpSipCalculator,

    resource: {
      title: "Step-Up SIP Calculator",
      description:
        "Spreadsheet to plan and track an annually increasing SIP against your salary appraisals.",
      type: "Spreadsheet (.xlsx)",
      driveUrl:
        "https://docs.google.com/spreadsheets/d/1-Y71l6lMEnRPlbcAPkD1UV5kP1ESevRMhbD6yMTS9HQ/copy?usp=drivesdk",
      tag: "Investing",
    },
  },
];

export const DEFAULT_CALCULATOR_ID = CALCULATORS[0].id;

export function getCalculatorBySlug(slug: string) {
  return CALCULATORS.find((calculator) => calculator.slug === slug);
}

export function getCalculatorById(id: string) {
  return CALCULATORS.find((calculator) => calculator.id === id);
}
