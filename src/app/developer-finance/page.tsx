import type { Metadata } from "next";
import { DeveloperFinanceContent } from "./content";

export const metadata: Metadata = {
  title: "Developer Construction Finance",
  description:
    "Specialist construction finance for modular and prefab residential developments. Modular-aware underwriting, flexible capital structures, factory-aligned milestones. Australia-wide.",
  openGraph: {
    title: "Developer Construction Finance | FYNX",
    description:
      "Capital for modular residential projects. Senior debt, mezzanine, and structured finance for developers building with modern methods.",
  },
};

export default function DeveloperFinancePage() {
  return <DeveloperFinanceContent />;
}
