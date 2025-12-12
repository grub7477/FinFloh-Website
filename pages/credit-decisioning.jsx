import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import FaqContent from "../components/Faq/FaqContent_New";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";

const utmURLs = generateUtmUrls("credit");
export const PRODUCT_INFO_MAP_credit = {
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
      <h1 style={{ display: "inline" }}>Credit Decisioning Software</h1>
      <span className="sub-text"> for</span>
    </div>
  ),
  words: ["Contract/Credit Terms", "Cash Flow Forecasts", "Bad Debt Reduction"],
  afterWords: (
    <div>
      <p>
        Leverage data-driven credit decisioning over guesswork & manual ways
      </p>
    </div>
  ),
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/buyer-intelligence/AI-powered-Credit-Decisions.svg",
  alt: "Credit Decisioning Software FinFloh",
};

const staticBannerContent = {
  heading: "AI-Powered Pricing, Credit & Contract Decisions in CRM",
  spanHeading: "",
  paragraph:
    "Onboard customers faster & negotiate better terms with real-time credit risk monitoring",
};

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What is Credit Decisioning and how does it work at FinFloh?",
    answer: [
      "Credit decisioning is the process of evaluating the creditworthiness of potential customers or clients before extending credit or entering into contracts. FinFloh's Credit Decisioning leverages advanced algorithms and real-time data analysis to assess credit risk and make informed decisions.",
    ],
  },
  {
    uuid: "b",
    question:
      "How can FinFloh's Credit Decisioning Software benefit my business?",
    answer: [
      "Credit decisioning software automates and streamlines the credit evaluation process, helping businesses make informed decisions faster and with greater accuracy. With FinFloh's Credit Decisioning Software, you can gain insights into buyer behavior, mitigate credit risk, and improve cash flow management.",
    ],
  },
  {
    uuid: "c",
    question:
      "Why should I consider implementing FinFloh's Credit Decisioning?",
    answer: [
      "Implementing credit decisioning can help businesses reduce bad debt, improve cash flow forecasting, and mitigate credit risk, leading to more sustainable growth. With FinFloh's Credit Decisioning, you can make smarter credit decisions and optimize your working capital.",
    ],
  },
  {
    uuid: "d",
    question: "What factors are considered in FinFloh's Credit Decisioning?",
    answer: [
      "Factors such as past payment behavior, credit history, financial stability, and market trends are typically considered in credit decisioning. With FinFloh's Credit Decisioning, you can customize the evaluation criteria based on your business needs and market insights.",
    ],
  },
  {
    uuid: "e",
    question: "How does the ML-driven Dynamic Credit Scoring work?",
    answer: [
      "ML-driven dynamic credit scoring uses machine learning algorithms to analyze real-time buyer behavior and market data to generate adaptive credit scores. With FinFloh's ML-driven Dynamic Credit Scoring, you can accurately assess credit risk and tailor credit terms to individual customers.",
    ],
  },
  {
    uuid: "f",
    question:
      "Can FinFloh's Credit Decisioning Software help with cash flow forecasts?",
    answer: [
      "Yes, credit decisioning software can help businesses forecast cash flows more accurately by providing insights into customer payment behaviors and patterns. FinFloh's Credit Decisioning Software offers advanced forecasting capabilities, enabling you to anticipate cash flow fluctuations and manage liquidity effectively.",
    ],
  },
  {
    uuid: "g",
    question: "What are the benefits of real-time alerts and predictions?",
    answer: [
      "Real-time alerts and predictions provide businesses with proactive insights into buyer behavior, allowing them to anticipate payment delays and manage credit risk more effectively. FinFloh's Credit Decisioning offers real-time alerts and predictions, helping you stay ahead of potential credit issues and make timely decisions.",
    ],
  },
  {
    uuid: "h",
    question: "How does AI-powered Credit Risk Management work?",
    answer: [
      "AI-powered credit risk management leverages advanced algorithms to assess credit risk based on a comprehensive analysis of buyer data and market trends. With FinFloh's AI-powered Credit Risk Management, you can identify high-risk customers, mitigate potential losses, and optimize your credit strategy.",
    ],
  },
  {
    uuid: "i",
    question: "What are the key features of Credit Decisioning software?",
    answer: [
      "Key features of credit decisioning software include dynamic credit scoring, real-time monitoring, buyer intelligence, and customizable credit terms and contracts. FinFloh's Credit Decisioning Software offers all these features and more, empowering you to make informed credit decisions and drive business growth.",
    ],
  },
  {
    uuid: "j",
    question: "How can I get started with FinFloh's Credit Decisioning?",
    answer: [
      "To get started with credit decisioning, simply reach out to us to schedule a demo or consultation. Our team will guide you through the process and answer any questions you may have. With FinFloh's Credit Decisioning, you can unlock the power of data-driven credit management and transform your business.",
    ],
  },
];
const mainFeatures = [
  {
    content: (
      <div className="creditMainContent">
        <h2>AI-Powered Credit Decisions</h2>
        <p>
          Negotiate better credit, contract & pricing terms with AI-powered
          inputs
        </p>
        <p>
          Determine and track ARR targets and sales incentives linked with
          market intelligence
        </p>
      </div>
    ),
    imgUrl: "/images/collection1.svg",
    alt: "AI based Credit Recommendations FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>Automated Onboarding in CRM</h2>

        <p>
          Fasten buyer onboarding for new opportunities/expansion
          projects/renewals in CRM (like Salesforce)
        </p>
        <p>
          Save time and efforts of sales/ <br /> sales ops/finance/legal and
          other teams involved in onboarding
        </p>
      </div>
    ),
    imgUrl: "/images/collection2.svg",
    alt: "FinFloh seamless integration with CRM like Salesforce",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>ML-Driven Credit Scoring</h2>

        <p>
          Leverage payment behavior & market intelligence data for accurate
          credit scoring in real-time
        </p>
        <p>
          Save time & effort by replacing manual credit data retrieval &
          spreadsheets with ML algorithms
        </p>
      </div>
    ),
    imgUrl: "/images/collection3.svg",
    alt: "Credit risk scoring FinFloh",
  },
  {
    content: (
      <div className="creditMainContent">
        <h2>Credit Risk Monitoring</h2>
        <p>
          Auto-identify risky customers and prepare action plan to counter them
        </p>
        <p>
          Get real-time alerts for risk changes, credit limit utilization,
          anomalies in buyer behaviour, etc
        </p>
      </div>
    ),
    imgUrl: "/images/collection4.svg",
    alt: "Credit risk monitoring and alerts FinFloh",
  },
];

const BuyerIntelligenceAndCreditDecisions = () => {
  return (
    <>
      <HeadComponent
        title="Credit Decisions & Risk Scoring Powered by AI | FinFloh"
        description="Credit decisioning software by FinFloh powered by ML helps businesses make accurate credit & contract decisions while delivering real-time risk alerts."
        canonicalUrl="https://finfloh.com/credit-decisioning"
        includeIsPartOf
        includeAbout={true}
        aboutProps={{
          name: "AI Credit Decisions & Risk Scoring",
          serviceType: "Credit Decisioning and Risk Scoring Software",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Credit Decisioning",
            item: "https://finfloh.com/credit-decisioning",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_credit}
      >
        {/* Hidden SEO Optimized H1 Tag */}
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Credit Decisions
        </h1>
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
                Analyze buyer sentiment and behaviour over email for credit risk
                scoring
              </p>
            </div>
          </div>
        </div>

        <div className="collection-cont">
          <h2 id="credit-heading-update">
            Transform the Buyer Onboarding & Credit
            <br />
            Review Process with more Intelligence
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
            "Get Started with Smarter Credit, Contract & Pricing Decisions with AI Today"
          }
          text={""}
          utmURLs={utmURLs}
        />
        <FaqContent
          bgColor="#ffffff"
          title="Frequently asked questions"
          subTitle="FAQ about FinFloh's Credit Decisioning Software"
          questions={FAQ_CONTENT}
          addContactButton={true}
        />
        <ProductArea
          currentProduct={PRODUCT.BuyerIntelligence}
          PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_credit}
        />
      </WebsiteLayout>
    </>
  );
};

export default BuyerIntelligenceAndCreditDecisions;
