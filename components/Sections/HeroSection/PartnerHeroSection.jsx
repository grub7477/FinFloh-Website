import ButtonCommon from "../../UI/Button/Button";
import styles from "./HeroSection.module.scss";

const PartnerHero = ({ title, description, btnText, btnLink,endIcon }) => {

    return(
  // Main container
  <section className="section section--min container">
    <div className={`stack  ${styles.hero_padding}  ${styles.hero_background}`}>
      {/* Content Container */}
      <div className="stack stack--loose center-all">
        <h1 className={`${styles.heroCaps} text--center`}>{title}</h1>
        <p className="text--center">{description}</p>
        {/* Button Container */}
        <div>
          <ButtonCommon label={btnText} href={btnLink} endIcon={endIcon} />
        </div>
      </div>
    </div>
  </section>
  );
};

export default PartnerHero;
