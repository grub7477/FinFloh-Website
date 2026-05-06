import React from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { Navbar } from "react-bootstrap";
import { flohsensePage } from "./flohsense/flohsense-ai.data";
import ButtonCommon from "../components/UI/Button/Button";
import ProductSection from "../components/Sections/ProductSection/productSection";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import KeyFeature from "../components/Sections/KeyFeature/KeyFeature";
import ValueAddFeature from "../components/Sections/ValueAddFeature/ValueAddFeature";
import FeatureSection from "../components/Sections/FeatureSection/FeatureSection";
import FeatureCards from "../components/Sections/FeatureCards/FeatureCards";
import FocusSection from "../components/Sections/FocusSection/FocusSection";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import SpotlightSection from "../components/Sections/SpotlightSection/SpotlightSection";
import CustomerLogos from "../components/Sections/CustomerLogos/CustomerLogos";

const flohsense = () => {
  return (
    <WebsiteLayout>
      <div>
        <HeroSection
          title={flohsensePage.heroSection.title}
          subTitle={flohsensePage.heroSection.subTitle}
          description={flohsensePage.heroSection.description}
          btnText={flohsensePage.heroSection.btnText}
          btnLink={flohsensePage.heroSection.btnLink}
          image={flohsensePage.heroSection.image}
        />
        <CustomerLogos />
        <div className="container main-container">
          <FocusSection
            title={flohsensePage.focusSection.title}
            description={flohsensePage.focusSection.description}
            image={flohsensePage.focusSection.image}
            features={flohsensePage.focusSection.features}
          />

          <SpotlightSection
            title={flohsensePage.spotlightSection.title}
            kicker={flohsensePage.spotlightSection.kicker}
            image={flohsensePage.spotlightSection.image}
            features={flohsensePage.featureCards.features}
          />

          {/* Feature Section */}
          <FeatureSection sections={flohsensePage.featureSection.sections} />

          <KeyFeature
            title={flohsensePage.keyFeature.title}
            description={flohsensePage.keyFeature.description}
            ctaText={flohsensePage.keyFeature.ctaText}
            ctaLink={flohsensePage.keyFeature.ctaLink}
            image={flohsensePage.keyFeature.image}
          />

          {/* <section className="section">
            <div className="container stack stack--extra-loose">
              <h2 className="text-center">
                Powering FinFloh Products with{" "}
                <span className="ai-highlight">FlohSense AI</span>
              </h2>
              <div className="grid grid--3">
                {flohsensePage.valueAddFeature.features.map((item, index) => {
                  return (
                    <ValueAddFeature
                      key={index}
                      icon={item.icon}
                      productName={item.productName}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </section> */}
        </div>
        <ProductSection />
      </div>
    </WebsiteLayout>
  );
};

export default flohsense;
