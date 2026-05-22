import React from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { flohsensePage } from "../data/flohsense-ai.data";
import ProductSection from "../components/Sections/ProductSection/productSection";
import KeyFeature from "../components/Sections/KeyFeature/KeyFeature";
import FeatureSection from "../components/Sections/FeatureSection/FeatureSection";
import FocusSection from "../components/Sections/FocusSection/FocusSection";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import SpotlightSection from "../components/Sections/SpotlightSection/SpotlightSection";
import CustomerLogos from "../components/Sections/CustomerLogos/CustomerLogos";
import HeadComponent from "../components/Common/HeadComponent";
import FaqContent from "../components/Faq/FaqContent_New";
import RightArrow from "../public/icons/arrow_right.svg";

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What is FlohSense AI Agent?",
    answer: [
      "FlohSense AI Agent is an AI-powered receivables communication agent that reads customer emails and chats, understands intent and sentiment, and automatically triggers workflows, actions, responses, and worklists.",
    ],
  },
  {
    uuid: "b",
    question: "How does FlohSense AI Agent automate customer communication?",
    answer: [
      "FlohSense AI Agent monitors incoming customer emails and chats, interprets requests such as invoice copies, payment confirmations, disputes, and ledger requests, and automatically triggers responses, workflows, escalations, and ERP/CRM updates.",
    ],
  },
  {
    uuid: "c",
    question: "Can FlohSense AI understand customer intent and sentiment?",
    answer: [
      "Yes. FlohSense AI Agent analyzes customer intent, communication context, payment commitments, dispute signals, sentiment, and behavior patterns to help finance teams take faster and smarter receivables decisions.",
    ],
  },
  {
    uuid: "d",
    question: "How does FlohSense AI Agent improve collections efficiency?",
    answer: [
      "FlohSense AI Agent reduces manual inbox monitoring and follow-ups by automatically converting customer communication into actionable workflows, prioritized worklists, reminders, and receivables actions that accelerate collections and cashflow realization.",
    ],
  },
  {
    uuid: "e",
    question: "Does FlohSense AI integrate with ERP and CRM systems?",
    answer: [
      "Yes. FlohSense AI Agent integrates with ERP, CRM, and communication systems to automate receivables workflows, synchronize customer data, update records, and eliminate manual coordination across systems.",
    ],
  },
  {
    uuid: "f",
    question: "What types of customer communication can FlohSense AI process?",
    answer: [
      "FlohSense AI can process customer emails, chats, invoice requests, payment confirmations, disputes, remittance advice, ledger requests, follow-ups, escalations, and collections communication.",
    ],
  },
  {
    uuid: "g",
    question: "Can FlohSense AI automatically respond to customer emails?",
    answer: [
      "Yes. FlohSense AI Agent can automatically draft and send contextual responses for invoice requests, ledger statements, proofs of delivery, payment reminders, and receivables-related customer queries.",
    ],
  },
  {
    uuid: "h",
    question: "How does FlohSense AI reduce manual effort for finance teams?",
    answer: [
      "FlohSense AI eliminates repetitive receivables tasks such as inbox monitoring, email categorization, follow-up tracking, worklist creation, communication tagging, and workflow coordination through autonomous AI-driven execution.",
    ],
  },
  {
    uuid: "i",
    question: "What communication analytics does FlohSense AI provide?",
    answer: [
      "FlohSense AI provides real-time visibility into pending customer emails, response delays, unresolved communication, customer sentiment, payment behavior, collector responsiveness, and receivables communication performance.",
    ],
  },
  {
    uuid: "j",
    question: "Can FlohSense AI convert customer emails into worklists?",
    answer: [
      "Yes. FlohSense AI automatically converts customer communication into structured and trackable worklists with ownership, status tracking, priority classification, and workflow actions.",
    ],
  },
  {
    uuid: "k",
    question:
      "Is FlohSense AI built specifically for finance and accounts receivable teams?",
    answer: [
      "Yes. FlohSense AI is purpose-built for finance teams managing accounts receivable, collections, disputes, invoice-to-cash workflows, and customer communication operations.",
    ],
  },
  {
    uuid: "l",
    question: "How is FlohSense AI different from generic AI chatbots?",
    answer: [
      "Unlike generic AI chatbots, FlohSense AI is designed specifically for receivables operations. It understands finance workflows, integrates with ERP and CRM systems, interprets payment and dispute communication, and autonomously executes receivables actions.",
    ],
  },
  {
    uuid: "m",
    question: "How is FlohSense AI Agent priced?",
    answer: [
      "FlohSense AI Agent is priced based on customer communication volume. Each incoming customer email or interaction processed by the AI Agent is considered a usage unit, allowing pricing to scale with receivables operations and workflow activity.",
    ],
  },
];

const flohsense = () => {
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
        <div>
          <HeroSection
            title={flohsensePage.heroSection.title}
            kicker={flohsensePage.heroSection.kicker}
            description={flohsensePage.heroSection.description}
            btnText={flohsensePage.heroSection.btnText}
            utmURLs={flohsensePage.heroSection.btnLink}
            image={flohsensePage.heroSection.image}
            icon={<RightArrow />}
          />
          <CustomerLogos />
          <div className="container main-container">
            <FocusSection
              title={flohsensePage.focusSection.title}
              description={flohsensePage.focusSection.description}
              image={flohsensePage.focusSection.image}
              features={flohsensePage.focusSection.features}
            />

            <SpotlightSection
              title={flohsensePage.spotlightSection.title}
              kicker={flohsensePage.spotlightSection.kicker}
              image={flohsensePage.spotlightSection.image}
              features={flohsensePage.featureCards.features}
            />

            {/* Feature Section */}
            <FeatureSection
              sections={flohsensePage.featureSection.sections}
              icon={<RightArrow />}
            />

            <KeyFeature
              title={flohsensePage.keyFeature.title}
              description={flohsensePage.keyFeature.description}
              ctaText={flohsensePage.keyFeature.ctaText}
              ctaLink={flohsensePage.keyFeature.ctaLink}
              image={flohsensePage.keyFeature.image}
            />

            {/* <ValueAddFeature features={flohsensePage.valueAddFeature.features} /> */}
          </div>

          <FaqContent
            bgColor="#ffffff"
            title="Frequently asked questions"
            subTitle="Frequently asked questions about FinFloh's 
          Invoice Validation Software
          "
            questions={FAQ_CONTENT}
          />
          <ProductSection />
        </div>
      </WebsiteLayout>
    </>
  );
};

export default flohsense;
