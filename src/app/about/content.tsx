"use client";

import Link from "next/link";
import { Section, SectionLabel, SectionTitle, FadeIn } from "@/components/section";
import { Button } from "@/components/button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-px bg-fynx-gold" />
          <span className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-fynx-gold">
            About
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl mb-8"
        >
          The finance layer for
          <br />
          <span className="text-gradient-gold">modern construction</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-fynx-text-secondary max-w-2xl leading-relaxed"
        >
          FYNX exists because Australia&apos;s construction industry is changing
          faster than its finance products. We&apos;re building the specialist
          platform to close that gap.
        </motion.p>
      </div>
    </section>
  );
}

function WhyWeExist() {
  return (
    <Section className="bg-fynx-dark">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>The Opportunity</SectionLabel>
          <SectionTitle>
            Australia needs more homes. It needs to build them differently.
          </SectionTitle>
        </div>
        <FadeIn delay={0.2}>
          <div className="space-y-6 text-fynx-text-secondary leading-relaxed text-lg">
            <p>
              Australia is building fewer homes than it needs. The National
              Housing Supply and Affordability Council projects a shortfall of
              nearly 80,000 dwellings over the Housing Accord period. Labour is
              scarce, costs are rising, and traditional delivery is under
              strain.
            </p>
            <p>
              Prefab and modular construction offers a credible alternative —
              faster delivery, better cost control, factory-grade quality,
              reduced waste. But the finance system hasn&apos;t caught up.
            </p>
            <p>
              Traditional construction lenders still assess loans using on-site
              milestones. That creates real problems when most of the value is
              being created off-site, in a factory, before the home reaches the
              land.
            </p>
            <p className="text-fynx-gold font-medium">
              FYNX is built to solve exactly this mismatch.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function WhatWeAre() {
  return (
    <Section>
      <SectionLabel>What FYNX Is</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        An independent finance platform for modern construction
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn delay={0.2}>
          <div>
            <h3 className="font-display text-xl font-bold mb-4">We are</h3>
            <ul className="space-y-3">
              {[
                "A specialist finance platform focused on prefab and modular construction",
                "An independent company with separate governance and credit assessment",
                "Sydney-based with national coverage across Australia",
                "Experienced in construction delivery, property development, and structured finance",
                "Technology-led with digital origination and milestone tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-fynx-text-secondary">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div>
            <h3 className="font-display text-xl font-bold mb-4">We are not</h3>
            <ul className="space-y-3">
              {[
                "A generic mortgage broker or comparison site",
                "A captive finance arm of any builder or manufacturer",
                "A traditional bank with a modular add-on",
                "A tech-only platform without real finance expertise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-fynx-text-muted">
                  <span className="w-1.5 h-1.5 bg-fynx-border mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Separation() {
  return (
    <Section className="bg-fynx-dark">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Independence</SectionLabel>
        <SectionTitle className="mb-8">
          FYNX and its delivery partners
        </SectionTitle>
        <FadeIn delay={0.2}>
          <div className="space-y-6 text-fynx-text-secondary leading-relaxed text-lg">
            <p>
              FYNX works closely with accredited prefab manufacturers and
              delivery partners, including{" "}
              <a
                href="https://fabulr.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fynx-gold hover:text-fynx-gold-light transition-colors"
              >
                Fabulr
              </a>{" "}
              as a preferred partner for modular timber housing design and delivery.
            </p>
            <p>
              However, FYNX operates as an independent entity with its own
              governance, credit assessment processes, and customer relationships.
              This separation is intentional — it ensures that finance decisions
              are made independently of delivery relationships, protecting both
              borrowers and the integrity of the credit process.
            </p>
            <p>
              We believe this independence makes FYNX a stronger, more
              trustworthy finance partner for everyone in the ecosystem:
              borrowers, developers, manufacturers, brokers, and funding partners.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section grid>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Connect</SectionLabel>
        <SectionTitle className="mb-6">Work with FYNX</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-fynx-text-secondary text-lg leading-relaxed mb-10">
            Whether you&apos;re a homeowner, developer, broker, or manufacturer —
            if you&apos;re involved in modern construction and need specialist
            finance, we should talk.
          </p>
          <Button href="/contact" size="lg">
            Start a conversation
          </Button>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/prefab-home-finance" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              Prefab home finance →
            </Link>
            <Link href="/developer-finance" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              Developer finance →
            </Link>
            <Link href="/how-it-works" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              How it works →
            </Link>
            <Link href="/faq" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              FAQ →
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function AboutContent() {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <WhatWeAre />
      <Separation />
      <CTA />
    </>
  );
}
