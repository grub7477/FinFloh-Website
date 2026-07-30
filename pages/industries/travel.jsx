import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import Newsletter from "../../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../../components/Common/ProductArea";
import MainFeatures from "../../components/Common/MainFeatures";
import ProductBanner from "../../components/Common/ProductBanner";
import HeadComponent from "../../components/Common/HeadComponent";
import generateUtmUrls from "../../utils/utmUrls";
import CompaniesLogo from "../../components/Common/CompaniesLogo";
import FaqContent from "../../components/Faq/FaqContent_New";
import ButtonCommon from "../../components/UI/Button/Button";
import CustomerLogos from "../../components/Sections/CustomerLogos/CustomerLogos";
import { TravelIndustry } from "../../data/industries.data";
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

const TravelTech = () => {
  return (
    <>
      <HeadComponent
        title="AI Contract-to-Cash Software for Travel Companies | FinFloh"
        description="FinFloh helps travel Companies automate contract intelligence, customer and partner billing, invoice generation, collections and cash application to improve cash flow and reduce revenue leakage."
        canonicalUrl="https://finfloh.com/industries/travel"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI Contract-to-Cash Platform for Travel Companies",
          serviceType:
            "Customer and Partner Billing, Contract Intelligence, Invoice Automation & Accounts Receivable Software",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Travel",
            item: "https://finfloh.com/industries/travel",
          },
        ]}
      />

      <WebsiteLayout>
        <HeroSectionNew
          kicker={TravelIndustry.heroSection.kicker}
          title={TravelIndustry.heroSection.title}
          description={TravelIndustry.heroSection.description}
          btnPrimaryText={TravelIndustry.heroSection.btnPrimaryText}
          btnPrimaryLink={TravelIndustry.heroSection.btnPrimaryLink}
          image={TravelIndustry.heroSection.image}
          icon={<RightArrow />}
        />

        <CompaniesLogo />

        <CardsSectionV2
          kicker={TravelIndustry.theProblem.kicker}
          title={TravelIndustry.theProblem.title}
          description={TravelIndustry.theProblem.description}
          features={TravelIndustry.theProblem.features}
          btnText={TravelIndustry.theProblem.btnText}
          btnLink={TravelIndustry.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={TravelIndustry.thePlatform.kicker}
          title={TravelIndustry.thePlatform.title}
          description={TravelIndustry.thePlatform.description}
          features={TravelIndustry.thePlatform.features}
          btnText={TravelIndustry.thePlatform.btnText}
          btnLink={TravelIndustry.thePlatform.btnLink}
          icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>

        <PricingCards
          kicker={TravelIndustry.capabilities.kicker}
          title={TravelIndustry.capabilities.title}
          features={TravelIndustry.capabilities.features}
          btnText={TravelIndustry.capabilities.btnText}
          btnLink={TravelIndustry.capabilities.btnLink}
          icon={<RightArrow />}
        />
        {/* Add New Section for AI */}
        {/* <CardLayoutFlex 
        kicker={TravelIndustry.aiAgents.kicker}
          title={TravelIndustry.aiAgents.title}
          agents={TravelIndustry.aiAgents.features}
          btnText={TravelIndustry.aiAgents.btnText}
          btnLink={TravelIndustry.aiAgents.btnLink}
          icon={<RightArrow />}
        /> */}

        <InNumbers
          kicker={TravelIndustry.numbers.kicker}
          title={TravelIndustry.numbers.title}
          btnText={TravelIndustry.numbers.btnText}
          btnLink={TravelIndustry.numbers.btnLink}
          features={TravelIndustry.numbers.features}
          icon={<RightArrow />}
        />

        <SpotlightSectionV2
          title={TravelIndustry.footerCTA.title}
          description={TravelIndustry.footerCTA.description}
          quote={TravelIndustry.footerCTA.quote}
          speaker={TravelIndustry.footerCTA.speaker}
          btnText={TravelIndustry.footerCTA.btnText}
          btnLink={TravelIndustry.footerCTA.btnLink}
        />
      </WebsiteLayout>
    </>
  );
};
export default TravelTech;
