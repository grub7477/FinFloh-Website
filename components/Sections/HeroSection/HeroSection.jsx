import ButtonCommon from "../../UI/Button/Button";
import style from "./HeroSection.module.scss";

const HeroSection = ({
  variant = "main",
  title,
  kicker,
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
            <h2 className="kicker ai-highlight">{kicker}</h2>
            <h1 className={`ch20 ${style.heading}`}>{title}</h1>
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
