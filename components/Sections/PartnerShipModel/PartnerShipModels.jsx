import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./PartnershipModels.module.scss";

/**
 * PartnershipModels
 * -------------------------------------------------------
 * - Clicking a tab smooth-scrolls the matching card into view.
 * - The card row is a native horizontal scroll-snap carousel,
 *   so swiping on mobile "just works" (no touch libraries needed)
 *   and reveals the next/hidden card with the browser's own
 *   momentum + snap animation.
 * - An IntersectionObserver watches which card is most visible
 *   and syncs the active tab / dot as the user swipes, so tabs
 *   stay in sync in both directions (tap-to-scroll AND swipe).
 * - Desktop: the "Become a Partner" action is absolutely
 *   positioned inside each card and fades/slides in on :hover
 *   (guarded by a hover-capability media query so touch devices
 *   never get stuck in a hover state).
 * - Mobile: hover doesn't exist, so a single persistent CTA sits
 *   below the carousel instead.
 * -------------------------------------------------------
 */

const PARTNER_TYPES = [
  {
    id: "referral",
    tabLabel: "Referral",
    title: "Referral Partner",
    description:
      "Recommend FinFloh to your clients and earn recurring incentives for every successful referral.",
    suitedFor: [
      "Finance Consultants",
      "Fractional CFOs",
      "Business Advisors",
      "Accounting Firms",
      "Collection Agencies",
      "CAs",
    ],
  },
  {
    id: "strategic-alliance",
    tabLabel: "Strategic Alliance",
    title: "Strategic Alliance Partner",
    description:
      "Collaborate on enterprise opportunities, joint go-to-market initiatives, and industry solutions.",
    suitedFor: [
      "Consulting Firms",
      "BPO Providers",
      "Global System Integrators",
      "Industry Associations",
    ],
  },
  {
    id: "technology",
    tabLabel: "Technology",
    title: "Technology Partner",
    description:
      "Build integrations that create additional value for mutual customers.",
    suitedFor: [
      "ERP Providers",
      "Accounting Software",
      "Payment Platforms",
      "Banking Partners",
      "FinTech Companies",
    ],
  },
  {
    id: "implementation",
    tabLabel: "Implementation",
    title: "Implementation Partner",
    description:
      "Help enterprise customers deploy, configure, and adopt FinFloh across their finance organization.",
    suitedFor: [
      "System Integrators",
      "Implementation Consultants",
      "Change Management Firms",
      "Training Partners",
      "Managed Service Providers",
    ],
  },
];

export default function PartnershipModels() {
  const [activeId, setActiveId] = useState(PARTNER_TYPES[0].id);
  const rowRef = useRef(null);
  const cardRefs = useRef({});
  const isProgrammaticScroll = useRef(false);

  // Sync the active tab/dot to whichever card is most visible
  // while the user swipes/scrolls the row by hand.
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const id = mostVisible.target.getAttribute("data-id");
          if (id) setActiveId(id);
        }
      },
      { root: row, threshold: [0.5, 0.75, 1] }
    );

    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id) => {
    setActiveId(id);
    const card = cardRefs.current[id];
    if (!card) return;

    isProgrammaticScroll.current = true;
    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    // Release the observer guard once the smooth scroll has settled.
    window.clearTimeout(handleTabClick._t);
    handleTabClick._t = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);
  };

  const activeIndex = useMemo(
    () => PARTNER_TYPES.findIndex((p) => p.id === activeId),
    [activeId]
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Partnership Models</span>
        <h2 className={styles.heading}>
          Find the Partnership
          <br />
          That&rsquo;s Right for You
        </h2>
      </div>

      <div className={styles.tabs}>
        {PARTNER_TYPES.map((partner) => (
          <button
            key={partner.id}
            type="button"
            className={`${styles.tab} ${
              partner.id === activeId ? styles.active : ""
            }`}
            onClick={() => handleTabClick(partner.id)}
          >
            {partner.tabLabel}
          </button>
        ))}
      </div>

      <div className={styles.cardsViewport}>
        <div className={styles.cardsRow} ref={rowRef}>
          {PARTNER_TYPES.map((partner) => (
            <article
              key={partner.id}
              data-id={partner.id}
              ref={(el) => (cardRefs.current[partner.id] = el)}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>{partner.title}</h3>
              <p className={styles.cardDescription}>{partner.description}</p>

              <p className={styles.suitedForLabel}>Best suited for</p>
              <ul className={styles.suitedForList}>
                {partner.suitedFor.map((item) => (
                  <li key={item} className={styles.suitedForItem}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.cardSpacer} />

              {/* Desktop-only: revealed on card hover */}
              <div className={styles.cardAction}>
                <button type="button" className={styles.actionButton}>
                   <a
              href="/partner-with-us"
              className={styles.action}
            >
              Become a Partner →
            </a>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile-only: persistent CTA below the carousel */}
        {/* <button type="button" className={styles.mobileCta}>
           <a
              href="/partner-with-us"
              className={styles.action}
            >
              Become a Partner →
            </a>
        </button> */}

        {/* Mobile-only: swipe progress indicator */}
        <div className={styles.dots}>
          {PARTNER_TYPES.map((partner, i) => (
            <span
              key={partner.id}
              className={`${styles.dot} ${
                i === activeIndex ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}