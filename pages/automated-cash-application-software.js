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
    question: "What is automated cash application?",
    answer: [
      "Automated cash application is the process of matching incoming customer payments to open invoices without manual reconciliation.",
      "Instead of reviewing bank statements and ERP ledgers manually, automation software reconciles payments using structured data and intelligent matching logic, improving accuracy and reducing processing time.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh automate cash application?",
    answer: [
      "FinFloh ingests bank statement data and open invoice data from ERP systems, then applies configurable matching rules and intelligent algorithms to reconcile payments automatically.",
      "Payments are matched using invoice numbers, customer identifiers, amounts, and remittance details, significantly reducing manual intervention.",
    ],
  },
  {
    uuid: "c",
    question:
      "Can FinFloh handle partial payments, short payments, and consolidated remittances?",
    answer: [
      "Yes. FinFloh supports complex reconciliation scenarios including partial payments, short payments, overpayments, bulk remittances, and multi-invoice settlements.",
      "The system intelligently allocates payments across invoices while maintaining structured exception handling and full audit visibility.",
    ],
  },
  {
    uuid: "d",
    question:
      "How does FinFloh process remittance advice and payment references?",
    answer: [
      "FinFloh captures and processes remittance information from bank references, structured data feeds, and supporting documentation.",
      "Relevant identifiers such as invoice numbers and payment references are extracted and matched against open invoices to accelerate reconciliation and reduce unapplied cash.",
    ],
  },
  {
    uuid: "e",
    question: "What happens when payments cannot be automatically matched?",
    answer: [
      "If a payment cannot be matched with high confidence, FinFloh routes it into a structured exception workflow.",
      "The system provides suggested matches and contextual information to help finance teams resolve discrepancies quickly while maintaining control and accuracy.",
    ],
  },
  {
    uuid: "f",
    question: "How does automated cash application reduce unapplied cash?",
    answer: [
      "Unapplied cash occurs when payments are received but not properly matched to invoices.",
      "FinFloh reduces unapplied cash by combining intelligent matching logic, configurable allocation rules, and real-time visibility into unmatched payments.",
      "This improves ledger accuracy and strengthens financial reporting reliability.",
    ],
  },
  {
    uuid: "g",
    question: "How does FinFloh integrate with ERP and banking systems?",
    answer: [
      "FinFloh integrates with ERP systems such as Oracle NetSuite, Oracle Fusion, Microsoft Dynamics 365, and SAP S/4HANA.",
      "It connects with banking data feeds or imported bank statements to reconcile payments directly within the ERP environment, eliminating manual re-entry and reconciliation gaps.",
    ],
  },
  {
    uuid: "h",
    question: "How does FinFloh reduce man-hours in cash application?",
    answer: [
      "Manual cash reconciliation requires reviewing bank statements, interpreting remittance details, cross-checking invoice data, and posting allocations into ERP systems.",
      "FinFloh automates payment matching, allocation, and exception routing, significantly reducing manual workload.",
      "Finance teams can process higher payment volumes without increasing headcount and accelerate month-end close cycles.",
    ],
  },
  {
    uuid: "i",
    question:
      "How does FlohSense AI Agent accelerate straight-through cash posting from customer emails?",
    answer: [
      "FlohSense AI Agent reads and parses incoming customer emails to extract payment-related information such as payment reference numbers, invoice references, amounts paid, and remittance details.",
      "It automatically matches the extracted data with open invoices and customer records in the ERP system, validates the allocation, and posts the payment into ERP when confidence thresholds are met.",
      "Payments requiring review are routed through structured exception workflows.",
      "By converting unstructured email communication into structured ERP postings, FlohSense accelerates straight-through cash application, reduces manual reconciliation effort, and increases automation rates.",
    ],
  },
  {
    uuid: "j",
    question: "How does automated cash application improve month-end closing?",
    answer: [
      "By reducing manual reconciliation and accelerating payment allocation, FinFloh shortens reconciliation cycles and improves ledger accuracy.",
      "This enables finance teams to close books faster with fewer manual adjustments and improved audit readiness.",
    ],
  },
  {
    uuid: "k",
    question: "How does FinFloh ensure auditability and financial control?",
    answer: [
      "Every payment allocation, adjustment, exception resolution, and ERP posting is logged with a detailed audit trail.",
      "FinFloh provides visibility into matching logic, user approvals, and posting history, ensuring compliance, transparency, and strong internal financial controls.",
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
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
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
