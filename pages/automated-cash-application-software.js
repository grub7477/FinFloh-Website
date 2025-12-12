import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import FaqContent from "../components/Faq/FaqContent_New";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";

const utmURLs = generateUtmUrls("cash_app");
export const PRODUCT_INFO_MAP_cash_app = {
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
const productBanner = {
  beforeWords: (
    <div>
      <h1>Automated Cash Application Software </h1>
      <span className="P-tag">to Match Invoices with</span>
    </div>
  ),
  words: ["Bank Statements", "Payment Advices", "Remittance Data"],
  afterWords: (
    <div>
      <p>Match your invoices with payments & auto-update in ERP</p>
    </div>
  ),
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/cash-application/Automated-Cash-Application-Platform.svg",
  alt: "Automated Cash Application Platform FinFloh",
};

const mainFeatures = [
  {
    content: (
      <div>
        <h2>ML Based OCR Engine with Multi Format Support</h2>
        <p>
          Utilize ML-based OCR to process diverse formats of bank statements and
          remittance advices from multiple sources including email bodies,
          attachments, and buyer portals
        </p>
      </div>
    ),
    imgUrl: "/images/cash-application/ML-Driven-OCR-Engine.svg",
    alt: "ML-based OCR engine for processing bank statements and remittance advices FinFloh",
  },
  {
    content: (
      <div>
        <h2>Minimize Manual Effort, Capture Audit Trails & Auto-Update ERP</h2>
        <p>
          Ensure real-time update of your invoice status (paid/partially paid)
          into your ERP with minimal manual intervention, while tracking audit
          trails with date & time stamps
        </p>
      </div>
    ),
    imgUrl: "/images/cash-application/Real-Time-ERP-Update.svg",
    alt: "Real-time ERP update and audit trail tracking FinFloh",
  },
];

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

const CashApplication = () => {
  return (
    <>
      <HeadComponent
        title="Automated Cash Application Software | FinFloh"
        description="Automated cash application software by FinFloh uses ML to streamline invoice-payments matching while handling case like missing remittance/unidentified customer"
        canonicalUrl="https://finfloh.com/automated-cash-application-software"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Automated Cash Application Software",
          serviceType: "Cash Application Automation with ML-based Matching",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Automated Cash Application Software",
            item: "https://finfloh.com/automated-cash-application-software",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_cash_app}
      >
        <ProductBanner
          productBanner={productBanner}
          utmURLs={utmURLs}
          staticButton={true}
        />

        <div className="flohsenseAI-wrapper">
          <div className="flohsenseAI-container-alt">
            <img src="/images/fAI.svg" alt="FlohSense AI Logo" />
            <div className="flohsenseAI-content">
              <h4>FLOHSENSE AI AGENT</h4>
              <p>Auto-extract payment info from customer emails</p>
            </div>
          </div>
        </div>

        <div className="youtube-embed-video">
          <h2>See FinFloh Transform Your AR Workflow</h2>
          <iframe
            src="https://www.youtube.com/embed/-D13kBGW6fs?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="collection-cont">
          <h2 style={{ maxWidth: "700px" }}>
            Experience Error-Free Cash Reconciliation with our Cash Application
            Software
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
          </div>
        </div>
        <Newsletter
          heading={"Accelerate Your Cash Application Process with FinFloh"}
          text={""}
          utmURLs={utmURLs}
        />
        <FaqContent
          bgColor="#ffffff"
          title="Frequently asked questions"
          subTitle="Want to know more about FinFloh's automated cash application software?"
          questions={FAQ_CONTENT}
        />
        <ProductArea
          currentProduct={PRODUCT.AutomatedCashApp}
          PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_cash_app}
        />
      </WebsiteLayout>
    </>
  );
};

export default CashApplication;
