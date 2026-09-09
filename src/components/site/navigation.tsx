"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
// Shared-layout active marker follows the Motion Primitives/Nim Animated Background pattern.
export function Mark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 5h9v9H5zM18 5h9v9h-9zM5 18h9v9H5z" fill="currentColor" />
      <path d="M18 18h9v9h-9z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
export function Navigation() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Starter home">
          <Mark />
          <span>Starter</span>
        </Link>
        <nav aria-label="Main navigation">
          {[
            ["/", "Overview"],
            ["/why-starter", "The idea"],
            ["/getting-started", "Get started"],
          ].map(([href, label]) => (
            <Link
              href={href}
              key={href}
              className="nav-link"
              aria-current={pathname === href ? "page" : undefined}
            >
              <span>{label}</span>
              {pathname === href && (
                <motion.span
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ duration: reduced ? 0 : 0.25 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <a
          className="repo-link"
          href="https://github.com/spencerthomas/starter"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand" href="/">
          <Mark />
          <span>Starter</span>
        </Link>
        <p>
          Project structure and instructions. <br />
          For work with agents.
        </p>
        <div>
          <Link href="/getting-started">
            Get started <ArrowUpRight size={15} />
          </Link>
          <a href="https://github.com/spencerthomas/starter">
            Explore the repository <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          Made by <a href="https://www.tomspencer.co">Tom Spencer</a>
        </span>
        <span>For code, analysis, and knowledge work.</span>
      </div>
    </footer>
  );
}
