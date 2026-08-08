import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  BadgeCheck,
  Users,
  Clock,
  Sparkles,
  Handshake,
  TrendingUp,
  FileText,
  Target,
  CheckCircle,
  Zap,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — ByzLoan",
  description:
    "Meet Jonathan Ravens, your local mortgage expert. Learn our story, mission, and why businesses choose ByzLoan for funding.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Your Trusted Funding Partner"
      description="Expert guidance, transparent terms, and a process built for business owners."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── HERO SECTION ─────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#A87E62] shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            {/* Decorative blurs */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A87E62]/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#A87E62]/5 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:justify-between">
              {/* Left Content */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white">
                  HI, I'M
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-midnight-ink sm:text-5xl">
                  Jonathan Ravens,
                  <br />
                  <span className="text-white">Your Local Mortgage Expert</span>
                </h1>
                <p className="max-w-2xl text-sm text-midnight-ink/70 sm:text-base">
                  Jonathan Ravens, Owner of ByzLoan Corp., has been in the
                  lending industry since 2003. Over the years, he has emerged as
                  a trusted funding adviser to consumers and businesses across
                  the country.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                  <Link href="/contact">
                    <Button className="bg-black text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                      Get Pre-Approved
                    </Button>
                  </Link>
                  <a href="tel:+18007105185">
                    <Button
                      variant="outline"
                      className="border-[#A87E62] text-[#A87E62] transition-all duration-300 hover:bg-[#A87E62] hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Jonathan
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="shrink-0">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-96 lg:w-96">
                  <div className="absolute inset-0 rounded-full bg-[#A87E62]/10" />
                  <Image
                    src="/img/dp1.png"
                    alt="Jonathan Ravens"
                    fill
                    className="rounded-full h-52 w-64 border-4 border-[#A87E62]/20 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-2 shadow-lg">
                    <BadgeCheck className="h-7 w-7 text-[#A87E62]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── OUR STORY ────────────────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                  Our Story
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Built for Business Owners
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  ByzLoan was opened in March of 2018 with the purpose of giving
                  business owners access to capital in a timely fashion for
                  their business expansion needs.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  From day one, our focus has been simple: help as many business
                  owners as possible by providing practical funding solutions,
                  clear guidance, and a process that respects how valuable time
                  is when running a business.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  What started as a mission to help businesses access capital
                  has grown into a long-term, relationship-driven company
                  serving thousands of clients nationwide.
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our story"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── VALUES GRID ──────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FileText,
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
              icon: Handshake,
              title: "Relationship First",
              desc: "Build long-standing partnerships, not one-time transactions.",
            },
            {
              icon: TrendingUp,
              title: "Business Growth",
              desc: "We support companies as they grow and evolve.",
              className: "sm:col-span-2 lg:col-span-1",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 70}>
              <div
                className={`flex flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 ${
                  item.className || ""
                }`}
              >
                <item.icon className="h-7 w-7 text-[#A87E62]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-xl font-semibold text-midnight-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-midnight-ink/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── OUR HISTORY ──────────────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                  Our History
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Experience You Can Trust
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Jonathan Ravens, Owner of ByzLoan Corp., has been in the
                  lending industry since 2003. Over the years, he has emerged as
                  a trusted funding adviser to consumers and businesses across
                  the country.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Jonathan founded ByzLoan to create a better funding
                  experience. An experience that's centered on expert
                  consultation, honest communication, and helping business
                  owners choose the right product for their needs and situation.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  His experience and client-first approach continue to shape
                  ByzLoan's commitment to trust, transparency, and long-term
                  relationships.
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our history"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── WHY CHOOSE BIZLOAN ───────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
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
          </section>
        </Reveal>

        {/* ─── OUR MISSION ───────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-[#A87E62] p-8 text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Our Mission
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold">
                Take Your Business <br />to the next level.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 leading-relaxed">
                Our mission is to push your business to the next level by making
                the business line of credit available to you without sweating
                it.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                How It Works
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Simple, Fast, Transparent
              </h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Apply Online In Minutes",
                  desc: "Start with a simple application – no hidden paperwork.",
                },
                {
                  icon: Clock,
                  title: "Decision as fast as 24 hours",
                  desc: "Get a response quickly so you can plan ahead.",
                },
                {
                  icon: Sparkles,
                  title: "Receive between $25k–$5m+",
                  desc: "Access the capital you need to grow your business.",
                },
              ].map((step, idx) => (
                <Reveal key={step.title} delay={idx * 70}>
                  <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A87E62]/10 text-[#A87E62]">
                      <step.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-midnight-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-midnight-ink/60">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-[#A87E62] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}