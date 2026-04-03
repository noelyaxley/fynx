"use client";

import Link from "next/link";
import { Section, SectionLabel, SectionTitle, FadeIn } from "@/components/section";
import { Button } from "@/components/button";
import { EnquiryForm } from "@/components/enquiry-form";
import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/background-image";

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <BackgroundImage src="/images/sections/townhouse-dev.webp" alt="" opacity={0.08} priority />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-px bg-fynx-gold" />
          <span className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-fynx-gold">
            For Property Developers
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl mb-8"
        >
          Developer finance for
          <br />
          <span className="text-gradient-gold">modular residential projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-fynx-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          Construction finance built for developers using modern methods of
          construction. FYNX understands factory production timelines, modular
          delivery logistics, and capital stack complexity — not just property
          collateral and presale coverage.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button href="/contact" size="lg">
            Discuss your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>What&apos;s Broken</SectionLabel>
      <SectionTitle className="max-w-3xl">
        The developer finance problems modular projects actually face
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          There is no shortage of capital in Australian development finance.
          Banks, private credit, mezzanine providers — the market is active.
          But almost none of it is built around the specific realities of
          modular delivery. These are the problems developers actually hit.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Presale hurdles that don't fit modular exit strategies",
            description:
              "Banks historically targeted 100% presale coverage for development debt. APRA clarified in 2025 that this is market practice, not a prudential minimum — but bank behaviour hasn't changed. Modular projects with faster delivery can support different exit logic, but standard underwriting doesn't recognise it.",
          },
          {
            title: "Slow approvals when factory slots are on the clock",
            description:
              "Factory production is scheduled. A 6-week bank credit process can push your project into a later production window, adding months. When your delivery advantage is speed, your finance can't be the bottleneck.",
          },
          {
            title: "Underwriting models blind to off-site delivery",
            description:
              "Most development lenders treat modular projects like conventional builds — same draw schedules, same monitoring, same milestones. They don't account for factory production risk, manufacturer concentration, or parallel site and off-site timelines.",
          },
          {
            title: "Capital stack complexity with limited options",
            description:
              "Smaller developers often need more than senior debt — mezzanine, preferred equity, residual stock finance. Finding these layers from providers who understand modular delivery adds another level of friction.",
          },
          {
            title: "Short tenors on land and pre-development",
            description:
              "Land facilities and pre-development loans are often short-dated, creating refinancing risk before you even start building. For modular projects with planning complexity, this creates unnecessary pressure.",
          },
          {
            title: "Weak feasibility under current cost/finance pressure",
            description:
              "Construction costs have risen. Finance costs remain elevated. Feasibility margins are tight. Modular delivery can improve the cost equation — but only if the finance structure recognises the delivery advantage.",
          },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={0.1 * i}>
            <div className="border border-fynx-border p-6 h-full">
              <h3 className="font-display font-semibold mb-3">{item.title}</h3>
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

function Differentiation() {
  return (
    <Section className="relative overflow-hidden">
      <BackgroundImage src="/images/sections/factory-interior.webp" alt="" opacity={0.05} />
      <SectionLabel>How FYNX Is Different</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Not another private credit provider with a construction add-on
      </SectionTitle>
      <FadeIn delay={0.2}>
        <div className="mt-6 text-fynx-text-secondary text-lg max-w-3xl leading-relaxed space-y-4 mb-16">
          <p>
            The Australian development finance market has strong players —
            private credit managers, specialist non-bank lenders, development
            finance brokers. They&apos;re generally good at capital stack
            structuring, commercial underwriting, and speed versus banks.
          </p>
          <p>
            But they are generally weaker at modular-native underwriting,
            factory-side milestone finance, digital borrower experience, and
            integrated project monitoring that tracks production data rather
            than just site inspections.
          </p>
          <p className="text-fynx-gold">
            FYNX is purpose-built for this gap — specialist developer finance
            that speaks the language of off-site manufacturing, not just
            property collateral.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.3}>
          <div className="border border-fynx-border p-8">
            <h3 className="font-display font-semibold text-fynx-text-muted mb-6">
              Standard Development Finance
            </h3>
            <ul className="space-y-3 text-sm text-fynx-text-muted">
              {[
                "Property-as-collateral focused",
                "Traditional site milestones for draws",
                "Generic construction monitoring",
                "Presale-heavy underwriting",
                "Manual, broker-dependent process",
                "No factory-side visibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-border mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="border border-fynx-gold/30 bg-fynx-gold/[0.02] p-8">
            <h3 className="font-display font-semibold text-fynx-gold mb-6">
              FYNX Developer Finance
            </h3>
            <ul className="space-y-3 text-sm text-fynx-text">
              {[
                "Modular-aware underwriting from day one",
                "Factory-aligned draw schedules",
                "Production data-driven monitoring",
                "Flexible presale logic for modular exits",
                "Digital origination and milestone tracking",
                "Manufacturer accreditation and risk scoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Products() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>Products</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        Structured finance for modular development
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "FYNX Develop",
            subtitle: "Construction finance",
            description:
              "Senior construction finance with modular-aware milestone schedules, factory monitoring, and draw controls aligned to off-site production.",
            features: [
              "Land + construction or construction-only",
              "Modular-aligned draw schedules",
              "Factory progress monitoring",
              "Flexible presale approaches where justified",
            ],
          },
          {
            title: "FYNX Stack",
            subtitle: "Capital structuring",
            description:
              "Layered capital solutions for developers who need more than senior debt. Structured finance across the capital stack.",
            features: [
              "Senior debt placement",
              "Mezzanine and preferred equity",
              "Residual stock and take-out support",
              "Capital partner network access",
            ],
          },
          {
            title: "FYNX Community",
            subtitle: "Affordable & social housing",
            description:
              "Specialist finance for modular affordable, social, and community housing projects — including those with government-linked capital or institutional partnerships.",
            features: [
              "Blended capital support",
              "NHIF and AHBA-aware structuring",
              "Community housing provider partnerships",
              "Regional workforce housing",
            ],
          },
        ].map((product, i) => (
          <FadeIn key={product.title} delay={0.1 * i}>
            <div className="border border-fynx-border p-8 h-full hover:border-fynx-gold/40 transition-colors">
              <h3 className="font-display text-xl font-bold text-fynx-gold mb-1">
                {product.title}
              </h3>
              <p className="text-xs text-fynx-text-muted mb-4 uppercase tracking-wider">
                {product.subtitle}
              </p>
              <p className="text-fynx-text-secondary leading-relaxed mb-6 text-sm">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-fynx-text-secondary">
                    <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function MarketContext() {
  return (
    <Section>
      <SectionLabel>Market Context</SectionLabel>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionTitle>
            The numbers behind the opportunity
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-fynx-text-secondary leading-relaxed text-lg">
              Australia is structurally undersupplied. Modular construction
              offers genuine speed and productivity advantages. Government
              policy is moving in this direction. But the developer finance
              market hasn&apos;t specialised around it yet.
            </p>
            <p className="mt-4 text-fynx-text-secondary leading-relaxed text-lg">
              That&apos;s the gap FYNX is designed to fill — and these are the
              numbers that frame it.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="space-y-6">
            {[
              {
                stat: "177,000",
                label: "dwellings completed in 2024 against ~223,000 underlying demand",
                source: "NHSAC 2025",
              },
              {
                stat: "20-50%",
                label: "potential reduction in build times with modular construction methods",
                source: "NHSAC / overseas evidence",
              },
              {
                stat: "65%",
                label: "typical maximum LVR observed in bank development lending",
                source: "APRA CRE review",
              },
              {
                stat: "$174M",
                label: "in federal and state government funding for modern methods of construction",
                source: "prefabAUS 2025",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="border-l-2 border-fynx-gold/30 pl-6 py-2"
              >
                <div className="font-display text-3xl font-bold text-fynx-gold mb-1">
                  {item.stat}
                </div>
                <p className="text-sm text-fynx-text-secondary">{item.label}</p>
                <p className="text-xs text-fynx-text-muted mt-1">{item.source}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function ProjectTypes() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>Project Types</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        What kinds of projects FYNX is designed for
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Modular townhouses",
            description: "Infill and greenfield modular townhouse developments. 3–50+ dwellings.",
          },
          {
            title: "Affordable housing",
            description: "Social and affordable modular projects, including government-linked programs and NHIF-backed developments.",
          },
          {
            title: "Regional housing",
            description: "Workforce and regional housing where modular delivery solves logistics and labour challenges.",
          },
          {
            title: "Medium density",
            description: "Walk-up apartments and medium-density modular residential projects.",
          },
          {
            title: "Mixed-use modular",
            description: "Ground-floor commercial with modular residential above, where the numbers work.",
          },
          {
            title: "Build-to-rent",
            description: "Institutional-quality modular BTR projects with long-term income focus.",
          },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={0.1 * i}>
            <div className="module-card border border-fynx-border p-6 h-full">
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-fynx-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <p className="mt-8 text-sm text-fynx-text-muted text-center">
          Building a single prefab home?{" "}
          <Link href="/prefab-home-finance" className="text-fynx-gold hover:text-fynx-gold-light">
            See prefab home finance →
          </Link>
          {" · "}
          Want to understand the process?{" "}
          <Link href="/how-it-works" className="text-fynx-gold hover:text-fynx-gold-light">
            How it works →
          </Link>
        </p>
      </FadeIn>
    </Section>
  );
}

function CTA() {
  return (
    <Section grid>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Get Started</SectionLabel>
          <SectionTitle>
            Discuss your modular development
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-fynx-text-secondary text-lg leading-relaxed mb-6">
              Tell us about your project — site, delivery model, timeline, and
              capital requirements. A FYNX specialist will review and come back
              with an informed view of how we can help.
            </p>
            <p className="text-sm text-fynx-text-muted mb-6">
              Confidential. No obligation. Specialist construction finance
              expertise from the first conversation.
            </p>
            <p className="text-sm text-fynx-text-muted">
              Questions?{" "}
              <Link href="/faq" className="text-fynx-gold hover:text-fynx-gold-light">
                Read the FAQ →
              </Link>
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="border border-fynx-border bg-fynx-surface p-8">
            <EnquiryForm defaultAudience="developer" source="developer-finance" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function DeveloperFinanceContent() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Differentiation />
      <Products />
      <MarketContext />
      <ProjectTypes />
      <CTA />
    </>
  );
}
