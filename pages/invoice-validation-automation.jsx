import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import Newsletter from "../components/Common/Newsletter";
import ProductArea, { PRODUCT } from "../components/Common/ProductArea";
import MainFeatures from "../components/Common/MainFeatures";
import ProductBanner from "../components/Common/ProductBanner";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
const utmURLs = generateUtmUrls("integrations");
export const PRODUCT_INFO_MAP_integrations = {
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

const Integration = () => {
  return (
    <>
      <HeadComponent
        title="Invoice Validation & Automation | FinFloh"
        description="Validate & generate your customer invoices with quotes, orders and actuals with automated sending"
        canonicalUrl="https://finfloh.com/invoice-validation-automation"
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
        <div className="bg-container">
          <div className="container-main">
            <CompaniesLogo />
          </div>
        </div>

        <Newsletter
          heading={"Start your Integration Journey Today"}
          text={""}
          utmURLs={utmURLs}
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
