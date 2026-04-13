import ScrollReveal from "./ScrollReveal";
import styles from "./Solution.module.css";

export default function Solution() {
  const steps = [
    { icon: "👁", title: "Capture", desc: "Screen, audio, browser, meetings — all of it, silently" },
    { icon: "🧠", title: "Understand", desc: "On-device AI extracts concepts, people, decisions, patterns" },
    { icon: "🕸", title: "Connect", desc: "Builds a living knowledge graph — everything connected" },
    { icon: "✨", title: "Surface", desc: "Right memory, right moment — proactive and on-demand" },
    { icon: "🔌", title: "Connect AIs", desc: "Via MCP — every AI you use instantly knows your full context" },
  ];

  return (
    <section className={`section ${styles.solution}`} id="solution">
      <div className={`container`}>
        <ScrollReveal>
          <p className="section-label">The Solution</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className={`section-title ${styles.title}`}>
            Grove. <span className="text-gradient">Your mind&apos;s operating system.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className={styles.subtitle}>
            Grove runs silently in the background. It watches your screen, listens to
            your meetings, tracks your browser — and builds a living knowledge graph of
            everything you know, think, decide, and learn.{" "}
            <strong>100% on-device. Zero cloud. Zero effort.</strong>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className={styles.howLabel}>
            <span className={styles.howLine} />
            <span className={styles.howText}>How It Works</span>
            <span className={styles.howLine} />
          </div>
        </ScrollReveal>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 120 + 400}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepConnector}>
                  <div className={styles.stepDot} />
                  {i < steps.length - 1 && <div className={styles.stepLine} />}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
