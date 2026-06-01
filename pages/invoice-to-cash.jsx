import React, { useRef, useState, useEffect } from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { Theme } from "../utils/constants";
import { PRODUCT, PRODUCT_INFO_MAP } from "../components/Common/ProductArea";
import HeadComponent from "../components/Common/HeadComponent";
import { generatehomeUtmUrls } from "../utils/utmUrls";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";
import CommonButton from "../components/Common/CommonButton";
import NewNewsLetter from "../components/Common/NewNewsLetter";
import LinkButton from "../components/Common/LinkButton";
import BookDemoButton from "../components/Common/BookDemoButton";

const AR_MANAGEMENT = [
  { title: "40%", description: "Reduction in DSO" },
  { title: "250", description: "Man Hour Savings per Month" },
  { title: "50%", description: "Reduction in High-Aging Balance" },
  { title: "70%", description: "Reduction in Decision Making Time" },
];

const Simple_Features_CONTENT = [
  {
    icon: "images/collect-icon.svg",
    text: "Floh <strong>Collect</strong> AI",
    title: "Reduce DSO and Optimize Collections Efficiency",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Automate reminders as per payment aging",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Internal alerts & escalations for payment delays",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Collectors performance tracking & worklist",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Accept & track Promise-to-Pay",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/accounts-receivable-collections?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/Collect-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",

    flohsenseAI: {
      description:
        "Close queries and issues during collections & record Promise-to-Pay",
    },
  },
  {
    icon: "images/recon-icon.svg",
    text: "Floh <strong>Recon</strong> AI",
    title: "Optimize Cash Application Speed and Accuracy",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "OCR on bank statements to retrieve customers",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Recon amongst payment-customer-invoices",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Adjustment of tax and other charges",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Automate cash posting in ERP",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/automated-cash-application-software?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/Recon-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",

    flohsenseAI: {
      description: "Extract payment details from customer emails/chats",
    },
  },
  {
    icon: "images/invoice-icon.svg",
    text: "Floh <strong>Invoice</strong> AI",
    title: "Automate Invoice Generation and Delivery",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Send invoices via email and buyer portal uploads",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Generate invoices aligned with orders and contracts",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Configure invoice email templates with attachments",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Monitor invoice delivery status and failures",
      },
    ],
    btnTxt: "Know More",
    btnLink:
      "https://finfloh.com/invoice-automation?utm_source=homepage_central&utm_medium=finfloh_website",
    imgSrc: "/images/invoice-home.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",

    flohsenseAI: {
      description:
        "Auto-revert to customer queries & data requests for invoice details & statements",
    },
  },
  {
    icon: "images/dispute-icon.svg",
    text: "Floh <strong>Dispute</strong> AI",
    title: "Resolve Disputes Faster with Better Predictability",

    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Automate dispute resolution workflows",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Track dispute status and predicted closure timelines",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Auto-route disputes to the right POC",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Prevent recurring disputes with RCA analysis",
      },
    ],
    btnTxt: "Book A Demo",
    btnLink:
      "https://finfloh.com/book-a-demo?utm_source=invoice_to_cash&utm_medium=website",
    imgSrc: "/images/competitors-page/dispute-loop-workflow.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",

    flohsenseAI: {
      description:
        "Read and auto-resolve customer disputes/issues sent over emails",
    },
  },
];

const invoicetocash = () => {
  return (
    <>
      <HeadComponent
        title="AI-Powered Invoice-to-Cash Automation for B2B Finance Teams | FinFloh"
        description="Automate credit decisions, invoice generation, collections, and cash application in one unified platform integrated with ERP and CRM."
        canonicalUrl="https://finfloh.com/invoice-to-cash"
      />
      <WebsiteLayout showMainBannerTop={true}>
        <div className="bg-container">
          <div
            className="bg-container flohsense-ai-header"
            style={{
              background: "linear-gradient(0deg, #e6f7ec 0%, #fff 100%)",
              backgroundImage:
                'url("/images/homepage-illustration.svg"), linear-gradient(0deg, #e6f7ec 0%, #fff 100%)',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="container-main"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="flohsense-ai-header-content"
                style={{ alignItems: "center" }}
              >
                <h1
                  className="flohsense-ai-heading"
                  style={{ textAlign: "center" }}
                >
                  AI-Powered Invoice-to-Cash Automation Platform
                </h1>
                <p
                  className="flohsense-ai-description"
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    maxWidth: "700px",
                  }}
                >
                  An intelligent automation platform built on a unified data
                  layer across ERP, CRM, and Enterprise systems—powering
                  workflows for invoice automation, collections, and cash
                  application.
                </p>
                <BookDemoButton
                  text={"Submit"}
                  utmURLs={"https://finfloh.com/book-a-demo"}
                />
              </div>
            </div>
          </div>
        </div>

        <CompaniesLogo />

        <div className="bg-container">
          <div className="container-main">
            <div className="features-heading">
              <h2
                className="feature-main-heading"
                style={{ marginBottom: "86px" }}
              >
                Built for CFOs & B2B Finance Teams to Gain Complete Cash Flow
                Control
              </h2>
            </div>

            <div className="features-grid">
              {Simple_Features_CONTENT.map((feature, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-content">
                    <div className="feature-type">
                      <img src={feature.icon} alt={`${feature.text} icon`} />
                      <p dangerouslySetInnerHTML={{ __html: feature.text }} />
                    </div>

                    <h2 className="feature-title">{feature.title}</h2>

                    <div className="feature-points-list">
                      {feature.featurePoints.map((point, index) => (
                        <div key={index} className="feature-point">
                          <img src={point.icon} alt="" className="point-icon" />
                          <p>{point.description}</p>
                        </div>
                      ))}

                      {/* FlohSense AI Agent */}
                      {feature.flohsenseAI && (
                        <a href="/flohsense-ai-agent">
                          <div className="flohsenseAI-container" key={i}>
                            <div className="flohsenseAI-content">
                              <img
                                src="/images/fAI.svg"
                                alt="FlohSense AI Logo"
                              />
                              <h4>FLOHSENSE AI AGENT</h4>
                              <img
                                className="flohsense-arrow"
                                src="images/ArrowRight.svg"
                                alt="Right Icon"
                              ></img>
                            </div>
                            <div class="flohsense-para">
                              <p style={{ color: "#e2fcee" }}>
                                {feature.flohsenseAI.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>

                    <CommonButton
                      text={feature.btnTxt}
                      type={"primary"}
                      href={feature.btnLink}
                      openInNewTab={true}
                      iconSrc="images/ArrowRight.svg"
                      iconPosition="right"
                    />
                  </div>

                  <div className="feature-image">
                    <img
                      src={feature.imgSrc}
                      alt={feature.alt}
                      className="feature-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="collection-cont lending-fold2"
          style={{
            flexDirection: "column",
            backgroundColor: "#F0F1F5",
            borderRadius: "8px",
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
              <div className="card-container" style={{ background: "#FFF" }}>
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
            Your collectors collect faster, you make better credit decisions,
            and your finance leaders have all the insights on their fingertips.
          </p>
        </div>

        <section
          className="pt-100 grey_bg w-100 min-h100vh"
          style={{ backgroundColor: "#F6F7F2" }}
        >
          <div className="container w-100 integration_container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 d-flex w-100 justify-content-center align-items-center align-c">
                <div className="single-team content_box p-0 align-c">
                  <h3 className="sub_text_title">Get, set, go on Day 1 !</h3>
                  <h2
                    className="sub_text"
                    style={{ color: "#002211", textAlign: "center" }}
                  >
                    Out-Of-The-Box <br />
                    Seamless Integration
                  </h2>
                  <p className="small_text">
                    Integrate with your ERP/Accounting Software, Payments, CRM,
                    Communications & other tools in just a few simple steps
                    without any coding efforts and start managing your accounts
                    receivables with ease.
                  </p>

                  <CommonButton
                    text={"Book a Free Demo"}
                    type={"primary"}
                    href={
                      "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-emagia&utm_medium=finfloh_website"
                    }
                    openInNewTab={true}
                    iconSrc="images/ArrowRight.svg"
                    iconPosition="right"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block container">
            <img
              src="/images/Platform_Integration_Logos.svg"
              alt="Logos of FinFloh's Integration Partners: Intuit Quickbooks, Zoho, Oracle Netsuite, Xero, Stripe"
              className="integration_img"
            />
          </div>
          <div className="d-md-none container">
            <img
              src="/images/Platform_Integration_Logos_mobile.svg"
              alt="Logos of FinFloh's Integration Partners: Intuit Quickbooks, Zoho, Oracle Netsuite, Xero, Stripe"
              className="platform_mob"
            />
          </div>
        </section>
        {/* section 12 ->> Newsletter */}
        <NewNewsLetter
          heading="Super-charge your finance Inbox and transform your Invoice-to-Cash"
          text="Activate now and get first 50 queries/prompts responses for FREE*"
        />
      </WebsiteLayout>
    </>
  );
};
export default invoicetocash;
