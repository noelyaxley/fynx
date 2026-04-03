import type { Metadata } from "next";
import { FAQContent } from "./content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about prefab home finance, modular construction loans, developer finance, and how FYNX works. Clear answers from specialists.",
  openGraph: {
    title: "FAQ | FYNX Modern Construction Finance",
    description:
      "Common questions about prefab home finance, modular construction loans, developer finance, and how FYNX works.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I get a construction loan for a prefab or modular home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While traditional construction loans can be harder to access for prefab builds, FYNX specialises in exactly this type of finance. We structure loans around off-site manufacturing milestones, so your funding matches how your home is actually being built.",
      },
    },
    {
      "@type": "Question",
      name: "Can I borrow while my home is being built off-site in a factory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is one of the core problems FYNX solves. Traditional lenders often won't release funds until work happens on your land. FYNX can provide progress funding during the off-site manufacturing process, particularly when you're working with an accredited manufacturer in our network.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the manufacturer or builder fails during construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FYNX mitigates this through our manufacturer accreditation process, which assesses financial stability, completion history, and insurance coverage. We also structure milestone payments to limit exposure at each stage.",
      },
    },
    {
      "@type": "Question",
      name: "Is FYNX a bank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. FYNX is a specialist finance platform. We are not a bank or authorised deposit-taking institution. We work with funding partners and capital providers to deliver finance solutions specifically designed for prefab and modular construction.",
      },
    },
    {
      "@type": "Question",
      name: "How is FYNX related to Fabulr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fabulr is a preferred design and delivery partner for modular timber housing. FYNX and Fabulr are separate entities with independent governance and credit assessment processes. FYNX works with multiple accredited manufacturers and delivery partners.",
      },
    },
    {
      "@type": "Question",
      name: "Do you lend outside Sydney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FYNX is headquartered in Sydney but serves projects across Australia. Our initial focus is NSW, Victoria, and Queensland, with coverage expanding to other states.",
      },
    },
    {
      "@type": "Question",
      name: "Can developers get modular construction finance through FYNX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FYNX provides specialist construction finance for developers building modular residential projects — townhouses, infill developments, affordable housing, regional projects, and medium density.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
