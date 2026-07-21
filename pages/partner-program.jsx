import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import FaqContent from "../components/Faq/FaqContent_New";
import ButtonCommon from "../components/UI/Button/Button";
import CustomerLogos from "../components/Sections/CustomerLogos/CustomerLogos";
import { partnerProgramData } from "../data/partner-program.data";
import HeroSectionNew from "../components/Sections/HeroSection/HeroSectionNew";
import RightArrow from "../public/icons/arrow_right.svg";
import FeatureCards from "../components/Sections/FeatureCards/FeatureCards";
import CardsSection from "../components/Sections/CardsSection/CardsSection";
import CardsSectionV2 from "../components/Sections/CardsSection/CardsSectionV2";
import CardsSectionV3 from "../components/Sections/CardsSection/CardsSectionV3";
import ProductSectionNew from "../components/Sections/ProductSection/ProductSectionNew";
import IntegrationSection from "../components/Sections/Integrations/IntegrationSection";
import SpotlightSectionV2 from "../components/Sections/SpotlightSection/SpotlightSectionV2";

const partnerProgram = () => {
  return (
    <>
      <HeadComponent
        title="Invoice Validation & Automation | FinFloh"
        description="Validate & generate your customer invoices with quotes, orders and actuals with automated sending"
        canonicalUrl="https://finfloh.com/invoice-automation"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Invoice Validation & Automation",
          serviceType: "ERP-CRM Invoice Automation and Credit Management",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Free Trial",
            item: "https://finfloh.com/free-trial",
          },
        ]}
      />

      <WebsiteLayout >
        <HeroSectionNew
          kicker={partnerProgramData.heroSection.kicker}
          title={partnerProgramData.heroSection.title}
          description={partnerProgramData.heroSection.description}
          btnPrimaryText={partnerProgramData.heroSection.btnPrimaryText}
          btnPrimaryLink={partnerProgramData.heroSection.btnPrimaryLink}
          image={partnerProgramData.heroSection.image}
          icon={<RightArrow />}
        />

        <CardsSection
          title={partnerProgramData.whyFinfloh.title}
          description={partnerProgramData.whyFinfloh.description}
          features={partnerProgramData.whyFinfloh.features}
          btnText={partnerProgramData.whyFinfloh.btnText}
          btnLink={partnerProgramData.whyFinfloh.btnLink}
          Icon={<RightArrow />}
        />
        <div class=" container horizontal-line"></div>
        <CardsSectionV2
          title={partnerProgramData.theProblem.title}
          description={partnerProgramData.theProblem.description}
          features={partnerProgramData.theProblem.features}
          btnText={partnerProgramData.theProblem.btnText}
          btnLink={partnerProgramData.theProblem.btnLink}
          Icon={<RightArrow />}
        />
        <ProductSectionNew
          kicker={partnerProgramData.FeatureCards.kicker}
          title={partnerProgramData.FeatureCards.title}
          description={partnerProgramData.FeatureCards.description}
          features={partnerProgramData.FeatureCards.features}
          btnText={partnerProgramData.FeatureCards.btnText}
          btnLink={partnerProgramData.FeatureCards.btnLink}
          icon={<RightArrow />}
        />
        <IntegrationSection
          btnText={partnerProgramData.integrations.btnText}
          btnLink={partnerProgramData.integrations.btnLink}
          icon={<RightArrow />}
        />

        <CardsSectionV3
          title={partnerProgramData.joinFinFloh.title}
          description={partnerProgramData.joinFinFloh.description}
          features={partnerProgramData.joinFinFloh.features}
          btnText={partnerProgramData.joinFinFloh.btnText}
          btnLink={partnerProgramData.joinFinFloh.btnLink}
          Icon={<RightArrow />}
        />
        <SpotlightSectionV2
          title={partnerProgramData.Spotlight.title}
          description={partnerProgramData.Spotlight.description}
          quote={partnerProgramData.Spotlight.quote}
          speaker={partnerProgramData.Spotlight.speaker}
          btnText={partnerProgramData.Spotlight.btnText}
          btnLink={partnerProgramData.Spotlight.btnLink}
          icon={<RightArrow />}
        />

      </WebsiteLayout>
    </>
  );
};
export default partnerProgram;
