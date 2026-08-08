"use client";
import { Reveal } from "@/components/nerdstack/reveal";
import { BookOpen, ArrowRight, PlayCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Terminal, Code2, AtSign, Rss } from "lucide-react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Cards from "../cards";
const socialLinks = [
  {
    id: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/byzloan",
    label: "Facebook",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/byzloan_corp/",
    label: "Instagram",
  },
  // {
  //   id: "google",
  //   icon: FaGoogle,
  //   url: "", // add your Google Business profile URL
  //   label: "Google",
  // },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/byzloan-corp/",
    label: "LinkedIn",
  },
  {
    id: "twitter",
    icon: FaXTwitter, // ← new X icon
    url: "https://x.com/byzloan_corp",
    label: "X", // label changed to "X"
  },
];

const columns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Tracing", href: "/product" },
      { label: "Reviews", href: "/product" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "product",
    links: [
      { label: "Documentation", href: "/about" },
      { label: "Guides", href: "/about" },
      { label: "API reference", href: "/about" },
      { label: "contact", href: "/contact" },
      { label: "Status", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Customers", href: "/customers" },
      { label: "Security", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function CtaFooter() {
  return (
    <section className="px-4 pb-2">
      {/* CTA stage */}
      <div className="relative mx-auto mb-8 max-w-[1000px] overflow-hidden rounded-[20px] border border-border bg-linen-base px-6 py-20 text-center">
        <div
          aria-hidden
          className="ns-halo pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--color-core-coral) 0%, var(--color-cache-sand) 55%, transparent 75%)",
            opacity: 0.5,
          }}
        />
        <Reveal>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <section className="rounded-[24px]  p-8  hover:-translate-y-1 sm:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="rounded-full bg-[#A87E62]/10 p-3">
                  <BookOpen
                    className="h-8 w-8 text-[#A87E62]"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Label */}
                <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#A87E62]">
                  Education
                </span>

                {/* Heading */}
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-midnight-ink sm:text-4xl">
                  Confidence At Your Fingertips.
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                  Make informed decisions with confidence. From step‑by‑step
                  breakdowns to transparent comparisons and real testimonials,
                  everything you need to understand your options lives here.
                </p>

                {/* Primary CTA */}
                <Link
                  href="/product"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#A87E62] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View All Resources HERE
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTAs */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="//contact"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#A87E62]"
                  >
                    <PlayCircle className="h-4 w-4" strokeWidth={1.6} />
                    HOW IT WORKS
                  </Link>
                  <span className="text-midnight-ink/20">•</span>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#A87E62]"
                  >
                    <HelpCircle className="h-4 w-4" strokeWidth={1.6} />
                    FREQUENTLY ASKED QUESTIONS
                  </Link>
                </div>
              </div>
            </section>
            <Cards />
          </div>
        </Reveal>
      </div>

      {/* Footer card */}
      <footer
        className="mx-auto max-w-[1000px] rounded-[20px] border border-border bg-[#A87E62] p-8 sm:p-12"
        style={{ boxShadow: "var(--shadow-card-soft)" }}
      >
        <div className="grid gap-10 flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex  items-center justify-center rounded-lg bg-midnight-ink text-paper-cream">
                <Image
                  src="/img/jr.png"
                  alt="Logo"
                  width={120}
                  height={30}
                  className="h-16 w-28"
                />
              </span>
            </a>
            <p className="mt-4 max-w-[240px] text-[14px] text-white font-light leading-[1.5]">
              Engineering clarity for complex code.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-lift-white text-midnight-ink transition hover:bg-[#A87E62] hover:text-lift-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
                {col.title}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] font-light text-white transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <span
            className="text-[13px] font-light"
            style={{ color: "#231f23a3" }}
          >
            © {new Date().getFullYear()} Nerdstack Labs. All rights reserved.
          </span>
          <span className="rounded-full bg-cache-sand px-3 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-white">
            v2.4.1
          </span>
        </div>
      </footer>
    </section>
  );
}
