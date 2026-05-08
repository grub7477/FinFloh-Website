import React from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { flohsensePage } from "../data/flohsense-ai.data";
import ProductSection from "../components/Sections/ProductSection/productSection";
import KeyFeature from "../components/Sections/KeyFeature/KeyFeature";
import FeatureSection from "../components/Sections/FeatureSection/FeatureSection";
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
          kicker={flohsensePage.heroSection.kicker}
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

          {/* <ValueAddFeature features={flohsensePage.valueAddFeature.features} /> */}
        </div>
        <ProductSection />
      </div>
    </WebsiteLayout>
  );
};

export default flohsense;
