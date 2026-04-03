import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About FYNX",
  description:
    "FYNX is a specialist finance platform for prefab and modular construction. Sydney-based, Australia-wide. Independent, focused, and built for modern building methods.",
  openGraph: {
    title: "About FYNX | Modern Construction Finance",
    description:
      "Specialist finance platform for prefab and modular construction. Sydney-based, Australia-wide. Independent and purpose-built.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
