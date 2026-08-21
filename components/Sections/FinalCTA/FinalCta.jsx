import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./FinalCta.module.scss";

const AUTO_ROTATE_MS = 6000;
const FADE_MS = 400;

const TESTIMONIALS = [
  {
    quote:
      "Within the first six months of partnering with FinFloh, we successfully implemented the platform for 5 enterprise customers. The product was easy to position, and the FinFloh team actively supported us through demos, solutioning, and go-live.",
    role: "Managing Partner,",
    company: "Finance Transformation Consulting Firm",
  },
  {
    quote:
      "FinFloh helped us reduce implementation timelines by nearly 40% compared to traditional finance transformation projects. Our customers appreciated the quick deployment and measurable business outcomes.",
    role: "Practice Director,",
    company: "ERP Consulting Partner",
  },
  {
    quote:
      "In our first year, we generated 3x more finance automation opportunities by including FinFloh in our solution portfolio. The AI capabilities have become a strong differentiator during customer conversations.",
    role: "Director – Business Solutions,",
    company: "Technology Consulting Firm",
  },
  {
    quote:
      "FinFloh has become a strategic part of our finance automation practice. In the first year of our partnership, we completed 6 successful customer implementations, with most projects going live in under 45 days. The team's technical expertise and collaborative approach have been instrumental in helping us win and deliver projects.",
    role: "Managing Director,",
    company: "Digital Finance Consulting Firm",
  },
];

export default function FinalCta() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0); // what's actually rendered
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const fadeTimeout = useRef(null);

  const goTo = useCallback(
    (index) => {
      const next = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
      if (next === activeIndex) return;
      setIsFading(true);
      setActiveIndex(next);
    },
    [activeIndex]
  );

  // swap displayed content only after the fade-out finishes,
  // then fade back in — this is what makes it feel smooth
  useEffect(() => {
    fadeTimeout.current = setTimeout(() => {
      setDisplayIndex(activeIndex);
      setIsFading(false);
    }, FADE_MS);
    return () => clearTimeout(fadeTimeout.current);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || TESTIMONIALS.length <= 1) return;

    const timer = setInterval(() => {
      setIsFading(true);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const active = TESTIMONIALS[displayIndex];

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div
          className={styles.quoteBlock}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`${styles.quoteFade} ${isFading ? styles.quoteFadeOut : styles.quoteFadeIn}`}
          >
            <p className={styles.quote}>&ldquo;{active.quote}&rdquo;</p>
            <p className={styles.attribution}>
              <span className={styles.role}>{active.role}</span>{" "}
              <span className={styles.company}>{active.company}</span>
            </p>
          </div>

          {TESTIMONIALS.length > 1 && (
            <>
              <div className={styles.dots} role="tablist" aria-label="Testimonials">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              {/* progress loader — shows time remaining until next auto-rotation */}
              <div className={styles.progressTrack} aria-hidden="true">
                <div
                  key={activeIndex}
                  className={styles.progressFill}
                  style={{
                    animationDuration: `${AUTO_ROTATE_MS}ms`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              </div>
            </>
          )}
        </div>

        <hr className={styles.divider} />

        <div className={styles.ctaBlock}>
          <h3 className={styles.ctaHeading}>Ready to grow with FinFloh?</h3>
          <p className={styles.ctaBody}>
            Join our global partner ecosystem today.
          </p>
          <button type="button" className={styles.ctaButton}>
            <a href="/partner-with-us" className={styles.action}>
              Become a Partner →
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}