import ButtonCommon from "../Button/Button";
import styles from "./MainBanner.module.scss";

export const MainBanner = ({ bannerRef }) => {
  return (
    <div className={styles.mainBanner} ref={bannerRef}>
      <a
        href="/flohsense-ai-agent?utm_source=website&utm_campaign=website_banner"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.bannerLink}
      >
        <div className={styles.inline}>
          <div className={styles.subContainer}>
            <h2 className={`ai-highlight ${styles.kicker}`}>
              FlohSense AI Agent
            </h2>
            <p className={styles.dash}>/</p>
            <h1 className={styles.heading}>Start a 100-Email Pilot</h1>
          </div>
          <p className={styles.dash}>/</p>
          <p className={styles.para}>
            Forward a customer email to{" "}
            <span className="text-inverse">flohsenseai@finfloh.com</span> and
            see FlohSense AI Agent in action; no ERP or email integration
            needed.
          </p>
        </div>
      </a>

      <div className={styles.rightContainer}>
        <ButtonCommon
          label="Try FlohSense AI"
          variant="secondary-sm"
          href="/flohsense-ai-agent?utm_source=website&utm_campaign=website_banner"
        />
      </div>
    </div>
  );
};
