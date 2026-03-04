import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import FaqContent from "../components/Faq/FaqContent_New";
const utmURLs = generateUtmUrls("integrations");
export const PRODUCT_INFO_MAP_integrations = {
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
const productBanner = {
  beforeWords: (
    <div>
      <h1>Automated Invoice Validation, Generation and Sending</h1>
      {/* <span className="verification-h1">Seamless</span>

      <h1>
        Invoice Verification & Integrations
        <br />
        with your
      </h1> */}
    </div>
  ),
  words: ["ERP / Accounting", "CRM", "Billing", "Payments"],
  afterWords: (
    <div>
      <h2>Software</h2>
      <p>
        Integrate your ERP/CRM to fetch invoices automatically, verify with
        quotes/actuals for accuracy & automate sending them to your customers
      </p>
    </div>
  ),
  btnText: "Start Integration",
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/IntegrationBanner.svg",
  imgMobileUrl: "/images/IntegrationBanner-mobile.svg",
  alt: "FinFloh Integrations",
};

const staticBannerContent = {
  heading: "Automated Invoice Validation, Generation and Sending",
  paragraph:
    "Sync your ERP with CRM/order/billing platforms to generate correct invoices and send them",
};
const mainFeatures = [
  {
    content: (
      <div className="creditMainContent">
        <h2>Auto-Generation of Invoices & Credit Notes in ERPs</h2>
        <p>Auto-generate invoices in ERPs through APIs or csv uploads</p>
        <p>Never miss out on invoicing through alerts and notifications</p>
        <p>
          Auto-create & track credit notes in ERPs linked with invoice
          cancellations
        </p>
      </div>
    ),
    imgUrl: "/images/invoicing1.svg",
    imgSmallUrl: "/images/invoicing1.svg",
    alt: "Auto-creation of invoices and credit notes FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>Generate Invoices Accurately and Automatically</h2>
        <p>
          Validate & correct invoices by matching them with
          quotes/orders/contracts
        </p>
        <p>Minimize dispute occurrences by eliminating invoice errors</p>
        <p>Approve invoice edits and cancellations</p>
      </div>
    ),
    imgUrl: "/images/invoicing2.svg",
    imgSmallUrl: "/images/invoicing2.svg",
    alt: "Invoice error elimination and verification FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>Invoice Delivery & Audit</h2>
        <p>Manual and automated invoice sending into buyer email inbox</p>
        <p>Auto-upload of invoices into Buyer A/P & ERP portals</p>
        <p>Track invoice delivery status with responses</p>
      </div>
    ),
    imgUrl: "/images/invoicing3.svg",
    imgSmallUrl: "/images/invoicing3.svg",
    alt: "Invoice delivery and audit automation FinFloh",
  },
];

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What is automated invoice generation?",
    answer: [
      "Automated invoice generation is the process of creating invoices directly within ERP systems using structured data from CRM, order management, or billing platforms.",
      "Instead of manually preparing invoices, the system generates invoices automatically based on transactional and contractual data.",
      "FinFloh enables auto-generation of invoices in ERPs through APIs or structured uploads, ensuring accurate and timely billing.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh automate invoice generation?",
    answer: [
      "FinFloh syncs ERP systems with CRM, order, and contract data to generate invoices automatically.",
      "It validates pricing, quantities, tax details, customer information, and required references before invoice creation.",
      "This eliminates manual data extraction and reduces billing errors at scale.",
    ],
  },
  {
    uuid: "c",
    question: "How does FinFloh ensure invoices are generated accurately?",
    answer: [
      "FinFloh validates invoice data by matching it against approved quotes, orders, and contract terms before generation.",
      "By verifying pricing logic, quantities, and customer details upfront, the system minimizes invoice errors and reduces downstream disputes.",
    ],
  },
  {
    uuid: "d",
    question:
      "Can FinFloh auto-generate invoices and credit notes in ERP systems?",
    answer: [
      "Yes. FinFloh supports auto-generation of invoices and linked credit notes directly within ERP systems.",
      "When invoice cancellations or adjustments occur, corresponding credit notes can be automatically created and tracked.",
      "This ensures billing corrections are structured, traceable, and audit-ready.",
    ],
  },
  {
    uuid: "e",
    question: "How does FinFloh prevent missed or delayed invoicing?",
    answer: [
      "FinFloh uses alerts and notifications to ensure invoices are not missed due to manual process gaps.",
      "If billing events are pending or delayed, the system flags them for action.",
      "This prevents revenue leakage caused by missed invoicing cycles.",
    ],
  },
  {
    uuid: "f",
    question: "How does FinFloh automate invoice sending?",
    answer: [
      "Once invoices are generated and validated, FinFloh automates invoice distribution into buyer email inboxes or configured delivery workflows.",
      "This eliminates manual downloading, attaching, and sending of invoices, ensuring consistent and timely delivery.",
    ],
  },
  {
    uuid: "g",
    question:
      "Does FinFloh support auto-upload of invoices into buyer AP and ERP portals?",
    answer: [
      "Yes. Many B2B customers require invoice submission through Accounts Payable (AP) or ERP vendor portals.",
      "FinFloh supports automated or assisted upload of invoices into buyer portals, reducing manual portal submissions and ensuring compliance with customer requirements.",
    ],
  },
  {
    uuid: "h",
    question:
      "Can FinFloh track invoice delivery status and customer responses?",
    answer: [
      "FinFloh tracks invoice delivery status and monitors responses where applicable.",
      "Finance teams gain visibility into delivery confirmation, acknowledgments, and customer queries.",
      "This improves follow-up efficiency and reduces uncertainty in billing communications.",
    ],
  },
  {
    uuid: "i",
    question: "How does invoice automation reduce disputes?",
    answer: [
      "Invoice disputes often arise from incorrect pricing, missing references, or mismatches with approved contracts or orders.",
      "By validating invoices before generation and ensuring accurate delivery, FinFloh minimizes billing errors and significantly reduces dispute occurrences.",
    ],
  },
  {
    uuid: "j",
    question:
      "How does FlohSense AI Agent enable intelligent invoice communications during the invoice-to-cash process?",
    answer: [
      "FlohSense AI Agent reads and parses incoming customer emails related to invoices, ledger statements, outstanding balances, and contact updates.",
      "When customers request copies of invoices, statements, or balance confirmations, the AI Agent identifies the request, retrieves the relevant documents, and can automatically respond with the appropriate information.",
      "If customers provide updated contact details, FlohSense captures and updates the records within FinFloh and synchronizes them with the CRM system.",
      "By converting unstructured email requests into structured actions, FlohSense reduces manual inbox monitoring, improves response times, and ensures accurate customer communication throughout the invoice-to-cash cycle.",
    ],
  },
  {
    uuid: "k",
    question:
      "How does invoice automation connect to the broader invoice-to-cash process?",
    answer: [
      "Accurate invoice generation and timely delivery form the foundation of the invoice-to-cash cycle.",
      "By integrating invoice automation with collections, cash application, and credit workflows, FinFloh ensures downstream receivables processes operate smoothly, improving recovery rates and overall cash flow visibility.",
    ],
  },
  {
    uuid: "l",
    question: "How can I get started with FinFloh’s Invoice Automation?",
    answer: [
      "To get started, you can schedule a demo or consultation with our team.",
      "We will review your current invoice generation, validation, and sending workflows, along with ERP and CRM integrations.",
      "Our team will demonstrate how FinFloh can automate invoice creation, streamline delivery (including AP portal uploads), and reduce billing errors.",
      "Implementation focuses on rapid ERP integration, configurable validation rules, and minimal disruption to existing processes — enabling you to go live within weeks.",
    ],
  },
];

const Integration = () => {
  return (
    <>
      <HeadComponent
        title="Invoice Validation & Automation | FinFloh"
        description="Validate & generate your customer invoices with quotes, orders and actuals with automated sending"
        canonicalUrl="https://finfloh.com/invoice-automation"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Invoice Validation & Automation ",
          serviceType: "ERP-CRM Invoice Automation and Credit Management",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Free Trial",
            item: "https://finfloh.com/free-trial",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            "@type": "Question",
            name: "What is automated invoice generation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Automated invoice generation is the process of creating invoices directly within ERP systems using structured data from CRM, order management, or billing platforms. FinFloh enables auto-generation of invoices in ERPs through APIs or structured uploads, ensuring accurate and timely billing.",
            },
          },
          {
            "@type": "Question",
            name: "How does FinFloh automate invoice generation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FinFloh syncs ERP systems with CRM, order, and contract data to generate invoices automatically. It validates pricing, quantities, tax details, and customer information before creation, eliminating manual data extraction and reducing billing errors.",
            },
          },
          {
            "@type": "Question",
            name: "Can FinFloh auto-generate invoices and credit notes in ERP systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. FinFloh supports auto-generation of invoices and linked credit notes directly within ERP systems. When cancellations or adjustments occur, corresponding credit notes are automatically created and tracked to ensure audit-ready billing corrections.",
            },
          },
          {
            "@type": "Question",
            name: "How does FinFloh prevent missed or delayed invoicing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FinFloh uses automated alerts and notifications to ensure invoices are not missed due to manual process gaps. If billing events are pending or delayed, the system flags them for action to prevent revenue leakage.",
            },
          },
          {
            "@type": "Question",
            name: "How does FinFloh automate invoice sending?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Once invoices are validated, FinFloh automates distribution directly to buyer email inboxes or configured delivery workflows. This eliminates manual downloading and attaching, ensuring consistent and timely delivery.",
            },
          },
          {
            "@type": "Question",
            name: "Does FinFloh support auto-upload of invoices into buyer AP and ERP portals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. FinFloh supports automated or assisted upload of invoices into buyer Accounts Payable (AP) or ERP vendor portals, reducing manual submissions and ensuring compliance with specific customer requirements.",
            },
          },
          {
            "@type": "Question",
            name: "How does invoice automation reduce disputes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By validating invoices against approved quotes and contracts before generation, FinFloh minimizes incorrect pricing and missing references. Accurate delivery and validation significantly reduce the occurrence of downstream billing disputes.",
            },
          },
          {
            "@type": "Question",
            name: "How does FlohSense AI Agent enable intelligent invoice communications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FlohSense AI Agent reads customer emails to identify requests for invoice copies or ledger statements. It retrieves relevant documents and automatically responds, converting unstructured communication into structured workflows while synchronizing contact updates with the CRM.",
            },
          },
          {
            "@type": "Question",
            name: "How does invoice automation connect to the broader invoice-to-cash process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Accurate invoice generation forms the foundation of the cycle. By integrating automation with collections and cash application, FinFloh ensures downstream receivables processes operate smoothly, improving recovery rates and cash flow visibility.",
            },
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_integrations}
      >
        <ProductBanner
          productBanner={productBanner}
          utmURLs={utmURLs}
          isStaticContent={true}
          staticBannerContent={staticBannerContent} // Correct props
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
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
          </div>
        </div>
        <div className="collection-cont">
          <h2>
            Goodbye Disconnected Systems,
            <br />
            Hello Streamlined Processes!
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />
        {/* <div
          className="bg-container second-fold"
          style={{
            background: "#F6F7F2",
            flexDirection: "column",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <p className="title-secondFold ">OUR TRUSTED CUSTOMERS</p>
          <div className="image-container">
            <img alt="gupshup-icon" src="images/Gupshup.svg" />
            <img alt="knowlarity icon" src="images/yellow_ai.svg" />
            <img alt="knowlarity icon" src="images/Kaleyra.svg" />
            <img alt="knowlarity icon" src="images/knowlarity.svg" />
            <img alt="knowlarity icon" src="images/Pulsepro_new.svg" />
            <img alt="resustanability-icon" src="images/resustanability.svg" />
          </div>
        </div> */}

        <Newsletter
          heading={"Start your Integration Journey Today"}
          text={""}
          utmURLs={utmURLs}
        />
        <FaqContent
          bgColor="#ffffff"
          title="Frequently asked questions"
          subTitle="Frequently asked questions about FinFloh's 
          Invoice Validation Software
          "
          questions={FAQ_CONTENT}
        />

        <ProductArea
          currentProduct={PRODUCT.Integration}
          PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_integrations}
        />
      </WebsiteLayout>
    </>
  );
};

export default Integration;
