import styles from "./SpotlightSection.module.scss";

const SpotlightSection = ({ title, kicker, image }) => {
  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 className={styles.kicker}>{kicker}</h3>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <img className={styles.image} src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
