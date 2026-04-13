import ScrollReveal from "./ScrollReveal";
import styles from "./Features.module.css";

export default function Features() {
  const features = [
    {
      icon: "⏪",
      title: "Life Rewind",
      desc: "Netflix-style timeline of your entire life. Scrub through any day, any year.",
      color: "emerald",
    },
    {
      icon: "🪞",
      title: "The Mirror",
      desc: "Brutal honest truth about your real productivity vs what you think it is.",
      color: "teal",
    },
    {
      icon: "🌅",
      title: "Morning Memory Drop",
      desc: "3 perfectly timed memories every morning. Daily ritual people can't skip.",
      color: "amber",
    },
    {
      icon: "👤",
      title: "People Memory",
      desc: "Never forget a person. Briefing before every meeting, automatically.",
      color: "cyan",
    },
    {
      icon: "🛡",
      title: "Focus Guardian",
      desc: "Knows WHY you're distracted. Intervenes with context, not blockers.",
      color: "emerald",
    },
    {
      icon: "💡",
      title: "Idea Rescue",
      desc: "Captures brilliant thoughts you had and forgot. Your forgotten genius.",
      color: "teal",
    },
    {
      icon: "📚",
      title: "Study Replay",
      desc: "Personalized study guide from your actual learning. Owns the student market.",
      color: "amber",
    },
    {
      icon: "🏛",
      title: "Legacy Mode",
      desc: "Your mind, preserved forever. Your children can know how you thought.",
      color: "cyan",
    },
  ];

  return (
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Features</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className={`section-title ${styles.title}`}>
            The 8 features that create<br />
            <span className="text-gradient">viral moments.</span>
          </h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80 + 200} direction="scale">
              <div className={`${styles.card} ${styles[f.color]}`}>
                <div className={styles.cardIcon}>{f.icon}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
                <div className={styles.cardShine} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
