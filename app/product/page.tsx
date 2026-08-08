import type { Metadata } from "next";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  CreditCard,
  Building,
  Briefcase,
  Landmark,
  BarChart3,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Byzantine Capital",
  description:
    "Explore our full range of business financing options – from Merchant Cash Advances to SBA loans. Find the right fit for your business.",
};

// ─── Product data ────────────────────────────────────────────────
const loanProducts = [
  {
    id: "mca",
    title: "Merchant Cash Advance (MCA)",
    icon: DollarSign,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A Merchant Cash Advance is a fast funding option where you receive an advance based on revenue and repay automatically from ongoing sales or deposits.",
    highlights: [
      "Revenue-based approval (deposits matter)",
      "Automatic remittances (daily or weekly pulls)",
      "Factor-rate pricing (total payback quoted)",
      "Same Day Funding",
      "Flexible repayment that adjusts with sales volume.",
      "No fixed maturity date tied to performance.",
    ],
  },
  {
    id: "loc",
    title: "Business Line of Credit",
    icon: CreditCard,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A business line of credit gives you a revolving limit you can draw from, repay, and reuse as needed.",
    highlights: [
      "Draw anytime for short-term needs",
      "Reusable funds as you repay",
      "Pay for what you use (on drawn amount)",
      "Helps manage cash flow gaps and seasonality.",
      "Only pay interest on the amount drawn.",
      "Can be secured or unsecured depending on profile.",
    ],
  },
  {
    id: "term",
    title: "Small Business Loans (Term Loans)",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A term loan provides a lump sum upfront and is repaid on a predictable schedule over a fixed term.",
    highlights: [
      "Lump-sum funding for planned investments",
      "Predictable payments for budgeting",
      "Clear payoff timeline with a defined term",
      "Typically offers lower rates than short-term options.",
      "Ideal for equipment, hiring, or expansion projects.",
      "Fixed or variable rate options available.",
    ],
  },
  {
    id: "abl",
    title: "Asset Based Lending (ABL)",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Asset-based lending ties borrowing power to collateral value, with availability that can change as assets change.",
    highlights: [
      "Collateral-driven limit (borrowing base)",
      "Can unlock more capital for asset-rich businesses",
      "More reporting and monitoring requirements",
      "Common collateral includes receivables, inventory, or equipment.",
      "Availability may increase as asset values grow.",
      "Often suited for companies with strong balance sheets.",
    ],
  },
  {
    id: "sba",
    title: "SBA Loans (SBA 7(a))",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "SBA loans like SBA 7(a) are long-term, structured financing with heavier documentation and a slower process for larger projects.",
    highlights: [
      "Longer terms (often multi-year)",
      "Fits big-ticket uses like expansion or acquisition",
      "More paperwork and longer approval timeline",
      "Backed partially by the U.S. Small Business Administration.",
      "Competitive rates compared to conventional loans.",
      "Can be used for a wide range of business purposes.",
    ],
  },
];

// ─── Additional sections ─────────────────────────────────────────
const usageOptions = [
  "Purchase Inventory",
  "Cover Payroll",
  "Expand or Renovate",
  "Marketing Campaigns",
  "Stabilize cash flow",
  "Upgrade equipment",
  "Hire more employees",
  "Consolidate business debt",
];

const testimonial = {
  quote:
    "We opted for a Cash Advance, and the funds were in our account the next morning. It was a lifesaver. Because the repayments fluctuate with our daily credit card sales, I didn't have to worry about a huge fixed bill during our post-holiday slow down. It kept our doors open when it mattered most.",
  author: "Marcus T, Catering",
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Our Loan Options"
      description="Explore ByzLoan's full suite of financing solutions – from same‑day advances to long‑term SBA loans. Find the one that fits your business."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── Loan Product Sections ─────────────────────────────── */}
        {loanProducts.map((product, index) => (
          <Reveal key={product.id} delay={index * 80}>
            <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <product.icon
                      className="h-6 w-6 text-midnight-ink/80"
                      strokeWidth={1.8}
                    />
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-midnight-ink">
                      {product.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-midnight-ink/70 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {product.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-midnight-ink/70"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#A87E62]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                      >
                        LEARN MORE
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="bg-midnight-ink text-lift-white hover:bg-midnight-ink/90">
                        APPLY NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}

        {/* ─── Compare Loan Options ──────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <h2 className="font-display text-2xl font-semibold text-midnight-ink">
              Compare Loan Options{" "}
              <span className="text-[#A87E62]">With ByzLoan.</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-midnight-ink/70">
              See multiple offers in one place and choose the best fit for your
              business with fast, simple, and transparent funding.
            </p>
            <Link href="#">
              <Button className="mt-4 bg-[#A87E62] text-white hover:bg-[#96694f]">
                Compare Your Loan Directly HERE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>
        </Reveal>

        {/* ─── How Can You Use Funding? ────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business funding uses"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                  How Can You Use Funding From ByzLoan?
                </h2>
                <p className="mt-1 text-sm text-midnight-ink/60">
                  Flexible Options. Multiple Uses.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {usageOptions.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-midnight-ink/80"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#A87E62]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Testimonials ────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Testimonial"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                  What Our Clients Are Saying...
                </h2>
                <blockquote className="mt-4 text-sm italic text-midnight-ink/70 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-3 text-sm font-medium text-midnight-ink">
                  — {testimonial.author}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-[#A87E62] hover:underline"
                >
                  VIEW MORE TESTIMONIALS HERE →
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Education ────────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:text-left">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Education"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                  <span className="text-[#A87E62]">Education</span> – Confidence
                  At Your Fingertips.
                </h2>
                <p className="mt-2 text-sm text-midnight-ink/70">
                  Make informed decisions with confidence. From step‑by‑step
                  breakdowns to transparent comparisons and real testimonials,
                  everything you need to understand your options lives here.
                </p>
                <Link href="#">
                  <Button className="mt-4 bg-midnight-ink text-lift-white hover:bg-midnight-ink/90">
                    View All product HERE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}
