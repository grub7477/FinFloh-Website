import WebsiteLayout from "../components/Layouts/WebsiteLayout";

const freeCreditScoreSuccessful = ({ isFreeTrail=false }) => (
  <>
    <WebsiteLayout>
      <div className="bg-container">
        <div className="container-main">
          <div
            className="align-c demo-success-banner"
            style={{
              maxWidth: "577px",
              margin: "auto",
            }}
          >
            <h1>Thank you for your interest in FinFloh's free credit scoring offer.</h1>
            <img src="/images/green-tick.svg"></img>
            <p>
              {isFreeTrail
                ? "You can expect an email from our business team shortly to help you with your onboarding for the free trial."
                : "Please check your email inbox for a message from Amartya Singh, CEO of FinFloh. Kindly reply to that email with your 25 customer names, and we’ll promptly send you the free credit scores."}
            </p>
            <a href="/">Go To Home Page</a>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  marginBottom: "16px",
                }}
              >
                Stay in the loop with FinFloh!
              </p>
              <div className="contact-us-logos">
                <a
                  href="https://www.linkedin.com/company/finfloh"
                  target="_blank"
                >
                  <img
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    // className="footer-sec-rw-img"
                    className="img-responsive"
                  />
                </a>
                <a href="https://twitter.com/FinFloh" target="_blank">
                  <img
                    src="/images/twitter.svg"
                    alt="Twitter"
                    className="img-responsive"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNraxyYw72Q87xncGvzs4-g"
                  target="_blank"
                >
                  <img
                    src="/images/youtube.svg"
                    alt="Twitter"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  </>
);

export default freeCreditScoreSuccessful;
