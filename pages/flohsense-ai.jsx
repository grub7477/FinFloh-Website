import React, { useState } from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import Image from "next/image";
import BookDemoButton from "../components/Common/BookDemoButton";
import CommonButton from "../components/Common/CommonButton";
import NewNewsLetter from "../components/Common/NewNewsLetter";
import FaqContent from "../components/Faq/FaqContent_New";

const Simple_Features_CONTENT = [
  {
    title: "Works for Prepaid & Postpaid Receivables",
    para: "Whether your customers pay upfront or post-invoice, FlohSense AI understands and adapts. It ensures:",
    featurePoints: [
      {
        icon: "images/CheckIcon.svg",
        description: "Consistent customer communication",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Fast payment status tracking",
      },
      {
        icon: "images/CheckIcon.svg",
        description: "Tailored workflows based on account type",
      },
    ],
    imgSrc: "/images/AIhighlight.svg",
    alt: "AI based Credit integrations-and-invoice-verification FinFloh",
  },
];
const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What is FlohSense AI Agent?",
    answer: [
      "FlohSense AI Agent is an intelligent, always-on assistant designed for B2B finance teams to manage customer communication and resolution workflows.",
      "It reads customer emails and chats, understands context, sends automated responses, and triggers resolution workflows directly within ERP and CRM systems.",
    ],
  },
  {
    uuid: "b",
    question: "How is FlohSense different from a chatbot?",
    answer: [
      "Unlike traditional chatbots that provide scripted replies, FlohSense AI understands finance-specific context such as invoices, disputes, payment proofs, and ledger requests.",
      "It triggers real workflows inside ERP systems, including dispute creation, collections updates, and cash posting, rather than simply responding with predefined answers.",
    ],
  },
  {
    uuid: "c",
    question: "What problems does FlohSense AI solve?",
    answer: [
      "FlohSense AI eliminates manual email responses, delayed collection follow-ups, prolonged invoice disputes, and slow cash application caused by manual payment data capture.",
      "It converts customer communication into automated Order-to-Cash (O2C) actions, improving efficiency and resolution speed.",
    ],
  },
  {
    uuid: "d",
    question: "Which communication channels does FlohSense support?",
    answer: [
      "FlohSense AI works across multiple channels including email and chat platforms.",
      "It can also process attachments such as PDFs, remittance files, and screenshots, extracting and understanding data to trigger appropriate actions.",
    ],
  },
  {
    uuid: "e",
    question: "What workflows can FlohSense trigger?",
    answer: [
      "Based on configuration, FlohSense can auto-respond with account statements or payment proofs and detect and log invoice disputes.",
      "It can capture promise-to-pay commitments, extract remittance and UTR data, post payment details to ERP systems, and escalate high-risk credit signals when necessary.",
    ],
  },
  {
    uuid: "f",
    question: "Does FlohSense integrate with ERP and CRM systems?",
    answer: [
      "Yes. FlohSense integrates with leading ERP and CRM platforms to update records, trigger workflows, and post transactions in real time.",
      "This ensures communication-driven actions are immediately reflected across financial and customer systems.",
    ],
  },
  {
    uuid: "g",
    question: "Does the AI improve over time?",
    answer: [
      "Yes. FlohSense continuously learns from recurring communication patterns, dispute reasons, and customer behavior.",
      "This enables increasingly accurate responses, smarter automation, and proactive alerts over time.",
    ],
  },
  {
    uuid: "h",
    question: "How does FlohSense help improve collections?",
    answer: [
      "FlohSense reduces manual follow-ups, speeds up query resolution, and captures payment commitments automatically.",
      "By preventing disputes and communication delays from slowing payments, it helps organizations reduce Days Sales Outstanding (DSO).",
    ],
  },
  {
    uuid: "i",
    question: "Is human intervention still required?",
    answer: [
      "FlohSense autonomously handles repetitive and structured interactions such as payment queries and document requests.",
      "Complex or sensitive cases are routed to finance teams with full context and recommended actions for faster resolution.",
    ],
  },
  {
    uuid: "j",
    question: "How is FlohSense AI priced?",
    answer: [
      "FlohSense AI follows a per-prompt pricing model aligned with actual customer engagement.",
      "A prompt is defined as an inbound email from customers, buyers, or users responding to an invoice or reminder email.",
      "Invoice emails and reminder emails sent by FinFloh are not counted as prompts.",
    ],
  },
  {
    uuid: "k",
    question: "How long does it take to go live?",
    answer: [
      "FlohSense AI follows a phase-wise implementation approach, with go-live typically completed within 2 to 6 months depending on scope, integrations, and workflow complexity.",
      "Organizations can begin with high-impact use cases such as collections or dispute management and expand progressively across the O2C lifecycle.",
    ],
  },
];

const FlohSenseAi = () => {
  return (
    <>
      <HeadComponent
        title="FlohSense AI by FinFloh - Always on Finance AI Agent"
        description="An AI agent that reads, understands, and responds to customer emails & chats while triggering the right finance workflows — just like your team would."
        canonicalUrl="https://finfloh.com/flohsense-ai-agent"
        headline="AI Agent for Customer Queries & Issues"
        keywords="Receivables, AR, A/R, AR Automation, AI, Accounts Receivable"
        includePublisher
        includeMainEntity
        MainEntityProps={{
          entityType: "Article",
          headline: "FlohSense AI by FinFloh - Always on Finance AI Agent",
          articleSection: [
            "Why do Traditional Customer Communication Channels Fall Short?",
            "How does FlohSense AI agent work with your customer queries in emails/chats?",
            "Customer Queries / Issues",
            "Collections",
          ],
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "FlohSense AI Agent",
            item: "https://finfloh.com/flohsense-ai-agent",
          },
        ]}
      />
      <WebsiteLayout>
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
            <div className="container-main">
              <div className="flohsense-ai-header-content">
                <div className="flohsense-ai-icon-text">
                  <Image
                    src="/images/FlohsenseAI-Star.svg"
                    alt="FinFloh Sense AI"
                    width={32}
                    height={32}
                  />
                  <p>FinFloh Sense AI</p>
                </div>

                <h1 className="flohsense-ai-heading">
                  AI Agent for Customer Queries & Issues during <br />{" "}
                  Invoice-to-Cash
                </h1>
                <p className="flohsense-ai-description">
                  Read, understand and respond in real-time to your customer
                  emails and chats for collections, invoicing, disputes and cash
                  application
                </p>
                <BookDemoButton
                  text={"Submit"}
                  utmURLs={
                    "https://finfloh.com/book-a-demo?utm_source=flohsense_main_cta&utm_medium=finfloh_website"
                  }
                />
                <div className="flohsense-ai-special-offer">
                  <img
                    src="/images/discount-fill.svg"
                    alt="Flohsense-ai-special-offer"
                  />
                  <p>
                    Special offer: Get first 50 queries/prompts responses for
                    FREE*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-container">
          <div className="container-main">
            {/* Flohsense in Numbers */}
            <div className="fai-in-numbers">
              <div className="fai-number-header">
                <h2>Key Outcomes (in 30 Days)</h2>
                <p>with 2× improvement in customer response rates</p>
              </div>
              <div className="fai-number-card-wrapper">
                <div className="fai-number-card">
                  <h4>355</h4>
                  <p>Man-hours saved</p>
                </div>
                <div className="fai-number-card">
                  <h4>54%</h4>
                  <p>quicker payment conversion</p>
                </div>
                <div className="fai-number-card">
                  <h4>63%</h4>
                  <p>faster closure of disputed invoices</p>
                </div>
                <div className="fai-number-card">
                  <h4>37%</h4>
                  <p>decrease in revert time to queries</p>
                </div>
              </div>
            </div>
            {/* Section 2 Traditional Shortcomes */}
            <div
              className="flohsense-ai-traditional-system"
              style={{ margin: "86px 0px" }}
            >
              <h2
                className="flohsense-ai-sub-heading"
                style={{ textAlign: "center" }}
              >
                Why do Traditional Customer Communication Channels Fall Short?
              </h2>

              <img
                src="/images/Traditional-system.svg"
                alt="Traditional-system"
                className="Traditional-system-desktop-img"
              />
              {/* for mobile */}
              <img
                src="/images/Traditional-system-mob-1.svg"
                alt="Traditional-system-mob"
                className="Traditional-system-mobile-img"
              />
            </div>

            {/* why finfloh application section */}
            {/* Why Finfloh reason to choose Section */}
            <div className="flohsense-ai-sub-heading-container">
              <h2
                className="flohsense-ai-sub-heading"
                style={{
                  textAlign: "center",
                  maxWidth: "720px",
                  width: "100%",
                }}
              >
                How does FlohSense AI agent work with your customer queries in
                emails/chats?
              </h2>
            </div>

            <div className="whyFinfloh-reasons">
              <div className="whyFinfloh-reason">
                <img src="/images/dispute.svg" alt="dispute" />
                <h3 className="reason-heading" style={{ fontWeight: "500" }}>
                  Customer Queries / Issues
                </h3>
                <div className="reason-subHeading">
                  Quickly auto-revert and auto-close customer queries either
                  with statements or proof or with pre-trained automation
                  workflows
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <img src="/images/collection.svg" alt="collection" />
                <h3 className="reason-heading" style={{ fontWeight: "500" }}>
                  Collections
                </h3>
                <div className="reason-subHeading">
                  Resolve collection queries and fetch promise-to-pay/payment
                  info from customer emails and chats
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <img src="/images/cashapp.svg" alt="cashapp" />
                <h3 className="reason-heading" style={{ fontWeight: "500" }}>
                  Cash Application
                </h3>
                <div className="reason-subHeading">
                  Extract payment data (e.g., UTR numbers, remittance info) from
                  emails and chats for seamless invoice-payment reconciliation
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <img src="/images/invoice.svg" alt="invoice" />
                <h3 className="reason-heading" style={{ fontWeight: "500" }}>
                  Invoice Acceptance
                </h3>
                <div className="reason-subHeading">
                  Auto-identify invoice disputes based on NLP-driven analysis of
                  emails/chats and trigger dispute resolution workflows
                </div>
              </div>
              <div className="whyFinfloh-reason">
                <img src="/images/credit.svg" alt="credit" />
                <h3 className="reason-heading" style={{ fontWeight: "500" }}>
                  Credit Risk Analysis
                </h3>
                <div className="reason-subHeading">
                  Analyze buyer sentiment and communication patterns for dynamic
                  credit scoring and decisions, and to predict payment delays
                </div>
              </div>
            </div>

            <div className="flohsense-ai-flowchart-container">
              <h2
                className="flohsense-ai-sub-heading"
                style={{ color: "#fff", textAlign: "center" }}
              >
                How does FlohSense AI work?
              </h2>

              <div className="flohsense-ai-flowchart">
                <img
                  src="/images/FlohSenseAI-flowchart.svg"
                  alt="FlohsenseAI-agent"
                />
              </div>
            </div>

            {/* What's in it for your finance team? section */}
            <section className="finance-team-benefits-section">
              <h2 className="finance-team-benefits-heading">
                How can you transform your Invoice-to-Cash?
              </h2>
              {/* <div className="finance-team-benefits-grid"> */}
              <div className="finance-team-benefits-grid">
                <div className="finance-team-benefits-grid-first">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <img
                        src="/images/re.svg"
                        alt="Faster Query & Issue Resolution"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">
                        Faster Query & Issue Resolution
                      </h3>
                      <p className="benefit-desc">
                        Instantly handling customer queries and managing issue
                        workflows
                      </p>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <img
                        src="/images/Rectangle_895.svg"
                        alt="Quicker Collections & Lower DSO"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">
                        Quicker Collections & Lower DSO
                      </h3>
                      <p className="benefit-desc">
                        Resolving disputes to <br />
                        accelerate collections
                      </p>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <img
                        src="/images/Rectangle_895-1.svg"
                        alt="Higher Customer Satisfaction"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">
                        Higher Customer Satisfaction
                      </h3>
                      <p className="benefit-desc">
                        Extracting payment info for <br />
                        faster cash application
                      </p>
                    </div>
                  </div>
                </div>
                <div className="finance-team-benefits-grid-last">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <img
                        src="/images/Rectangle_895-2.svg"
                        alt="Streamlined Cash Application"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">
                        Streamlined Cash Application
                      </h3>
                      <p className="benefit-desc">
                        Detecting invoice acceptance <br /> or pushbacks
                      </p>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <img
                        src="/images/Rectangle_895-3.svg"
                        alt="Stronger Credit Risk Insights"
                      />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">
                        Stronger Credit Risk Insights
                      </h3>
                      <p className="benefit-desc">
                        Analyzing behavior to improve <br /> credit risk
                        decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </section>

            {/* features-grid section */}
            <div className="features-grid" style={{ margin: "86px 0px" }}>
              {Simple_Features_CONTENT.map((feature, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-content">
                    {/* <div className="feature-type">
                      <img src={feature.icon} alt={`${feature.text} icon`} />
                      <p dangerouslySetInnerHTML={{ __html: feature.text }} />
                    </div> */}

                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-para">{feature.para}</p>
                    <div className="feature-points-list">
                      {feature.featurePoints.map((point, index) => (
                        <div key={index} className="feature-point">
                          <img src={point.icon} alt="" className="point-icon" />
                          <p>{point.description}</p>
                        </div>
                      ))}
                    </div>
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
        <FaqContent
          bgColor="#ffffff"
          title="Frequently asked questions"
          subTitle="FAQ about FinFloh's Credit Decisioning Software"
          questions={FAQ_CONTENT}
          addContactButton={true}
        />
        {/* new-newsletter section */}
        <NewNewsLetter
          heading="Super-charge your finance Inbox and transform your Invoice-to-Cash"
          text="Activate now and get first 50 queries/prompts responses for FREE*"
        />
      </WebsiteLayout>
    </>
  );
};

export default FlohSenseAi;
