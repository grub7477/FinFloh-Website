import React from "react";
import styles from "./PartnerBenefits.module.scss";

/**
 * PartnerBenefits
 * -------------------------------------------------------
 * Desktop: 2x2 grid — one dashed vertical divider, one solid
 * horizontal divider, a single "+" mark at the center
 * intersection, blue corner brackets on the outer grid.
 * Mobile: collapses to a single-column list with dashed
 * dividers between items.
 * -------------------------------------------------------
 */

const BENEFITS = [
  {
    id: "revenue",
    title: "Grow New Revenue Streams",
    description:
      "Create recurring revenue opportunities by introducing FinFloh to your existing customers and prospects.",
  },
  {
    id: "outcomes",
    title: "Deliver More Value to Customers",
    description:
      "Help customers automate finance processes, accelerate collections, and improve cash flow with an AI-powered platform.",
  },
  {
    id: "gtm",
    title: "Joint Go-to-Market Support",
    description:
      "Work alongside the FinFloh team on qualified opportunities, customer engagements, campaigns, and industry initiatives.",
  },
  {
    id: "customer-relationships",
    title: "Expand Customer Relationships",
    description:
      "Address more of your customers’ finance needs while creating opportunities for deeper, long-term relationships.",
  },
];

function InvoiceDollarIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
    >
      <path
        d="M8 3h17l5 5v26a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        fill="#1f2937"
      />
      <path d="M25 3v5h5l-5-5Z" fill="#111827" />
      <rect x="10.5" y="11.5" width="12" height="1.7" rx="0.85" fill="#fff" />
      <rect x="10.5" y="16" width="12" height="1.7" rx="0.85" fill="#fff" />
      <rect x="10.5" y="20.5" width="7.5" height="1.7" rx="0.85" fill="#fff" />
      <circle
        cx="27"
        cy="25"
        r="8.5"
        fill="#eab308"
        stroke="#fff"
        strokeWidth="2"
      />
      <text
        x="27"
        y="28.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
        fontFamily="sans-serif"
      >
        $
      </text>
    </svg>
  );
}

export default function PartnerBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Partner Benefits</h2>
          <p className={styles.body}>
            Give your customers more value while creating new revenue
            opportunities for your business with FinFloh’s AI-powered finance
            automation platform.
          </p>
          <button type="button" className={styles.ctaButton}>
            <a href="/partner-with-us" className={styles.action}>
              Become a Partner →
            </a>
          </button>
        </div>

        <div className={styles.gridOuter}>
          <span className={`${styles.corner} ${styles.topLeft}`} />
          <span className={`${styles.corner} ${styles.topRight}`} />
          <span className={`${styles.corner} ${styles.bottomLeft}`} />
          <span className={`${styles.corner} ${styles.bottomRight}`} />
          <span className={styles.plusMark} />

          <div className={styles.grid}>
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className={styles.cell}>
                <div className={styles.icon}>
                  <InvoiceDollarIcon />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}