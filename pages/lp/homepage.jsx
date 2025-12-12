import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import ProductBanner from "../../components/Common/ProductBanner";
import BookDemoButton from "../../components/Common/BookDemoButton";
// import  PricingCards  from "./homePage-pricing";

import Head from "next/head";

const productBanner = {
  beforeWords: <h1>Accounts Receivable Platform to Maximize Cash Flows</h1>,
  words: [""],
  // wordWrapperClassName: "product-banner-two-words",
  afterWords: (
    <p style={{ color: "#F6F7F2", fontSize: "18px", fontWeight: "400" }}>
      Built for CFOs & B2B finance teams to collect receivables & send smart
      follow-ups, automate cash application, close disputes faster, and take
      better credit decisions
    </p>
  ),
  btnLink: "https://meetings.hubspot.com/finfloh",
  imgUrl: "/images/AIPoweredCollectionPlatform.svg",
  alt: "AI Powered Collections Platform FinFloh",
};

const AUTOTEXT = [
  { title: "35%", desc: "Reduction in Days Sales Outstanding" },
  { title: "30%", desc: "Increase in Collections Efficiency" },
  { title: "40%", desc: "Reduction in Errors" },
];

const BUSINESSCONTAINER = [
  {
    img: "/images/AIdriven.png",
    title: "AI-Driven Collections",
    desc: [
      "Automated follow-ups with tone/ frequency as per customer risk profile ",
      "Dynamic collector’s worklist",
      "Collection workflows and ready-to-use editable dunning templates",
    ],
  },
  {
    img: "/images/AIdriven2.png",
    title: "Automated Cash Application",
    desc: [
      "Automate invoice-payment matching with OCR",
      "Automate cash posting back to ERP",
      "Handle exceptions like short payments, missing invoice number, etc",
    ],
  },
];

const BUSINESSSERVICE = [
  {
    title: "End-to-End Invoice Automation",
    desc: [
      "Invoice lifecycle management",
      "Automated delivery & acceptance",
      "Close invoice sync issues (cancellations, credit note mapping)",
    ],
    img: "/images/Invoice-Automation1.png",
  },
  {
    title: "Smart Dispute Management",
    desc: [
      "Single communication platform b/w seller Internal teams & buyers",
      "Close disputes by automating processes, handshakes & TATs",
      "Capture audit trails for effective dispute analysis",
    ],
    img: "/images/invoice2.png",
  },
  {
    title: "AI/ML-Powered Credit Decisions",
    desc: [
      "Dynamic credit scoring based on buyer payments & market intelligence",
      "Enable faster onboarding & smarter credit decisions",
      "Provide real-time alerts and cashflow forecasts based on buyer risk",
    ],
    img: "/images/invoice3.png",
  },
];

const INTEGRATIONTEXT = [
  "Super easy integrations with zero tech effort",
  "Data sync starts on day 1",
  "Seamless connectivity & data flow across systems",
];
const Collections = () => {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <WebsiteLayout noNavbar={false}>
        <ProductBanner productBanner={productBanner} showTrial={false} />
        <div className="collection-cont autoPilotHeading">
          <h1 className="titleStyle" style={{ maxWidth: "586px" }}>
            Put your Accounts Receivable on Auto-Pilot
          </h1>
        </div>
        <div className="bg-container ">
          <div className="container-main autoPilot">
            {AUTOTEXT?.map((data) => (
              <div className="autoPilotContainer" key={data.title}>
                <p className="autoPilotText" style={{ fontWeight: "600" }}>
                  {data?.title}
                </p>
                <p className="autoPilotContainerDesc">{data?.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-container ">
          <div className="container-main" style={{ marginTop: "100px" }}>
            <h2
              className="titleStyle text-center mb-0 mb-md-5"
              style={{ fontWeight: "600" }}
            >
              What Businesses Use FinFloh For
            </h2>
            <div className="d-flex justify-content-between flex-column flex-md-row gap-4 gap-md-0  mobileScreen">
              {BUSINESSCONTAINER?.map((data, index) => (
                <div className="businessContainer" key={index}>
                  <img
                    class="img-fluid d-none d-md-block"
                    style={{ width: "83px", height: "83px" }}
                    src={data?.img}
                    alt={data?.title}
                  />

                  <img
                    class="img-fluid d-md-none"
                    style={{ width: "43px", height: "43px" }}
                    src={data?.img}
                    alt={data?.title}
                  />

                  <p className="businessContainerTitle">{data?.title}</p>
                  <ul className="custom-list">
                    {data?.desc?.map((val, idx) => (
                      <li key={idx} className="custom-list-item">
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column flex-md-row mt-4 justify-content-between gap-2 mobileScreen w-100">
              {BUSINESSSERVICE?.map((data, index) => (
                <div className="finFlohService" key={index}>
                  <img
                    style={{ width: "80px", height: "86px" }}
                    src={data.img}
                    alt={data.title}
                  />
                  <h4 style={{ marginTop: "24px" }}>{data.title}</h4>
                  <ul className="custom-list">
                    {data?.desc?.map((val, idx) => (
                      <li key={idx} className="custom-list-item">
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bg-container ">
          <div className="container-main">
            <h2
              className="mx-auto text-center d-flex justify-content-center titleStyle "
              style={{ marginTop: "120px", maxWidth: "430px" }}
            >
              Pricing Tailored To Your Business Needs{" "}
            </h2>

            <div className="pricing-offer-banner">
              New Year Complimentary Offer
            </div>
            <PricingCards showBtn={false} />
          </div>
        </div> */}
        <div className="bg-container ">
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
                  {INTEGRATIONTEXT?.map((val, idx) => (
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
                  class="img-fluid d-none d-md-block"
                  src="/images/Integration-logo-web.png"
                  alt="Desktop Image"
                />

                <img
                  class="img-fluid d-md-none"
                  style={{ padding: "24px" }}
                  src="/images/Integration-logo-mobile.png"
                  alt="Mobile Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-container ">
          <div className="container-main mobileScreen">
            <div className="secureContainer" style={{ marginTop: "71px" }}>
              <div>
                <h4 className="text-center">Your data is secure with us</h4>
                <p
                  className="text-center"
                  style={{ color: "#0C1612", fontSize: "18px" }}
                >
                  FinFloh is SOC 2, GDPR & ISO compliant
                </p>
              </div>
              <div className="text-center secureImg">
                {" "}
                <img
                  style={{ width: "103px", height: "102px" }}
                  src="/images/AICPA.png" alt="AICPA finfloh"
                />
                <img
                  style={{ width: "103px", height: "102px" }}
                  src="/images/ISO_27001.png" alt="ISO_27001 finfloh"
                />
                <img
                  style={{ width: "103px", height: "102px" }}
                  src="/images/GDPRLogo.png" alt="GDPRLogo finfloh"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-container ">
          <div
            className="container-main d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "100px" }}
          >
            <div style={{ maxWidth: "453px" }}>
              <h4
                style={{ fontSize: "28pxs" }}
                className="text-center text-md-left"
              >
                Want to see our product live&nbsp;in&nbsp;action?
              </h4>
              <BookDemoButton showTrial={false} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="mt-0 mt-md-2"
              >
                <img
                  style={{ width: "36px", height: "36px" }}
                  src="/images/Vector.png" alt="Vector finfloh"
                />
                <a href="/free-trial" style={{ color: "#96D300" }}>
                  Get a 7-day free trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-container"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "100px",
          }}
        >
          <div className="col-12 copyright-ar">
            <p
              style={{
                color: "#0C1612",
                fontSize: "18px",
                marginBottom: "50px",
              }}
            >
              Copyright &copy; {currentYear} FinFloh • All rights reserved
            </p>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default Collections;
