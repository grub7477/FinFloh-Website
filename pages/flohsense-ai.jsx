import React from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { Navbar } from "react-bootstrap";
import { flohsensePage } from "./flohsense/flohsense-ai.data";
import ButtonCommon from "../components/UI/Button/Button";
import ProductSection from "../components/Sections/ProductSection/productSection";
import ProductShowcase from "../components/Sections/productHighligh/productHighlight";
import ProductFeatureSection from "../components/Sections/UseCases/ProductFeatureSection";

console.log("data", flohsensePage.featureSection);

const flohsense = () => {
  return (
    <WebsiteLayout>
      <div>
        <section className="section">
          <div className="container">
            <h2 className="kicker">FlohSense AI Agent</h2>
            <h1>Turns Conversations into Actions</h1>
            <p>
              Turn every customer email and chat into automated actions,
              responses, resolutions, and ERP updates.
            </p>
            <ButtonCommon type="button" label="Book a Flohsense AI demo" />
          </div>
        </section>
        {/* Add Customer Logo Outside the section */}
        <section className="section">
          <h2>Where Your Customer Communication Breaks in O2C</h2>
          <div className="">
            <img src="" alt="Customer Communication Gap in O2C" />
            <div>
              <div>
                <h3>Lack Of Insights</h3>
                <p>
                  Unaware of exact status of the invoice. Tracking performance
                  of users depends on users action updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="kicker">A New Era of Communication</h3>
            <h2>Transform Insights into Actionable Strategies</h2>
          </div>
          <img src="" alt="FlohSense Dashboard" />
        </section>
        <section>
          <div className="4cards">
            {/* Create the below section has component */}
            <div>
              <span>
                <img src="" alt="" />
                <h3>Email/Chat Capture</h3>
              </span>
              <p>
                Turns your emails into O2C-focused messages for faster reviews.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <h3 className="kicker">The FinFloh Way</h3>
          <h2>Clear Communication to Streamlined Action</h2>
          {/* <ProductFeatureSection title={flohsensePage} /> */}
        </section>

        <ProductShowcase
        // title={flohsensePage[productShowcase].title}
        // description={flohsensePage[productShowcase].description}
        // ctaText={flohsensePage[productShowcase].ctaText}
        // ctaLink={flohsensePage[productShowcase].ctaLink}
        // image={flohsensePage[productShowcase].image}
        />

        <section className="section">
          <h2>
            Powering FinFloh Products with{" "}
            <span className="ai-highlight">FlohSense AI</span>
          </h2>
          <div className="3card">{/* component simple card */}</div>
        </section>
        <ProductSection />
      </div>
    </WebsiteLayout>
  );
};

export default flohsense;
