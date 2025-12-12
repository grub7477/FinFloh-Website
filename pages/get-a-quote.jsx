import BookDemoButton from "../components/Common/BookDemoButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";

const AR_MANAGEMENT = [
  { title: "30%", description: "Reduction in DSO" },
  { title: "20%", description: "Increase in Cash Flows" },
  { title: "70%", description: "Reduction in Decision Making Time" },
  { title: "50%", description: "Increase in Collections Efficiency" },
];

const BookADemo = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh Quote"
        description="Get a personalized quote from FinFloh. Discover competitive pricing and tailored solutions designed to maximize your ROI. Contact us today for details!"
        canonicalUrl="https://finfloh.com/get-a-quote"
      />
      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main mobileScreen-bg">
            <div className="row book-a-demo-bg">
              <div className="col-lg-6 book-a-demo-banner mobileScreen-bg">
                <p className="pageTitle">
                  ROI Guaranteed with FinFloh's Pricing
                </p>
                <div className="subTitle-demo">
                  Get a quote customized to your business needs.
                </div>
                {/* For desktop screen */}
                <div className="certificate-banner">
                  <img
                    src="/images/AccountsReceivable_1.svg"
                    style={{ width: "78px", height: "102px" }}
                    alt="High Performer Spring 2024 FinFloh"
                  />
                  <img
                    src="/images/AccountsReceivable_3.svg"
                    style={{ width: "78px", height: "102px" }}
                    alt="Best Meets Requirements Spring 2024 FinFloh"
                  />
                  <img
                    src="/images/AccountsReceivable_4.svg"
                    style={{ width: "78px", height: "102px" }}
                    alt="Easiest to Use Spring 2024 FinFloh"
                  />
                </div>
                {/* <div className="row soc-logo-cont">
                  <div>
                    <img src="/images/SOC.svg"></img>
                  </div>
                  <div>
                    <img src="/images/ISO.svg"></img>
                  </div>
                  <div>
                    <img src="/images/GDPR.svg"></img>
                  </div>
                </div> */}
                {/* for Desktop */}
                <div className="demo-banner">
                  <div className="events-container">
                    <img
                      src="images/Wharton.svg"
                      alt="Wharton Startup Challenge Winners Badge FinFloh"
                    />
                    <p>
                      Wharton Startup <br /> Challenge Winners'24
                    </p>
                  </div>
                  <div className="events-container">
                    <img
                      src="images/Product-hunt.svg"
                      alt="Product Hunt Achievement Badge FinFloh"
                    />
                    <p>
                      #1 Fintech Product of the Week <br /> #3 Product of the
                      Day
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 book-a-demo-banner-pattern"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                }}
              >
                <div className="book-a-demo-form">
                  <h1>Get A Quote Today</h1>
                  <BookDemoButton
                    someOtherCondition={true}
                    templateID={"template_583fewr"}
                    text={"Submit"}
                    service_ID={"service_wpanfz7"}
                    user_ID={"EQYy0hAZemqqCGtEo"}
                    isShowMobile
                  />
                </div>
                <div className="marquee" style={{ marginTop: "50px" }}>
                  <img
                    src="images/Gupshup.svg"
                    style={{ width: "122px", height: "51px" }}
                    alt="Gupshup company logo"
                  />
                  <img
                    src="images/yellow_ai.svg"
                    style={{ width: "122px", height: "51px" }}
                    alt="Yellow.ai company logo"
                  />
                  <img
                    src="images/knowlarity.svg"
                    style={{ width: "122px", height: "51px" }}
                    alt="Knowlarity company logo"
                  />
                  <img
                    src="images/Kaleyra.svg"
                    style={{ width: "122px", height: "51px" }}
                    alt="Kaleyra company logo"
                  />
                  <img
                    src="images/Pulsepro_new.svg"
                    style={{ width: "122px", height: "51px" }}
                    alt="PulsePro company logo"
                  />
                </div>
                {/* visible in mobile screen */}
                <div className="certificate-banner-mobile">
                  <img
                    src="/images/AccountsReceivable_1.svg"
                    style={{ height: "120px" }}
                    alt="High Performer Spring 2024 FinFloh"
                  />
                  <img
                    src="/images/AccountsReceivable_3.svg"
                    style={{ height: "120px" }}
                    alt="Best Meets Requirements Spring 2024 FinFloh"
                  />
                  <img
                    src="/images/AccountsReceivable_4.svg"
                    style={{ height: "120px" }}
                    alt="Easiest to Use Spring 2024 FinFloh"
                  />
                </div>
                {/* for mobile screen */}
                <div className="demo-banner-mobile ">
                  <div className="events-container">
                    <img
                      src="images/Wharton.svg"
                      style={{ paddingTop: "15px" }}
                      alt="Wharton Startup Challenge Winners Badge FinFloh"
                    />
                    <p>
                      Wharton Startup <br /> Challenge Winners'24
                    </p>
                  </div>
                  <div className="events-container">
                    <img
                      src="images/Product-hunt.svg"
                      style={{ paddingTop: "15px" }}
                      alt="Product Hunt Achievement Badge FinFloh"
                    />
                    <p>
                      #1 Fintech Product of the Week <br /> #3 Product of the
                      Day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-container">
          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column", marginBottom: "50px" }}
          >
            <p
              className="titleStyle"
              style={{ maxWidth: "800px", fontFamily: "Satoshi" }}
            >
              With FinFloh, Accounts Receivable Management is a Breeze
            </p>

            <div
              className="container-main autoPilot"
              style={{ gap: "10px", padding: "0px" }}
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
        </div>
      </WebsiteLayout>
    </>
  );
};

export default BookADemo;
