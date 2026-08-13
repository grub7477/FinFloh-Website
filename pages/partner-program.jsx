import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import PartnerHero from "../components/Sections/HeroSection/PartnerHeroSection";
import { partnerProgramData } from "../data/partner-program.data";
import RightArrow from "../public/icons/arrow_right.svg";
import PartnerLogos from "../components/Sections/CustomerLogos/PartnerLogos";
import IntegrationCard from "../components/Sections/IntegrationCards/IntegrationCard";
import WhyPartner from "../components/Sections/WhyPartner/WhyPartner";
import PartnerShipModels from "../components/Sections/PartnerShipModel/PartnerShipModels";
import PartnerBenefits from "../components/Sections/PartnerBenefits/PartnerBenefits";
import FinalCta from "../components/Sections/FinalCTA/FinalCta";
import HeroSection from "../components/Sections/HeroSection/Hero";

const partnerProgram = () => {
  return (
    <>
      <WebsiteLayout>
        {/* <PartnerHero 
        title={partnerProgramData.heroSection.title}
        description={partnerProgramData.heroSection.description}
        btnText={partnerProgramData.heroSection.btnPrimaryText}
        btnLink={partnerProgramData.heroSection.btnPrimaryLink}
        endIcon={ <RightArrow />}
        /> */}
        <HeroSection />

        <PartnerLogos />

        {/* Integrations Sections */}
        <IntegrationCard
          // title={partnerProgramData.integrationStack.title}
          // btnText={partnerProgramData.integrationStack.btnText}
          // btnLink={partnerProgramData.integrationStack.btnLink}
          // endIcon={<RightArrow />}
        />

        <WhyPartner />

        <PartnerShipModels />

        <PartnerBenefits />

        <FinalCta />
      </WebsiteLayout>
    </>
  );
};
export default partnerProgram;
