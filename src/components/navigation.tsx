"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/prefab-home-finance", label: "Home Finance" },
  { href: "/developer-finance", label: "Developer Finance" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fynx-black/80 backdrop-blur-xl border-b border-fynx-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-fynx-gold flex items-center justify-center transition-colors group-hover:bg-fynx-gold/10">
            <div className="w-2 h-2 bg-fynx-gold" />
          </div>
          <span className="font-display text-xl font-bold tracking-wider text-fynx-text">
            FYNX
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fynx-text-secondary hover:text-fynx-gold transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-semibold px-5 py-2.5 bg-fynx-gold text-fynx-black hover:bg-fynx-gold-light transition-colors"
          >
            Talk to FYNX
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-5 h-0.5 bg-fynx-text transition-all ${mobileOpen ? "rotate-45 translate-y-1" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-fynx-text transition-all ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-fynx-dark border-b border-fynx-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-fynx-text-secondary hover:text-fynx-gold transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center font-semibold px-5 py-3 bg-fynx-gold text-fynx-black hover:bg-fynx-gold-light transition-colors"
              >
                Talk to FYNX
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
