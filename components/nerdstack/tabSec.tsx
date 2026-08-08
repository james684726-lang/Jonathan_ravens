"use client";

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Wallet,
  Building,
  BarChart3,
  Calendar,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type TabKey = "overview" | "features" | "requirements" | "rates" | "example";

interface Tab {
  id: TabKey;
  label: string;
}

// ─── Background images for each tab ────────────────────────────────
const tabImages: Record<TabKey, string> = {
  overview: "/img/h1.jpg",
  features: "/img/h2.jpg",
  requirements: "/img/h3.jpg",
  rates: "/img/h4.jpg",
  example: "/img/h5.jpg",
};

const tabs: Tab[] = [
  { id: "overview", label: "Things to know" },
  { id: "features", label: "Features & benefits" },
  { id: "requirements", label: "Minimum requirements" },
  { id: "rates", label: "Rates and Fees" },
  { id: "example", label: "LOAN EXAMPLE" },
];

export default function TabSec() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              What You Need To Know
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              An MCA is an advance on future sales (receivables), typically
              repaid automatically from daily/weekly revenue. There are some
              monthly payment advances as well.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Receivables:</strong> You
                  &apos;re selling a portion of future sales, not taking a
                  traditional term loan.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Factor rate:</strong> Pricing
                  is often quoted as a factor (e.g., 1.2x) rather than an APR or
                  &quot;interest rate.&quot;
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">
                    Sales-linked repayment:
                  </strong>{" "}
                  A restaurant uses an MCA to cover payroll during slow weeks
                  and pays back as sales come in.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Speed-first fit:</strong> Works
                  best when fast funding matters more than lowest total cost.
                </span>
              </li>
            </ul>
          </div>
        );

      case "features":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              What Can You Expect
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Built for speed and flexibility when cash flow is uneven or
              time-sensitive.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Clock,
                  title: "Fast funding",
                  desc: "A retailer gets capital quickly to stock up before a holiday rush.",
                },
                {
                  icon: BarChart3,
                  title: "Simplified underwriting",
                  desc: "Approval leans heavily on revenue trends instead of perfect credit.",
                },
                {
                  icon: Wallet,
                  title: "Flexible use",
                  desc: "Funds can go to inventory, marketing, payroll, or urgent repairs without strict use restrictions.",
                },
                {
                  icon: Calendar,
                  title: "Automated payments",
                  desc: "Remittances are typically pulled automatically to reduce manual payment friction.",
                },
                {
                  icon: Building,
                  title: "Uneven cash flow",
                  desc: "A seasonal business uses an MCA to bridge short gaps between strong weeks.",
                  className: "sm:col-span-2",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-lg ${
                    item.className || ""
                  }`}
                >
                  <item.icon className="mb-2 size-5 text-white" />
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "requirements":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Your Minimum Requirements
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: DollarSign,
                  title: "Deposit consistency",
                  desc: "At least $10k per month in gross deposits",
                },
                {
                  icon: Building,
                  title: "Business activity",
                  desc: "A visible operating history (often measured in months) is typically needed.",
                },
                {
                  icon: BarChart3,
                  title: "Bank patterns",
                  desc: "Fewer overdrafts and stable balances improve approval odds.",
                },
                {
                  icon: ShieldCheck,
                  title: "Industry fit",
                  desc: "Some industries may be restricted due to risk or compliance factors.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <item.icon className="size-5 text-white" />
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );

      case "rates":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              What Do The Rates And Fees Look Like?
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Pricing is commonly expressed as a factor rate plus fees rather
              than traditional interest.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Factor rate math",
                  desc: "Total repayment is often advance × factor rate (not 'interest').",
                },
                {
                  title: "Fee structure",
                  desc: "Fewer overdrafts and stable balances improve approval odds.",
                },
                {
                  title: "Time-to-repay impact",
                  desc: "Faster payback can raise effective annualized cost vs longer repayment.",
                },
                {
                  title: "Comparable pricing",
                  desc: "Provide total payback + estimated payment cadence to make offers comparable.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-medium text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "example":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              EXAMPLE: Joe Asks for $50K to buy some new equipment before the
              busy season.
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Advance Amount", value: "$50,000" },
                { label: "Factor Rate", value: "1.24" },
                { label: "Total Repayment", value: "$62,000" },
                { label: "Payment Frequency", value: "Weekly" },
                {
                  label: "Estimated Term",
                  value: "2 Years",
                  className: "sm:col-span-2",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm ${
                    item.className || ""
                  }`}
                >
                  <span className="text-sm font-light text-white/60">
                    {item.label}
                  </span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-white/20 p-6 text-center backdrop-blur-sm">
              <p className="text-sm font-light text-white/70">
                Total Cost of Capital
              </p>
              <p className="text-3xl font-light text-white">$12,000</p>
              <p className="mt-1 text-xs text-white/50">
                ( $62,000 repayment - $50,000 advance )
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonLabel = () => {
    switch (activeTab) {
      case "example":
        return "GET STARTED";
      default:
        return "APPLY TODAY";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#EEDBCC] py-16 sm:py-20">
      {/* Scrollbar styling for the tab bar, in brand color #A87E62 */}
      <style jsx>{`
        .tab-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a87e62 transparent;
        }
        .tab-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .tab-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .tab-scroll::-webkit-scrollbar-thumb {
          background-color: #a87e62;
          border-radius: 9999px;
        }
        .tab-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #96694f;
        }
      `}</style>
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-64 rounded-full bg-[#A87E62]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-[#A87E62]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ─── Header ─── */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#A87E62]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#A87E62]">
            Resource Center
          </span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-midnight-ink sm:text-4xl">
            Things to <span className="text-[#A87E62]">Know</span>
          </h2>
          <p className="mt-2 text-sm text-midnight-ink/50">
            Everything you need to understand about Merchant Cash Advances
          </p>
        </div>

        {/* ─── Tabs ─── */}
        <div className="relative z-20">
          {/* Unified scrollable tab bar — works the same on mobile and desktop */}
          <div className="tab-scroll -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max min-w-full gap-1 rounded-2xl border border-[#EEDBCC] bg-white/70 p-1 backdrop-blur-sm sm:w-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 touch-manipulation whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-light transition-all duration-300 active:scale-95 sm:px-5 ${
                    activeTab === tab.id
                      ? "bg-[#A87E62] text-white shadow-md"
                      : "text-midnight-ink/60 hover:bg-[#EEDBCC]/50 hover:text-midnight-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Content Panel with Background Image ─── */}
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <img
                src={tabImages[activeTab]}
                alt=""
                className="h-full w-full object-cover blur-sm"
                style={{ transform: "scale(1.05)" }}
              />
              {/* 40% #A87E62 color overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(168, 126, 98, 0.4)" }}
              />
              {/* Extra dark gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 text-white sm:p-8">
              {renderContent()}

              {/* CTA Button */}
              <div className="mt-8 flex justify-center border-t border-white/20 pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-light text-[#A87E62] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.25)]"
                >
                  {getButtonLabel()}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}