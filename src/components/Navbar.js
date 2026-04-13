"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Market", href: "#market" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Ask", href: "#ask" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo} id="nav-logo">
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <circle cx="12" cy="12" r="3" fill="url(#g1)" />
              <circle cx="12" cy="4" r="1.5" fill="url(#g1)" opacity="0.7" />
              <circle cx="19" cy="8" r="1.5" fill="url(#g1)" opacity="0.7" />
              <circle cx="19" cy="16" r="1.5" fill="url(#g1)" opacity="0.7" />
              <circle cx="12" cy="20" r="1.5" fill="url(#g1)" opacity="0.7" />
              <circle cx="5" cy="16" r="1.5" fill="url(#g1)" opacity="0.7" />
              <circle cx="5" cy="8" r="1.5" fill="url(#g1)" opacity="0.7" />
              <line x1="12" y1="9" x2="12" y2="4" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="14.5" y1="10" x2="19" y2="8" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="14.5" y1="14" x2="19" y2="16" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="12" y1="15" x2="12" y2="20" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="9.5" y1="14" x2="5" y2="16" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="9.5" y1="10" x2="5" y2="8" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>GROVE</span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#ask" className={styles.ctaButton} id="nav-cta">
            Investor Deck
          </a>
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
