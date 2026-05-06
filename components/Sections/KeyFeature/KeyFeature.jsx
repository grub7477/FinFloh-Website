import ButtonCommon from "../../UI/Button/Button";

const KeyFeature = ({
  title = "",
  description = "",
  image = "",
  ctaText = "",
  ctaLink = "",
}) => {
  return (
    <section className="section ">
      <div className="container container--dark inline--responsive border-radius--lg container--no-padding">
        <div className="stack stack--loose padding-2xl">
          <h3 className="text-inverse">{title}</h3>
          <p className="text--darkblue-muted">{description}</p>
          <ButtonCommon
            type="button"
            label={ctaText}
            href={ctaLink}
            variant="secondary"
            endIcon
          />
        </div>
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default KeyFeature;
