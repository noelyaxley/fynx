import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact FYNX",
  description:
    "Talk to a FYNX specialist about financing your prefab home, modular construction project, or development. No obligation enquiry. Australia-wide.",
  openGraph: {
    title: "Contact FYNX | Talk to a Specialist",
    description:
      "Talk to a FYNX specialist about financing your prefab home or modular construction project. No obligation. Australia-wide.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
