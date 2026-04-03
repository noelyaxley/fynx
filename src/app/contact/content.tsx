"use client";

import Link from "next/link";
import { Section, SectionLabel, FadeIn } from "@/components/section";
import { EnquiryForm } from "@/components/enquiry-form";
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
            Contact
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl mb-8"
        >
          Talk to FYNX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-fynx-text-secondary max-w-2xl leading-relaxed"
        >
          Tell us about your project. Whether you&apos;re a homeowner building
          a single prefab home or a developer planning a multi-dwelling modular
          project, a FYNX specialist will review your enquiry and respond
          within one business day.
        </motion.p>
      </div>
    </section>
  );
}

export function ContactContent() {
  return (
    <>
      <Hero />
      <Section className="bg-fynx-dark">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <FadeIn>
            <div className="border border-fynx-border bg-fynx-surface p-8 md:p-10">
              <EnquiryForm source="contact-page" />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-12">
              {/* Audience-specific guidance */}
              <div>
                <h2 className="flex items-center gap-3 mb-0"><span className="w-8 h-px bg-fynx-gold" /><span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-fynx-gold">Who We Work With</span></h2>
                <div className="space-y-6 mt-6">
                  {[
                    {
                      title: "Homeowners & Investors",
                      description:
                        "Building a prefab home, granny flat, or investment property? We'll discuss your project, your land, and your manufacturer to see how FYNX can structure the right finance.",
                      link: "/prefab-home-finance",
                      linkText: "Learn about prefab home finance",
                    },
                    {
                      title: "Property Developers",
                      description:
                        "Delivering a modular residential project? Tell us about the site, delivery model, timeline, and capital requirements. We understand capital stacks, factory timelines, and modular exit strategies.",
                      link: "/developer-finance",
                      linkText: "Learn about developer finance",
                    },
                    {
                      title: "Brokers & Partners",
                      description:
                        "Referring a client with a modular project? Or a manufacturer looking to partner with a modular-aware finance platform? We'd like to hear from you.",
                      link: null,
                      linkText: null,
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-fynx-border pl-6 hover:border-fynx-gold/40 transition-colors">
                      <h3 className="font-display font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-fynx-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="text-xs text-fynx-gold hover:text-fynx-gold-light mt-1 inline-block"
                        >
                          {item.linkText} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div>
                <h2 className="flex items-center gap-3 mb-0"><span className="w-8 h-px bg-fynx-gold" /><span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-fynx-gold">What Happens Next</span></h2>
                <div className="space-y-6 mt-6">
                  {[
                    {
                      step: "1",
                      title: "We review your enquiry",
                      description:
                        "A FYNX specialist reads your submission and assesses the initial fit.",
                    },
                    {
                      step: "2",
                      title: "We reach out",
                      description:
                        "Within one business day, we'll contact you to discuss your project in more detail.",
                    },
                    {
                      step: "3",
                      title: "We scope the opportunity",
                      description:
                        "If there's a good fit, we'll outline how FYNX can structure finance for your specific situation.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 border border-fynx-gold/30 flex items-center justify-center text-sm text-fynx-gold font-display font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-fynx-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact + trust */}
              <div>
                <h2 className="flex items-center gap-3 mb-0"><span className="w-8 h-px bg-fynx-gold" /><span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-fynx-gold">Direct Contact</span></h2>
                <div className="space-y-4 mt-6">
                  <div>
                    <span className="text-xs font-display uppercase tracking-wider text-fynx-text-muted block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:hello@fynx.com.au"
                      className="text-fynx-gold hover:text-fynx-gold-light transition-colors"
                    >
                      hello@fynx.com.au
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-display uppercase tracking-wider text-fynx-text-muted block mb-1">
                      Location
                    </span>
                    <span className="text-fynx-text-secondary">
                      Sydney, Australia
                    </span>
                  </div>
                  <p className="text-xs text-fynx-text-muted leading-relaxed pt-4 border-t border-fynx-border">
                    Your information is confidential and will only be used to
                    assess your enquiry. FYNX does not share your details with
                    third parties without your consent.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-fynx-border">
                    <Link href="/how-it-works" className="text-xs text-fynx-text-secondary hover:text-fynx-gold transition-colors">
                      How it works →
                    </Link>
                    <Link href="/faq" className="text-xs text-fynx-text-secondary hover:text-fynx-gold transition-colors">
                      FAQ →
                    </Link>
                    <Link href="/about" className="text-xs text-fynx-text-secondary hover:text-fynx-gold transition-colors">
                      About FYNX →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
