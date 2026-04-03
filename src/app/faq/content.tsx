"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionLabel, SectionTitle, FadeIn } from "@/components/section";
import { Button } from "@/components/button";

interface FAQ {
  q: string;
  a: ReactNode;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

const faqs: FAQCategory[] = [
  {
    category: "Prefab & Modular Home Finance",
    questions: [
      {
        q: "Can I get a construction loan for a prefab or modular home?",
        a: (
          <>
            Yes. While traditional construction loans can be harder to access for
            prefab builds, FYNX specialises in exactly this type of finance. We
            structure loans around off-site manufacturing milestones, so your
            funding matches how your home is actually being built — not how a
            conventional house would be.{" "}
            <Link href="/prefab-home-finance" className="text-fynx-gold hover:text-fynx-gold-light">
              Learn more about prefab home finance →
            </Link>
          </>
        ),
      },
      {
        q: "Can I borrow while my home is being built off-site in a factory?",
        a: (
          <>
            This is one of the core problems FYNX solves. Traditional lenders
            often won&apos;t release funds until work happens on your land. FYNX
            provides progress funding during the off-site manufacturing process,
            particularly when you&apos;re working with an accredited manufacturer
            in our network. One major bank (CommBank) has begun offering similar
            capability, but the rest of the market is largely unchanged.{" "}
            <Link href="/how-it-works" className="text-fynx-gold hover:text-fynx-gold-light">
              See how our milestone funding works →
            </Link>
          </>
        ),
      },
      {
        q: "Can I use my land as security for a modular home loan?",
        a: "Yes. Your land forms part of the security for the finance arrangement. Before the home is delivered and affixed, the land may be the primary security. FYNX understands this dynamic and structures the finance accordingly.",
      },
      {
        q: "What happens if the manufacturer or builder fails during construction?",
        a: "This is a real risk — construction represents 27% of all company failures in Australia (ASIC 2023-24). FYNX mitigates this through our manufacturer accreditation process, which assesses financial stability, completion history, and insurance coverage. We also structure milestone payments to limit exposure at each stage. This doesn't eliminate risk, but it manages it more carefully than a generic lender would.",
      },
      {
        q: "Do I need a fixed-price building contract?",
        a: "Contract requirements vary depending on the finance structure and the manufacturer. FYNX works with a range of contract formats common in the modular industry, including those that don't perfectly fit the standard HIA or Master Builders templates. A standard-form contract for modern methods of construction is currently being developed by prefabAUS with CommBank sponsorship — this will help standardise the market over time.",
      },
      {
        q: "Can I finance land, siteworks, transport, and installation together?",
        a: (
          <>
            FYNX can structure finance that covers the full delivery journey —
            from land acquisition through siteworks, factory manufacture,
            transport, craning, installation, and service connections. The
            specific structure depends on your project and financial position.{" "}
            <Link href="/how-it-works" className="text-fynx-gold hover:text-fynx-gold-light">
              See the full milestone model →
            </Link>
          </>
        ),
      },
    ],
  },
  {
    category: "Developer Finance",
    questions: [
      {
        q: "Can developers get modular construction finance through FYNX?",
        a: (
          <>
            Yes. FYNX provides specialist construction finance for developers
            building modular residential projects — townhouses, infill
            developments, affordable housing, regional projects, and medium
            density. We offer three product lines: FYNX Develop (construction
            finance), FYNX Stack (capital structuring), and FYNX Community
            (affordable/social housing).{" "}
            <Link href="/developer-finance" className="text-fynx-gold hover:text-fynx-gold-light">
              Learn more about developer finance →
            </Link>
          </>
        ),
      },
      {
        q: "What types of developer projects does FYNX fund?",
        a: (
          <>
            Our focus is on modular and prefab residential development:
            townhouses, apartments, affordable housing, regional workforce
            housing, build-to-rent, and mixed-use projects with modular
            residential components. Projects typically range from 3 to 50+
            dwellings.{" "}
            <Link href="/developer-finance" className="text-fynx-gold hover:text-fynx-gold-light">
              See project types →
            </Link>
          </>
        ),
      },
      {
        q: "Can FYNX help with mezzanine or layered capital structures?",
        a: "Yes. Through FYNX Stack, we can assist with structuring across the capital stack — senior debt, mezzanine, preferred equity, and residual stock finance. This is particularly useful for developers who need more than a single-layer debt solution.",
      },
      {
        q: "How does FYNX differ from other development finance providers?",
        a: "Most development finance providers — banks, private credit managers, specialist lenders — treat modular projects like conventional builds. Same draw schedules, same monitoring, same underwriting. FYNX is purpose-built for off-site construction: factory-aligned draw schedules, production data-driven monitoring, manufacturer accreditation, and flexible presale logic for modular exit strategies.",
      },
    ],
  },
  {
    category: "About FYNX",
    questions: [
      {
        q: "Is FYNX a bank?",
        a: "No. FYNX is a specialist finance platform. We are not a bank or authorised deposit-taking institution. We work with funding partners and capital providers to deliver finance solutions specifically designed for prefab and modular construction.",
      },
      {
        q: "How is FYNX related to Fabulr?",
        a: (
          <>
            Fabulr is a preferred design and delivery partner for modular timber
            housing. FYNX and Fabulr are separate entities with independent
            governance and credit assessment processes. FYNX works with multiple
            accredited manufacturers and delivery partners — Fabulr is one of
            them.{" "}
            <Link href="/about" className="text-fynx-gold hover:text-fynx-gold-light">
              More about our independence →
            </Link>
          </>
        ),
      },
      {
        q: "Do you lend outside Sydney?",
        a: "Yes. FYNX is headquartered in Sydney but serves projects across Australia. Our initial focus is NSW, Victoria, and Queensland, with coverage expanding to other states. Digital origination means we can work with borrowers and developers nationally.",
      },
      {
        q: "What information do I need to start an enquiry?",
        a: (
          <>
            To start a conversation, we just need the basics: your name, contact
            details, and a brief description of your project — what you&apos;re
            building, where, and roughly when. We&apos;ll guide you through
            everything else from there.{" "}
            <Link href="/contact" className="text-fynx-gold hover:text-fynx-gold-light">
              Start an enquiry →
            </Link>
          </>
        ),
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-fynx-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-lg group-hover:text-fynx-gold transition-colors">
          {question}
        </span>
        <span
          className={`text-fynx-gold text-xl flex-shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-fynx-text-secondary leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQContent() {
  return (
    <>
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
              FAQ
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold leading-[0.95] max-w-4xl mb-8"
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-fynx-text-secondary max-w-2xl leading-relaxed"
          >
            Clear answers about prefab finance, modular construction loans, and
            how FYNX works.
          </motion.p>
        </div>
      </section>

      {faqs.map((category, i) => (
        <Section
          key={category.category}
          className={i % 2 === 0 ? "bg-fynx-dark" : ""}
        >
          <h2 className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-fynx-gold" />
            <span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-fynx-gold">
              {category.category}
            </span>
          </h2>
          <div className="max-w-3xl">
            {category.questions.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </Section>
      ))}

      <Section className="bg-fynx-dark" grid>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle className="mb-6">Still have questions?</SectionTitle>
          <FadeIn delay={0.2}>
            <p className="text-fynx-text-secondary text-lg leading-relaxed mb-10">
              We&apos;d rather have a real conversation than answer generic
              questions. Get in touch and a FYNX specialist will respond
              directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Talk to FYNX
              </Button>
              <Button href="/prefab-home-finance" variant="outline" size="lg">
                Prefab home finance
              </Button>
              <Button href="/developer-finance" variant="outline" size="lg">
                Developer finance
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
