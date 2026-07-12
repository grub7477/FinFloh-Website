import styles from "./PricingCards.module.scss";
import ButtonCommon from "../../UI/Button/Button";

const PricingCards = ({
  kicker,
  title,
  description,
  btnText,
  btnLink,
  icon,
  features = [],
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

        <div className={styles.card__wrapper}>
          {features?.map((item, index) => (
            <div key={item?.uuid ?? index} className={styles.card}>
              <div className={styles.card_contentWrapper}>
                <div className={styles}>
                  {item?.title && <h4>{item.title}</h4>}
                  {item?.description && <p className="para_sm">{item.description}</p>}
                </div>
              
              {/* subsection */}
              {item?.subfeatures?.length > 0 && (
                <div className={styles.subfeatures}>
                  <p className="para_sm">All Features:</p>
                  <ul className="listItems">
                    {item.subfeatures.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <span>
                          <img src="/images/check.svg" alt="" />
                          {sub}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;