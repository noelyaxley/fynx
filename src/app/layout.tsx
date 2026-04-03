import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fynx.com.au"),
  title: {
    default: "FYNX | Modern Construction Finance for Australia",
    template: "%s | FYNX",
  },
  description:
    "Specialist finance for prefab and modular construction. Funding designed for the way modern homes are actually built. Sydney-based, Australia-wide.",
  keywords: [
    "prefab home finance Australia",
    "modular home finance",
    "modular construction finance",
    "construction finance developers",
    "prefab mortgage Australia",
    "modular home loan",
    "off-site construction finance",
    "construction loan prefab",
  ],
  authors: [{ name: "FYNX" }],
  creator: "FYNX",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://fynx.com.au",
    siteName: "FYNX",
    title: "FYNX | Modern Construction Finance for Australia",
    description:
      "Specialist finance for prefab and modular construction. Funding designed for the way modern homes are actually built.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FYNX — Modern Construction Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FYNX | Modern Construction Finance for Australia",
    description:
      "Specialist finance for prefab and modular construction across Australia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fynx.com.au/#organization",
      name: "FYNX",
      url: "https://fynx.com.au",
      description:
        "Specialist finance platform for prefab and modular construction across Australia.",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressCountry: "AU",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://fynx.com.au/#website",
      url: "https://fynx.com.au",
      name: "FYNX",
      publisher: { "@id": "https://fynx.com.au/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-fynx-gold focus:text-fynx-black font-display font-semibold"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
