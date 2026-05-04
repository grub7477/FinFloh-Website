import styles from "./FocusSection.module.scss";

const FocusSection = ({ title, description, image, features = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading_2}>{title}</h2>
        </div>
        <div className={styles.inline}>
          <img src={image} alt={title} />

          <div className={styles.card_wrapper}>
            {features.map((item, index) => {
              return (
                <div key={index} className={styles.card}>
                  <h3 className={styles.heading_5}>{item.title}</h3>
                  <p className={styles.para}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
