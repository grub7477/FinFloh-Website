import ButtonCommon from "../../UI/Button/Button";
import styles from "./FeatureSection.module.scss";

const FeatureSection = ({ sections = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.kicker}>The FinFloh Way</h3>
          <h2 className={styles.heading}>
            Clear Communication to Streamlined Action
          </h2>
        </div>
        {sections.map((section, index) => (
          <div key={index} className={styles.block}>
            <div className={styles.content}>
              <h3 className={styles.sub_heading}>{section.title}</h3>
              <p>{section.description}</p>

              <ul className={styles.ul}>
                {section.features?.map((item, i) => (
                  <li key={i} className={styles.li}>
                    <img
                      className={styles.icon}
                      src={item.icon}
                      alt={item.point}
                    />
                    {item.point}
                  </li>
                ))}
              </ul>

              <ButtonCommon label={section.ctaText} href={section.ctaLink} />
            </div>

            <div className="image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
