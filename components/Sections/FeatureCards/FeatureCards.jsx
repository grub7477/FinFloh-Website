import { flohsensePage } from "../../../pages/flohsense/flohsense-ai.data";
import styles from "./FeatureCards.module.scss";

const FeatureCards = ({ features = [] }) => {
  return (
    <section className="sub--section">
      <div className={styles.card_wrapper}>
        {features?.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.title_wrapper}>
                <img className="icon" src={item?.icon} alt={item?.title} />
                <h3 className="heading_md">{item?.title}</h3>
              </div>
              <p>{item?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
