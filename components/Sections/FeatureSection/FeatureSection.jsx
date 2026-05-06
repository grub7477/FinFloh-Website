import ButtonCommon from "../../UI/Button/Button";
import styles from "./FeatureSection.module.scss";

const FeatureSection = ({ sections = [] }) => {
  return (
    <section className="section--lg">
      <div className={styles.main_container}>
        <div className={styles.head_wrapper}>
          <h3 className="kicker">The FinFloh Way</h3>
          <h2 className="text-center ch25">
            Clear Communication to Streamlined Action
          </h2>
        </div>
        {sections.map((section, index) => (
          <div key={index} className={styles.content_wrapper}>
            <div className={styles.content}>
              <h3 className={styles.sub_heading}>{section.title}</h3>
              <p>{section.description}</p>

              <ul className={styles.ul}>
                {section.features?.map((item, i) => (
                  <li key={i} className={styles.li}>
                    <div className={styles.img_wrapper}>
                      <img
                        className={styles.icon}
                        src={item.icon}
                        alt={item.point}
                      />
                    </div>
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
