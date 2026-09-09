import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.tomspencer.co"),
  title: "Starter — Tom Spencer",
  description: "A small starting point for working with agents. For code, analysis, and knowledge work. Built to grow with the project.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={GeistSans.className}>{children}</body></html>;
}
