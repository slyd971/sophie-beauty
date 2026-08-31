import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";

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
  title: brand.name,
  description:
    "Dossier de presse de Sophie Beauty Studio, prothésiste ongulaire spécialisée en gel nude et pose américaine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
