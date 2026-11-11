import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import Newsletter from "../../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../../components/Common/ProductArea";
import MainFeatures from "../../components/Common/MainFeatures";
import ProductBanner from "../../components/Common/ProductBanner";
import HeadComponent from "../../components/Common/HeadComponent";
import generateUtmUrls from "../../utils/utmUrls";
import { ManufacturingIndustry } from "../../data/industries.data";
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

const Manufacturing = () => {
  return (
    <>
      <HeadComponent
        title="AI Accounts Receivable & Contract-to-Cash Software for FMCG | FinFloh"
        description="FinFloh helps FMCG companies automate customer-ledger reconciliation, deductions, claims, collections, invoice automation and cash application to reduce revenue leakage and accelerate cash flow."
        canonicalUrl="https://finfloh.com/industries/manufacturing"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI Accounts Receivable & Contract-to-Cash Platform for FMCG Companies",
          serviceType:
            "Customer Ledger Reconciliation, Deductions & Claims Management, Invoice Automation, Collections & Cash Application Software",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Manufacturing",
            item: "https://finfloh.com/industries/Manufacturing",
          },
        ]}
      />

      <WebsiteLayout>
        <HeroSectionNew
          kicker={ManufacturingIndustry.heroSection.kicker}
          title={ManufacturingIndustry.heroSection.title}
          description={ManufacturingIndustry.heroSection.description}
          btnPrimaryText={ManufacturingIndustry.heroSection.btnPrimaryText}
          btnPrimaryLink={ManufacturingIndustry.heroSection.btnPrimaryLink}
          image={ManufacturingIndustry.heroSection.image}
          icon={<RightArrow />}
        />

        <CompaniesLogo />

        <CardsSectionV2
          kicker={ManufacturingIndustry.theProblem.kicker}
          title={ManufacturingIndustry.theProblem.title}
          description={ManufacturingIndustry.theProblem.description}
          features={ManufacturingIndustry.theProblem.features}
          btnText={ManufacturingIndustry.theProblem.btnText}
          btnLink={ManufacturingIndustry.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={ManufacturingIndustry.thePlatform.kicker}
          title={ManufacturingIndustry.thePlatform.title}
          description={ManufacturingIndustry.thePlatform.description}
          features={ManufacturingIndustry.thePlatform.features}
          btnText={ManufacturingIndustry.thePlatform.btnText}
          btnLink={ManufacturingIndustry.thePlatform.btnLink}
          icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>

        <PricingCards
          kicker={ManufacturingIndustry.capabilities.kicker}
          title={ManufacturingIndustry.capabilities.title}
          features={ManufacturingIndustry.capabilities.features}
          btnText={ManufacturingIndustry.capabilities.btnText}
          btnLink={ManufacturingIndustry.capabilities.btnLink}
          icon={<RightArrow />}
        />
        {/* Add New Section for AI */}
        <CardLayoutFlex
          kicker={ManufacturingIndustry.aiAgents.kicker}
          title={ManufacturingIndustry.aiAgents.title}
          description={ManufacturingIndustry.aiAgents.description}
          agents={ManufacturingIndustry.aiAgents.agents}
          btnText={ManufacturingIndustry.aiAgents.btnText}
          btnLink={ManufacturingIndustry.aiAgents.btnLink}
          icon={<RightArrow />}
        />
        <InNumbers
          kicker={ManufacturingIndustry.numbers.kicker}
          title={ManufacturingIndustry.numbers.title}
          btnText={ManufacturingIndustry.numbers.btnText}
          btnLink={ManufacturingIndustry.numbers.btnLink}
          features={ManufacturingIndustry.numbers.features}
          icon={<RightArrow />}
        />
        <SpotlightSectionV2
          title={ManufacturingIndustry.footerCTA.title}
          description={ManufacturingIndustry.footerCTA.description}
          quote={ManufacturingIndustry.footerCTA.quote}
          speaker={ManufacturingIndustry.footerCTA.speaker}
          btnText={ManufacturingIndustry.footerCTA.btnText}
          btnLink={ManufacturingIndustry.footerCTA.btnLink}
        />
      </WebsiteLayout>
    </>
  );
};
export default Manufacturing;
