import styles from "./FocusSection.module.scss";

const FocusSection = ({ title, description, image, features = [] }) => {
  return (
    <section className="section section--lg">
      <div className={styles.focusContainer}>
        <div className="text-center stack stack--center">
          <h2 className="ch25">{title}</h2>
        </div>
        <div className={styles.inline}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={image} alt={title} />
          </div>

          <div className={styles.card_wrapper}>
            {features.map((item, index) => {
              return (
                <div key={index} className={styles.card}>
                  <h3 className="heading_md">{item.title}</h3>
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
