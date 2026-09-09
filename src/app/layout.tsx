import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navigation, Footer } from "../components/site/navigation";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://starter.tomspencer.co"),
  title: "Starter — A place for the work to grow",
  description:
    "A minimal foundation for code, analysis, and knowledge work with agents. Keep the context, the work, and what you learn together.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Starter — A place for the work to grow",
    description:
      "A small foundation for code, analysis, and knowledge work with agents.",
    type: "website",
  },
};
const contract = `<!-- THESIS: The project is a living map from a question to evidence, not a sales funnel. OWN-WORLD: Pale neutral paper, deep green diagram fields, Geist typography, precise SVG and restrained primitive controls. STORY: Understand the mechanism, explore the repository, read the argument, start a project. FIRST VIEWPORT: Oversized left-aligned title; description and start action below; a wide interactive context-work-evidence map anchors the fold. Signature interaction: selecting a project layer updates its meaning; shared-layout and accordion motion expose state. FORM: Systems atlas, grounded candidate 3, seed 73c6ef78; code-first session assumption, no stored preference or approved comp. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${GeistMono.variable}`}>
        <div
          className="contract"
          dangerouslySetInnerHTML={{ __html: contract }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
