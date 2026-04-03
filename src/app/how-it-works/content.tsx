"use client";

import Link from "next/link";
import { Section, SectionLabel, SectionTitle, FadeIn } from "@/components/section";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/background-image";

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
            Process
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl mb-8"
        >
          How FYNX works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-fynx-text-secondary max-w-2xl leading-relaxed"
        >
          A finance process designed around modular and prefab construction —
          not retrofitted from traditional lending. The steps below apply to
          both individual homeowners and property developers, with differences
          noted where they matter.
        </motion.p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your project",
      description:
        "Start with a conversation. We'll learn about your project — the land, the build method, the manufacturer, the timeline.",
      homeowner: "This can start online or with a phone call. We'll ask about your land, your chosen manufacturer, and your financial position.",
      developer: "For developers: we'll also discuss the capital structure, presale position, and delivery timeline across your project.",
    },
    {
      number: "02",
      title: "We assess the fit",
      description:
        "FYNX reviews your project against our modular-aware credit framework. We look at the site, the build structure, the manufacturer's track record, and your financial position.",
      homeowner: "If your chosen manufacturer is in our accredited network, the process is faster via FYNX Accelerate.",
      developer: "For multi-dwelling projects, we assess feasibility, delivery risk, capital stack, and exit strategy through a modular lens.",
    },
    {
      number: "03",
      title: "Structured approval",
      description:
        "We structure a finance package around your specific delivery milestones — not generic bank stages. Off-site manufacture, transport, installation, and completion each have their own draw schedule.",
      homeowner: "For homeowners, this typically means a single loan covering land (if needed), factory, delivery, and completion.",
      developer: "For developers, we can structure across the capital stack: senior debt via FYNX Develop, mezzanine and equity via FYNX Stack.",
    },
    {
      number: "04",
      title: "Factory and site funding",
      description:
        "As your project progresses, FYNX releases funds at verified milestones. Factory completion, dispatch, delivery, craning, and service connection — each step triggers the next draw.",
      homeowner: "Digital milestone verification keeps things moving without waiting for slow site inspections.",
      developer: "For multi-dwelling projects, draw controls track both factory production across modules and parallel on-site works.",
    },
    {
      number: "05",
      title: "Completion and settlement",
      description:
        "Once the home is installed, connected, and certified, your construction finance converts to a standard arrangement.",
      homeowner: "Clean handover from construction loan to standard home loan.",
      developer: "For developers, we support exit through presale settlement, refinance, or residual stock finance.",
    },
  ];

  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>The Process</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        Five stages from enquiry to completion
      </SectionTitle>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={0.1 * i}>
            <div className="grid md:grid-cols-[100px_1fr] gap-8 py-12 border-b border-fynx-border last:border-b-0">
              <div className="font-display text-4xl font-bold text-fynx-gold/30">
                {step.number}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-fynx-text-secondary leading-relaxed text-lg mb-4 max-w-2xl">
                  {step.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-fynx-border pl-4">
                    <span className="text-xs font-display uppercase tracking-wider text-fynx-text-muted block mb-1">Homeowners</span>
                    <p className="text-sm text-fynx-text-muted leading-relaxed">{step.homeowner}</p>
                  </div>
                  <div className="border-l-2 border-fynx-gold/30 pl-4">
                    <span className="text-xs font-display uppercase tracking-wider text-fynx-gold/60 block mb-1">Developers</span>
                    <p className="text-sm text-fynx-text-muted leading-relaxed">{step.developer}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Milestones() {
  return (
    <Section grid className="relative overflow-hidden">
      <BackgroundImage src="/images/details/precision-connection.webp" alt="" opacity={0.04} />
      <SectionLabel>Milestone Engine</SectionLabel>
      <SectionTitle className="max-w-3xl mb-6">
        Funding milestones that match your build
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="text-fynx-text-secondary text-lg max-w-2xl mb-16 leading-relaxed">
          Traditional lenders use 5 generic stages. FYNX supports a richer
          milestone model tailored to off-site construction — tracking value
          creation from the factory floor to practical completion.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-px bg-fynx-border">
        {[
          { label: "Design finalisation", phase: "Pre-production" },
          { label: "Contract execution", phase: "Pre-production" },
          { label: "Factory slot allocation", phase: "Production" },
          { label: "Manufacture commencement", phase: "Production" },
          { label: "Module completion & QA", phase: "Production" },
          { label: "Dispatch from factory", phase: "Logistics" },
          { label: "Delivery to site", phase: "Logistics" },
          { label: "Craning & installation", phase: "On-site" },
          { label: "Service connection", phase: "On-site" },
          { label: "Affixation & certification", phase: "Completion" },
          { label: "Practical completion", phase: "Completion" },
          { label: "Final handover", phase: "Completion" },
        ].map((item, i) => (
          <FadeIn key={item.label} delay={0.05 * i}>
            <div className="bg-fynx-black p-6">
              <span className="text-[10px] font-display uppercase tracking-wider text-fynx-gold/60 mb-2 block">
                {item.phase}
              </span>
              <span className="text-sm text-fynx-text">{item.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="bg-fynx-dark">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Ready?</SectionLabel>
        <SectionTitle className="mb-6">
          Start with a conversation
        </SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-fynx-text-secondary text-lg leading-relaxed mb-10">
            No obligation. No pressure. Just a straight conversation with
            someone who understands how modular construction finance works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Talk to FYNX
            </Button>
            <Button href="/faq" variant="outline" size="lg">
              Read the FAQ
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/prefab-home-finance" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              Prefab home finance →
            </Link>
            <Link href="/developer-finance" className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors">
              Developer finance →
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function HowItWorksContent() {
  return (
    <>
      <Hero />
      <Process />
      <Milestones />
      <CTA />
    </>
  );
}
