import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import Newsletter from "../../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../../components/Common/ProductArea";
import MainFeatures from "../../components/Common/MainFeatures";
import ProductBanner from "../../components/Common/ProductBanner";
import HeadComponent from "../../components/Common/HeadComponent";
import generateUtmUrls from "../../utils/utmUrls";
import { ITIndustry } from "../../data/industries.data";
import CompaniesLogo from "../../components/Common/CompaniesLogo";
import FaqContent from "../../components/Faq/FaqContent_New";
import ButtonCommon from "../../components/UI/Button/Button";
import CustomerLogos from "../../components/Sections/CustomerLogos/CustomerLogos";
import HeroSectionNew from "../../components/Sections/HeroSection/HeroSectionNew";
import RightArrow from "../../public/icons/arrow_right.svg";
import FeatureCards from "../../components/Sections/FeatureCards/FeatureCards";
import CardsSection from "../../components/Sections/CardsSection/CardsSection";
import CardsSectionV2 from "../../components/Sections/CardsSection/CardsSectionV2";
import CardsSectionV3 from "../../components/Sections/CardsSection/CardsSectionV3";
import ProductSectionNew from "../../components/Sections/ProductSection/ProductSectionNew";
import IntegrationSection from "../../components/Sections/Integrations/IntegrationSection";
import SpotlightSectionV2 from "../../components/Sections/SpotlightSection/SpotlightSectionV2";
import PricingCards from "../../components/Sections/AdvanceCards/PricingCards";
import InNumbers from "../../components/Sections/AdvanceCards/InNumbers";
import Testimonial from "../../components/Sections/Testimonials/Testimonials";
import NewNewsLetter from "../../components/Common/NewNewsLetter";
import CardLayoutFlex from "../../components/Sections/AdvanceCards/CardLayout";

const handleButtonClick = () => {
  setPopupVisible(true);
  // setSuccess(true);
  // console.log('yy')
};

const FMCG = () => {
  return (
    <>
      <HeadComponent
        title="AI Contract-to-Cash Software for Services Firms | FinFloh"
        description="FinFloh helps services firms automate contract intelligence, invoice validation, project billing, invoice generation, collections, disputes and cash application to improve cash flow and reduce revenue leakage."
        canonicalUrl="https://finfloh.com/industries/fmcg"
        includeIsPartOf
        includeAbout
      />

      <WebsiteLayout>
        <HeroSectionNew
          kicker={ITIndustry.heroSection.kicker}
          title={ITIndustry.heroSection.title}
          description={ITIndustry.heroSection.description}
          btnPrimaryText={ITIndustry.heroSection.btnPrimaryText}
          btnPrimaryLink={ITIndustry.heroSection.btnPrimaryLink}
          image={ITIndustry.heroSection.image}
          icon={<RightArrow />}
        />

        <CompaniesLogo />

        <CardsSectionV2
          kicker={ITIndustry.theProblem.kicker}
          title={ITIndustry.theProblem.title}
          description={ITIndustry.theProblem.description}
          features={ITIndustry.theProblem.features}
          btnText={ITIndustry.theProblem.btnText}
          btnLink={ITIndustry.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={ITIndustry.thePlatform.kicker}
          title={ITIndustry.thePlatform.title}
          description={ITIndustry.thePlatform.description}
          features={ITIndustry.thePlatform.features}
          btnText={ITIndustry.thePlatform.btnText}
          btnLink={ITIndustry.thePlatform.btnLink}
          icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>

        <PricingCards
          kicker={ITIndustry.capabilities.kicker}
          title={ITIndustry.capabilities.title}
          features={ITIndustry.capabilities.features}
          btnText={ITIndustry.capabilities.btnText}
          btnLink={ITIndustry.capabilities.btnLink}
          icon={<RightArrow />}
        />
         {/* Add New Section for AI */}
        <CardLayoutFlex 
        kicker={ITIndustry.aiAgents.kicker}
          title={ITIndustry.aiAgents.title}
          description={ITIndustry.aiAgents.description}
          agents={ITIndustry.aiAgents.agents}
          btnText={ITIndustry.aiAgents.btnText}
          btnLink={ITIndustry.aiAgents.btnLink}
          icon={<RightArrow />}
        />
        <InNumbers
          kicker={ITIndustry.numbers.kicker}
          title={ITIndustry.numbers.title}
          btnText={ITIndustry.numbers.btnText}
          btnLink={ITIndustry.numbers.btnLink}
          features={ITIndustry.numbers.features}
          icon={<RightArrow />}
        />
        <SpotlightSectionV2
          title={ITIndustry.footerCTA.title}
          description={ITIndustry.footerCTA.description}
          quote={ITIndustry.footerCTA.quote}
          speaker={ITIndustry.footerCTA.speaker}
          btnText={ITIndustry.footerCTA.btnText}
          btnLink={ITIndustry.footerCTA.btnLink}
        />
      </WebsiteLayout>
    </>
  );
};
export default FMCG;
