import FaqContent from "../components/Faq/FaqContent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import generateUtmUrls from "../utils/utmUrls";
import HeadComponent from "../components/Common/HeadComponent";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";
const utmURLs = generateUtmUrls("about_us");

import { PRODUCT } from "../components/Common/ProductArea";
export const PRODUCT_INFO_MAP_about = {
  [PRODUCT.Integration]: {
    title: "Invoice Validation Automation",
    url_navbar: utmURLs.integrationsAndInvoiceVerification_navbar,
    url_footer: utmURLs.integrationsAndInvoiceVerification_footer,
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url_navbar: utmURLs.collaborativeCommunication_navbar,
    url_footer: utmURLs.collaborativeCommunication_footer,
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url_navbar: utmURLs.accountsReceivableCollections_navbar,
    url_footer: utmURLs.accountsReceivableCollections_footer,
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    url_navbar: utmURLs.creditdecisioning_navbar,
    url_footer: utmURLs.creditdecisioning_footer,
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url_navbar: utmURLs.automatedCashApplication_navbar,
    url_footer: utmURLs.automatedCashApplication_footer,
  },
};

const AR_MANAGEMENT_ABOUT = [
  {
    title: "40%",
    description: "Reduction in DSO",
    arrowImage: "/images/arrow_circle_down.svg",
  },
  {
    title: "50%",
    description: "Increase in Collections Efficiency",
    arrowImage: "/images/arrow_circle_up.svg",
  },
  {
    title: "60%",
    description: "Decrease in Dispute Resolution Time",
    arrowImage: "/images/arrow_circle_down.svg",
  },
  {
    title: "70%",
    description: "Reduction in Credit Decision Making Time",
    arrowImage: "/images/arrow_circle_down.svg",
  },
];

const AboutUs = () => {
  return (
    <>
      <HeadComponent
        title="About Finfloh"
        description="FinFloh is an invoice-to-cash platform for finance teams to get receivables faster, take better credit decisions, resolve disputes & automate cash application."
        canonicalUrl="https://finfloh.com/about-us"
        mainEntityOfPage="https://finfloh.com/about-us"
        includeIsPartOf
        includeAbout
        includeBreadcrumbs
        breadcrumbItems={[
          { name: "About Us", url: "https://finfloh.com/about-us" },
        ]}
        includeHasPart
        hasPartProps={[
          [
            {
              "@type": "WebPageElement",
              name: "Why Top Businesses Trust FinFloh?",
            },
          ],
          {
            "@type": "WebPageElement",
            name: "Hear it from our Customers",
          },
          {
            "@type": "WebPageElement",
            name: "How much are you losing??",
          },
          {
            "@type": "WebPageElement",
            name: "Features",
          },
        ]}
      />

      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_about}
      >
        <div className="bg-container">
          <div className="container-main">
            {/* about Header - about us */}
            <div className="about-header">
              <div className="about-header-content">
                <div className="about-header-para">
                  <h1 className="about-header-heading">About Us</h1>
                  <p
                    className="about-header-subheading-common"
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      maxWidth: "550px",
                      width: "100%",
                    }}
                  >
                    We, at FinFloh, are a modern AI-driven Credit-to-Cash
                    platform, for B2B finance teams. We solve for Credit
                    Decisions & Risk Scoring and Accounts Receivable.
                    <br />
                    We are targeting to disrupt the CFOTech landscape by using
                    AI/ML, ERP-CRM sync and market data.
                  </p>
                </div>
                {/* <div className="about-header-btn">
                  <img
                    src="images/teampic.svg"
                    alt="FinFloh Team"
                  />
                </div> */}
              </div>
            </div>

            {/* about Header - our solution */}
            {/* <div className="our-solution-content">
              <p className="our-solution-heading-common">Our Solution</p>
              <p className="about-header-subheading-common">
                FinFloh's Credit-to-Cash platform automates the Accounts
                Receivable process through automated invoice creation in ERPs,
                seamless dispute resolution workflows, AI-driven collection
                worklists and reminders, and ML-powered invoice-to-payment
                reconciliation.
                <br />
                <br />
                What truly sets FinFloh apart is our advanced ML-driven credit
                scoring models, <br />
                which empower businesses to make AI-powered credit onboarding
                decisions like pricing & billing terms, credit terms like credit
                period and credit limit, contract terms like contract period and
                clauses, and even ARR targets — directly within CRMs like
                Salesforce.
                <br />
                <br />
                FinFloh is more than just a finance tech solution; it's a
                catalyst for efficiency, profitability, and smarter decisions
                for modern finance teams.
              </p>
            </div> */}

            {/* about-us Awards & Recognitions section */}

            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "120px",
                marginBottom: "36px",
              }}
            >
              <p
                className="InspireAwards-heading"
                style={{
                  maxWidth: "100%",
                  fontSize: "48px",
                  fontWeight: "500",
                  lineHeight: "64px",
                  marginBottom: "48px",
                }}
              >
                Awards & Recognitions
              </p>
              <div className="wealthFinance-banner-freetrail">
                <div className="wealthFinance-logo" style={{ padding: "8px" }}>
                  <img
                    src="/images/TopTrending_2024.svg"
                    alt="TopTrending_2024.svg"
                    // className="product_wealth-finance"
                  />
                </div>
                <div className="wealthFinance-logo">
                  <img
                    src="/images/wealth-freeTrail.svg"
                    alt="wealth-finance1"
                  />
                  <p>Best A/R Software Developer 2024 - USA</p>
                </div>
                <div className="wealthFinance-logo">
                  <img
                    src="/images/wealth-freeTrail2.svg"
                    alt="wealth-finance2"
                    className="product_wealth-finance"
                  />
                  <p>Wharton Challenge Winners'24</p>
                </div>
                <div style={{ maxWidth: "327px", width: "100%" }}>
                  <img
                    src="/images/product-hunt1.png"
                    alt="FinFloh - Accounts & receivable & software& for & CFOs & B2B & finance & teams | Product Hunt"
                    className="product-hunt1"
                  />
                  <img
                    src="/images/product-hunt3.png"
                    alt="FinFloh - Accounts& receivable & software for & CFOs B2B & finance & teams | Product Hunt"
                    className="product-hunt3"
                  />
                </div>
              </div>
            </div> */}

            {/* <p
              className="InspireAwards-heading"
              style={{
                maxWidth: "100%",
                fontSize: "24px",
                fontWeight: "700",
                marginTop: "86px",
                marginBottom: "48px",
              }}
            >
              Recognitions FinFloh got at G2 Awards for Credit, Collections & AR
            </p> */}
            {/* <div className="EnterpriseIcons-section"> */}
            {/* <div className="EnterpriseIcons"> */}
            {/* Sliding Logos for Larger Screens */}
            {/* <div className="logos" style={{ marginBottom: "36px" }}> */}
            {/* <div className="award-logos-slide logos-slide">
                    <img src="/images/users-love-us_1.svg" />
                    <img src="/images/users-love-us_2.svg" />
                    <img src="/images/users-love-us_3.svg" />
                    <img src="/images/users-love-us_4.svg" />
                    <img src="/images/users-love-us_5.svg" />
                    <img src="/images/users-love-us_6.svg" />
                    <img src="/images/users-love-us_7.svg" />
                    <img src="/images/users-love-us_1.svg" />
                    <img src="/images/users-love-us_2.svg" />
                    <img src="/images/users-love-us_3.svg" />
                    <img src="/images/users-love-us_4.svg" />
                    <img src="/images/users-love-us_5.svg" />
                    <img src="/images/users-love-us_6.svg" />
                    <img src="/images/users-love-us_7.svg" />
                  </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            {/* about-us Awards & Recognitions section end*/}

            {/* about-us Awards & Recognitions section - common components */}
            <TestimonialsWhyTrust />

            {/* about-us mission section */}
            <div className="our-mission" style={{ marginBottom: "24px" }}>
              <div className="our-mission-content">
                <h2
                  className="our-solution-heading-common"
                  style={{ textAlign: "left" }}
                >
                  Mission
                </h2>
                <p className="about-header-subheading-common">
                  Empower modern CFOs and B2B finance teams with an end-to-end
                  platform that enables them to take full control of their cash
                  flows and accelerate productivity with goal-driven finance
                  workflows and AI-driven actions.
                </p>
              </div>

              <div className="our-mission-img">
                <img
                  src="/images/pattern-mission.svg"
                  alt="FinFloh's mission illustration"
                />
              </div>
            </div>

            {/* about-us vision section */}
            <div className="our-mission">
              <div className="our-mission-content">
                <h2
                  className="our-solution-heading-common"
                  style={{ textAlign: "left" }}
                >
                  Vision
                </h2>
                <p className="about-header-subheading-common">
                  To be the first-of-its-kind modern solution complementing ERP
                  to transform the way businesses manage their finance
                  operations, processes and decisions. We strive to create an
                  AI-driven future where processes in the office of the CFO are
                  fully automated, accurate, and efficient.
                </p>
              </div>

              <div className="our-mission-img">
                <img src="/images/pattern-mission.svg" alt="our-vision" />
              </div>
            </div>

            {/* about-us - How it All Started? */}
            <div className="our-solution-content">
              <h2 className="our-solution-heading-common">
                How it All Started?
              </h2>
              <div className="about-header-btn">
                <img
                  src="images/shivam-amartya-wharton.svg"
                  alt="shivam-amartya-wharton"
                />
              </div>
              <p className="about-header-subheading-common">
                Our founders, Amartya Singh and Shivam Rawat, first crossed
                paths way back in 2017 during their time at Digiotech. Amartya,
                an IIM-B alumnus, brings with him over a decade of experience
                steering businesses across diverse sectors like PaymentTech,
                FinTech, Education, and Consulting, having contributed to
                renowned firms such as KPMG, Samsung, Cashfree, Digio, Uvik, and
                more. On the other hand, Shivam holds a bachelor's in CS from
                the University of Maryland and has worked on building and
                scaling tech across fintech startups like Mishipay, Digio, and
                Houzify.
                <br />
                <br />
                After parting ways post their Digio stint, they always wanted to
                build a startup from scratch together. It was when Amartya's
                last startup as a co-founder, Uvik Technologies, got acquired by
                Infibeam Avenues, their paths converged.
                <br />
                <br />
                When they met, three major changes were evident in the business
                world post covid - <br />
                - Proliferation of softwares used by businesses leading to sync
                issues. A major after-effect were the huge gaps with sales
                software (CRM) and finance software (ERP) leading to manual
                interventions, confusions and delayed payments. <br />
                - World has seen the advent and implementation of AI and ML
                applications in the office of CFO. <br />
                - There has been a renewed, urgent focus on cashflows for
                businesses. They decided to build an AI-driven solution that
                addresses the above changes and problems.
                <br />
                <br />
                After countless hours of brainstorming and conversations with
                many finance leaders and advisors, a clear path emerged and
                FinFloh was born.
                <br />
                <br />
                From inception to ideation to demonstration to a live product
                with multiple customers, and advise and guidance from CFOs and
                finance partners across the world, it has been a wonderful
                journey. We are off to a great start, and ee believe that this
                is just the beginning of a something that could transform the
                entire finance ecosystem.
              </p>
            </div>

            {/* about-us - companiesLogo*/}
            <CompaniesLogo />

            {/* about-us - Why FinFloh, Why Now? section */}
            <div className="Why-FinFloh-Why-Now">
              <div
                className="our-solution-content"
                style={{ paddingBottom: "48px" }}
              >
                <h2 className="our-solution-heading-common">
                  Why FinFloh, Why Now?
                </h2>
                <p
                  className="about-header-subheading-common"
                  style={{ textAlign: "center" }}
                >
                  FinFloh can supercharge your Credit Decisions & Accounts
                  Receivable functions, <br /> & can help you achieve -
                </p>
              </div>

              <div className="our-features">
                {AR_MANAGEMENT_ABOUT.map((item, index) => (
                  <div className="our-features-content" key={index}>
                    <img src={item.arrowImage} alt="arrow" />
                    <div className="our-features-text">
                      <p className="our-features-title">{item.title}</p>
                      <p className="our-features-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-calculate-container">
                <div className="about-calculate-content">
                  <h3 className="about-calculate-heading">
                    How much are you losing?
                  </h3>
                  <p className="about-calculate-para">
                    A $100M revenue firm might be losing more than $1M per year
                    by not using a dedicated Accounts Receivable & Credit
                    Decisioning solution like FinFloh.
                  </p>
                </div>
                <div className="cal-btn">
                  <a
                    target="_blank"
                    href="https://finfloh.com/roi-calculator?utm_source=aboutus_page_last&utm_medium=finfloh_website"
                  >
                    <button className="quote-roi-btn">
                      Calculate Now
                      <img src="images/Redirect-roi.svg" alt="redirect-logo" />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="about-calculate-container"
              style={{ margin: "0px 0px 120px 0px" }}
            >
              <div className="about-calculate-content">
                <p
                  className="about-calculate-heading"
                  style={{ color: "#fff" }}
                >
                  Looking to supercharge your Accounts Receivable & Credit
                  Decisioning function?
                </p>
              </div>
              <div className="cal-btn">
                <a
                  target="_blank"
                  // className="quote_anchor"
                  href={
                    "https://finfloh.com/book-a-demo?utm_source=about_us_page_middle&utm_medium=finfloh_website"
                  }
                >
                  <button className="quote-roi-btn">
                    Talk to us Today
                    <img src="images/Redirect-roi.svg" alt="redirect-logo" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default AboutUs;
