import ButtonCommon from "../../UI/Button/Button";
import style from "./SpotlightSection.module.scss";

const SpotlightSectionV2 = ({
  quote,
  speaker,
  title,
  description,
  btnText,
  btnLink,
  icon,
}) => {
  return (
    <section className="section">
      <div className={`container ${style.spotlight__container}`}>
        <div className={style.containerLeft}>
          <h4 className="para_lg text-inverse">{quote}</h4>
          <h5 className="heading_md text-inverse">{speaker}</h5>
        </div>
        <div className={style.containerRight}>
            <div className={style.pattern}><img src="/images/partner-program/pattern_dottedCircle.svg" alt="Pattern" /></div>
          <div className={style.content__wrapper}>
              <h2 className="h4 text-inverse">{title}</h2>
              <h3 className="h5">{description}</h3>
              <ButtonCommon label={btnText} href={btnLink} variant="secondary" endIcon={icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSectionV2;
