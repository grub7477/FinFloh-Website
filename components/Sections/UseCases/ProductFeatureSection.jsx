import ButtonCommon from "../../UI/Button/Button";

const ProductFeatureSection = ({
  title = "",
  description = "",
  image = "",
  pointer = "",
  icon = "",
}) => {
  return (
    <section className="section">
      <div className="container inline">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <li>
              <img src={icon} alt={pointer} />
              {pointer}
            </li>
          </div>
          <ButtonCommon />
        </div>
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default ProductFeatureSection;
