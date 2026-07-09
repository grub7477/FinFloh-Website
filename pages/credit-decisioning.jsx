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
  heading: "AI-Powered Credit Scoring & Onboarding Decisions in CRM",
  spanHeading: "",
  paragraph:
    "Onboard faster with intelligent terms and credit scoring powered by market/receivables data",
};

const FAQ_CONTENT = [
  {
    uuid: "a",
    question:
      "What is AI-powered pricing, credit, and contract decisioning in CRM?",
    answer: [
      "AI-powered decisioning in CRM enables organizations to evaluate customer credit risk, pricing terms, and contract conditions directly within sales workflows.",
      "FinFloh integrates ML-driven credit scoring and risk intelligence into CRM systems, allowing sales and finance teams to negotiate pricing, payment terms, and exposure limits based on real-time data.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh enable AI-powered credit decisions inside CRM?",
    answer: [
      "FinFloh embeds ML-based credit scoring directly within CRM platforms such as Salesforce.",
      "When a new opportunity, renewal, or expansion project is initiated, the system evaluates risk parameters in real time and recommends credit limits, payment terms, or escalation paths.",
      "This ensures credit decisions are data-driven and aligned with company risk policies before contracts are finalized.",
    ],
  },
  {
    uuid: "c",
    question: "How does ML-driven credit scoring improve accuracy?",
    answer: [
      "FinFloh leverages machine learning models that analyze payment behavior, historical delinquency patterns, exposure levels, and market intelligence signals.",
      "Instead of relying on static spreadsheets, ML models continuously refine scoring logic based on portfolio performance, improving predictive accuracy and reducing bad debt exposure.",
    ],
  },
  {
    uuid: "d",
    question:
      "How does FinFloh support better pricing and contract negotiations?",
    answer: [
      "By providing real-time credit risk insights within CRM, FinFloh enables sales teams to negotiate pricing, payment terms, and contract structures with data-backed confidence.",
      "Higher-risk customers may require adjusted terms or tighter exposure controls, while low-risk customers can be offered competitive terms to accelerate deal closure without increasing portfolio risk.",
    ],
  },
  {
    uuid: "e",
    question: "How does FinFloh accelerate buyer onboarding in CRM?",
    answer: [
      "FinFloh automates credit evaluation and approval workflows directly within CRM systems during new opportunities, renewals, and expansion deals.",
      "This eliminates offline approvals, manual spreadsheet reviews, and fragmented communication, significantly reducing onboarding cycle time.",
    ],
  },
  {
    uuid: "f",
    question: "How does FinFloh save time for sales, finance, and legal teams?",
    answer: [
      "Manual onboarding often requires collecting financial data, reviewing spreadsheets, coordinating approvals, and managing back-and-forth communication across departments.",
      "FinFloh centralizes ML-driven scoring, policy enforcement, and approval workflows within CRM, reducing administrative effort and improving collaboration between sales, sales operations, finance, and legal teams.",
    ],
  },
  {
    uuid: "g",
    question:
      "Can FinFloh determine and track ARR targets and sales incentives?",
    answer: [
      "Yes. FinFloh enables visibility into Annual Recurring Revenue (ARR) targets and sales incentives aligned with risk-adjusted growth strategies.",
      "By combining CRM opportunity data with credit intelligence, organizations can pursue revenue growth while maintaining disciplined risk exposure.",
    ],
  },
  {
    uuid: "h",
    question: "How does FinFloh provide real-time credit risk monitoring?",
    answer: [
      "FinFloh continuously monitors payment behavior, credit limit utilization, exposure changes, and market intelligence indicators.",
      "If a customer’s risk profile deteriorates or exposure thresholds are breached, the system generates alerts to enable proactive risk management.",
    ],
  },
  {
    uuid: "i",
    question:
      "How does FinFloh identify risky customers and recommend action plans?",
    answer: [
      "Using ML-driven analytics, FinFloh detects anomalies in buyer behavior, worsening payment patterns, or concentration risks.",
      "When risk thresholds are triggered, the system can recommend actions such as adjusting credit limits, revising payment terms, escalating approvals, or initiating proactive collections engagement.",
    ],
  },
  {
    uuid: "j",
    question:
      "What types of alerts does FinFloh generate for credit and contract risk?",
    answer: [
      "FinFloh generates real-time alerts for credit limit utilization breaches, risk score deterioration, exposure concentration risks, payment behavior anomalies, and policy threshold violations.",
      "These alerts help organizations respond quickly to emerging risks and protect portfolio quality.",
    ],
  },
  {
    uuid: "k",
    question:
      "How can I get started with FinFloh’s AI-powered Credit Decisioning?",
    answer: [
      "To get started, you can schedule a demo or consultation with our team.",
      "We will assess your current credit evaluation process, CRM workflows, and risk policies, and demonstrate how ML-driven credit scoring and automated decisioning can be embedded directly into your onboarding process.",
      "FinFloh’s implementation approach focuses on rapid CRM integration, configurable policy setup, and minimal disruption to sales workflows.",
      "By adopting AI-powered credit decisioning, organizations can accelerate onboarding, standardize approvals, and strengthen risk-adjusted revenue growth.",
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
          <a href="/flohsense-ai-agent">
            <div className="flohsenseAI-container-alt">
              <img src="/images/fAI.svg" alt="FlohSense AI Logo" />
              <div className="flohsenseAI-content">
                <h4>FLOHSENSE AI AGENT</h4>
                <p>
                  Analyze buyer sentiment and behaviour over email for credit
                  risk scoring
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
            Transform the Buyer Onboarding & Credit
            <br />
            Review Process with more Intelligence
          </h2>
        </div>
        <MainFeatures mainFeatures={mainFeatures} />

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
