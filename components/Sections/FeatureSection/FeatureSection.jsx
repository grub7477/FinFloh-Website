import ButtonCommon from "../../UI/Button/Button";
import styles from "./FeatureSection.module.scss";

const FeatureSection = ({ sections = [] }) => {
  return (
    <section className="section--lg">
      <div className={styles.main_container}>
        <div className={styles.head_wrapper}>
          <h3 className="kicker ai-highlight">The FinFloh Way</h3>
          <h2 className="text-center ch25">
            Clear Communication to Streamlined Action
          </h2>
        </div>
        {sections.map((section, index) => (
          <div key={index} className={styles.features_container}>
            <div className={styles.content_wrapper}>
              <h3 className={styles.sub_heading}>{section.title}</h3>
              <p>{section.description}</p>
              <ul className="stack stack--loose">
                {section.features?.map((item, i) => (
                  <li key={i} className="inline">
                    <div className={styles.img_wrapper}>
                      <img
                        className="icon--md icon--container"
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

            <div className="img_wrapper">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
