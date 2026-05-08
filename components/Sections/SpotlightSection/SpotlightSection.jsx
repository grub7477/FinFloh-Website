import styles from "./SpotlightSection.module.scss";
import { flohsensePage } from "../../../data/flohsense-ai.data";
import FeatureCards from "../FeatureCards/FeatureCards";

const SpotlightSection = ({ title, kicker, image, features }) => {
  return (
    <section>
      <div className={styles.main_wrapper}>
        <div className={styles.header_wrapper}>
          <h3 className="kicker ai-highlight text-center">{kicker}</h3>
          <h2 className="text-inverse text-center ch20">{title}</h2>
        </div>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <FeatureCards features={features} />
    </section>
  );
};

export default SpotlightSection;
