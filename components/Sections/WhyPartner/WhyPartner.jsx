import React from "react";
import styles from "./WhyPartner.module.scss";

/**
 * WhyPartner
 * -------------------------------------------------------
 * Left column ("Why Partner with FinFloh?") stays pinned in
 * view via CSS position: sticky while the right column's
 * card stack scrolls past underneath it.
 *
 * Each card contains a continuous animated grid in the
 * top-right area.
 *
 * The grid consists of TWO identical sequences placed
 * side-by-side. This allows the grid to continuously move
 * from right to left without appearing to stop or reset.
 *
 * Individual grid cells pulse independently using different
 * blue shades and timing.
 * -------------------------------------------------------
 */

const FEATURES = [
  {
    id: "revenue",
    title: "New Revenue Opportunities",
    image: "/icons/partner-program/revenue.svg",
    description:
      "Expand your service portfolio with a modern Accounts Receivable platform that complements ERP, finance transformation, and consulting engagements.",
  },
  {
    id: "ai",
    title: "AI-Powered Differentiation",
    image: "/icons/partner-program/aipowered.svg",
    description:
      "Offer customers intelligent collections, automated cash application, credit decisioning, and dispute management powered by AI.",
  },
  {
    id: "enterprise",
    title: "Enterprise Ready",
    image: "/icons/partner-program/enterprise-ready.svg",
    description:
      "Built for growing and enterprise businesses with secure integrations, scalable architecture, and enterprise-grade compliance.",
  },
];

const GRID_CELLS = Array.from({ length: 40 });

function GridSequence() {
  return (
    <div className={styles.gridSequence}>
      {GRID_CELLS.map((_, index) => (
        <span
          key={index}
          className={styles.gridCell}
        />
      ))}
    </div>
  );
}

export default function WhyPartner() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Left column — stays pinned while right column scrolls */}
        <div className={styles.leftPanel}>
          <h2 className={styles.heading}>
            Why Partner with FinFloh?
          </h2>

          <p className={styles.body}>
            Today&rsquo;s finance teams are under constant pressure to
            accelerate cash flow, reduce manual work, and improve
            collections.
          </p>

          <button
            type="button"
            className={styles.primaryButton}
          >
            <a
              href="/partner-with-us"
              className={styles.primary}
            >
              Become a Partner →
            </a>
          </button>
        </div>

        {/* Right column — normal document flow */}
        <div className={styles.cardList}>
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={styles.card}
            >
              {/* Continuous animated grid */}
              <div
                className={styles.gridViewport}
                aria-hidden="true"
              >
                <div className={styles.gridTrack}>
                  <GridSequence />
                  <GridSequence />
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.iconWrap}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>

                <h3 className={styles.cardTitle}>
                  {feature.title}
                </h3>

                <p className={styles.cardDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}