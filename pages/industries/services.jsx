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
import { ServiceIndustry } from "../../data/services.data";
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

const handleButtonClick = () => {
  setPopupVisible(true);
  // setSuccess(true);
  // console.log('yy')
};

const serviceIndustry = () => {
  return (
    <>
      <HeadComponent
        title="AI-Powered Contract-to-Cash Automation for Services Firms | FinFloh"
        description="FinFloh helps services organisations automate contract intelligence, invoice validation, invoice generation, approvals, collections, disputes and cash application."
        canonicalUrl="https://finfloh.com/industries/service"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Contract-to-Cash Automation for Services Firms",
          serviceType:
            "AI-Powered Billing, Invoicing & Accounts Receivable Automation",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Service Industry",
            item: "https://finfloh.com/industries/service",
          },
        ]}
      />

      <WebsiteLayout>
        <HeroSectionNew
          kicker={ServiceIndustry.heroSection.kicker}
          title={ServiceIndustry.heroSection.title}
          description={ServiceIndustry.heroSection.description}
          btnText={ServiceIndustry.heroSection.btnText}
          btnLink={ServiceIndustry.heroSection.btnLink}
          image={ServiceIndustry.heroSection.image}
          icon={<RightArrow />}
        />

        <CompaniesLogo />

        <CardsSectionV2
          kicker={ServiceIndustry.theProblem.kicker}
          title={ServiceIndustry.theProblem.title}
          description={ServiceIndustry.theProblem.description}
          features={ServiceIndustry.theProblem.features}
          btnText={ServiceIndustry.theProblem.btnText}
          btnLink={ServiceIndustry.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={ServiceIndustry.thePlatform.kicker}
          title={ServiceIndustry.thePlatform.title}
          description={ServiceIndustry.thePlatform.description}
          features={ServiceIndustry.thePlatform.features}
          btnText={ServiceIndustry.thePlatform.btnText}
          btnLink={ServiceIndustry.thePlatform.btnLink}
          icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>

        <PricingCards
          kicker={ServiceIndustry.capabilities.kicker}
          title={ServiceIndustry.capabilities.title}
          features={ServiceIndustry.capabilities.features}
          btnText={ServiceIndustry.capabilities.btnText}
          btnLink={ServiceIndustry.capabilities.btnLink}
          icon={<RightArrow />}
        />
        <InNumbers
          kicker={ServiceIndustry.numbers.kicker}
          title={ServiceIndustry.numbers.title}
          btnText={ServiceIndustry.numbers.btnText}
          btnLink={ServiceIndustry.numbers.btnLink}
          features={ServiceIndustry.numbers.features}
          icon={<RightArrow />}
        />
        <SpotlightSectionV2
          title={ServiceIndustry.footerCTA.title}
          description={ServiceIndustry.footerCTA.description}
          quote={ServiceIndustry.footerCTA.quote}
          speaker={ServiceIndustry.footerCTA.speaker}
          btnText={ServiceIndustry.footerCTA.btnText}
          btnLink={ServiceIndustry.footerCTA.btnLink}
        />
      </WebsiteLayout>
    </>
  );
};
export default serviceIndustry;
