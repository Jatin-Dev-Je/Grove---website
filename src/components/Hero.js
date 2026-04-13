"use client";

import { useEffect, useState } from "react";
import KnowledgeGraph from "./KnowledgeGraph";
import styles from "./Hero.module.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Animated knowledge graph background */}
      <div className={styles.canvasWrapper}>
        <KnowledgeGraph />
      </div>

      {/* Gradient orbs */}
      <div className={styles.orbOne} aria-hidden="true" />
      <div className={styles.orbTwo} aria-hidden="true" />

      <div className={`${styles.content} ${loaded ? styles.loaded : ""}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Pre-seed · Raising $500K–$2M
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>The memory layer</span>
          <span className={`${styles.titleLine} ${styles.titleGradient}`}>
            for human intelligence.
          </span>
        </h1>

        <p className={styles.subtitle}>
          Grove watches silently as you work. Builds a living knowledge graph of
          everything you know. Makes every AI you use{" "}
          <strong className={styles.highlight}>10x smarter</strong> about you —
          automatically.
        </p>

        <div className={styles.actions}>
          <a href="#solution" className={styles.ctaPrimary} id="hero-cta-primary">
            Discover Grove
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#ask" className={styles.ctaSecondary} id="hero-cta-secondary">
            Investor Deck
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>On-device</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>Zero</span>
            <span className={styles.statLabel}>Cloud data</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>Zero</span>
            <span className={styles.statLabel}>Effort</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
