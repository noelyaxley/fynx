"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, FadeIn } from "@/components/section";
import { Button } from "@/components/button";
import { EnquiryForm } from "@/components/enquiry-form";
import { ModuleAssembly } from "@/components/module-assembly";
import { BackgroundImage } from "@/components/background-image";

/* ============================================
   FYNX Homepage
   Pacing: Hook → Problem → Education → Mid-CTA → Solution → Audiences → Proof → Partners → CTA
   ============================================ */

// ---- Hero ----
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Video hero with static image fallback */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/crane-moment.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        >
          <source src="/images/hero/crane-moment-hero.mp4" type="video/mp4" />
        </video>
        <noscript>
          <img
            src="/images/hero/crane-moment.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
          />
        </noscript>
      </div>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fynx-gold/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-fynx-gold" />
              <span className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-fynx-gold">
                Off-Site Construction Capital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8"
            >
              Your bank funds
              <br />
              slabs and frames.
              <br />
              <span className="text-gradient-gold">Your home starts in a factory.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-fynx-text-secondary max-w-xl mb-10 leading-relaxed"
            >
              FYNX is specialist finance for prefab and modular construction.
              We fund off-site manufacturing milestones — not just what happens
              on your land. Australia-wide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg">
                Talk to FYNX
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/how-it-works" variant="outline" size="lg">
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Animated module assembly diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <ModuleAssembly />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---- Problem Statement with killer stats ----
function Problem() {
  return (
    <Section className="bg-fynx-dark relative overflow-hidden">
      <BackgroundImage src="/images/sections/factory-interior.webp" alt="" opacity={0.06} />
      <SectionLabel>The Problem</SectionLabel>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionTitle>
            Traditional finance wasn&apos;t built for modern construction
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-fynx-text-secondary leading-relaxed text-lg">
              Australian banks still assess construction loans using on-site
              milestones: slab, frame, lock-up, completion. That system was
              designed for homes built stick-by-stick on your block.
            </p>
            <p className="mt-4 text-fynx-text-secondary leading-relaxed text-lg">
              It breaks when your home is manufactured in a factory — where
              substantial value is created before anything appears on your land.
              Borrowers have historically needed to cover{" "}
              <strong className="text-fynx-text">20–90% of the build cost</strong>{" "}
              out of pocket before traditional finance kicks in.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="space-y-6">
            {[
              {
                stat: "~5%",
                label: "of Australian homes are built with prefab or modular methods — low penetration, high policy interest",
                source: "Housing Australia NHIF Review",
              },
              {
                stat: "79,000",
                label: "dwellings short of demand forecast over the Housing Accord period — supply is structurally undersupplied",
                source: "NHSAC State of the Housing System 2025",
              },
              {
                stat: "12 weeks",
                label: "potential factory build time vs 12+ months for traditional on-site construction",
                source: "CommBank / prefabAUS",
              },
              {
                stat: "27%",
                label: "of all company failures in Australia are in construction — lender caution around builder risk is well-founded",
                source: "ASIC 2023-24",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="border-l-2 border-fynx-gold/30 pl-6 py-2"
              >
                <div className="font-display text-3xl font-bold text-fynx-gold mb-1">
                  {item.stat}
                </div>
                <p className="text-sm text-fynx-text-secondary leading-relaxed">
                  {item.label}
                </p>
                <p className="text-xs text-fynx-text-muted mt-1">{item.source}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// ---- The Mismatch ----
function Mismatch() {
  return (
    <Section grid>
      <SectionLabel>Why It Matters</SectionLabel>
      <SectionTitle className="max-w-3xl">
        The financing gap holding back prefab and modular housing
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-fynx-text-secondary text-lg max-w-2xl leading-relaxed">
          Traditional construction lending assumes value is created on your
          land, stage by stage. Prefab and modular homes are built differently —
          substantial value is created off-site, in controlled factory
          environments, before anything appears on your block. One major bank
          has started adapting. The rest of the market has not.
        </p>
      </FadeIn>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.3}>
          <div className="border border-fynx-border p-8 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-fynx-border-light to-transparent" />
            <h3 className="font-display text-lg font-semibold text-fynx-text-muted mb-6">
              Traditional Construction Loan
            </h3>
            <div className="space-y-4">
              {[
                "Slab poured → first draw",
                "Frame erected → second draw",
                "Lock-up stage → third draw",
                "Fit-out stage → fourth draw",
                "Completion → final draw",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-fynx-border flex items-center justify-center text-xs text-fynx-text-muted flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-fynx-text-secondary">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-fynx-text-muted border-t border-fynx-border pt-4">
              All milestones happen on-site. The lender&apos;s security improves
              as construction progresses visibly on the land.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="border border-fynx-gold/30 bg-fynx-gold/[0.02] p-8 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-fynx-gold/50 to-transparent" />
            <h3 className="font-display text-lg font-semibold text-fynx-gold mb-6">
              Modular / Prefab Build
            </h3>
            <div className="space-y-4">
              {[
                "Design finalised → contract signed",
                "Factory slot allocated → manufacture begins",
                "Modules completed in factory",
                "Transport to site → crane & install",
                "Service connection → practical completion",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-fynx-gold/40 bg-fynx-gold/10 flex items-center justify-center text-xs text-fynx-gold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-fynx-text">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-fynx-gold/70 border-t border-fynx-gold/20 pt-4">
              Most value is created off-site. Traditional bank milestones
              don&apos;t map to this delivery model — leaving borrowers exposed.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// ---- Mid-page CTA ----
function MidCTA() {
  return (
    <section className="bg-fynx-dark border-y border-fynx-border">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold">
            Building a prefab or modular home?
          </p>
          <p className="text-fynx-text-secondary text-sm mt-1">
            See if your project fits. No obligation, no commitment.
          </p>
        </div>
        <Button href="/contact">
          See if your project qualifies
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </section>
  );
}

// ---- FYNX Solution ----
function Solution() {
  return (
    <Section>
      <SectionLabel>The FYNX Approach</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Finance that follows the build, wherever it happens
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          FYNX is purpose-built for off-site construction. Our milestone-based
          funding model is designed to track your project from factory floor to
          finished home — not retro-fitted from a traditional loan product.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            number: "01",
            title: "Off-site milestone funding",
            description:
              "Progress payments aligned to real manufacturing milestones — factory production, QA completion, dispatch, delivery, installation. Not slab-frame-lockup.",
          },
          {
            number: "02",
            title: "Manufacturer accreditation",
            description:
              "We're building an accredited network of prefab manufacturers, assessing financial stability, delivery track record, and insurance coverage. Accredited partners mean faster approvals.",
          },
          {
            number: "03",
            title: "Digital process, real speed",
            description:
              "Online pre-qualification, digital document collection, and transparent milestone tracking. Factory slots don't wait for slow bank processes.",
          },
          {
            number: "04",
            title: "Consumer and developer expertise",
            description:
              "Whether you're building one home or a 50-dwelling modular development, FYNX has the product structure and the construction industry understanding.",
          },
          {
            number: "05",
            title: "National reach, specialist focus",
            description:
              "Sydney-based with national coverage. We specialise in modern construction finance — it's all we do, and that focus is the point.",
          },
          {
            number: "06",
            title: "Delivery chain intelligence",
            description:
              "We understand factory production, transport logistics, craning, and installation — not just the loan. That knowledge shapes better underwriting.",
          },
        ].map((item, i) => (
          <FadeIn key={item.number} delay={0.1 * i}>
            <div className="module-card border border-fynx-border p-8 h-full">
              <span className="font-display text-sm text-fynx-gold font-bold">
                {item.number}
              </span>
              <h3 className="font-display text-lg font-semibold mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-fynx-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// ---- Who We Help ----
function Audiences() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>Who We Help</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        Built for the people building Australia&apos;s future housing
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.2}>
          <div className="border border-fynx-border p-10 h-full group hover:border-fynx-gold/40 transition-colors">
            <div className="w-12 h-12 border-2 border-fynx-gold/40 flex items-center justify-center mb-6 group-hover:border-fynx-gold transition-colors">
              <svg className="w-5 h-5 text-fynx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Homeowners &amp; Investors
            </h3>
            <p className="text-fynx-text-secondary leading-relaxed mb-6">
              Building a prefab or modular home on your own land? Financing an
              investment build or granny flat? FYNX structures your loan around
              off-site milestones, so you&apos;re not stuck covering factory
              costs out of pocket while your bank waits for something to appear
              on your block.
            </p>
            <ul className="space-y-2 text-sm text-fynx-text-secondary mb-8">
              {[
                "Prefab and modular homes",
                "Secondary dwellings and granny flats",
                "Land + build or build-only structures",
                "Progress funding during factory manufacture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/prefab-home-finance" variant="outline">
              Explore home finance
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="border border-fynx-border p-10 h-full group hover:border-fynx-gold/40 transition-colors">
            <div className="w-12 h-12 border-2 border-fynx-gold/40 flex items-center justify-center mb-6 group-hover:border-fynx-gold transition-colors">
              <svg className="w-5 h-5 text-fynx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Property Developers
            </h3>
            <p className="text-fynx-text-secondary leading-relaxed mb-6">
              Delivering modular townhouses, infill projects, or affordable
              housing? Most developer finance providers treat modular projects
              like conventional builds. FYNX provides modular-aware underwriting,
              factory-aligned draw schedules, and flexible capital stack solutions.
            </p>
            <ul className="space-y-2 text-sm text-fynx-text-secondary mb-8">
              {[
                "Modular townhouse and infill projects",
                "Affordable and social housing developments",
                "Senior debt and mezzanine placement",
                "Factory-aligned milestone schedules",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/developer-finance" variant="outline">
              Explore developer finance
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// ---- Proof / Credibility ----
function Proof() {
  return (
    <Section grid>
      <SectionLabel>The Market Is Moving</SectionLabel>
      <SectionTitle className="max-w-3xl mb-6">
        The signals are clear. Finance is catching up to construction.
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          We&apos;re not speculating about an imaginary trend. The institutions
          that shape Australian housing are already acting.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "CommBank launched prefab-specific lending",
            description:
              "In 2025, CommBank became the first major bank to join prefabAUS and offer progress payments during off-site manufacture — up to 60% of contract price for general customers, 80% for assessed manufacturers. No other Big Four bank has followed.",
            implication: "The gap between one bank's response and the rest of the market is exactly where FYNX operates.",
          },
          {
            title: "$174M in government MMC funding",
            description:
              "Federal and state governments have invested $174 million in modern methods of construction. Queensland targets 50% MMC in government projects. NSW is mandating prefab as \"building work\" under the Building Code. Victoria funds regulatory parity.",
            implication: "Policy is creating demand for modular housing that the finance system hasn't caught up with.",
          },
          {
            title: "prefabAUS: 180+ members and growing",
            description:
              "Australia's peak prefab body has over 180 member companies and is working with CommBank on a standard-form contract for modular construction — the missing infrastructure that will unlock wider lending.",
            implication: "The ecosystem is professionalising. FYNX is designed to plug into it.",
          },
          {
            title: "APRA reviewing construction risk weights",
            description:
              "The prudential regulator is consulting on more granular risk weights for development lending — potentially making well-structured modular finance more capital-efficient for the institutions behind it.",
            implication: "Regulatory tailwinds are building for specialist construction finance models.",
          },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={0.15 * i}>
            <div className="border border-fynx-border p-8 h-full">
              <h3 className="font-display text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-fynx-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-sm text-fynx-gold leading-relaxed">
                {item.implication}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// ---- Trust Signals ----
function Trust() {
  return (
    <Section className="bg-fynx-dark relative overflow-hidden">
      <BackgroundImage src="/images/textures/abstract-grid.webp" alt="" opacity={0.04} />
      <SectionLabel>Why FYNX</SectionLabel>
      <SectionTitle className="max-w-3xl mb-6">
        Not another generic lender. A specialist platform for modern construction.
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          There are plenty of construction lenders. There is no other Australian
          finance platform built specifically around off-site manufacturing,
          factory milestone verification, and modular delivery logistics. That&apos;s
          the gap FYNX is designed to fill.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Specialist focus",
            description: "100% focused on prefab and modular construction finance — not a bolt-on to a generic home loan",
          },
          {
            label: "National reach",
            description: "Sydney headquarters, serving projects across NSW, Victoria, Queensland, and expanding",
          },
          {
            label: "Modern process",
            description: "Digital-first origination and milestone tracking — factory slots don't wait for slow banks",
          },
          {
            label: "Dual expertise",
            description: "Consumer and developer products under one specialist brand — from single homes to multi-dwelling projects",
          },
        ].map((item, i) => (
          <FadeIn key={item.label} delay={0.1 * i}>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 border border-fynx-gold/30 flex items-center justify-center mx-auto md:mx-0 mb-4">
                <div className="w-2 h-2 bg-fynx-gold" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.label}</h3>
              <p className="text-sm text-fynx-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// ---- Partners Note ----
function Partners() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Strategic Partners</SectionLabel>
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Independent finance. Preferred delivery partners.
          </h2>
          <p className="text-fynx-text-secondary leading-relaxed text-lg mb-6">
            FYNX is an independent finance company. We work with a growing
            network of accredited prefab manufacturers and delivery partners —
            including{" "}
            <a
              href="https://fabulr.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fynx-gold hover:text-fynx-gold-light transition-colors"
            >
              Fabulr
            </a>{" "}
            as a preferred design and delivery partner for modular timber housing.
          </p>
          <p className="text-fynx-text-muted text-sm mb-8">
            FYNX and its delivery partners operate as separate entities with
            independent governance and credit assessment processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors underline underline-offset-4 decoration-fynx-border hover:decoration-fynx-gold">
              More about FYNX
            </Link>
            <Link href="/faq" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors underline underline-offset-4 decoration-fynx-border hover:decoration-fynx-gold">
              Frequently asked questions
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// ---- CTA / Lead Capture ----
function CTASection() {
  return (
    <Section className="bg-fynx-dark relative overflow-hidden" grid>
      <BackgroundImage src="/images/sections/completed-home.webp" alt="" opacity={0.05} />
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Get Started</SectionLabel>
          <SectionTitle>
            See if your project qualifies
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-fynx-text-secondary text-lg leading-relaxed mb-8">
              Whether you&apos;re building a prefab home or developing a modular
              housing project, FYNX can help structure the right finance. Tell
              us about your project and a specialist will be in touch.
            </p>
            <div className="space-y-4 text-sm text-fynx-text-muted">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-fynx-gold" />
                Typically respond within one business day
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-fynx-gold" />
                No obligation, no commitment
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-fynx-gold" />
                Specialists who understand modular construction
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="border border-fynx-border bg-fynx-surface p-8">
            <EnquiryForm source="homepage-cta" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// ---- Page Assembly ----
export function HomeContent() {
  return (
    <>
      <Hero />
      <Problem />
      <Mismatch />
      <MidCTA />
      <Solution />
      <Audiences />
      <Proof />
      <Trust />
      <Partners />
      <CTASection />
    </>
  );
}
