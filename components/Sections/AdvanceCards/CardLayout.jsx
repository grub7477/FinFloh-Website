import styles from "./CardLayout.module.scss";
import ButtonCommon from "../../UI/Button/Button";

const RAINBOW_BEAMS_COUNT = 25;

const CardLayoutFlex = ({
  kicker,
  title,
  description,
  btnText,
  btnLink,
  icon,
  agents = [],
}) => {
  return (
    <section className="section">
      <div className="container stack stack--extra">
        <div className="stack">
          {kicker && (
            <h3 className="heading_xs highlight-text--gradient">{kicker}</h3>
          )}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          <ButtonCommon
            label={btnText}
            href={btnLink}
            endIcon={icon}
            variant="primary"
          />
        </div>

        {/* Card Content */}
        <div className={styles.card__wrapper}>
          {agents?.map((item, index) => (
            <div key={item?.uuid ?? index} className={styles.card}>
              {/* Rainbow Background Overlay */}
              <div className={styles.rainbowContainer} aria-hidden="true">
                {Array.from({ length: RAINBOW_BEAMS_COUNT }).map((_, i) => (
                  <div key={i} className={styles.rainbow} />
                ))}
                <div className={styles.h} />
                <div className={styles.v} />
              </div>

              {/* Foreground Card Content */}
              <div className={styles.card_contentWrapper}>
                <div className={styles.headerWrapper}>
                  {item?.name && <h4>{item.name}</h4>}
                  {item?.tagline && <p className="para_sm">{item.tagline}</p>}
                </div>
                <div className={styles.subfeature_wrapper}>
                  <div className={styles.reads_wrapper}>
                    <h5>READS</h5>
                    <ul className="listItems">
                      {item.reads?.map((sub, subIndex) => (
                        <li key={subIndex}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.outputs_wrapper}>
                    <h5>{item?.outputLabel}</h5>
                    <ul className={styles.output_list}>
                      {item.outputs?.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <span>
                            <img src="/images/check.svg" alt="" />
                          </span>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardLayoutFlex;