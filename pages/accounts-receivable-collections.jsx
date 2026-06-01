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
  heading: "AI-driven Collections Software to Get Paid on Time and Efficiently",
  spanHeading: "",
  paragraph: "Know which customers and invoices to prioritize and how to do it",
};
const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What is AI-driven collections software?",
    answer: [
      "AI-driven collections software helps finance teams recover outstanding receivables by automating follow-ups, prioritizing high-risk accounts, and structuring collection workflows based on real-time data.",
      "FinFloh analyzes aging, invoice value, customer payment behavior, and risk indicators to guide collectors toward the highest-impact actions and accelerate receivables recovery.",
    ],
  },
  {
    uuid: "b",
    question:
      "How does FinFloh prioritize customers and invoices for collections?",
    answer: [
      "FinFloh evaluates invoices based on overdue days, outstanding amount, historical payment trends, and risk signals.",
      "It generates a prioritized worklist so collectors focus first on accounts with the greatest recovery potential.",
      "This structured prioritization improves efficiency and shortens collection cycles.",
    ],
  },
  {
    uuid: "c",
    question: "What is an AI-driven collector’s worklist?",
    answer: [
      "An AI-driven collector’s worklist is a dynamically generated task list that ranks action items based on urgency, risk level, and potential recovery value.",
      "FinFloh provides collectors with clear next-best actions, eliminating manual spreadsheet sorting and enabling focused execution.",
    ],
  },
  {
    uuid: "d",
    question: "How does FinFloh automate collection follow-ups?",
    answer: [
      "FinFloh automates follow-ups through configurable dunning workflows triggered by overdue days, invoice value, customer segmentation, or risk category.",
      "Organizations can define communication frequency, escalation paths, and message templates to ensure consistent and professional customer engagement.",
    ],
  },
  {
    uuid: "e",
    question: "Can collection workflows be customized?",
    answer: [
      "Yes. FinFloh allows organizations to configure collections workflows based on customer priority, overdue duration, invoice amount, and risk profile.",
      "Different dunning strategies and escalation rules can be applied across customer segments to balance relationship management with recovery efficiency.",
    ],
  },
  {
    uuid: "f",
    question:
      "How does FlohSense AI accelerate customer communications during the dunning and reminder process?",
    answer: [
      "FlohSense AI enhances collections by intelligently managing customer communications during dunning cycles.",
      "It monitors outgoing reminders and reads incoming customer responses to extract key information such as promise-to-pay commitments, payment references, and dispute details.",
      "The AI Agent parses unstructured email replies, captures payment information for downstream cash application, and routes disputes or queries to the appropriate teams.",
      "It can also adjust follow-up workflows based on customer responses and risk signals.",
      "By converting email interactions into structured action items, FlohSense accelerates response handling, reduces manual inbox monitoring, and ensures coordinated resolution across finance, sales, and operations teams.",
    ],
  },
  {
    uuid: "g",
    question:
      "Can FinFloh record promise-to-pay and customer payment commitments?",
    answer: [
      "Yes. Collectors can log promise-to-pay commitments, payment confirmations, and interaction notes directly within the system.",
      "FlohSense AI can also extract promise-to-pay details from customer emails, ensuring commitments are captured accurately and tracked for follow-up.",
    ],
  },
  {
    uuid: "h",
    question: "How does FinFloh help reduce DSO and improve CEI?",
    answer: [
      "Days Sales Outstanding (DSO) measures how long it takes to collect payments, while Collection Effectiveness Index (CEI) measures how effectively receivables are recovered.",
      "FinFloh reduces DSO and improves CEI by prioritizing high-risk accounts, automating timely follow-ups, enforcing structured escalation workflows, and providing real-time visibility into overdue receivables.",
      "This data-driven approach improves recovery rates and strengthens working capital performance.",
    ],
  },
  {
    uuid: "i",
    question: "What collections performance metrics can be tracked in FinFloh?",
    answer: [
      "FinFloh provides visibility into key collections performance indicators, including Days Sales Outstanding (DSO), Collection Effectiveness Index (CEI), aging bucket distribution, recovery rates by segment, promise-to-pay adherence, and collector productivity and activity logs.",
      "These insights help finance leaders measure performance, identify bottlenecks, and continuously optimize collections strategy.",
    ],
  },
  {
    uuid: "j",
    question:
      "How does FinFloh improve manpower utilization in collections teams?",
    answer: [
      "Manual collections often require time spent sorting spreadsheets, drafting reminders, and tracking responses.",
      "FinFloh automates prioritization, follow-ups, and activity tracking while generating AI-driven worklists for collectors.",
      "This allows teams to manage larger receivables portfolios without increasing headcount and improves productivity per collector.",
    ],
  },
  {
    uuid: "k",
    question: "How does FinFloh help managers monitor collections performance?",
    answer: [
      "FinFloh tracks collector activities, follow-ups, escalations, and recovery outcomes through structured logs and real-time dashboards.",
      "Managers gain visibility into workload distribution, response effectiveness, and performance trends to improve accountability and optimize team efficiency.",
    ],
  },
  {
    uuid: "l",
    question:
      "Can customers access invoices and statements during collections?",
    answer: [
      "Yes. FinFloh enables structured access to invoices, ledger statements, and payment details during the collections process.",
      "Providing visibility to customers reduces back-and-forth communication, clarifies outstanding balances, and supports faster resolution of payment delays.",
    ],
  },
  {
    uuid: "m",
    question: "How can I get started with FinFloh’s AI-Driven Collections?",
    answer: [
      "You can begin by scheduling a demo or discovery session with our team.",
      "We will assess your current collections workflows, DSO trends, CEI performance, and escalation processes.",
      "FinFloh’s onboarding approach includes configuring dunning workflows, AI-driven prioritization, internal alerts, and CRM/ERP integration.",
      "With structured implementation and minimal IT dependency, organizations can quickly transition from manual chasing to data-driven collections execution.",
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
      <div>
        <h2 style={{ paddingBottom: "24px" }}>
          Dynamic Dunning Reminders & Internal Alerts
        </h2>
        <p>
          Trigger automated reminders and internal alerts based on customer
          category, aging delays, and payment patterns. Configure multiple 
          collection templates with dynamic messaging, frequency and escalation
          workflows.
        </p>
      </div>
    ),
    imgUrl: "/images/actual_collection3.svg",
    alt: "Customized collection workflows and follow-ups FinFloh",
  },
  {
    content: (
      <div>
        <h2 style={{ paddingBottom: "24px" }}>
          AI-Driven Collector Worklist & Collections Performance Tracking
        </h2>
        <p>
          Enable collectors with dynamic, prioritized worklists while capturing
          notes, comments, and call logs. Track collections performance through
          detailed reports and analytics across company, customer, and
          individual collector levels with actionable insights.
        </p>
      </div>
    ),
    imgUrl: "/images/collections/collectorsPerformance.png",
    alt: "AI-driven prioritized collector's worklist FinFloh",
  },
  {
    content: (
      <div>
        <h2 style={{ paddingBottom: "24px" }}>
          Promise-to-Pay Management & Collections Forecasting
        </h2>
        <p>
          Record and track promise-to-pay commitments with visibility into
          delays and variances. Generate accurate collections forecasts for cash
          flow predictability.
        </p>
      </div>
    ),
    imgUrl: "/images/collections/forecasting.png",
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
        includeFAQ
        FAQProps={[
          {
            question: "What is AI-driven collections software?",
            answer:
              "AI-driven collections software helps finance teams recover receivables by automating follow-ups, prioritizing high-risk accounts, and structuring workflows based on real-time data. FinFloh analyzes aging, invoice value, and customer behavior to guide collectors toward highest-impact actions.",
          },
          {
            question:
              "How does FinFloh prioritize customers and invoices for collections?",
            answer:
              "FinFloh evaluates invoices based on overdue days, amount, historical trends, and risk signals. It generates a prioritized worklist so collectors focus on accounts with the greatest recovery potential, shortening collection cycles.",
          },
          {
            question: "What is an AI-driven collector’s worklist?",
            answer:
              "An AI-driven collector’s worklist is a dynamically generated task list that ranks action items based on urgency, risk, and recovery value. FinFloh provides collectors with clear next-best actions, eliminating manual spreadsheet sorting.",
          },
          {
            question: "How does FinFloh automate collection follow-ups?",
            answer:
              "FinFloh automates follow-ups through configurable dunning workflows triggered by overdue days, invoice value, or risk category. Organizations can define communication frequency, escalation paths, and professional templates.",
          },
          {
            question:
              "How does FlohSense AI accelerate customer communications during dunning?",
            answer:
              "FlohSense AI reads incoming customer responses to extract promise-to-pay commitments, payment references, and dispute details. It parses unstructured email replies and routes them to appropriate teams, accelerating response handling and reducing manual inbox monitoring.",
          },
          {
            question:
              "Can FinFloh record promise-to-pay and customer payment commitments?",
            answer:
              "Yes. Collectors can log promise-to-pay commitments directly, and FlohSense AI can automatically extract these details from customer emails, ensuring commitments are captured accurately and tracked for follow-up.",
          },
          {
            question: "How does FinFloh help reduce DSO and improve CEI?",
            answer:
              "FinFloh reduces Days Sales Outstanding (DSO) and improves Collection Effectiveness Index (CEI) by prioritizing high-risk accounts, automating timely follow-ups, and enforcing structured escalation workflows with real-time visibility.",
          },
          {
            question:
              "What collections performance metrics can be tracked in FinFloh?",
            answer:
              "FinFloh tracks key indicators including DSO, CEI, aging bucket distribution, recovery rates by segment, promise-to-pay adherence, and collector productivity logs to help finance leaders optimize collections strategy.",
          },
          {
            question:
              "How does FinFloh improve manpower utilization in collections teams?",
            answer:
              "By automating prioritization and follow-ups, FinFloh allows teams to manage larger receivables portfolios without increasing headcount. It eliminates time spent sorting spreadsheets and manual drafting, improving productivity per collector.",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_collections}
        showMainBannerTop={true}
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
                <h4>FLOHSENSE AI AGENT</h4>
                <p>
                  Auto-revert to customer queries and requests for invoices,
                  balances, ledger statements
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
            Supercharge Your Collections <br />
            With FinFloh
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />

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
