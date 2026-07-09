import styles from "./CardsSection.module.scss";
import ButtonCommon from "../../UI/Button/Button";

const CardsSectionV2 = ({
  kicker,
  title,
  description,
  btnText,
  btnLink,
  features = [],
  Icon,
}) => {
  return (
    <section className="section">
      <div className="container stack stack--extra-loose">
        <div className="stack ">
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonCommon
            label={btnText}
            link={btnLink}
            endIcon={Icon}
            variant="primary"
          />
        </div>

        <div className={styles.card_wrapper2}>
          {features?.map((item, index) => {
            return (
              <div key={index} className="stack card--noHover">
                {item?.kicker && <h5>{item.kicker}</h5>}
                {item?.icon && (
                  <img
                    src={item.icon}
                    alt={item?.title}
                    className="icon icon--xl"
                  />
                )}
                {item?.title && <h4 className="h5">{item.title}</h4>}
                <p className="para_sm">{item?.description}</p>
                {item?.btnText && (
                  <ButtonCommon
                    label={item.btnText}
                    link={item.btnLink}
                    endIcon={item.Icon}
                    variant="tertiary"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsSectionV2;
