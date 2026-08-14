import React, { useState } from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import FaqContent from "../components/Faq/FaqContent_New";
import generateUtmUrls from "../utils/utmUrls";
import HeadComponent from "../components/Common/HeadComponent";
import CompaniesLogo from "../components/Common/CompaniesLogo";

const utmURLs = generateUtmUrls("collections");

export const PRODUCT_INFO_MAP_collections = {
  [PRODUCT.Integration]: {
    title: "Invoice Automation",
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
const staticBannerContent = {
  heading:
    "Contract Intelligence using AI for Revenue Assurance & Accurate Invoicing",
  spanHeading: "",
  paragraph:
    "Extract commercial terms from contracts and SOWs to prevent revenue leakge and validate invoices",
};
const FAQ_CONTENT = [
  {
  uuid: "n",
  question: "What is AI-powered contract intelligence?",
  answer: [
    "AI-powered contract intelligence uses AI and document intelligence to read contracts, Statements of Work (SOWs), purchase orders (POs), and related documents.",
    "It extracts important commercial information such as pricing, billing schedules, payment terms, milestones, and contractual obligations to help finance teams improve revenue assurance and invoicing accuracy.",
  ],
},
{
  uuid: "o",
  question: "How does contract intelligence help prevent revenue leakage?",
  answer: [
    "Contract intelligence identifies missed billings, pricing discrepancies, unbilled services, and deviations from agreed commercial terms.",
    "By comparing contractual obligations with billing inputs, FinFloh helps businesses identify potential revenue leakage before invoices are generated.",
    "This enables finance teams to capture billable revenue more accurately and reduce missed or incorrect charges.",
  ],
},
{
  uuid: "p",
  question: "How can contract intelligence improve invoice accuracy?",
  answer: [
    "Contract intelligence extracts billing and commercial terms from contracts and SOWs and makes them available for comparison with billing inputs.",
    "FinFloh helps finance teams validate pricing, billing schedules, quantities, discounts, milestones, and other contractual terms before invoices are generated.",
    "This helps ensure invoices accurately reflect agreed customer terms and reduces billing errors.",
  ],
},
{
  uuid: "q",
  question: "Can AI extract billing terms from contracts and SOWs?",
  answer: [
    "Yes. AI can extract key commercial and billing information from contracts and SOWs, including pricing, billing frequency, payment terms, milestones, quantities, discounts, renewal terms, and other contractual obligations.",
    "FinFloh converts these unstructured document terms into structured information that can be used for billing validation and revenue assurance.",
  ],
},
{
  uuid: "r",
  question:
    "Can contract intelligence work with purchase orders and other documents?",
  answer: [
    "Yes. Contract intelligence can process contracts, SOWs, purchase orders, and other related commercial documents.",
    "FinFloh consolidates the extracted information to provide a structured view of customer billing obligations and commercial terms.",
    "This helps finance teams compare information across documents and reduce inconsistencies during the invoicing process.",
  ],
},
{
  uuid: "s",
  question: "What is DocSense AI and how does it support contract intelligence?",
  answer: [
    "DocSense AI is FinFloh’s AI-powered document intelligence engine designed to read and understand contracts, SOWs, POs, and other business documents.",
    "It extracts commercial terms, pricing, billing schedules, payment terms, milestones, and other contractual obligations from unstructured documents.",
    "The extracted intelligence supports revenue assurance, billing validation, and more accurate invoice generation.",
  ],
},
{
  uuid: "t",
  question:
    "How can I get started with FinFloh’s AI-Driven Contract Intelligence?",
  answer: [
    "You can get started by scheduling a demo or discovery session with the FinFloh team.",
    "FinFloh assesses your contracts, SOWs, POs, invoicing workflows, and revenue assurance requirements to identify relevant automation opportunities.",
    "Implementation includes configuring document extraction, commercial term mapping, and integration with your ERP and invoicing workflows.",
    "This structured approach enables organizations to adopt AI-driven contract intelligence with minimal IT dependency.",
  ],
},
];
const productBanner = {
  beforeWords: (
    <>
      <h1>Accounts Receivable Collections Software &nbsp;</h1>
      <span className="sub-text">To&nbsp;Improve&nbsp;Your</span>
    </>
    // <h1>
    //   Accounts Receivable
    //   <br />
    //   Collections Software To&nbsp;Improve&nbsp;Your
    // </h1>
  ),
  words: ["DSO", "Aging", "Collections Efficiency", "Working Capital"],
  // wordWrapperClassName: "product-banner-two-words",
  afterWords: <p>Focus on critical customers while we handle the rest</p>,
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/contract-intelligence/contract-intelligence-hero.svg",
  alt: "AI Powered Collections Platform FinFloh",
};

const mainFeatures = [
  {
    content: (
      <div>
        <h2 style={{ paddingBottom: "24px" }}>
          AI-Powered Contract & SOW Intelligence
        </h2>
        <p>
          Automatically extract commercial terms, billing schedules, payment
          terms, and other terms from contracts, SOWs, POs and other documents.
        </p>
      </div>
    ),
    imgUrl: "/images/contract-intelligence/contract-sow.svg",
    alt: "Customized collection workflows and follow-ups FinFloh",
  },
  {
    content: (
      <div>
        <h2 style={{ paddingBottom: "24px" }}>
          Prevent Revenue Leakage with Contract-Driven Invoicing
        </h2>
        <p>
          Use extracted contract terms to identify and prevent missed billings
          and revenue leakage, ensuring customers are invoiced accurately and on
          time.
        </p>
      </div>
    ),
    imgUrl: "/images/contract-intelligence/revenue-leakage.svg",
    alt: "AI-driven prioritized collector's worklist FinFloh",
  },
  //   {
  //     content: (
  //       <div>
  //         <h2 style={{ paddingBottom: "24px" }}>
  //           Promise-to-Pay Management & Collections Forecasting
  //         </h2>
  //         <p>
  //           Record and track promise-to-pay commitments with visibility into
  //           delays and variances. Generate accurate collections forecasts for cash
  //           flow predictability.
  //         </p>
  //       </div>
  //     ),
  //     imgUrl: "/images/collections/forecasting.png",
  //     alt: "Collections communication and alerts FinFloh",
  //   },
];

const Collections = () => {
  return (
    <>
      <HeadComponent
        title="Accounts Receivable Collections Software | FinFloh"
        description="A/R collections software by FinFloh speeds up receivables by automating follow-ups & reminders, and uses AI to prioritize customers by risk & overdue balances."
        canonicalUrl="https://finfloh.com/accounts-receivable-collections"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Collections",
          serviceType: "AI-Driven Receivables Collection Automation",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Accounts Receivable Collections",
            item: "https://finfloh.com/accounts-receivable-collections",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            question: "What is AI-powered contract intelligence?",
            answer:
              "AI-powered contract intelligence uses AI and document intelligence to read contracts, SOWs, and POs and extract key commercial information such as pricing, billing schedules, payment terms, and contractual obligations.",
          },
          {
            question:
              "How does contract intelligence help prevent revenue leakage?",
            answer:
              "Contract intelligence identifies missed billings, pricing discrepancies, unbilled services, and deviations from agreed commercial terms, helping businesses prevent revenue leakage before invoices are generated.",
          },
          {
            question: "How can contract intelligence improve invoice accuracy?",
            answer:
              "Contract intelligence extracts billing and commercial terms from contracts and SOWs and makes them available for comparison with billing inputs, helping ensure invoices accurately reflect agreed customer terms.",
          },
          {
            question: "Can AI extract billing terms from contracts and SOWs?",
            answer:
              "Yes. AI can extract pricing, billing frequency, payment terms, milestones, quantities, discounts, renewal terms, and other commercial obligations from contracts and SOWs.",
          },
          {
            question:
              "Can contract intelligence work with purchase orders and other documents?",
            answer:
              "Yes. Contract intelligence can process contracts, SOWs, POs, and related documents to consolidate commercial information and provide a single view of customer billing obligations.",
          },
          {
            question:
              "What is DocSense AI and how does it support contract intelligence?",
            answer:
              "DocSense AI is FinFloh’s AI-powered document intelligence engine that reads contracts, SOWs, and POs to extract commercial terms, pricing, billing schedules, payment terms, and other obligations for revenue assurance and accurate invoicing.",
          },
          {
            question:
              "How can I get started with FinFloh’s AI-Driven Contract Intelligence?",
            answer:
              "You can get started by scheduling a demo or discovery session with the FinFloh team. FinFloh assesses your contracts, SOWs, POs, invoicing workflows, and revenue assurance requirements, then configures document extraction, commercial term mapping, and ERP and invoicing integrations with minimal IT dependency.",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_collections}
      >
        <ProductBanner
          productBanner={productBanner}
          utmURLs={utmURLs}
          isStaticContent={true}
          staticBannerContent={staticBannerContent}
          staticButton={true}
        />

        <div className="flohsenseAI-wrapper">
          <a href="/flohsense-ai-agent">
            <div className="flohsenseAI-container-alt">
              <img src="/images/fAI.svg" alt="FlohSense AI Logo" />
              <div className="flohsenseAI-content">
                <h4>DOCSENSE AI AGENT</h4>
                <p>
                  Read and extract commercial terms and billing schedules from
                  contracts, SOWs, and POs
                </p>
              </div>
              <img
                className="flohsense-arrow"
                src="images/ArrowRight.svg"
                alt="Right Icon"
              ></img>
            </div>
          </a>
        </div>
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
          </div>
        </div>

        <div className="collection-cont">
          <h2 id="credit-heading-update">
            Turn Contracts Into <br />
            Revenue Intelligence With FinFloh
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />

        <Newsletter
          heading={
            "Turn contract data into stronger revenue assurance and accurate invoicing"
          }
          text={""}
          utmURLs={utmURLs}
        />
        <FaqContent
          bgColor="#ffffff"
          title="Frequently asked questions"
          subTitle="Frequently asked questions about FinFloh's 
          Accounts Receivable Collections Software
          "
          questions={FAQ_CONTENT}
        />

        <ProductArea
          currentProduct={PRODUCT.AIDrivenCollections}
          PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_collections}
        />
      </WebsiteLayout>
    </>
  );
};

export default Collections;
