import styles from "./AIAgentsSection.module.scss";
import Lottie from "lottie-react";
import aiAnimation from "../../../public/images/AIinFinFloh_v4.json";
import ArrowRight from "../../../public/icons/arrow_right.svg";
import ButtonCommon from "../../UI/Button/Button";

const AIAgentsSection = () => {
  return (
    <section className="section section--dark">
      <div className="container stack">
        <h2 className="text-center text-inverse">
          <em>One Intelligence </em> Layer&nbsp;Across the&nbsp;O2C&nbsp;Journey
        </h2>
        <div>
          <Lottie animationData={aiAnimation} loop={true} autoplay={true} />
        </div>
        <div
          className={`full__width border-radius--sm ${styles.aIAgentsSection__card}`}
        >
          <a className="full__width" href="/flohsense-ai-agent">
            <div
              className={`inline--responsive ${styles.aIAgentsSection__content}`}
            >
              <div className="inline--responsive full__width">
                <h3 className="text-inverse">FlohSense AI&nbsp;Agent</h3>
                <p className="text-inverse">
                  FlohSense AI reads and understands customer emails — resolving
                  queries, sharing records, detecting disputes, and capturing
                  payments.
                </p>
              </div>

              <ButtonCommon
                Inverse
                label="Explore FlohSense AI"
                endIcon={<ArrowRight />}
                variant="outline"
              ></ButtonCommon>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
