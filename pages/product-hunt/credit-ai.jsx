import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import BookDemoButton from "../../components/Common/BookDemoButton";
import HeadComponent from "../../components/Common/HeadComponent";
import generateUtmUrls from "../../utils/utmUrls";
import LinkButton from "../../components/Common/LinkButton";
const utmURLs = generateUtmUrls("product_hunt_credit_page");
import ProductArea, { PRODUCT } from "../../components/Common/ProductArea";
import CompaniesLogo from "../../components/Common/CompaniesLogo";
export const PRODUCT_INFO_MAP_product_hunt_credit_page = {
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
const INTEGRATION_TXT = [
  "Super easy integrations with zero tech effort",
  "Data sync starts on day 1",
  "Seamless connectivity & data flow across systems",
];
const ProductHunt = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh - Exclusive Deal for Product Hunt Community"
        description="Automate your accounts receivable workflows, take better credit decisions, resolve disputes faster & put your cash posting on auto-pilot. Book a demo today!"
      />
      <title key="title">
        FinFloh - Exclusive Deal for Product Hunt Community
      </title>
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_product_hunt_credit_page}
      >
        <div className="book-a-demo-container bg-container">
          <div className="container-main">
            <div className="productHunt-fold1">
              <div className="productHunt-header">
                <div className="produvt-hunt-content">
                  <img
                    src="../images/productHunt.svg"
                    alt="producthunt-icon"
                    // style={{ top: "0", height: "45px", marginTop: "20px" }}
                  />
                  <p className="welcome-title">Welcome Hunter!</p>
                  <p className="productHunt-Title">
                    Thanks for stopping by <span>FinFloh Credit Hub AI</span>
                  </p>
                  <p className="productHunt-SubTitle">
                    One-stop solution for B2B Credit Decisioning
                  </p>
                </div>
                <div className="bookDemo-section">
                  <div className="productHunt-fold2">
                    <div
                      className="book-a-demo-form"
                      style={{ background: "#fff", border: "none" }}
                    >
                      <p
                        className="book-a-demo-txt"
                        style={{ marginBottom: "34px" }}
                      >
                        Sign up for Free
                      </p>
                      <BookDemoButton
                        text={"Submit"}
                        showFreeTrail
                        templateID={"template_yse6rfm"}
                      />
                      <div className="demoForm-para">
                        <p className="demoForm-para-heading">
                          Exclusively for Product Hunt users
                          <p className="demoForm-para-subHeading">
                            First 3 months of usage is on The House
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CompaniesLogo />

            <div className="productHunt-features-fold">
              <div className="productHunt-features">
                <div className="productHunt-features-left">
                  <p className="question-heading">
                    What makes FinFloh Credit Hub AI the Best Choice?
                  </p>
                  {/* <LinkButton
                    href={
                      "https://finfloh.com/free-trial"
                    }
                    theme={!isScrolled ? props.theme : "Light"}
                    type={LinkBtnType.SECONDARY}
                  >
                    Try For Free
                  </LinkButton> */}
                  <a
                    className="quote_anchor"
                    href="https://finfloh.com/?utm_source=product_hunt_credit_page&utm_medium=finfloh_website"
                    target="_blank"
                  >
                    <button className="product-hunt-explore-btn">
                      Learn More
                      <img
                        src="../images/Redirect-black.svg"
                        alt="redirect-logo"
                      />
                    </button>
                  </a>
                </div>
                <div className="productHunt-features-right">
                  <div className="productHunt-feature-upper">
                    <div className="productHunt-feature-1">
                      <img
                        src="../images/manufacturing.svg"
                        alt="manufacturing-1"
                      />
                      <p className="feature-para">
                        Automated customer onboarding with indicative
                        credit/pricing/contract terms
                      </p>
                    </div>
                    <div className="productHunt-feature-2">
                      <img
                        src="../images/event_repeat.svg"
                        alt="event_repeat-1"
                      />
                      <p className="feature-para">
                        Periodic credit reviews to keep a tap on changing
                        customer risk & modify decisions
                      </p>
                    </div>
                  </div>
                  <div className="productHunt-feature-down">
                    <div className="productHunt-feature-3">
                      <img
                        src="../images/bar_chart_4_bars.svg"
                        alt="bar_chart_4_bars-1"
                      />
                      <p className="feature-para">
                        Advanced cash forecasting by using predictive analytics
                        for effective cash planning
                      </p>
                    </div>
                    <div className="productHunt-feature-4">
                      <img src="../images/warning.svg" alt="warning-1" />
                      <p className="feature-para">
                        Real-time risk alerts & customer segmentation to enhance
                        collections & minimize bad debt
                      </p>
                    </div>
                  </div>

                  <a
                    target="_blank"
                    style={{ width: "100%" }}
                    href="https://finfloh.com/?utm_source=product_hunt_credit_page&utm_medium=finfloh_website"
                  >
                    <button className="product-hunt-btn-mobile">
                      Learn More
                      <img
                        src="../images/Redirect-black.svg"
                        alt="redirect-logo"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="why-user-love-us"
              style={{ margin: "120px 0px", gap: "48px" }}
            >
              <div className="us-container1-hunt">
                <div>
                  <span>
                    Why Users <br />
                    Love Us
                  </span>
                </div>

                <div className="productHunt-certificate-banners">
                  <img src="/../images/SoftwareTopTrending2024.svg" />
                  <img
                    src="/../images/AccountsReceivable_1.svg"
                    alt="High Performer Spring 2024 FinFloh"
                  />
                  <img
                    src="/../images/AccountsReceivable_4.svg"
                    alt="Best Meets Requirements Spring 2024 FinFloh"
                  />
                  <img
                    src="/../images/AccountsReceivable_3.svg"
                    alt="Easiest to Use Spring 2024"
                  />
                </div>
              </div>
              <div className="security-fold">
                <div className="security-fold-content">
                  <div className="security-fold-content-left">
                    <h1 className="security-fold-content-left-heading">
                      Your data is
                      <br /> secure with us
                    </h1>
                    <p>FinFloh is SOC 2, GDPR & ISO compliant</p>
                  </div>
                  <div className="security-fold-content-right">
                    <div className="security-fold-content-right-logos">
                      <div className="security-logos">
                        <img
                          src="/../images/SOC.svg"
                          alt="SOC compliance badge FinFloh"
                        ></img>
                        <img
                          src="/../images/ISO.svg"
                          alt="ISO certification badge FinFloh"
                        ></img>
                        <img
                          src="/../images/GDPR.svg"
                          alt="GDPR compliance badge FinFloh"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ProductArea
                style={{ background: "#F0F1F5" }}
                features={[
                  PRODUCT.AutomatedCashApp,
                  PRODUCT.ConnectedSystems,
                  PRODUCT.CollaborativeCommunication,
                  PRODUCT.AIDrivenCollections,
                  PRODUCT.AutomatedCashApp,
                ]}
                currentProduct={PRODUCT.BuyerIntelligence}
                PRODUCT_INFO_MAP={PRODUCT_INFO_MAP_product_hunt_credit_page}
              />
            </div>
          </div>
        </div>

        {/* <div className="bg-container" style={{ background: "#002211" }}>
          <div className="container-main ">
            <div className="productHunt-fold1">
              <div>
                <img src="images/productHunt.svg"
                  alt="producthunt-icon"
                  style={{ top: "0", height: "45px", marginTop: "20px" }}
                />
                <p className="welcome-title">Welcome Hunter!</p>
                <p className="welcome-subtitle">
                  Thanks for stopping by FinFloh
                </p>
                <p className="winner-text">
                  Wharton startup challenge winner 2023
                </p>
                <p className="productHunt-Title">
                  Your one-stop solution to put Accounts Receivable on
                  auto-pilot
                </p>
                <div>
                  <p className="productHunt-fold2Title">
                    We have an exciting offer for you!
                  </p>
                  <p className="product-folde2Para">
                    Get access to FinFloh's solutions for a year but pay for 10
                    months only{" "}
                    <span style={{ fontWeight: "700" }}>
                      (2 months completely waived off)
                    </span>{" "}
                    - Exclusively for product hunt community members.
                  </p>
                  <p
                    className="product-folde2Para"
                    style={{ marginTop: "20px" }}
                  >
                    Not from the finance team? We have something for you as
                    well, connect us with your finance head or CFO{" "}
                    <a
                      href="/refer"
                      target="_blank"
                      style={{
                        color: "#96D300",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      here
                    </a>{" "}
                    and get a chance to win a{" "}
                    <a
                      style={{
                        color: "#96D300",
                      }}
                    >
                      $50 gift card
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="bookDemo-section">
                <div className="productHunt-fold2">
                  <img
                    alt="product-hunt"
                    src="images/producthunt-Catface.svg"
                  />
                  <div
                    className="book-a-demo-form book-a-demo-form-prodHunt"
                    style={{ border: "1px solid #D9D9D9", borderRadius: "8px" }}
                  >
                    <p className="book-a-demo-txt">Sign up for Free</p>
                    <BookDemoButton text={"Submit"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Fold 2 */}
        {/* <div
          className="bg-container second-fold"
          style={{ background: "none" }}
        >
          <div className="container-main">
            <p>Trusted by Companies Worldwide</p>
            <div className="images-container">
              <div className="brand-logos">
                <img src="/images/Gupshup.svg" />
                <img src="/images/knowlarity.svg" />
                <img src="/images/Kaleyra.svg" />
                <img src="/images/Pulsepro_new.svg" />
              </div>
              <div className="other-content ">
                <img src="/images/AccountsReceivable_1.svg" />
                <img src="/images/AccountsReceivable_2.svg" />
                <imgproductHunt-fold1 src="/images/AccountsReceivable_3.svg" />
                <img src="/images/AccountsReceivable_4.svg" />
              </div>
            </div>
          </div>
        </div> */}
        {/* Fold 4 */}
        {/* <div className="bg-container" style={{ marginTop: "-40px" }}>
          <div
            className="container-main mobileScreen"
            style={{ marginTop: "120px" }}
          >
            <div className="productIntegration">
              <div className="custom-left">
                <h4
                  style={{
                    color: "#FFFFFF",
                    maxWidth: "447px",
                    lineHeight: "34px",
                  }}
                >
                  Effortless Integrations &amp; Connections with Software you
                  use
                </h4>

                <ul className="custom-list">
                  {INTEGRATION_TXT?.map((val, idx) => (
                    <li
                      key={idx}
                      style={{
                        width: "312px",
                        color: "#F6F7F2",
                        width: "100%",
                      }}
                      className="custom-list-item"
                    >
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="custom-right">
                <img
                  className="img-fluid d-none d-md-block"
                  src="/images/Integration-logo-web.png"
                  alt="Desktop Image"
                />

                <img
                  className="img-fluid d-md-none"
                  style={{ padding: "24px" }}
                  src="/images/Integration-logo-mobile.png"
                  alt="Mobile Image"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* Fold 5 */}
        {/* <div
          className="bg-container"
          style={{ marginTop: "65px", marginBottom: "50px" }}
        >
          <div className="container-main">
            <div style={{ border: "2px solid #F6F7F2", borderRadius: "12px" }}>
              <div className="row soc-cont">
                <div className="col-md-4 soc">
                  <h2>Your data is secure with us</h2>
                  <p>FinFloh is SOC 2, GDPR & ISO compliant</p>
                </div>
                <div className="col-md-8">
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignContent: "center",
                      // gap: "50px"
                    }}
                  >
                    <div className="row soc-logos">
                      <div className="col-4">
                        <img src="/images/SOC.svg"></img>
                      </div>
                      <div className="col-4">
                        <img src="/images/ISO.svg"></img>
                      </div>
                      <div className="col-4">
                        <img src="/images/GDPR.svg"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </WebsiteLayout>
    </>
  );
};

export default ProductHunt;
