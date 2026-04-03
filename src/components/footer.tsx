import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Finance: [
    { href: "/prefab-home-finance", label: "Prefab Home Finance" },
    { href: "/developer-finance", label: "Developer Finance" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
  ],
  Company: [
    { href: "/about", label: "About FYNX" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-fynx-dark border-t border-fynx-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/fynx-logo.png"
                alt="FYNX"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-display text-lg font-bold tracking-wider">
                FYNX
              </span>
            </div>
            <p className="text-fynx-text-secondary text-sm max-w-sm leading-relaxed">
              Specialist finance for prefab and modular construction.
              Sydney-based. Australia-wide.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-semibold text-fynx-text-muted uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-fynx-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-fynx-text-muted">
            &copy; {new Date().getFullYear()} FYNX. All rights reserved. Sydney,
            Australia.
          </p>
          <p className="text-xs text-fynx-text-muted max-w-xl leading-relaxed">
            FYNX provides general information only and does not provide financial
            product advice. Any finance arrangement is subject to eligibility,
            assessment, and approval. Terms, conditions, fees, and charges apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
