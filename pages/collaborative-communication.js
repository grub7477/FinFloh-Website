import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";

const utmURLs = generateUtmUrls("disputes");
export const PRODUCT_INFO_MAP_disputes = {
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
  beforeWords: <h1>Unified Collaboration Platform to</h1>,
  words: ["Break the Silos", "Close Disputes Faster", "Get Paid Quicker"],
  // wordWrapperClassName: "product-banner-two-words",
  afterWords: <p>Bring buyer & seller teams together</p>,
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/collaborations/Collaboration-platform.svg",
  imgMobileUrl: "/images/collaborations/Collaboration-platform.svg",
  alt: "Unified collaboration platform for dispute resolution FinFloh",
};

const mainFeatures = [
  {
    content: (
      <div>
        <h2>Move invoices beyond infinite loops & limbo</h2>
        <p>
          Create collaborative workflows b/w teams with process-wise ownership &
          TATs. Get rid of stuck invoices while providing complete visibility to
          all stakeholders
        </p>
      </div>
    ),
    imgUrl: "/images/collaborations/Collaborative-workflows.svg",
    alt: "Collaborative workflows for invoice management FinFloh",
  },
  {
    content: (
      <div>
        <h2>Resolve Disputes Quickly & Prevent Them</h2>
        <p>
          Manage ownership & escalations of disputes/issues directly from the
          dashboard. Leverage predictive intelligence to spot disputes even
          before they occur
        </p>
      </div>
    ),
    imgUrl: "/images/collaborations/Dispute-Resolution.svg",
    alt: "Quick dispute resolution and prevention dashboard FinFloh",
  },
  {
    content: (
      <div>
        <h2>Centralized Communication within a Single Platform</h2>
        <p>
          Track, review & act upon disputes, closures, promise-to-pays, alerts,
          reminders and updates all within a single platform.
        </p>
      </div>
    ),
    imgUrl: "/images/collaborations/Centralized-Communication.svg",
    alt: "Centralized communication platform for tracking and managing disputes FinFloh",
  },
];

const Collections = () => {
  return (
    <>
      <HeadComponent
        title="Unified Collaboration & Disputes Management Platform | FinFloh"
        description="Eliminate silos; fast-track dispute resolution and collections with one platform by FinFloh that breaks endless invoice loops for buyers and sellers."
        canonicalUrl="https://finfloh.com/collaborative-communication"
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_disputes}
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
              <p>
                Auto-read disputes and convert them into resolution workflows
              </p>
            </div>
          </div>
        </div>
        <div className="collection-cont">
          <h2>
            Help Teams Come Together
            <br />
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
          heading={"Enable Seamless Collaboration & Fastrack A/R Operations"}
          text={""}
          utmURLs={utmURLs}
        />
        <ProductArea
          currentProduct={PRODUCT.CollaborativeCommunication}
          PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_disputes}
        />
      </WebsiteLayout>
    </>
  );
};

export default Collections;
