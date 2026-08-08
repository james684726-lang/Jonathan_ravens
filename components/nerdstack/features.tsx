"use client";

import { useState } from "react";
import {
  MessageCircle,
  Building,
  CreditCard,
  Quote,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    key: "mca",
    label: "Merchant Cash Advance",
    Icon: MessageCircle,
    tint: "var(--color-packet-sky)",
    author: "Marcus T, Catering",
    quote:
      "We opted for a Cash Advance, and the funds were in our account the next morning. It was a lifesaver. Because the repayments fluctuate with our daily credit card sales, I didn't have to worry about a huge fixed bill during our post-holiday slow down. It kept our doors open when it mattered most.",
    image: "/img/jrb.jpg", // replace with actual image path
  },
  {
    key: "term",
    label: "Business Term Loan",
    Icon: Building,
    tint: "var(--color-qubit-orchid)",
    author: "Sarah J, Manufacturing",
    quote:
      "Securing a Term Loan allowed us to buy the machinery upfront and lock in a fixed monthly payment. This stability made it easy to project our overhead for the next five years. We’ve already seen a 30% increase in production capacity thanks to that one investment.",
    image: "/img/jrb2.jpg",
  },
  {
    key: "loc",
    label: "Business Line of Credit",
    Icon: CreditCard,
    tint: "var(--color-syntax-mint)",
    author: "David C, Tech Consulting",
    quote:
      "Our Line of Credit is now our 'emergency' cash flow bridge. We draw from it to cover payroll on Friday and pay it back as soon as a client's invoice clears. Only paying interest on the days the money is out of the account makes this the most cost-effective way to manage our working capital.",
    image: "/img/jrb3.jpg",
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const tab = testimonials[active];

  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px]">
        {/* Header with button on the right */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[600px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink/50">
              Testimonials
            </span>
            <h2 className="mt-4 text-balance font-display text-[40px] font-normal leading-[1.1] tracking-[-1px] text-midnight-ink sm:text-[48px]">
              What Our Clients Are Saying...
            </h2>
          </div>
          <Link
            href="/reviews"
            className="mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-lift-white px-5 py-3 text-sm font-medium text-midnight-ink transition-colors hover:bg-midnight-ink/5"
          >
            VIEW MORE TESTIMONIALS HERE
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex flex-wrap gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-[12px] uppercase tracking-[0.75px] transition-colors duration-200"
              style={{
                borderColor: active === i ? "transparent" : "var(--border)",
                background:
                  active === i
                    ? "var(--color-midnight-ink)"
                    : "var(--color-lift-white)",
                color: active === i ? "var(--color-paper-cream)" : "#231f23a3",
              }}
            >
              <t.Icon className="size-3.5" strokeWidth={2} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div key={`copy-${tab.key}`} className="ns-fade-up">
            <span
              className="flex size-12 items-center justify-center rounded-xl"
              style={{ background: tab.tint }}
            >
              <tab.Icon
                className="size-6 text-midnight-ink"
                strokeWidth={1.8}
              />
            </span>
            <h3 className="mt-5 text-balance font-display text-[32px] font-normal leading-[1.15] tracking-[-0.5px] text-midnight-ink">
              {tab.author}
            </h3>
            <p
              className="mt-4 text-[16px] font-light leading-[1.6] italic"
              style={{ color: "#231f23a3" }}
            >
              “{tab.quote}”
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={tab.image}
              alt={tab.author}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
