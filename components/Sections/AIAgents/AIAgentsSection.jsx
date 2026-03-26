import styles from "./AIAgentsSection.module.scss";
import Lottie from "lottie-react";
import aiAnimation from "../../../public/images/AIinFinFloh_v4.json";
import { Button } from "react-bootstrap";
import Buttons from "../../UI/Button/Button";
import ButtonCommon from "../../UI/Button/Button";
import { captureOwnerStack } from "react";

const AIAgentsSection = ({ cta = "/flohsense-ai-agent" }) => {
  return (
    <div className={`padding-block ${styles.sectionWrapper}`}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerWrapper__content}>
          <h2>
            <em>One Intelligence</em> Layer Across the O2C Journey
          </h2>
          <p className="background-dark">
            FlohSense AI continuously analyzes financial signals, behaviors, and
            outcomes to guide actions across the entire Order-to-Cash process.
          </p>
        </div>

        <ButtonCommon href={cta} rightIcon={"./images/rightarrow.svg"}>
          Button
        </ButtonCommon>
      </div>
      <div className={styles.animationWrapper}>
        <Lottie
          animationData={aiAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default AIAgentsSection;
