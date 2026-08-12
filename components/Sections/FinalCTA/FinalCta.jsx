
import React from "react";
import styles from "./FinalCta.module.scss";

/**
 * FinalCta
 * -------------------------------------------------------
 * Static, responsive banner:
 * - Desktop: quote on the left, "Ready to grow" CTA on the
 *   right, side by side, no visible border or divider.
 * - Mobile: stacks vertically, centered, wrapped in a blue
 *   accent border with a dashed divider between the quote
 *   and the CTA.
 * All layout differences are handled by the mq(md) breakpoint
 * in the SCSS module — same markup renders both.
 * -------------------------------------------------------
 */

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.quoteBlock}>
          <p className={styles.quote}>
            &ldquo;FinFloh became a key part of our finance automation
            practice. We closed 18+ deals and built a strong recurring
            revenue stream.&rdquo;
          </p>
          <p className={styles.attribution}>
            <span className={styles.role}>Partner,</span>{" "}
            <span className={styles.company}>Leading Consulting Firm</span>
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.ctaBlock}>
          <h3 className={styles.ctaHeading}>Ready to grow with FinFloh?</h3>
          <p className={styles.ctaBody}>
            Join our global partner ecosystem today.
          </p>
          <button type="button" className={styles.ctaButton}>
             <a
              href="/partner-with-us"
              className={styles.action}
            >
              Become a Partner →
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}