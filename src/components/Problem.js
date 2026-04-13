import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./Problem.module.css";

export default function Problem() {
  const stats = [
    { value: 8.2, suffix: "hrs", label: "per week lost searching for information you already have", decimals: 1, prefix: "" },
    { value: 1.8, suffix: "T", label: "lost annually from poor knowledge management", decimals: 1, prefix: "$" },
    { value: 95, suffix: "%", label: "of what you learn is forgotten within 30 days", decimals: 0, prefix: "" },
    { value: 0, suffix: "", label: "existing tools that fix this without you doing the work", decimals: 0, prefix: "", isZero: true },
  ];

  return (
    <section className={`section ${styles.problem}`} id="problem">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <p className="section-label">The Problem</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className={`section-title ${styles.title}`}>
            You know more than<br />
            <span className="text-gradient">you can access.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className={styles.description}>
            Every knowledge worker faces the same invisible problem every single day.
            You&apos;ve read thousands of articles, had hundreds of conversations, made
            thousands of decisions — and <strong>95% of it is completely lost</strong> within a week.
          </p>
        </ScrollReveal>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100 + 300}>
              <div className={`glass-card ${styles.statCard}`}>
                <div className={styles.statValue}>
                  {stat.isZero ? (
                    <span className="font-mono">0</span>
                  ) : (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                    />
                  )}
                </div>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={700}>
          <div className={styles.quote}>
            <p>
              Every tool in this space forces you to do work to capture knowledge.
              Notion requires you to type. Obsidian requires you to link.
              Every AI starts from zero every conversation.
            </p>
            <p className={styles.quoteHighlight}>
              The fundamental assumption is wrong — that humans will consistently
              document their own thinking. <strong>Nobody does. Nobody should have to.</strong>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
