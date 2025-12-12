import React from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import LinkButton from "../components/Common/LinkButton";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust";
const whyfinfloh = () => {
  const AR_MANAGEMENT = [
    { title: "30%", description: "Reduction in DSO" },
    { title: "20%", description: "Increase in Cash Flows" },
    { title: "70%", description: "Reduction in Decision Making Time" },
    { title: "50%", description: "Increase in Collections Efficiency" },
  ];
  return (
    <>
      <HeadComponent
        title="Why FinFloh | Reasons to Trust & What Makes Us Different"
        description="World's Fist AI-Powered Credit-to-Cash Software. Find out 6 reason on why you should choose FinFloh for your credit to cash transformation."
        canonicalUrl="https://finfloh.com/why-finfloh"
        includeIsPartOf
        mainEntityOfPage="https://finfloh.com/why-finfloh"
        includeAbout
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Why FinFloh",
            item: "https://finfloh.com/why-finfloh",
          },
        ]}
      />

      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main whyFinfloh-main">
            {/* Why Finfloh Header */}
            <div className="whyFinfloh-header">
              <div className="whyFinfloh-header-content">
                <div className="whyFinfloh-header-para">
                  <h1 className="lending-title">Why FinFloh?</h1>
                  <h2 className="whyFinfloh-header-heading">
                    World's Only AI-Powered <br />
                    Credit-to-Cash Software
                  </h2>
                  <p className="whyFinfloh-header-subheading">
                    From credit decisions in CRMs to automated invoice creation
                    to accelerated receivables, we streamline the entire
                    credit-to-cash journey.
                  </p>
                </div>
                <div className="whyFinfloh-header-btn">
                  <LinkButton
                    openInNewTab={true}
                    href="https://finfloh.com/book-a-demo?utm_source=why_finfloh&utm_medium=finfloh_website"
                  >
                    Book A Demo
                  </LinkButton>
                </div>
              </div>
            </div>
            {/* why finfloh trusted section */}
            <CompaniesLogo />

            {/* Why Finfloh reason to choose Section */}
            <div className="whyFinflohReason-heading">
              <h2>
                <span>6 Reasons</span> to choose FinFloh
              </h2>
            </div>
            <div className="whyFinfloh-reasons">
              <div className="whyFinfloh-reason">
                <span>#1</span>
                <h3 className="reason-heading">
                  Single Platform for Credit-to-Cash Processes
                </h3>
                <div className="reason-subHeading">
                  Connect all your cash flow processes and eliminate data
                  fragmentation, asynchronous ERP integration with systems
                  (CRMs), and the need for manual data sync.
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <span>#2</span>
                <h3 className="reason-heading">
                  AI-Powered Automations (relevant, reliable and not just for
                  the sake of it)
                </h3>
                <div className="reason-subHeading">
                  Leverage predictive AI, generative AI, ML and NLP to make
                  smarter, data-driven credit decisions, fast track collections
                  & dispute resolution, & improve cash forecasting
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <span>#3</span>
                <h3 className="reason-heading">
                  One Finance CRM connecting your Sales and Finance Teams with
                  Buyers
                </h3>
                <div className="reason-subHeading">
                  Use market data, historical trends, FinFloh’s communication
                  platform, and buyer sentiment analytics to improve onboarding,
                  reduce disputes, and enhance forecasting accuracy
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <span>#4</span>
                <h3 className="reason-heading">
                  AI-driven Collections to Reach the Right Accounts at the Right
                  Time
                </h3>
                <div className="reason-subHeading">
                  Utilize AI-powered collectors worklist and collections
                  reminders to prioritize buyers, invoices and actions based on
                  credit risk scores, overdue days & account priority
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <span>#5</span>
                <h3 className="reason-heading">
                  Automate your Invoice Creation and Auto-Upload into Buyer AP
                  Portals
                </h3>
                <div className="reason-subHeading">
                  Automate invoice creation in ERPs with data feed from
                  CRM/billing systems and enable automated upload into buyer AP
                  Portals (SAP/Coupa) using Connector APIs
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <span>#6</span>
                <h3 className="reason-heading">
                  Quickest Go-live vis-a-vis others
                </h3>
                <div className="reason-subHeading">
                  We understand ERPs and CRMs inside out and can get you live in
                  just 1 month, without the intervention of your dev team or
                  changes to your existing infrastructure.
                </div>
              </div>
            </div>

            {/* Why Finfloh AR Management Section */}
            <div
              className="collection-cont lending-fold2"
              style={{
                flexDirection: "column",
                backgroundColor: "#F0F1F5",
                borderRadius: "8px",
                marginBottom: "120px",
              }}
            >
              <p
                className="titleStyle"
                style={{ maxWidth: "800px", fontFamily: "Satoshi" }}
              >
                Business Impact you can Achieve with FinFloh
              </p>

              <div
                className="autoPilot"
                style={{ gap: "10px", padding: "0px", flexWrap: "nowrap" }}
              >
                {AR_MANAGEMENT?.map((data) => (
                  <div
                    className="card-container"
                    style={{ background: "#FFF" }}
                  >
                    <p
                      style={{
                        color: "#00954A",
                        fontSize: "48px",
                        fontWeight: "600",
                      }}
                    >
                      {data?.title}
                    </p>
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: "500",
                        maxWidth: "200px",
                      }}
                    >
                      {data?.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="whyFinfloh-subTitleStyle">
                Your collectors collect faster, you make better credit
                decisions, and your finance leaders have all the insights on
                their fingertips.
              </p>
            </div>

            {/* whytrustfinfloh and testimonials section */}
            <TestimonialsWhyTrust />

            {/* why users love us */}
            {/* <div className="why-user-love-us">
              <div className="us-container1">
                <div className="whyfinfloh-users-heading">
                  <span>
                    Why Users <br />
                    Love Us
                  </span>
                </div>

                <div className="certificate-banners whyfinfloh-certificate-banners">
                  <img src="/images/SoftwareTopTrending2024.svg" />
                  <img src="/images/AccountsReceivable_1.svg" />
                  <img src="/images/AccountsReceivable_4.svg" />
                  <img src="/images/AccountsReceivable_3.svg" />
                </div>
              </div>
              <div className="us-container">
                <div className="us-container-content">
                  <img src="/images/“icon.svg" />
                  <p>
                    I think the platform's ability to establish automated
                    follow-ups, tailored to distinct workflows defined by
                    customer risk segments has led our team to never miss a
                    payment reminder.”
                  </p>
                </div>
              </div>
              <div className="us-container">
                <div className="us-container-content">
                  <img src="/images/“icon.svg" />
                  <p>
                    “I am able to manage all my receivables data under a single
                    solution. It has completely removed our team's need to
                    switch between tools to arrive at a particular conclusion or
                    decision.”
                  </p>
                </div>
              </div>
            </div> */}

            {/* icons */}
            {/* <div
              className="wealthFinance-banner-freetrail"
              style={{ marginTop: "61px", marginBottom: "120px" }}
            >
              <div className="wealthFinance-logo">
                <img src="/images/wealth-freeTrail.svg" alt="wealth-finance1" />
                <p>Best A/R Software Developer 2024 - USA</p>
              </div>
              <div className="wealthFinance-logo">
                <img
                  src="/images/wealth-freeTrail2.svg"
                  alt="wealth-finance2"
                  className="product_wealth-finance"
                />
                <p>Wharton Challenge Winners’24</p>
              </div>
              <div>
                <img
                  src="/images/product-hunt1.png"
                  alt="FinFloh - Accounts & receivable & software& for & CFOs & B2B & finance & teams | Product Hunt"
                  className="product-hunt1"
                />
              </div>
              <div>
                <img
                  src="/images/product-hunt3.png"
                  alt="FinFloh - Accounts& receivable & software for & CFOs B2B & finance & teams | Product Hunt"
                  className="product-hunt3"
                />
              </div>
            </div> */}

            {/* newsletters section */}
            <div
              className="whyfinfloh-newsletter"
              style={{ marginTop: "86px" }}
            >
              <div className="whyfinfloh-newsletter-cnt">
                <p>
                  Take Control of Your <br /> Credit-to-Cash Journey Today!{" "}
                </p>
              </div>
              <div className="whyfinfloh-newsletter-btn">
                <LinkButton
                  openInNewTab={true}
                  href="https://finfloh.com/book-a-demo?utm_source=why_finfloh&utm_medium=finfloh_website"
                >
                  Talk To Us
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default whyfinfloh;
