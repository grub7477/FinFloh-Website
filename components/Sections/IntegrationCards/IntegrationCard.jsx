import React, { useEffect, useRef, useState } from "react";
import styles from "./IntegrationCard.module.scss";

/**
 * TechStackShowcase
 * -------------------------------------------------------
 * - Mobile: heading + CTA stack on top (centered, full width),
 *   divided by a solid line from a 2-col x 3-row logo grid below.
 * - Desktop: heading + CTA sit in a fixed 320px left column,
 *   divided by a solid vertical line from a 3-col x 2-row logo
 *   grid on the right.
 * - Every ROTATE_INTERVAL_MS, random cells slide their current
 *   logo up and out while the next logo slides up into place.
 * - Logos do not repeat until every logo has been displayed.
 * - Blue corner brackets on the outer card + "+" marks at the
 *   grid's internal intersections.
 * -------------------------------------------------------
 */

const ROTATE_INTERVAL_MS = 2800;
const TRANSITION_MS = 550;
const CELL_COUNT = 6;

const LOGOS = [
  {
    id: "sap",
    render: (
      <img
        className={styles.integrationLogo}
        alt="sap-logomark"
        src="/images/integration-logos/sap.svg"
      />
    ),
  },
  {
    id: "razorpay",
    render: (
      <img
        className={styles.integrationLogo}
        alt="razorpay-logomark"
        src="/images/integration-logos/razorpay.svg"
      />
    ),
  },
  {
    id: "billdesk",
    render: (
      <img
        className={styles.integrationLogo}
        alt="billdesk-logomark"
        src="/images/integration-logos/billdesk.svg"
      />
    ),
  },
  {
    id: "netsuite",
    render: (
      <img
        className={styles.integrationLogo}
        alt="netsuite-logomark"
        src="/images/integration-logos/netsuite.svg"
      />
    ),
  },
  {
    id: "quickbooks",
    render: (
      <img
        className={styles.integrationLogo}
        alt="quickbooks-logomark"
        src="/images/integration-logos/quickbooks.svg"
      />
    ),
  },
  {
    id: "stripe",
    render: (
      <img
        className={styles.integrationLogo}
        alt="stripe-logomark"
        src="/images/integration-logos/stripe.svg"
      />
    ),
  },
  {
    id: "salesforce",
    render: (
      <img
        className={styles.integrationLogo}
        alt="salesforce-logomark"
        src="/images/integration-logos/salesforce.svg"
      />
    ),
  },
  {
    id: "hubspot",
    render: (
      <img
        className={styles.integrationLogo}
        alt="hubspot-logomark"
        src="/images/integration-logos/hubspot.svg"
      />
    ),
  },
  {
    id: "pipedrive",
    render: (
      <img
        className={styles.integrationLogo}
        alt="pipedrive-logomark"
        src="/images/integration-logos/pipedrive.svg"
      />
    ),
  },
  {
    id: "tally",
    render: (
      <img
        className={styles.integrationLogo}
        alt="tally-logomark"
        src="/images/integration-logos/tally.svg"
      />
    ),
  },
  {
    id: "zoho",
    render: (
      <img
        className={styles.integrationLogo}
        alt="zoho-logomark"
        src="/images/integration-logos/zohoErp.svg"
      />
    ),
  },
];

function LogoCell({ current, next, animating }) {
  return (
    <div className={styles.logoCell}>
      <div
        className={`${styles.logoTrack} ${
          animating ? styles.animating : ""
        }`}
      >
        <div className={styles.logoSlot}>{current.render}</div>
        <div className={styles.logoSlot}>{next.render}</div>
      </div>
    </div>
  );
}

export default function TechStackShowcase() {
  const [cells, setCells] = useState(() =>
    Array.from({ length: CELL_COUNT }, (_, i) => ({
      currentIdx: i,
      nextIdx: i,
      animating: false,
    }))
  );

  /**
   * Keeps track of logos that have already appeared
   * during the current round.
   *
   * Example:
   *
   * Round starts:
   * [SAP, Razorpay, Billdesk, NetSuite, QuickBooks, Stripe]
   *
   * Used:
   * SAP, Razorpay, Billdesk, NetSuite, QuickBooks, Stripe
   *
   * Remaining:
   * Salesforce, HubSpot, Pipedrive, Tally, Zoho
   */
  const usedLogosRef = useRef(new Set());

  const timeoutsRef = useRef([]);

  useEffect(() => {
    // First 6 visible logos are considered already used
    usedLogosRef.current = new Set(
      Array.from({ length: CELL_COUNT }, (_, i) => i)
    );

    const interval = setInterval(() => {
      setCells((prev) => {
        const currentlyVisible = prev.map(
          (cell) => cell.currentIdx
        );

        /**
         * Logos that have NOT appeared in this round.
         */
        let availableLogos = LOGOS.map((_, index) => index).filter(
          (index) => !usedLogosRef.current.has(index)
        );

        /**
         * Never allow a logo that is already visible
         * to be selected.
         */
        availableLogos = availableLogos.filter(
          (index) => !currentlyVisible.includes(index)
        );

        /**
         * If there are no unused logos left,
         * start a completely new round.
         */
        if (availableLogos.length === 0) {
          usedLogosRef.current = new Set();

          availableLogos = LOGOS.map((_, index) => index).filter(
            (index) => !currentlyVisible.includes(index)
          );
        }

        /**
         * Select 2 random cells to rotate.
         *
         * If only 1 unused logo remains, rotate only
         * one cell. This is important because we have
         * 11 logos but only 6 visible cells.
         *
         * Example:
         *
         * 11 logos
         * 6 initially visible
         * 5 remaining
         *
         * Rotation:
         * 2 logos
         * 2 logos
         * 1 logo
         *
         * Then the round is complete.
         */
        const numberToRotate = Math.min(
          2,
          availableLogos.length
        );

        const targets = [];

        while (targets.length < numberToRotate) {
          const randomCell = Math.floor(
            Math.random() * CELL_COUNT
          );

          if (!targets.includes(randomCell)) {
            targets.push(randomCell);
          }
        }

        /**
         * Shuffle available logos so selection is random.
         */
        const shuffledLogos = [...availableLogos].sort(
          () => Math.random() - 0.5
        );

        const nextLogos = shuffledLogos.slice(
          0,
          numberToRotate
        );

        /**
         * Mark selected logos as used immediately.
         */
        nextLogos.forEach((logoIndex) => {
          usedLogosRef.current.add(logoIndex);
        });

        /**
         * Start animation.
         */
        const updated = prev.map((cell, index) => {
          if (!targets.includes(index)) {
            return cell;
          }

          const targetPosition = targets.indexOf(index);

          return {
            ...cell,
            nextIdx: nextLogos[targetPosition],
            animating: true,
          };
        });

        /**
         * Complete animation after CSS transition.
         */
        const timeout = setTimeout(() => {
          setCells((current) =>
            current.map((cell, index) => {
              if (!targets.includes(index)) {
                return cell;
              }

              return {
                ...cell,
                currentIdx: cell.nextIdx,
                animating: false,
              };
            })
          );
        }, TRANSITION_MS);

        timeoutsRef.current.push(timeout);

        return updated;
      });
    }, ROTATE_INTERVAL_MS);

    return () => {
      clearInterval(interval);

      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="section section--lg container">
      <div className={styles.card}>
        <span
          className={`${styles.corner} ${styles.topLeft}`}
        />
        <span
          className={`${styles.corner} ${styles.topRight}`}
        />
        <span
          className={`${styles.corner} ${styles.bottomLeft}`}
        />
        <span
          className={`${styles.corner} ${styles.bottomRight}`}
        />

        <div className={styles.content}>
          <div className={styles.headerCell}>
            <h2 className={styles.heading}>
              Works With Your
              <br />
              Existing Tech Stack
            </h2>

            <button type="button" className={styles.primaryButton}>
          <a href="/partner-with-us" className={styles.primary}>
            Become a Partner →
          </a>
          </button>
          </div>

          <div className={styles.gridOuter}>
            <span
              className={`${styles.plusMark} ${styles.plusOne}`}
            />
            <span
              className={`${styles.plusMark} ${styles.plusTwo}`}
            />

            <div className={styles.grid}>
              {cells.map((cell, i) => (
                <div
                  key={i}
                  className={styles.gridCell}
                >
                  <div className={styles.logoCellWrap}>
                    <LogoCell
                      current={LOGOS[cell.currentIdx]}
                      next={LOGOS[cell.nextIdx]}
                      animating={cell.animating}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}