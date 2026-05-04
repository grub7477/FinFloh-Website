import styles from "./FeatureCards.module.scss";

const FeatureCards = ({ features = [] }) => {
  return (
    <section className={styles.section}>
      {features?.map((item, index) => {
        return (
          <div key={index} className={styles.card_wrapper}>
            <div className={styles.card}>
              <div className={styles.header}>
                <img
                  className={styles.icon}
                  src={item?.icon}
                  alt={item?.title}
                />
                <h5 className={styles.heading_5}>{item?.title}</h5>
              </div>
              <p>{item?.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeatureCards;
