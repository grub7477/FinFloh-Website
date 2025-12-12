import BookDemoButton from "../components/Common/BookDemoButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import { PRODUCT } from "../components/Common/ProductArea";
import LinkButton from "../components/Common/LinkButton";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";

import { useState } from "react";
const utmURLs = generateUtmUrls("try_for_free");
export const PRODUCT_INFO_MAP_try_for_free = {
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
const AR_MANAGEMENT = [
  { title: "30%", description: "Reduction in DSO" },
  { title: "20%", description: "Increase in Cash Flows" },
  { title: "70%", description: "Reduction in Decision Making Time" },
  { title: "50%", description: "Increase in Collections Efficiency" },
];
const BookADemo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <>
      <HeadComponent
        title="Get a 7-Day Free Trial | FinFloh "
        description="Gain a 7-day full free access to FinFloh's end-to-end invoice-to-cash platform and wave your path to become best-in-class."
        canonicalUrl="https://finfloh.com/free-trial"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI-Driven Accounts Receivable & Credit Automation",
        }}
        includeOffer
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
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_try_for_free}
      >
        <div className="book-a-demo-container bg-container">
          <div className=" container-main">
            <div className="book-a-demo-heroSection book-a-demo-bgcolor">
              <div className="book-a-demo-left">
                <div className="book-a-demo-left-first">
                  <div className="book-a-demo-content">
                    <h2 className="book-a-demo-title freeTrail-title ">
                      Unlock Faster Cash Flow <br /> with AI-Driven A/R <br />&
                      Credit Solutions
                    </h2>
                  </div>

                  <div className="freeTrail-video">
                    <div className="video-container freeTrail-video-container">
                      {!isVideoPlaying ? (
                        <div onClick={handlePlayVideo}>
                          <img
                            className="video-thumbnail"
                            src="/images/freeTrail_video.svg"
                            alt="Video Thumbnail"
                          />
                          <img
                            className="play-button"
                            src="/images/play-youtube.svg"
                            alt="Play Button"
                          />
                        </div>
                      ) : (
                        <div>
                          <iframe
                            src="https://www.youtube.com/embed/-D13kBGW6fs?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                      <p>
                        Curious about how FinFloh can help? Watch the video
                        above for answers.
                      </p>
                    </div>
                  </div>

                  {/* <div className="freeTrail-video">
                    <div>
                      <a href="https://www.youtube.com/watch?v=-D13kBGW6fs&t=16s">
                        <img src="/images/freeTrail_video.svg" />
                        <img src="/images/play-youtube.svg" />
                      </a>
                      <p>
                        Curious about how FinFloh can help? Watch the video
                        above for answers
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="formSection-right">
                <div className="book-a-demo-form " id="freeTrail-form">
                  <h1>
                    Start Your{" "}
                    <span style={{ color: "#00954A" }}>Free Trial</span> Today
                  </h1>
                  <BookDemoButton
                    text={"Submit"}
                    isShowMobile
                    showFreeTrail
                    templateID={"template_yse6rfm"}
                    errorClassName={"bookAdemopage_bookYourDemoToday_error"}
                  />
                </div>
              </div>
            </div>
            <CompaniesLogo />
          </div>

          <div className="container-main">
            <TestimonialsWhyTrust />
          </div>

          {/* <div className="why-user-love-us container-main">
            <div className="us-container1">
              <div className="freeTrail-users">
                <span>
                  Why Users <br />
                  Love Us
                </span>
              </div>

              <div className="certificate-banners">
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
                  follow-ups, tailored to distinct workflows defined by customer
                  risk segments has led our team to never miss a payment
                  reminder.”
                </p>
              </div>
            </div>
            <div className="us-container">
              <div className="us-container-content">
                <img src="/images/“icon.svg" />
                <p>
                  “I am able to manage all my receivables data under a single
                  solution. It has completely removed our team's need to switch
                  between tools to arrive at a particular conclusion or
                  decision.”
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="container-main">
            <div
              className="wealthFinance-banner-freetrail"
              style={{ marginTop: "61px" }}
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
            </div>
          </div> */}

          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column" }}
          >
            <h2
              className="titleStyle"
              style={{ maxWidth: "800px", fontFamily: "Satoshi" }}
            >
              Tailored for Cash Flow Efficiency
            </h2>

            <div
              className="container-main autoPilot"
              style={{ gap: "10px", padding: "0px", color: "#404040" }}
            >
              {AR_MANAGEMENT?.map((data) => (
                <div className="card-container">
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
          </div>

          <div className="container-main book-demo-newsLetter-mb">
            <div className="book-demo-newsLetter">
              <div className="book-demo-newsLetter-content">
                <div className="newsLetter-content-left">
                  <p>FinFloh easily integrates with software you use</p>
                  <LinkButton
                    openInNewTab={true}
                    href="https://finfloh.com/invoice-validation-automation?utm_source=book_a_demo_page_ctar&utm_medium=finfloh_website"
                    style={{ backgroundColor: "#00954A", color: "#fff" }}
                  >
                    Integrate now
                  </LinkButton>
                </div>
                <div className="newsLetter-img newsLetter-content-right">
                  <img src="images/Rectangle 517.svg" alt="Rectangle finfloh" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-container">
          <div className="container-main ">
            <div className="row book-a-demo-bg">
              <div className="col-lg-6 book-a-demo-banner">
                <h2>Achieve A/R Excellence with FinFloh</h2>
                <p>
                  Get an end-to-end platform experience and explore all
                  functionalities:
                </p>
                <ul>
                  <li>Automate & fastrack collections</li>
                  <li>Resolve dispute loops with intelligent workflows</li>
                  <li>Auto-match invoices to payments seamlessly</li>
                  <li>
                    Experience a credit scoring engine for swift decisions
                  </li>
                </ul>
                <p style={{ marginBottom: "5px", fontSize: "21px" }}>
                  <b>You can trust us with your data</b>
                </p>
                <p>FinFloh is SOC 2, GDPR & ISO compliant</p>
                <div className="row soc-logo-cont">
                  <div>
                    <img src="/images/SOC.svg"></img>
                  </div>
                  <div>
                    <img src="/images/ISO.svg"></img>
                  </div>
                  <div>
                    <img src="/images/GDPR.svg"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 book-a-demo-banner-pattern">
                <div className="book-a-demo-form">
                  <h1>Start your 7-day free trial</h1>
                  <BookDemoButton
                    text={"Submit"}
                    showFreeTrail
                    templateID={"template_yse6rfm"}
                    errorClassName = {"freeTrial_bookdemo_error"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </WebsiteLayout>
    </>
  );
};

export default BookADemo;
