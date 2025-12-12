import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import HeadComponent from "../../components/Common/HeadComponent";
import LinkButton from "../../components/Common/LinkButton";
import BookDemoButton from "../../components/Common/BookDemoButton";
import Newsletter from "../../components/Common/Newsletter";
import { useState } from "react";
import CompaniesLogo from "../../components/Common/CompaniesLogo";
const freeCreditScore = () => {
  
    const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  // Handle toggling of video visibility and updating active video URL
  const handleVideoToggle = (url) => {
    if (activeVideoUrl === url) {
      setActiveVideoUrl(null);  // If the same video is clicked, close it
    } else {
      setActiveVideoUrl(url);  // Set the clicked video as the active one
    }
  };

  return (
    <>
      <HeadComponent
        title="Generate Free Credit Scores for your Buyers | FinFloh"
        description="Enable data-backed faster buyer onboarding & negotiate better credit, contract & pricing terms with Finfloh Credit Decisioning AI."
      />
      <title key="title">
        FinFloh - Exclusive Deal for Product Hunt Community
      </title>
      <WebsiteLayout>
        <div className="book-a-demo-container bg-container" id="abc">
          <div className="container-main">
            <div className="CreditOffer-header">
              <div className="CreditOffer-content">
                <div className="CreditOffer-content-text">
                  <h1 className="CreditOffer-title">
                    Get Credit Decisions & Scores Free for 25 Customers!
                  </h1>
                  <p className="CreditOffer-SubTitle">
                    Enable quicker onboarding with better terms and credit
                    intelligence of customers with
                    <span className="CreditOffer-span">
                      {" "}
                      <a
                        href="https://finfloh.com/credit-decisioning"
                        className="CreditOffer-span"
                      >
                        {" "}
                        FinFloh Credit Decisioning AI
                      </a>
                    </span>
                    .
                  </p>
                </div>
                <BookDemoButton
                  text={"Generate Credit Insights"}
                  errorClassName={"custom-error"}
                  templateID={"template_cygq0ae"}
                  service_ID={"service_xfa67cp"}
                  user_ID={"Dm5kmJgBV-xPfSDgO"}
                  freeCreditScorePage={true}
                />
              </div>
              {/* Video Section */}
              {/* <div className="CreditOffer-video" onClick={handleVideoToggle}>
                {!isVideoOpen ? (
                  <img
                    src="../images/creditOffer-video.svg"
                    alt="Video Thumbnail"
                    className="video-thumbnail-creditOffer"
                  />
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/eTRsLXMscuc?mute=1&autoplay=1"
                    title="Credit Offer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-player"
                  ></iframe>
                )}
                {!isVideoOpen && (
                  <img
                    src="../images/play_circle-credit.svg"
                    alt="Play Button"
                    className="play-circle-creditOffer"
                  />
                )}
              </div> */}
              <div className="CreditOffer-video" onClick={() => handleVideoToggle("https://www.youtube.com/embed/eTRsLXMscuc?mute=1&autoplay=1")}>
                {activeVideoUrl !== "https://www.youtube.com/embed/eTRsLXMscuc?mute=1&autoplay=1" ? (
                  <img
                    src="../images/creditOffer-video.svg"
                    alt="Video Thumbnail"
                    className="video-thumbnail-creditOffer"
                  />
                ) : (
                  <iframe
                    src={activeVideoUrl}
                    title="Credit Offer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-player"
                  ></iframe>
                )}
                {activeVideoUrl !== "https://www.youtube.com/embed/eTRsLXMscuc?mute=1&autoplay=1" && (
                  <img
                    src="../images/play_circle-credit.svg"
                    alt="Play Button"
                    className="play-circle-creditOffer"
                  />
                )}
              </div>
            

            </div>

            <CompaniesLogo />
          </div>
        </div>
        <div
          className="book-a-demo-container bg-container"
          style={{ background: "#F6F7F2" }}
        >
          <div className="container-main creditOfffer-main">
            <h1 className="creditoffer-heading">
              Make your credit onboarding - <br />
              quicker, smarter and collaborative!
            </h1>

            {/* <div className="CreditOffer-video">
              <a
                href="https://youtu.be/CqtxwUMFIhM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video-thumbnail-wrapper">
                  <img
                    src="/images/creditOffer-img.svg"
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <img
                    src="../images/play_circle-credit.svg"
                    alt="Play Button"
                    className="play-circle-creditOffer"
                  />
                </div>
              </a>
            </div> */}
            {/* Video Section */}
            {/* Second Video Section */}
            <div className="CreditOffer-video" onClick={() => handleVideoToggle("https://www.youtube.com/embed/a-CDhRcDey4?mute=1&autoplay=1")}>
              {activeVideoUrl !== "https://www.youtube.com/embed/a-CDhRcDey4?mute=1&autoplay=1" ? (
                <div className="video-thumbnail-wrapper">
                  <img
                    src="../images/creditOffer-img.svg"
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <img
                    src="../images/play_circle-credit.svg"
                    alt="Play Button"
                    className="play-circle-creditOffer"
                  />
                </div>
              ) : (
                <iframe
                  src={activeVideoUrl}
                  title="Credit Offer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-player"
                ></iframe>
              )}
            </div>
            

            <div className="creditoffer-sections">
              <div className="creditoffer-section1">
                <div className="creditoffer-card">
                  <img src="/images/Magic_button.svg" alt="Magic_button" />
                  <h2>AI-Powered Credit Decisions</h2>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Negotiate better credit, contract & pricing terms with
                    AI-powered inputs
                  </p>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Determine and track ARR targets and sales incentives linked
                    with market intelligence
                  </p>
                </div>
                <div className="creditoffer-card">
                  <img src="/images/rubric.svg" alt="rubric" />
                  <h2>Automated Onboarding in CRM</h2>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Fasten buyer onboarding for new opportunities/ expansion
                    projects/renewals in CRM
                  </p>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Save time and efforts of sales/sales ops/finance/ legal and
                    other teams involved in onboarding
                  </p>
                </div>
              </div>
              <div className="creditoffer-section2">
                <div className="creditoffer-card">
                  <img
                    src="/images/readiness_score.svg"
                    alt="readiness_score"
                  />
                  <h2>ML-Driven Credit Scoring</h2>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Leverage payment behavior & market intelligence data for
                    accurate credit scoring in real-time
                  </p>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Save time & effort by replacing manual credit data retrieval
                    & spreadsheets with ML algorithms
                  </p>
                </div>
                <div className="creditoffer-card">
                  <img src="/images/restore_page.svg" alt="restore_page" />
                  <h2>Credit Risk Monitoring</h2>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Auto-identify risky customers and prepare action plan to
                    counter them
                  </p>
                  <p>
                    <img
                      src="../images/check.svg"
                      alt=""
                      className="check-img"
                    />
                    Get real-time alerts for risk changes, credit limit
                    utilization, anomalies in buyer behaviour, etc
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <LinkButton
                openInNewTab={true}
                href={
                  "https://finfloh.com/free-trial?utm_source=25_free_credit_scores&utm_medium=finfloh_website"
                }
              >
                Start Your 7-Day Free Trial
              </LinkButton>

              <p>Use the full platform in action*</p>
            </div>
          </div>
          {/* newsletters section */}
          <div className="container-main">
            <div
              className="whyfinfloh-newsletter"
              style={{ background: "#002211" }}
            >
              <div className="whyfinfloh-newsletter-cnt creditOffer-newsletter-cnt">
                <p className="creditOffer-newsletter-para">
                  Not Ready for the Solution Yet?
                </p>
                <p>Get Credit Decisions & Scores Free for 25 Customers!</p>
              </div>
              <div className="whyfinfloh-newsletter-btn">
                <LinkButton
                  // openInNewTab={true}
                  href="#abc"
                >
                  Generate Credit Insights
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default freeCreditScore;
