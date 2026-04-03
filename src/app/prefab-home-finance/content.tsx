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
      <BackgroundImage src="/images/hero/crane-moment.webp" alt="" opacity={0.08} priority />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-px bg-fynx-gold" />
          <span className="text-xs font-display font-semibold uppercase tracking-[0.25em] text-fynx-gold">
            For Homeowners &amp; Investors
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl mb-8"
        >
          Finance your prefab home
          <br />
          <span className="text-gradient-gold">from factory to foundation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-fynx-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          Building a prefab or modular home shouldn&apos;t mean fighting your
          lender&apos;s process. FYNX structures your finance around how your home
          is actually manufactured and delivered — not the slab-frame-lockup
          stages your bank was built for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/contact" size="lg">
            See if your project qualifies
          </Button>
          <Button href="/how-it-works" variant="outline" size="lg">
            How it works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <Section className="bg-fynx-dark relative overflow-hidden">
      <BackgroundImage src="/images/details/blueprint-drawing.webp" alt="" opacity={0.05} />
      <SectionLabel>How Construction Loans Work</SectionLabel>
      <SectionTitle className="max-w-3xl">
        First, understand the standard model
      </SectionTitle>
      <FadeIn delay={0.2}>
        <div className="mt-6 text-fynx-text-secondary text-lg max-w-3xl leading-relaxed space-y-4">
          <p>
            A construction loan in Australia works differently from a standard
            home loan. Instead of receiving the full loan amount upfront, funds
            are released in stages — called <strong className="text-fynx-text">progress payments</strong> or{" "}
            <strong className="text-fynx-text">draw-downs</strong> — as
            construction reaches specific milestones on your land.
          </p>
          <p>
            The typical stages are: <strong className="text-fynx-text">slab</strong> (foundation poured),{" "}
            <strong className="text-fynx-text">frame</strong> (structural frame erected),{" "}
            <strong className="text-fynx-text">lock-up</strong> (walls, roof, windows installed),{" "}
            <strong className="text-fynx-text">fit-out</strong> (internal finishing), and{" "}
            <strong className="text-fynx-text">completion</strong>. At each stage, your lender sends a
            valuer to confirm the work before releasing the next payment to your
            builder.
          </p>
          <p>
            This system works reasonably well for traditional on-site
            construction. But it was designed around the assumption that your
            home is built progressively on your land — and that the lender&apos;s
            security (the land plus what&apos;s been built on it) improves
            visibly at each stage.
          </p>
          <p className="text-fynx-gold">
            That assumption breaks down completely when your home is being
            manufactured in a factory, potentially hundreds of kilometres away.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

function WhyDifferent() {
  return (
    <Section>
      <SectionLabel>The Challenge</SectionLabel>
      <SectionTitle className="max-w-3xl">
        Why standard construction loans don&apos;t work for prefab
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          One major bank has begun adapting — CommBank now offers progress
          payments during off-site manufacture for customers using accredited
          manufacturers. But most lenders still require your home to be built
          on-site before they release funds. The rest of the market is largely
          unchanged.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Upfront factory payments",
            description:
              "Prefab manufacturers often require significant deposits before production begins — sometimes 20-50% of the build cost. Most lenders won't fund these payments because nothing has happened on your land yet.",
          },
          {
            title: "No on-site security",
            description:
              "Until your modules are delivered and affixed, the land may be the sole security. Traditional lenders aren't set up for the period when value exists in a factory, not on the block.",
          },
          {
            title: "Misaligned milestones",
            description:
              "Bank draw schedules assume slab-frame-lockup. Your home is being assembled in a factory — those stages don't exist. The bank's process and your builder's process are speaking different languages.",
          },
          {
            title: "Contract complexity",
            description:
              "Standard HIA and Master Builders contracts don't always fit modular delivery. Banks may reject unfamiliar contract structures. A standard-form prefab contract is being developed (via CommBank and prefabAUS) but is not yet published.",
          },
          {
            title: "Valuation uncertainty",
            description:
              "Valuers may not have comparable sales for modular homes in your area. Without clear comparable evidence, conservative valuations can limit how much you can borrow.",
          },
          {
            title: "Time pressure",
            description:
              "Factory slots are scheduled weeks or months in advance. Finance delays can push your build into a later production window, costing you time and potentially money. Fast, modular-aware approvals matter.",
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

function Products() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>Our Products</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        Finance products designed for how prefab homes are actually delivered
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        <FadeIn delay={0.1}>
          <div className="border border-fynx-gold/30 bg-fynx-gold/[0.02] p-8 h-full">
            <h3 className="font-display text-xl font-bold text-fynx-gold mb-2">
              FYNX Home
            </h3>
            <p className="text-xs text-fynx-text-muted mb-4 uppercase tracking-wider">Core product</p>
            <p className="text-fynx-text-secondary leading-relaxed mb-6 text-sm">
              Construction finance for owner-occupiers and investors building
              prefab or modular homes. Structured around off-site milestones
              with digital tracking and manufacturer assessment.
            </p>
            <ul className="space-y-2 text-sm text-fynx-text-secondary">
              {[
                "Land + build or build-only",
                "Off-site milestone funding",
                "Digital pre-qualification",
                "Progress tracking dashboard",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="border border-fynx-border p-8 h-full">
            <h3 className="font-display text-xl font-bold mb-2">
              FYNX Accelerate
            </h3>
            <p className="text-xs text-fynx-text-muted mb-4 uppercase tracking-wider">Accredited partners</p>
            <p className="text-fynx-text-secondary leading-relaxed mb-6 text-sm">
              A faster approval path when you&apos;re working with a
              manufacturer in our accredited network. Pre-approved milestone
              templates, standard contract packs, and higher off-site draw
              percentages.
            </p>
            <ul className="space-y-2 text-sm text-fynx-text-secondary">
              {[
                "Faster approvals",
                "Higher off-site funding",
                "Standard contract pack",
                "Pre-approved milestones",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="border border-fynx-border p-8 h-full">
            <h3 className="font-display text-xl font-bold mb-2">
              FYNX Rescue
            </h3>
            <p className="text-xs text-fynx-text-muted mb-4 uppercase tracking-wider">Refinance &amp; restructure</p>
            <p className="text-fynx-text-secondary leading-relaxed mb-6 text-sm">
              Already been knocked back by a bank? Project stalled because your
              lender won&apos;t fund factory milestones? FYNX Rescue is designed
              for borrowers who need specialist placement or restructuring to
              get their prefab project moving.
            </p>
            <ul className="space-y-2 text-sm text-fynx-text-secondary">
              {[
                "Specialist placement",
                "Refinance from unsuitable lender",
                "Restructured milestone schedule",
                "Manual case management",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function HowFynxHelps() {
  return (
    <Section>
      <SectionLabel>The FYNX Process</SectionLabel>
      <SectionTitle className="max-w-3xl">
        How your finance works with FYNX
      </SectionTitle>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-fynx-text-secondary text-lg max-w-2xl leading-relaxed mb-16">
          FYNX understands how prefab and modular homes are manufactured,
          transported, and installed. Your finance reflects that reality.
          <Link href="/how-it-works" className="text-fynx-gold hover:text-fynx-gold-light ml-1">
            See the full process →
          </Link>
        </p>
      </FadeIn>

      <div className="space-y-8">
        {[
          {
            step: "01",
            title: "Pre-qualification",
            description:
              "Tell us about your project — the land, the manufacturer, the build timeline. We assess your situation and give you a clear picture of what's possible. This can start online or with a phone call.",
          },
          {
            step: "02",
            title: "Off-site funding",
            description:
              "Progress payments during factory manufacture — not just when work happens on your land. With accredited manufacturers, the process is faster and funding percentages can be higher.",
          },
          {
            step: "03",
            title: "Milestone tracking",
            description:
              "Digital milestone verification keeps your project moving. Factory completion, dispatch, delivery, installation — each stage triggers the next draw. No waiting for slow site inspections.",
          },
          {
            step: "04",
            title: "Completion and conversion",
            description:
              "Once your home is installed, connected, and certified, your construction finance converts to a standard arrangement.",
          },
        ].map((item, i) => (
          <FadeIn key={item.step} delay={0.1 * i}>
            <div className="flex gap-8 items-start border-l-2 border-fynx-gold/20 pl-8 py-4 hover:border-fynx-gold/60 transition-colors">
              <span className="font-display text-2xl font-bold text-fynx-gold flex-shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-fynx-text-secondary leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function WhoItsFor() {
  return (
    <Section className="bg-fynx-dark">
      <SectionLabel>Who This Is For</SectionLabel>
      <SectionTitle className="max-w-3xl mb-16">
        Prefab home finance for real projects
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Owner-occupiers",
            items: [
              "Building a prefab or modular primary residence",
              "Land already owned or being purchased",
              "Working with a manufacturer or kit-home supplier",
            ],
          },
          {
            title: "Investors",
            items: [
              "Modular investment properties",
              "Granny flats and secondary dwellings",
              "Regional or rural modular builds",
            ],
          },
          {
            title: "Kit home buyers",
            items: [
              "Flat-pack or panelised home systems",
              "Hybrid builds with off-site components",
              "Owner-builder scenarios with prefab elements",
            ],
          },
        ].map((group, i) => (
          <FadeIn key={group.title} delay={0.1 * i}>
            <div className="border border-fynx-border p-8 h-full">
              <h3 className="font-display text-lg font-semibold mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-fynx-text-secondary">
                    <span className="w-1.5 h-1.5 bg-fynx-gold mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <p className="mt-8 text-sm text-fynx-text-muted text-center">
          Looking for developer finance for a multi-dwelling modular project?{" "}
          <Link href="/developer-finance" className="text-fynx-gold hover:text-fynx-gold-light">
            See developer finance →
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
          <SectionLabel>Start Here</SectionLabel>
          <SectionTitle>
            See if your prefab project qualifies
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-fynx-text-secondary text-lg leading-relaxed mb-6">
              Tell us about your build and we&apos;ll let you know how FYNX can
              help. No obligation, no pressure — just a straight conversation
              with someone who understands modular construction finance.
            </p>
            <p className="text-sm text-fynx-text-muted">
              Have questions first?{" "}
              <Link href="/faq" className="text-fynx-gold hover:text-fynx-gold-light">
                Read the FAQ →
              </Link>
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="border border-fynx-border bg-fynx-surface p-8">
            <EnquiryForm defaultAudience="homeowner" source="prefab-home-finance" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function PrefabHomeFinanceContent() {
  return (
    <>
      <Hero />
      <Education />
      <WhyDifferent />
      <Products />
      <HowFynxHelps />
      <WhoItsFor />
      <CTA />
    </>
  );
}
