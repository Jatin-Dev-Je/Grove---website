import ScrollReveal from "./ScrollReveal";
import styles from "./InvestorSections.module.css";

const marketStats = [
  { value: "$1.65B", label: "Personal AI knowledge market today (2025)" },
  { value: "$11.8B", label: "Projected by 2033 at 27% CAGR" },
  { value: "$92B", label: "Broader knowledge management market by 2033" },
  { value: "1.3B", label: "Knowledge workers globally" },
];

const competitors = [
  {
    product: "Rewind / Limitless",
    does: "Screen recorder, Mac only",
    gap: "Pivoted toward cloud + hardware",
  },
  {
    product: "Microsoft Recall",
    does: "Windows snapshots",
    gap: "Privacy backlash, Windows 11 only",
  },
  {
    product: "TwinMind",
    does: "Audio-first memory assistant",
    gap: "No screen understanding, no graph, no MCP",
  },
  {
    product: "SuperMemory / Mem0",
    does: "MCP memory server",
    gap: "Only AI chat context, misses most of life",
  },
  {
    product: "Grove",
    does: "Full ambient capture + on-device graph",
    gap: "Closes all major gaps above",
    featured: true,
  },
];

const streams = [
  {
    tag: "Stream 1",
    name: "Grove Pro",
    price: "$15/month",
    desc: "Unlimited memory, full graph, MCP access, all 8 features.",
  },
  {
    tag: "Stream 2",
    name: "Grove Teams",
    price: "$50/seat/month",
    desc: "Shared graph, Grove handoff, enterprise admin + controls.",
  },
  {
    tag: "Stream 3",
    name: "Grove API",
    price: "Usage based",
    desc: "Developers embed Grove memory into their own AI products.",
  },
];

const roadmap = [
  {
    phase: "Now - Month 4",
    title: "MVP",
    detail:
      "Mac app, screen + audio capture, knowledge graph, natural language search, 50 obsessed beta users.",
  },
  {
    phase: "Month 4 - 8",
    title: "Launch",
    detail:
      "Product Hunt launch, YC application, 10K waitlist, public launch, MCP ships, $1M-$3M seed.",
  },
  {
    phase: "Month 8 - 18",
    title: "Growth",
    detail:
      "Windows launch, Grove Pro, 100K users, $1M ARR, Series A at $60M-$100M valuation.",
  },
  {
    phase: "Year 2 - 4",
    title: "Scale",
    detail:
      "Grove Teams, mobile app, API platform, 1M users, $10M ARR, Series B.",
  },
  {
    phase: "Year 5",
    title: "Unicorn",
    detail:
      "Memory infrastructure layer for all AI, 2M+ users, $80M ARR, $1B+ valuation.",
  },
];

const moatPoints = [
  {
    title: "The data flywheel",
    body: "After six months, your working memory lives inside Grove. Switching costs become extreme as your graph compounds.",
  },
  {
    title: "Privacy as the product",
    body: "All processing is on-device. In an era of AI surveillance anxiety, that trust edge is structural.",
  },
  {
    title: "Perfect timing",
    body: "On-device models became practical only recently, and MCP became universal in 2025. The timing window is now.",
  },
];

const askMetrics = [
  { value: "$2M", label: "Raising in pre-seed" },
  { value: "18mo", label: "Runway to Series A" },
  { value: "3", label: "Key hires: ML, iOS, Growth" },
  { value: "$60M", label: "Target Series A valuation" },
];

const fundUse = [
  { area: "Engineering", percent: 40 },
  { area: "Product & design", percent: 25 },
  { area: "Go to market", percent: 20 },
  { area: "Ops buffer", percent: 15 },
];

export default function InvestorSections() {
  return (
    <>
      <section className={`section ${styles.market}`} id="market">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">The Market</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              A <span className="text-gradient">$92B market</span> still unsolved.
            </h2>
          </ScrollReveal>
          <div className={styles.statGrid}>
            {marketStats.map((stat, i) => (
              <ScrollReveal key={stat.value} delay={180 + i * 80}>
                <article className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <p className={styles.statLabel}>{stat.label}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.competition}`}>
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Competitive Landscape</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              Everyone solves the wrong problem.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>What it does</th>
                    <th>Fatal gap</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((row) => (
                    <tr key={row.product} className={row.featured ? styles.featuredRow : ""}>
                      <td>{row.product}</td>
                      <td>{row.does}</td>
                      <td>{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.business}`}>
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Business Model</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              Three revenue streams.<br />
              <span className="text-gradient">Each bigger than the last.</span>
            </h2>
          </ScrollReveal>
          <div className={styles.streamGrid}>
            {streams.map((stream, i) => (
              <ScrollReveal key={stream.name} delay={220 + i * 100} direction="scale">
                <article className={styles.streamCard}>
                  <p className={styles.streamTag}>{stream.tag}</p>
                  <h3 className={styles.streamName}>{stream.name}</h3>
                  <p className={styles.streamPrice}>{stream.price}</p>
                  <p className={styles.streamDesc}>{stream.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.roadmap}`} id="roadmap">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Roadmap</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              From zero to <span className="text-gradient">$1B</span> in five years.
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {roadmap.map((item, i) => (
              <ScrollReveal key={item.phase} delay={220 + i * 90}>
                <article className={styles.timelineItem}>
                  <p className={styles.timelinePhase}>{item.phase}</p>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDetail}>{item.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.moat}`} id="moat">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">The Moat</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              Three unfair advantages that compound over time.
            </h2>
          </ScrollReveal>
          <div className={styles.moatGrid}>
            {moatPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={220 + i * 90}>
                <article className={styles.moatCard}>
                  <div className={styles.moatNumber}>{i + 1}</div>
                  <h3 className={styles.moatTitle}>{point.title}</h3>
                  <p className={styles.moatBody}>{point.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ask}`} id="ask">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">The Ask</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={`section-title ${styles.center}`}>
              Raising <span className="text-gradient">$500K-$2M</span> pre-seed.
            </h2>
          </ScrollReveal>

          <div className={styles.askMetrics}>
            {askMetrics.map((metric, i) => (
              <ScrollReveal key={metric.label} delay={200 + i * 80}>
                <article className={styles.askCard}>
                  <div className={styles.askValue}>{metric.value}</div>
                  <p className={styles.askLabel}>{metric.label}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={560}>
            <div className={styles.fundsBox}>
              <h3 className={styles.fundsTitle}>Use of funds</h3>
              <div className={styles.fundsList}>
                {fundUse.map((row) => (
                  <div className={styles.fundsRow} key={row.area}>
                    <div className={styles.fundsMeta}>
                      <span>{row.area}</span>
                      <span>{row.percent}%</span>
                    </div>
                    <div className={styles.fundsTrack}>
                      <div className={styles.fundsFill} style={{ width: `${row.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <blockquote className={styles.quote}>
              <p>
                &ldquo;In 10 years, manually taking notes will feel as strange as navigating
                without GPS.&rdquo;
              </p>
              <p>
                Grove is the GPS for your mind: quiet in the background, instant when needed,
                and private by design.
              </p>
              <footer>GROVE - grove.ai</footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
