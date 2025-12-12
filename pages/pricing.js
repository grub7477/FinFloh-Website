import React from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import FaqContent from "../components/Faq/FaqContent_New";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";
import CommonButton from "../components/Common/CommonButton";
const utmURLs = generateUtmUrls("pricing");
export const PRODUCT_INFO_MAP_pricing = {
  [PRODUCT.Integration]: {
    title: "Invoice Validation Automation",
    url_navbar: utmURLs.integrationsAndInvoiceVerification_navbar,
    url_footer: utmURLs.integrationsAndInvoiceVerification_footer,
    url_otherProducts: utmURLs.integrationsAndInvoiceVerification_otherProducts,
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url_navbar: utmURLs.collaborativeCommunication_navbar,
    url_footer: utmURLs.collaborativeCommunication_footer,
    url_otherProducts: utmURLs.collaborativeCommunication_otherProducts,
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url_navbar: utmURLs.accountsReceivableCollections_navbar,
    url_footer: utmURLs.accountsReceivableCollections_footer,
    url_otherProducts: utmURLs.accountsReceivableCollections_otherProducts,
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    url_navbar: utmURLs.creditdecisioning_navbar,
    url_footer: utmURLs.creditdecisioning_footer,
    url_otherProducts: utmURLs.creditdecisioning_otherProducts,
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url_navbar: utmURLs.automatedCashApplication_navbar,
    url_footer: utmURLs.automatedCashApplication_footer,
    url_otherProducts: utmURLs.automatedCashApplication_otherProducts,
  },
};
const FAQ_CONTENT = [
  {
    uuid: "a",
    question:
      "Does FinFloh's cash application software post information back to ERP?",
    answer: [
      "FinFloh's cash application software matches invoices with payments and posts the informaiton back to your ERP completing the entire invoice to cash process with complete accuracy.",
    ],
  },
  {
    uuid: "b",
    question:
      "What challenges does the cash application process present, and how can they be overcome?",
    answer: [
      "Addressing challenges such as manual remittance data capture from email bodies, attachments, portals and more, ERP code assignments to disputes, and handling missing remittance scenarios is crucial. Our proprietary algorithm tackles these hurdles, providing efficient solutions to streamline the entire cash application process.",
    ],
  },
  {
    uuid: "c",
    question:
      "Does FinFloh's cash application software integrate with other finance and accounting systems?",
    answer: [
      "Our cash application software not just integrates with all your finance and accounting systems but also provides a single source of truth for you. to track all your invoice and payments information.",
    ],
  },
  {
    uuid: "d",
    question:
      "What is the pricing for your automated cash application software?",
    answer: [
      "Our pricing usually comprises two components, including a one-time setup fee and an annual/monthly recurring platform fee. We offer customized pricing tailored to your specific business needs, and you can discuss your requirements with us ",
      <a
        href="https://finfloh.com/book-a-demo"
        style={{ display: "inline" }}
        key="demoLink"
      >
        during a call.
      </a>,
    ],
  },
  {
    uuid: "e",
    question:
      "How quickly can the FinFloh Cash Application software be implemented?",
    answer: [
      "It completely depends on the complexity of scope. Typically it takes us 2-3 weeks for the complete setup and go-live of our cash application software tool.",
    ],
  },
  {
    uuid: "f",
    question:
      "What are the benefits of an automated cash application software?",
    answer: [
      "Our automated cash application software helps you post your cash faster and with more accuracy, and eliminate the hassle of manually collecting remittance information. Spend less time on a labour intensive process like cash application and shift your team's efforts to more strategic and revenue generating functions.",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <HeadComponent
        title="Pricing - FinFloh"
        description="Tailored pricing as per business needs. Categorized into starter, growth and enterprise. Talk to us today and gain total cash flow control."
        canonicalUrl="https://finfloh.com/pricing"
        mainEntityOfPage="https://finfloh.com/pricing"
        includeIsPartOf
        includeAbout
        includeHasPart
        aboutProps={{
          name: "FinFloh Pricing Plans",
          serviceType: "Accounts Receivable Automation Pricing",
        }}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Accelerate your invoice-to-cash journey & gain total cash flow control",
          },
          {
            "@type": "WebPageElement",
            name: "Trusted by Enterprise Finance Teams Worldwide",
          },
          {
            "@type": "WebPageElement",
            name: "Special Advantage Program",
          },
          {
            "@type": "WebPageElement",
            name: "FinFloh: A Cut Above The Rest",
          },
        ]}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Pricing",
            item: "https://finfloh.com/pricing",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_pricing}
      >
        <div
          className="bg-container"
          style={{ alignItems: "center", flexDirection: "column" }}
        >
          <div className="container-main pricing_container">
            <h1 className="pricing_heading">
              Pricing Tailored To Your Business Needs
            </h1>
            <h2 className="pricing_Subheading">
              Accelerate your invoice-to-cash journey & gain total cash flow
              control
            </h2>
          </div>

          <div className="container-main" style={{ marginTop: "86px" }}>
            <div className="special_advantage_program_container NewNewsletter-bg">
              <div
                className="NewNewsletter-content"
                style={{ alignItems: "flex-start" }}
              >
                <h3 style={{ textAlign: "left" }}>Special Advantage Program</h3>
                <p style={{ textAlign: "left" }}>
                  <span style={{ fontWeight: "bold", color: "#9ACD32" }}>
                    Zero Upfront Cost
                  </span>{" "}
                  - Pay only when agreed metrics are achieved or after 2 months
                  - whichever comes first!
                </p>
              </div>

              <div className="special_advantage_program_button">
                <a
                  href="https://finfloh.com/book-a-demo?utm_source=pricing_page_advantage&utm_medium=finfloh_website"
                  target="_blank"
                  className="demo_button_link"
                >
                  <button className="demo_button">Enroll for Free</button>
                </a>
              </div>
            </div>
          </div>

          <div className="container-main">
            <img
              alt="FinFloh pricing plans and features comparison table for desktop view"
              className="pricing-table"
              src="/images/web-pricing.svg"
            />
            <img
              alt="FinFloh pricing plans and features comparison table for mobile view"
              className="pricing-table-mobile"
              src="/images/Mobile-Pricing.svg"
            />
          </div>
          <div className="container-main quote-btn-container">
            <a
              target="_blank"
              style={{ width: "100%" }}
              href="https://finfloh.com/get-a-quote?utm_source=pricing_page&utm_medium=finfloh_website&utm_campaign=mobile"
            >
              <button className="quote-btn-mobile">
                Get A Quote
                <img
                  src="images/Redirect-roi.svg"
                  alt="External link arrow icon"
                />
              </button>
            </a>
            <a
              target="_blank"
              className="quote_anchor"
              href="https://finfloh.com/get-a-quote?utm_source=pricing_page&utm_medium=finfloh_website&utm_campaign=starter"
            >
              <button className="quote-btn">
                Get A Quote
                <img
                  src="images/Redirect-roi.svg"
                  alt="External link arrow icon"
                />
              </button>
            </a>
            <a
              className="quote_anchor"
              href="https://finfloh.com/get-a-quote?utm_source=pricing_page&utm_medium=finfloh_website&utm_campaign=growth"
              target="_blank"
            >
              <button className="quote-btn2">
                Get A Quote
                <img
                  src="images/Redirect-roi.svg"
                  alt="External link arrow icon"
                />
              </button>
            </a>
            <a
              className="quote_anchor"
              href="https://finfloh.com/get-a-quote?utm_source=pricing_page&utm_medium=finfloh_website&utm_campaign=enterprise"
              target="_blank"
            >
              <button className="quote-btn3">
                Get A Quote
                <img
                  src="images/Redirect-roi.svg"
                  alt="External link arrow icon"
                />
              </button>
            </a>
          </div>
          <div className="container-main">
            <CompaniesLogo />
          </div>
          <div className="container-main">
            <TestimonialsWhyTrust />
          </div>
          {/* <div className="container-main brand-parent-container">
            <div className="brand_container">
              <div className="brand-subContainer">
                <p className="brand_container_heading">
                  Trusted by Accounts Receivable Teams Worldwide
                </p>
              </div>
              <div className="brand-icons">
                <img alt="gupshup-icon" src="images/Gupshup.svg" />
                <img alt="knowlarity icon" src="images/yellow_ai.svg" />
                <img alt="knowlarity icon" src="images/knowlarity.svg" />
                <img alt="knowlarity icon" src="images/Kaleyra.svg" />
                <img alt="resustanability-icon" src="images/resustanability.svg" />

              </div>
            </div>
          </div> */}

          <div className="container-main cashflow-main">
            <div className="cashflow-cal">
              <div className="cashflow-container">
                <div className="cashflow-content">
                  <p className="cashflow-heading">Still have a doubt?</p>
                  <p className="cashflow-para">
                    Calculate how much of a cashflow impact you can create by
                    using FinFloh via this ROI calculator
                  </p>
                </div>
                <div className="cal-btn">
                  <a
                    target="_blank"
                    // className="quote_anchor"
                    href="https://finfloh.com/roi-calculator"
                  >
                    <button className="quote-roi-btn">
                      Calculate your ROI
                      <img
                        src="images/Redirect-roi.svg"
                        alt="External link arrow icon"
                      />
                    </button>
                  </a>
                </div>
              </div>
              {/* <div className="cal-img">
                <img className="RoiCal-img" alt="cal-img" src="images/calculator-web.svg" />
                <img className="RoiCal-img-mobile" alt="cal-img-mobile" src="images/calculatore-mobile.svg" />
              </div> */}
            </div>
          </div>

          <div
            className="container-main"
            style={{ margin: "50px", marginTop: "72px" }}
          >
            <ProductArea
              features={[
                PRODUCT.AutomatedCashApp,
                PRODUCT.ConnectedSystems,
                PRODUCT.CollaborativeCommunication,
                PRODUCT.AIDrivenCollections,
                PRODUCT.AutomatedCashApp,
              ]}
              PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_pricing}
            />
          </div>
          <div className="container-main">
            {/* <FaqContent
            bgColor="#F6F7F2"
            title="Frequently asked questions"
            subTitle="Want to know more about FinFloh's automated cash application software?"
            questions={FAQ_CONTENT}
          /> */}
          </div>
          <div className="container-main">
            <div className="demo_container">
              <p>Maximize Your Cash Flows with FinFloh</p>
              <a
                href="https://finfloh.com/book-a-demo?utm_source=pricing_page_lastCTA&utm_medium=finfloh_website"
                target="_blank"
                className="demo_button_link"
              >
                <button className="demo_button">Book a Demo</button>
              </a>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};
export default Pricing;
