import React from "react";
import styles from "./HeroAmbientBackground.module.scss";

const ORBS = [
  { size: 520, top: "-12%", left: "-10%", delay: 0, duration: 28, layer: "back", motion: "a" },
  { size: 440, top: "58%", left: "-8%", delay: 4, duration: 32, layer: "back", motion: "b" },
  { size: 380, top: "8%", left: "78%", delay: 2, duration: 26, layer: "back", motion: "c" },
  { size: 400, top: "65%", left: "70%", delay: 6, duration: 30, layer: "mid", motion: "b" },
  { size: 220, top: "35%", left: "45%", delay: 1, duration: 22, layer: "mid", motion: "a" },
  { size: 160, top: "5%", left: "35%", delay: 3, duration: 20, layer: "mid", motion: "c" },
  { size: 130, top: "75%", left: "22%", delay: 5, duration: 24, layer: "front", motion: "b" },
  { size: 100, top: "18%", left: "12%", delay: 7, duration: 18, layer: "front", motion: "a" },
  { size: 110, top: "42%", left: "82%", delay: 8, duration: 21, layer: "front", motion: "c" },
];

const ARCS = [
  "M0 340 C180 280,360 380,540 310 S900 360,1100 300",
  "M0 260 C220 220,400 300,620 250 S880 290,1100 240",
  "M80 420 C260 360,440 440,640 390 S900 430,1080 370",
  "M20 180 C200 120,420 200,640 150 S920 190,1100 130",
  "M1050 260 H780 C748 260,718 247,696 225 L548 100",
  "M50 300 H310 C342 300,372 313,395 335 L548 460",
];

const TRAVELERS = [
  { path: 0, dur: 16, delay: 0, r: 5 },
  { path: 0, dur: 16, delay: 8, r: 3 },
  { path: 1, dur: 20, delay: 2, r: 4 },
  { path: 2, dur: 18, delay: 4, r: 5 },
  { path: 3, dur: 22, delay: 1, r: 4 },
  { path: 4, dur: 14, delay: 3, r: 3 },
  { path: 5, dur: 15, delay: 6, r: 4 },
];

const HeroAmbientBackground = () => (
  <div className={styles.root} aria-hidden="true">
    <div className={styles.glowCenter} />

    {ORBS.map((orb, i) => (
      <span
        key={i}
        className={`${styles.orb} ${styles[`orb--${orb.layer}`]} ${styles[`orb--motion${orb.motion}`]}`}
        style={{
          width: orb.size,
          height: orb.size,
          top: orb.top,
          left: orb.left,
          "--dur": `${orb.duration}s`,
          "--delay": `${orb.delay}s`,
        }}
      />
    ))}

    <svg
      className={styles.paths}
      viewBox="0 0 1100 480"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-arc-grad" x1="0" y1="0" x2="1100" y2="0">
          <stop stopColor="#006333" stopOpacity="0" />
          <stop offset="0.35" stopColor="#00954A" stopOpacity="0.35" />
          <stop offset="0.65" stopColor="#00B35C" stopOpacity="0.45" />
          <stop offset="1" stopColor="#6ECF9A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-arc-grad-alt" x1="1100" y1="0" x2="0" y2="480">
          <stop stopColor="#006333" stopOpacity="0" />
          <stop offset="0.5" stopColor="#00954A" stopOpacity="0.28" />
          <stop offset="1" stopColor="#A8E6C3" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hero-dot-glow">
          <stop offset="0%" stopColor="#00B35C" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#00954A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6ECF9A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {ARCS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={i % 2 === 0 ? "url(#hero-arc-grad)" : "url(#hero-arc-grad-alt)"}
          strokeWidth={i > 3 ? 1.2 : 1.6}
          fill="none"
          strokeLinecap="round"
          className={styles.arc}
          style={{ "--i": i }}
        />
      ))}

      {TRAVELERS.map((t, i) => (
        <g key={i}>
          <circle r={t.r * 2.4} fill="url(#hero-dot-glow)" opacity="0.4">
            <animateMotion
              dur={`${t.dur}s`}
              repeatCount="indefinite"
              begin={`${t.delay}s`}
              path={ARCS[t.path]}
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.45 0 0.55 1"
            />
          </circle>
          <circle r={t.r} fill="#00B35C" opacity="0.8" className={styles.traveler}>
            <animateMotion
              dur={`${t.dur}s`}
              repeatCount="indefinite"
              begin={`${t.delay}s`}
              path={ARCS[t.path]}
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.45 0 0.55 1"
            />
          </circle>
        </g>
      ))}
    </svg>

    <span className={`${styles.ring} ${styles.ringOne}`} />
    <span className={`${styles.ring} ${styles.ringTwo}`} />
    <span className={`${styles.ring} ${styles.ringThree}`} />
  </div>
);

export default HeroAmbientBackground;
