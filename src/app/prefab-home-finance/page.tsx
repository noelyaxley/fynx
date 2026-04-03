import type { Metadata } from "next";
import { PrefabHomeFinanceContent } from "./content";

export const metadata: Metadata = {
  title: "Prefab & Modular Home Finance",
  description:
    "Finance your prefab or modular home with a specialist who understands off-site construction. Progress funding during manufacture, accredited partners, digital process. Australia-wide.",
  openGraph: {
    title: "Prefab & Modular Home Finance | FYNX",
    description:
      "Specialist finance for prefab and modular homes across Australia. Off-site milestone funding from factory to completion.",
  },
};

export default function PrefabHomeFinancePage() {
  return <PrefabHomeFinanceContent />;
}
