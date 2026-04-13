import Image from "next/image";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import styles from "./page.module.css";

export default function Home() {
  const capabilities = [
    {
      title: "Ambient Capture",
      description:
        "Grove captures your work signals in the background, so memory builds itself while you stay focused.",
    },
    {
      title: "Knowledge Graph",
      description:
        "Every person, decision, and artifact is linked into a system that gets more useful each day.",
    },
    {
      title: "Context Delivery",
      description:
        "Before you ask AI, Grove prepares the exact context package your task requires.",
    },
    {
      title: "Local-First Privacy",
      description:
        "Your memory is designed to remain on your machine by default with clear ownership boundaries.",
    },
  ];

  const stats = [
    { value: "10x", label: "Sharper AI context" },
    { value: "73%", label: "Fewer repetitive prompts" },
    { value: "0", label: "Manual memory upkeep" },
  ];

  const workflows = [
    {
      title: "Founder Workflow",
      description:
        "Run strategy, roadmap, and customer loops with context continuity across every decision.",
    },
    {
      title: "Research Workflow",
      description:
        "Connect notes, sources, and insights into a retrievable network over long research cycles.",
    },
    {
      title: "Builder Workflow",
      description:
        "Give your coding assistant architecture and product history before a single line gets generated.",
    },
  ];

  const logos = ["Notion", "Linear", "Figma", "Framer", "Cursor", "GitHub"];

  const testimonials = [
    {
      quote:
        "Grove made our AI output feel like it finally understood our company, not just our last message.",
      author: "Product Founder",
    },
    {
      quote:
        "We stopped rewriting context in every prompt. Team speed changed in the first week.",
      author: "Operations Lead",
    },
    {
      quote:
        "The magic is continuity. Every project gets smarter because the memory layer keeps compounding.",
      author: "Applied AI Engineer",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.auroraA} />
        <div className={styles.auroraB} />
        <div className={styles.meshGlow} />
        <BackgroundAnimation className={styles.particleCanvas} />
        <div className={styles.noise} />
      </div>

      <header className={styles.navbar}>
        <div className={styles.brand}>
          <Image src="/grove_icon_dark.svg" alt="Grove logo" width={36} height={36} priority />
          <span>Grove</span>
        </div>
        <nav className={styles.navLinks}>
          <a href="#capabilities">Capabilities</a>
          <a href="#workflows">Workflows</a>
          <a href="#proof">Proof</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Memory Infrastructure for AI-First Teams</p>
            <h1>
              A modern memory layer
              <span> that makes every AI tool feel native to you.</span>
            </h1>
            <p className={styles.subhead}>
              Grove continuously builds operational memory from your work and delivers relevant context
              exactly when your team needs it.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.primaryBtn} href="#waitlist">
                Join Private Beta
              </a>
              <a className={styles.secondaryBtn} href="#capabilities">
                View Capabilities
              </a>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panelLine}>
              <span>Memory Stream</span>
              <strong>Live</strong>
            </div>
            <div className={styles.panelCard}>
              <h3>Decision context assembled</h3>
              <p>6 related discussions, 2 prior experiments, and 1 production incident attached.</p>
            </div>
            <div className={styles.panelCard}>
              <h3>Prompt package ready</h3>
              <p>Architecture rationale, customer constraints, and roadmap intent added automatically.</p>
            </div>
            <div className={styles.panelCard}>
              <h3>Knowledge graph expanded</h3>
              <p>New links detected between pricing concerns and retention signals from interview notes.</p>
            </div>
          </aside>

          <div className={styles.statRow}>
            {stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.logoStrip} aria-label="Compatible workflow tools">
          {logos.map((logo) => (
            <p key={logo}>{logo}</p>
          ))}
        </section>

        <section id="capabilities" className={styles.featuresSection}>
          <div className={styles.sectionHeading}>
            <p>Capabilities</p>
            <h2>Built like modern product infrastructure, not a productivity hack.</h2>
          </div>
          <div className={styles.featureGrid}>
            {capabilities.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.architecture}>
          <div className={styles.sectionHeading}>
            <p>System Flow</p>
            <h2>Capture, model, retrieve. A clean loop that compounds over time.</h2>
          </div>
          <div className={styles.steps}>
            <article>
              <span>01</span>
              <h3>Capture</h3>
              <p>Signals are collected continuously from work activity and transformed into memory events.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Model</h3>
              <p>Events are linked into a semantic structure connecting entities, intent, and outcomes.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Retrieve</h3>
              <p>Relevant context is delivered at prompt-time so AI outputs align with your actual history.</p>
            </article>
          </div>
        </section>

        <section id="workflows" className={styles.useCases}>
          <div className={styles.sectionHeading}>
            <p>Workflows</p>
            <h2>One memory core supporting multiple high-stakes execution modes.</h2>
          </div>
          <div className={styles.useCaseGrid}>
            {workflows.map((item) => (
              <article key={item.title} className={styles.useCaseCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <p>Proof</p>
            <h2>Early teams describe Grove as the missing memory layer for serious AI work.</h2>
          </div>
          <div className={styles.faqGrid}>
            {testimonials.map((item) => (
              <article key={item.author} className={styles.faqCard}>
                <h3>{item.quote}</h3>
                <p>{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="waitlist" className={styles.waitlist}>
          <p>Private Beta</p>
          <h2>Deploy modern memory infrastructure before public launch.</h2>
          <div className={styles.waitlistRow}>
            <input type="email" placeholder="you@company.com" aria-label="Email address" />
            <a className={styles.primaryBtn} href="mailto:hello@grove.ai?subject=Grove%20Private%20Beta">
              Join Waitlist
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.brand}>
            <Image src="/grove_icon_dark.svg" alt="Grove logo" width={28} height={28} />
            <span>Grove</span>
          </div>
          <p>Designed for intentional work. Built for long-term memory.</p>
        </footer>
      </main>
    </div>
  );
}
