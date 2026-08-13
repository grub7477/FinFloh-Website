import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

/**
 * HeroSection
 * -------------------------------------------------------
 * - Ripple layer: 3 rings share one fixed anchor point at
 *   top-center of the hero and each independently animates
 *   scale 0 -> 1 + opacity 1 -> 0 on a staggered delay, so a
 *   new ring keeps launching as the last one fades — a wave
 *   effect, not rotation. A couple of faint static rings sit
 *   underneath for texture, plus a few dots that pulse in
 *   place (no movement, no orbiting).
 * - Floating cards (desktop only) now each carry an icon on a
 *   soft color backdrop, a title, and a one-line description.
 * -------------------------------------------------------
 */

function AutomationIcon() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
      <rect x="9" y="5" width="18" height="26" rx="2" fill="#1f2937" />
      <rect x="13" y="11" width="10" height="1.8" rx="0.9" fill="#fff" />
      <rect x="13" y="15.5" width="10" height="1.8" rx="0.9" fill="#fff" />
      <rect x="13" y="20" width="6" height="1.8" rx="0.9" fill="#fff" />
      {/* <circle
        cx="27"
        cy="27"
        r="8"
        fill="#2f5bea"
        stroke="#fff"
        strokeWidth="1.6"
      /> */}
      <path
        d="M23.5 27l2.2 2.2L30.5 24"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RevenueIcon() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="#eab308"
        stroke="#fff"
        strokeWidth="2"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#fff"
        fontFamily="sans-serif"
      >
        $
      </text>
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 40 40" width="24" height="24" fill="none">
      <line x1="20" y1="9" x2="9" y2="24" stroke="#93b0f5" strokeWidth="1.6" />
      <line x1="20" y1="9" x2="31" y2="24" stroke="#93b0f5" strokeWidth="1.6" />
      <line x1="9" y1="24" x2="20" y2="34" stroke="#93b0f5" strokeWidth="1.6" />
      <line
        x1="31"
        y1="24"
        x2="20"
        y2="34"
        stroke="#93b0f5"
        strokeWidth="1.6"
      />
      <line x1="9" y1="24" x2="31" y2="24" stroke="#93b0f5" strokeWidth="1.6" />
      {/* <circle cx="20" cy="9" r="4" fill="#2f5bea" /> */}
      <circle cx="9" cy="24" r="4" fill="#1f2937" />
      <circle cx="31" cy="24" r="4" fill="#1f2937" />
      {/* <circle cx="20" cy="34" r="4" fill="#2f5bea" /> */}
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 40 40" width="24" height="24" fill="none">
      <rect x="6" y="20" width="5" height="12" rx="1" fill="#bbf7d0" />
      <rect x="14" y="15" width="5" height="17" rx="1" fill="#86efac" />
      <rect x="22" y="9" width="5" height="23" rx="1" fill="#4ade80" />
      <rect x="30" y="4" width="5" height="28" rx="1" fill="#16a34a" />
      <path
        d="M6 22 L16 13 L24 9 L34 2"
        stroke="#16a34a"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const FLOATING_CARDS = [
  {
    id: "automation",
    className: "cardWide",
    icon: <AutomationIcon />,
    backdrop: "iconBackdropBlue",
    title: "Automated Invoicing",
    description: "AI reconciles invoices in seconds",
  },
  {
    id: "revenue",
    className: "cardSmall",
    icon: <RevenueIcon />,
    backdrop: "iconBackdropGold",
    title: "+18% Revenue",
    description: "Per active partner",
  },
  {
    id: "network",
    className: "cardTall",
    icon: <NetworkIcon />,
    backdrop: "iconBackdropBlue",
    title: "Partner Network",
    description: "5+ global partners collaborating",
  },
  {
    id: "growth",
    className: "cardWideSmall",
    icon: <GrowthIcon />,
    backdrop: "iconBackdropGreen",
    title: "Faster Cash Flow",
    description: "Collections accelerated up to 40%",
  },
];

export default function HeroSection() {
  return (
    <section className={`${styles.hero} container`}>
      <svg
        className={styles.orbitLayer}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Faint static rings for texture, anchored top-center */}
        <circle className={styles.staticRing} cx="600" cy="-40" r="150" />
        <circle className={styles.staticRing} cx="600" cy="-40" r="350" />
        <circle className={styles.staticRing} cx="600" cy="-40" r="500" />
        <circle className={styles.staticRing} cx="600" cy="-40" r="650" />
        <circle className={styles.staticRing} cx="600" cy="-40" r="800" />
        {/* <circle className={styles.staticRing} cx="600" cy="-40" r="700" /> */}

     
        

        {/* Dots pulse in place — no orbiting
        <circle
          className={styles.orbitDot}
          cx="140"
          cy="180"
          r="4.5"
          style={{ animationDelay: "0s" }}
        />
        <circle
          className={styles.orbitDot}
          cx="1040"
          cy="230"
          r="4.5"
          style={{ animationDelay: "1s" }}
        />
        <circle
          className={styles.orbitDot}
          cx="820"
          cy="120"
          r="4"
          style={{ animationDelay: "2s" }}
        />
        <circle
          className={styles.orbitDot}
          cx="95"
          cy="420"
          r="4"
          style={{ animationDelay: "2.2s" }}
        />
        <circle
          className={styles.orbitDot}
          cx="620"
          cy="60"
          r="4"
          style={{ animationDelay: "1.1s" }}
        /> */}
      </svg>

      <div className={styles.floatingCards} aria-hidden="true">
        {FLOATING_CARDS.map((card) => (
          <div
            key={card.id}
            className={`${styles.floatCard} ${styles[card.className]}`}
          >
            <div className={`${styles.iconBackdrop} ${styles[card.backdrop]}`}>
              {card.icon}
            </div>
            <div className={styles.cardText}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Join the FinFloh
          <br />
          Partner Ecosystem
        </h1>
        <p className={styles.body}>
          Help businesses transform Accounts Receivable, Credit Risk, Cash
          Application, and Collections with AI-powered automation while creating
          new revenue opportunities for your business.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.primaryButton}>
          <a href="/partner-with-us" className={styles.primary}>
            Become a Partner →
          </a>
          </button>
          {/* <button
            type="button"
            className={styles.secondaryButton}
            link="/partner-with-us"
          >
            Schedule a Partnership Call →
          </button> */}
        </div>
      </div>

      <div className={styles.trustedTab}>
        <span className={styles.trustedTabShape}>Trusted By</span>
      </div>
    </section>
  );
}
