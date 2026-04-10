import AIAgentsSection from "../components/Sections/AIAgents/AIAgentsSection";
import ButtonCommon from "../components/UI/Button/Button";
import Play from "../public/icons/play.svg";
import ProductSection from "../components/Sections/ProductSection/productSection";

const testing = () => {
  return (
    <>
      <ButtonCommon
        label="Explore Product Demo"
        href="/explore-product"
        startIcon={<Play />}
        variant="primary"
      ></ButtonCommon>
      <ButtonCommon
        label="Explore Product Demo"
        href="/explore-product"
        endIcon={<Play />}
        variant="outline"
      ></ButtonCommon>
      <ButtonCommon
        label="Explore Product Demo"
        href="/explore-product"
        startIcon={<Play />}
        endIcon={<Play />}
        variant="link"
      ></ButtonCommon>
      <AIAgentsSection />
      <ProductSection />
    </>
  );
};

export default testing;
