// app/reviews/page.tsx
"use client";

import { useState } from "react";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Zap,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ─── Review Data ──────────────────────────────────────────────────
interface Review {
  name: string;
  date: string;
  avatar?: string;
  text: string;
  rating: number; // required
}

const reviews: Review[] = [
  {
    name: "Stephanie Collins",
    date: "6 months ago",
    rating: 5,
    text: `If I could give BYZLoan 10 stars, I would. As a funder, finding an ISO partner that is reliable, professional, and truly supportive is like finding a unicorn. BYZLoan is that unicorn.

From day one, their team has been an extension of our own. They are sharp and sensible, allowing us to get our strong deals done quickly and efficiently. But what truly sets them apart is their partner-centric attitude. They communicate clearly and proactively, their support team is incredibly responsive, and they stand behind their promises.

Working with BYZLoan has directly contributed to our growth and our reputation with our own clients. They close deals, they solve problems, and they make us look good. It’s a genuine partnership. We absolutely love working with them!`,
  },
  {
    name: "Josh Johnson",
    date: "6 months ago",
    rating: 5,
    text: `The process was fast and easy. I was funded the same day. George informed me of all my options. I will only work with Byzloan going forward.`,
  },
  {
    name: "Chris Vecchio",
    date: "6 months ago",
    rating: 5,
    text: `I’ve now been funded by ByzLoan three times now and couldn’t be more grateful. Their renewal opportunities have made it easy to access capital basically on-demand. I’ve also been able to build my business credit along the way for stronger financial footing. Highly recommend to any entrepreneur looking for reliable funding and real growth support.`,
  },
  {
    name: "Mike O'Donnell",
    date: "6 months ago",
    rating: 5,
    text: `ByzLoan gave me access to multiple loan approvals, including SBA 7(a), term loans, and a business line of credit, which made it easy to choose what truly fit my needs. Their team clearly explained the pros and cons of each option instead of pushing just one product. I was able to make an informed decision for my business and couldn’t be happier with the outcome. Highly professional and trustworthy.`,
  },
  {
    name: "Gmen181",
    date: "6 months ago",
    rating: 5,
    text: `I want to thank Jon and the team at ByzLoan for their great effort in getting our $150,000 SBA loan approved over a 10-year term. The process was handled professionally, and they stayed engaged every step of the way.

This funding allowed us to pay off all outstanding vendor invoices and use the remaining capital to expand our outdoor dining area, which was critical to preparing for our snowbird rush during the winter and spring seasons.

ByzLoan delivered exactly what they said they would, and the results have had a real impact on our business. I highly recommend them to any business owner looking for dependable financing support.

— Robert, Boca Raton, FL`,
  },
  {
    name: "Brian Bounds",
    date: "6 months ago",
    rating: 5,
    text: `Funding was very quick. And more affordable that I thought it was going to be!`,
  },
  {
    name: "Heather Bowman",
    date: "6 months ago",
    rating: 5,
    text: `We’ve worked with Jonathan Ravens on several different deals, and every experience has been outstanding. He is consistently easy to work with, incredibly responsive, and always goes the extra mile to make sure everything runs smoothly. Jonathan truly puts in the effort to do what’s best for his clients, and it shows. I couldn’t recommend him highly enough and am very grateful for all the help and support he’s provided us over the years.`,
  },
  {
    name: "Melba Pena",
    date: "7 months ago",
    rating: 5,
    text: `Byzloan Corp has assisted our small business everytime we have needed the help. In a world full of imperfections, where some small business owners do not qualify for an SBA loan, this option assists our cash flow. Jon has always been professional, upfront and honest about the loan presented and provided.`,
  },
  {
    name: "Cynthia",
    date: "8 months ago",
    rating: 5,
    text: `Byzloan Corp was fast and easy to work with. Their customer service was excellent—very polite and professional—and they explained the terms of the agreement clearly.`,
  },
];

// ─── Helper to render stars ──────────────────────────────────────
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "fill-[#A87E62] text-[#A87E62]" : "text-midnight-ink/20"
      }`}
      strokeWidth={i < rating ? 0 : 1.5}
    />
  ));
};

// ─── Review Card Component ──────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const text = review.text;
  const shouldTruncate = text.length > 300;
  const displayText = expanded
    ? text
    : text.slice(0, 300) + (shouldTruncate ? "..." : "");

  return (
    <Reveal>
      <div className="rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#A87E62]/10">
            <Image
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                review.name,
              )}&background=A87E62&color=fff&size=48`}
              alt={review.name}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-display text-lg font-semibold text-midnight-ink">
                {review.name}
              </h4>
              <span className="text-xs text-midnight-ink/40">
                {review.date}
              </span>
            </div>
            <div className="mt-1 flex">{renderStars(review.rating)}</div>
          </div>
        </div>
        <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
        {shouldTruncate && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-sm font-medium text-[#A87E62] hover:text-[#96694f] transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </Reveal>
  );
}

// ─── Page Component ──────────────────────────────────────────────
export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Reviews"
      title="ByzLoan Client Reviews"
      description="The most important thing to us is helping businesses access capital with confidence."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── Hero / Intro ────────────────────────────────────────── */}
        <Reveal>
          <div className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="flex justify-center">
              <div className="rounded-full bg-[#A87E62]/10 p-4">
                <MessageCircle className="h-8 w-8 text-[#A87E62]" />
              </div>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-midnight-ink sm:text-4xl">
              The most important thing to us is helping businesses access
              capital with confidence
            </h2>
            <p className="mt-4 text-sm text-midnight-ink/60 max-w-2xl mx-auto">
              Real stories from real clients who have grown their businesses
              with ByzLoan.
            </p>
          </div>
        </Reveal>

        {/* ─── Reviews Grid ────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* ─── Verified by Trustindex ──────────────────────────────── */}
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#A87E62]/10 px-5 py-2 text-xs font-medium text-[#A87E62]">
              Verified by Trustindex
            </span>
          </div>
        </Reveal>

        {/* ─── Quote Banner ────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] bg-[#A87E62] p-8 text-center text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <Quote className="mx-auto h-10 w-10 text-white/60" />
              <blockquote className="mt-4 font-display text-2xl font-light leading-relaxed sm:text-3xl">
                “Financing does not have to be complicated — it just needs to be
                done right.”
              </blockquote>
              <p className="mt-3 text-white/70">— Jake, Dealership Owner</p>
            </div>
          </section>
        </Reveal>

        {/* ─── Why Choose ByzLoan ────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                Why Choose ByzLoan
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
                Strategic Capital Solutions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                We provide strategic capital solutions built to move businesses
                forward with confidence, clarity, and long‑term partnership.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Target,
                  title: "Transparency",
                  desc: "Clear rates, terms, and expectations",
                },
                {
                  icon: Zap,
                  title: "Speed with Care",
                  desc: "Move quickly without sacrificing guidance.",
                },
                {
                  icon: MessageCircle,
                  title: "Expert Advice",
                  desc: "Match businesses with the right funding option.",
                },
                {
                  icon: Users,
                  title: "Relationship First",
                  desc: "Build long‑standing partnerships, not one‑time transactions.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="rounded-full bg-[#A87E62]/10 p-3 text-[#A87E62]">
                    <item.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-midnight-ink/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ─── Education ────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:text-left">
              <div className="flex-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                  Education
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Confidence At Your Fingertips.
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Make informed decisions with confidence. From step‑by‑step
                  breakdowns to transparent comparisons and real testimonials,
                  everything you need to understand your options lives here.
                </p>
                <Link href="/product">
                  <Button className="mt-6 bg-[#A87E62] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                    View All product HERE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="shrink-0">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#A87E62]/5">
                  <BookOpen
                    className="h-24 w-24 text-[#A87E62]/30"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}
