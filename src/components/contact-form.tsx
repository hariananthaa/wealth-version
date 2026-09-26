"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your form/email provider (Resend, Formspree,
    // Google Sheets via Apps Script, ConvertKit, etc). Left as a stub.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-gold/30 bg-gold/10 p-6 text-center text-offwhite">
        Thanks — you're on the list. 🎉
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Your name" required />
      <Input type="email" placeholder="you@email.com" required />
      <textarea
        placeholder="Message (optional)"
        rows={4}
        className="flex w-full rounded-md border border-gold/30 bg-navy px-4 py-2 text-sm text-offwhite placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      />
      <Button type="submit" className="w-full">
        Subscribe / Send
      </Button>
    </form>
  );
}
