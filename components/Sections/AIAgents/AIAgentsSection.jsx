import styles from "./AIAgentsSection.module.scss";
import Lottie from "lottie-react";
import aiAnimation from "../../../public/images/AIinFinFloh_v4.json";
import ArrowRight from "../../../public/icons/arrow_right.svg";
import ButtonCommon from "../../UI/Button/Button";

const AIAgentsSection = () => {
  return (
    <section className="section section--dark">
      <div className="container stack">
        <h2 className="stack--center text-inverse">
          <em>One Intelligence </em> Layer Across th&nbsp;O2C&nbsp;Journey
        </h2>

        <div className={styles.aIAgentsSection__animation}>
          <Lottie animationData={aiAnimation} loop={true} autoplay={true} />
        </div>
        <a className={styles.aIAgentsSection__card} href="/flohsense-ai-agent">
          <div className={styles.aIAgentsSection__content}>
            <h3>FlohSense AI Agent</h3>
            <p>
              FlohSense AI continuously analyzes financial signals, behaviors,
              and outcomes to guide actions across the entire Order-to-Cash
              process.
            </p>
            <ButtonCommon
              label="Explore FlohSense AI"
              endIcon={<ArrowRight />}
              variant="outline"
            ></ButtonCommon>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AIAgentsSection;
