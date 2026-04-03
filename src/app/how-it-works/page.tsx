import type { Metadata } from "next";
import { HowItWorksContent } from "./content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How FYNX finances prefab and modular construction. Off-site milestone funding, accredited manufacturers, digital tracking. A smarter process for modern builds.",
  openGraph: {
    title: "How It Works | FYNX",
    description:
      "Off-site milestone funding, accredited manufacturers, and digital tracking. A finance process designed for modular construction.",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
