import styles from "./ValueAddFeature.module.scss";

const ValueAddFeature = ({ icon, productName, title, description }) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.icon} src={icon} alt={productName} />
          <h5 className={styles.sub_heading}>{productName}</h5>
        </div>
        <h4 className={styles.heading}>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ValueAddFeature;
