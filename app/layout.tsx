import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { brand, seo } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import { StructuredData } from "@/components/StructuredData";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brand.name,
    template: `%s · ${brand.name}`,
  },
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: brand.name,
    title: brand.name,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Passer au contenu
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
