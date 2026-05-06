import ButtonCommon from "../../UI/Button/Button";
import style from "./HeroSection.module.scss";

const HeroSection = ({
  variant = "main",
  title,
  subTitle,
  description,
  btnText,
  btnLink,
  btnVariant,
  image,
}) => {
  const classes = [style.hero_section, style[`hero--${variant}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <h2 className={style.kicker}>{subTitle}</h2>
            <h1 className={style.heading}>{title}</h1>
          </div>
          <p className={style.para}>{description}</p>
          <ButtonCommon label={btnText} href={btnLink} variant={btnVariant} />
        </div>
        <img className={style.hero__image} src={image} alt={title} />
      </div>
    </section>
  );
};

export default HeroSection;
