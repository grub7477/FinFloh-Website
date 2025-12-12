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
const staticBannerContent = {
  heading: "AI-driven Collections Software to Get Paid on Time and Efficiently",
  spanHeading: "",
  paragraph: "Know which customers and invoices to prioritize and how to do it",
};
const FAQ_CONTENT = [
  {
    uuid: "a",
    question:
      "What makes FinFloh's accounts receivable collections software unique?",
    answer: [
      "FinFloh's accounts receivable collections software stands out for its AI-driven automation, customizable workflows, and seamless integration with existing accounting systems. With FinFloh, businesses can streamline their collections process and improve cash flow efficiently.",
    ],
  },
  {
    uuid: "b",
    question:
      "How does FinFloh's accounts receivable collections software help businesses manage overdue invoices?",
    answer: [
      "FinFloh's collections software automates the process of sending reminders and follow-ups to customers with outstanding payments, enabling businesses to efficiently track and manage overdue invoices. By leveraging AI-driven prioritization and personalized communication, FinFloh helps businesses recover outstanding debts effectively.",
    ],
  },
  {
    uuid: "c",
    question:
      "Can FinFloh's accounts receivable collections software be customized to suit our business needs?",
    answer: [
      "Yes, FinFloh's collections software offers customizable workflows that can be tailored to meet the specific needs and preferences of your business. Whether you need to adjust the frequency of reminders, personalize communication templates, or segment customers based on payment behavior, FinFloh provides flexible options to accommodate your requirements.",
    ],
  },
  {
    uuid: "d",
    question:
      "How secure is FinFloh's accounts receivable collections software?",
    answer: [
      "FinFloh prioritizes data security and employs robust measures to protect sensitive financial information. Our collections software utilizes encryption, secure data storage, and role-based access controls to ensure the confidentiality and integrity of your data, providing you with peace of mind.",
    ],
  },
  {
    uuid: "e",
    question:
      "Does FinFloh's collections software integrate with popular accounting systems?",
    answer: [
      "Yes, FinFloh's collections software seamlessly integrates with leading accounting systems such as QuickBooks, Xero, and NetSuite. This integration enables businesses to sync customer data, invoices, and payment information between FinFloh and their accounting system, streamlining financial processes and enhancing accuracy.",
    ],
  },
  {
    uuid: "f",
    question: "How can FinFloh's collections software help improve cash flow?",
    answer: [
      "FinFloh's collections software accelerates the collections process by automating repetitive tasks and providing insights into customer payment behavior. By optimizing collections workflows, prioritizing collections efforts, and reducing the time it takes to receive payments, FinFloh helps businesses improve cash flow and liquidity.",
    ],
  },
  {
    uuid: "g",
    question:
      "What kind of reporting and analytics capabilities does FinFloh's collections software offer?",
    answer: [
      "FinFloh's collections software provides comprehensive reporting and analytics tools that offer insights into key performance metrics such as DSO (Days Sales Outstanding), receivables aging, and collection effectiveness. With customizable reports and dashboards, businesses can gain actionable insights to optimize their collections strategy and drive better results.",
    ],
  },
  {
    uuid: "h",
    question:
      "Is FinFloh's accounts receivable collections software suitable for businesses of all sizes?",
    answer: [
      "Yes, FinFloh's collections software is designed to cater to businesses of all sizes, from small startups to large enterprises. Whether you have a modest customer base or a vast clientele, FinFloh's scalable solution can adapt to your needs and grow with your business.",
    ],
  },
  {
    uuid: "i",
    question:
      "How does FinFloh's accounts receivable collections software leverage AI technology?",
    answer: [
      "FinFloh's collections software leverages AI technology to analyze customer payment behavior, prioritize collections efforts, and personalize communication with customers. By harnessing the power of AI-driven insights, FinFloh helps businesses optimize their collections strategy and achieve better outcomes.",
    ],
  },
  {
    uuid: "j",
    question:
      "What level of customer support does FinFloh offer for its collections software?",
    answer: [
      "FinFloh is committed to providing exceptional customer support to its users. Our dedicated support team is available to assist you with any questions, issues, or technical challenges you may encounter while using our collections software. We strive to ensure that you have a seamless experience with FinFloh and achieve your collections goals effectively.",
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
  imgUrl: "/images/AIPoweredCollectionPlatform.svg",
  alt: "AI Powered Collections Platform FinFloh",
};

const mainFeatures = [
  {
    content: (
      <div className="creditMainContent">
        <h2>Customized Collection Workflows & Follow-ups</h2>
        <p>
          Implement collections workflows as per customer priority, amount and
          overdue days
        </p>
        <p>Automated Collection follow-ups</p>
        <p>Use varying dunning templates and frequency as per requirement</p>
      </div>
    ),
    imgUrl: "/images/actual_collection1.svg",
    alt: "Customized collection workflows and follow-ups FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>AI-Driven Prioritized Collector's Worklist</h2>

        <p>
          Leverage AI-driven Collectors worklist with priority of action items
        </p>
        <p>
          Accelerate efficiency of collections/revenue assurance/sales teams
        </p>
        <p>Track activity and logs of action items for manager review</p>
      </div>
    ),
    imgUrl: "/images/actual_collection2.svg",
    alt: "AI-driven prioritized collector's worklist FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>Internal/External Communications during Collections</h2>

        <p>
          Raise alerts/notifications to internal teams for better communication
        </p>
        <p>Record payment details and promise-to-pay from customers</p>
        <p>
          Enable customer access to invoices, ledger statements and payments
        </p>
      </div>
    ),
    imgUrl: "/images/actual_collection3.svg",
    alt: "Collections communication and alerts FinFloh",
  },
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
          <div className="flohsenseAI-container-alt">
            <img src="/images/fAI.svg" alt="FlohSense AI Logo" />
            <div className="flohsenseAI-content">
              <h4>FLOHSENSE AI AGENT</h4>
              <p>
                Auto-revert to customer queries and requests for invoices,
                balances, ledger statements
              </p>
            </div>
          </div>
        </div>

        <div className="collection-cont">
          <h2 id="credit-heading-update">
            Supercharge Your Collections <br />
            With FinFloh
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
          </div>
        </div>
        <Newsletter
          heading={
            "Put Your Accounts Receivable Collections on Auto-Pilot with FinFloh"
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
