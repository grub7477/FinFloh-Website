import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import Newsletter from "../../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../../components/Common/ProductArea";
import MainFeatures from "../../components/Common/MainFeatures";
import ProductBanner from "../../components/Common/ProductBanner";
import HeadComponent from "../../components/Common/HeadComponent";
import generateUtmUrls from "../../utils/utmUrls";
import { FMCGIndustry } from "../../data/industries.data";
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
          kicker={FMCGIndustry.heroSection.kicker}
          title={FMCGIndustry.heroSection.title}
          description={FMCGIndustry.heroSection.description}
          btnPrimaryText={FMCGIndustry.heroSection.btnPrimaryText}
          btnPrimaryLink={FMCGIndustry.heroSection.btnPrimaryLink}
          image={FMCGIndustry.heroSection.image}
          icon={<RightArrow />}
        />

        <CompaniesLogo />

        <CardsSectionV2
          kicker={FMCGIndustry.theProblem.kicker}
          title={FMCGIndustry.theProblem.title}
          description={FMCGIndustry.theProblem.description}
          features={FMCGIndustry.theProblem.features}
          btnText={FMCGIndustry.theProblem.btnText}
          btnLink={FMCGIndustry.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={FMCGIndustry.thePlatform.kicker}
          title={FMCGIndustry.thePlatform.title}
          description={FMCGIndustry.thePlatform.description}
          features={FMCGIndustry.thePlatform.features}
          btnText={FMCGIndustry.thePlatform.btnText}
          btnLink={FMCGIndustry.thePlatform.btnLink}
          icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>

        <PricingCards
          kicker={FMCGIndustry.capabilities.kicker}
          title={FMCGIndustry.capabilities.title}
          features={FMCGIndustry.capabilities.features}
          btnText={FMCGIndustry.capabilities.btnText}
          btnLink={FMCGIndustry.capabilities.btnLink}
          icon={<RightArrow />}
        />
         {/* Add New Section for AI */}
        <CardLayoutFlex 
        kicker={FMCGIndustry.aiAgents.kicker}
          title={FMCGIndustry.aiAgents.title}
          description={FMCGIndustry.aiAgents.description}
          agents={FMCGIndustry.aiAgents.agents}
          btnText={FMCGIndustry.aiAgents.btnText}
          btnLink={FMCGIndustry.aiAgents.btnLink}
          icon={<RightArrow />}
        />
        <InNumbers
          kicker={FMCGIndustry.numbers.kicker}
          title={FMCGIndustry.numbers.title}
          btnText={FMCGIndustry.numbers.btnText}
          btnLink={FMCGIndustry.numbers.btnLink}
          features={FMCGIndustry.numbers.features}
          icon={<RightArrow />}
        />
        <SpotlightSectionV2
          title={FMCGIndustry.footerCTA.title}
          description={FMCGIndustry.footerCTA.description}
          quote={FMCGIndustry.footerCTA.quote}
          speaker={FMCGIndustry.footerCTA.speaker}
          btnText={FMCGIndustry.footerCTA.btnText}
          btnLink={FMCGIndustry.footerCTA.btnLink}
        />
      </WebsiteLayout>
    </>
  );
};
export default FMCG;
