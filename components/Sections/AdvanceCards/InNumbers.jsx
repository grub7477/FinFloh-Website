import styles from "./InNumbers.module.scss";
import ButtonCommon from "../../UI/Button/Button";

const InNumbers = ({
  kicker,
  title,
  description,
  btnText,
  btnLink,
  icon,
  features = [],
}) => {
  return (
    <section className="section section--blue-gradient">
      <div className="container stack stack--extra-loose">
        <div className="stack">
          {kicker && (
            <h3 className="heading_xs highlight-text--gradient">{kicker}</h3>
          )}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
          <ButtonCommon
            label={btnText}
            link={btnLink}
            endIcon={icon}
            variant="primary"
          />
        </div>

        <div className={styles.card__wrapper}>
          {features?.map((item, index) => (
            <div key={item?.uuid ?? index} className={styles.card}>
              <div className={styles.card_contentWrapper}>
                {item?.kpi && <h4 className="h1">{item.kpi}</h4>}
                {item?.description && (
                  <p className="para_sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InNumbers;
