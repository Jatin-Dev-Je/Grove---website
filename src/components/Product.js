import ScrollReveal from "./ScrollReveal";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <section className={`section ${styles.product}`} id="product">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">The Product</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className={`section-title ${styles.title}`}>
            Two products. <span className="text-gradient">One platform.</span>
          </h2>
        </ScrollReveal>

        <div className={styles.cards}>
          <ScrollReveal delay={200}>
            <div className={`${styles.card} ${styles.cardPersonal}`}>
              <div className={styles.cardGlow} />
              <div className={styles.cardBadge}>Core Product</div>
              <h3 className={styles.cardTitle}>Grove Personal</h3>
              <p className={styles.cardDesc}>
                Your ambient second brain. Captures everything, builds your knowledge
                graph, surfaces memories proactively. Ask it anything about your own mind.
              </p>
              <div className={styles.cardPricing}>
                <span className={styles.priceTag}>Free tier + $15/month Pro</span>
              </div>
              <ul className={styles.cardFeatures}>
                <li>Ambient screen & audio capture</li>
                <li>Living knowledge graph</li>
                <li>Natural language search</li>
                <li>Proactive memory surfacing</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className={`${styles.card} ${styles.cardMCP}`}>
              <div className={styles.cardGlow} />
              <div className={`${styles.cardBadge} ${styles.badgeTeal}`}>Platform Layer</div>
              <h3 className={styles.cardTitle}>Grove MCP Layer</h3>
              <p className={styles.cardDesc}>
                Exposes your knowledge graph via MCP protocol. Claude, GPT, Cursor,
                Gemini — every AI automatically gets your full context. One connection. All AIs.
              </p>
              <div className={styles.cardPricing}>
                <span className={styles.priceTag}>Included in Pro · Enterprise API</span>
              </div>
              <ul className={styles.cardFeatures}>
                <li>Universal MCP protocol</li>
                <li>Works with Claude, GPT, Cursor, Gemini</li>
                <li>Zero configuration</li>
                <li>Enterprise API access</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
