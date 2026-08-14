
import React from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import { docsenseContent } from "../data/flohsense-ai.data";
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
  question: "What is DocSense AI Agent?",
  answer: [
    "DocSense AI Agent is FinFloh’s AI-powered document intelligence agent that reads, understands, and extracts structured information from contracts, SOWs, purchase orders, invoices, remittance advices, bank statements, and other business documents.",
  ],
},
{
  uuid: "b",
  question: "How does DocSense AI Agent extract information from documents?",
  answer: [
    "DocSense AI Agent uses AI-powered document intelligence to understand document context, identify relevant fields and terms, and convert unstructured information into structured data for downstream finance workflows.",
  ],
},
{
  uuid: "c",
  question: "What types of documents can DocSense AI Agent process?",
  answer: [
    "DocSense AI Agent can process contracts, SOWs, purchase orders, invoices, remittance advices, bank statements, and other business documents across different formats, layouts, and structures.",
  ],
},
{
  uuid: "d",
  question: "Can DocSense AI Agent process documents with different formats and layouts?",
  answer: [
    "Yes. DocSense AI Agent is designed to understand variations in document formats, layouts, structures, terminology, and data placement while consistently extracting the information required for business workflows.",
  ],
},
{
  uuid: "e",
  question: "How does DocSense AI Agent reduce manual document processing?",
  answer: [
    "DocSense AI Agent automatically reads, interprets, and extracts information from documents, reducing manual data entry, document review, processing time, and errors while creating structured data for downstream workflows.",
  ],
},
{
  uuid: "f",
  question: "Can DocSense AI Agent extract commercial and financial information?",
  answer: [
    "Yes. DocSense AI Agent can extract commercial terms, pricing, billing schedules, payment terms, customer details, invoice information, remittance details, and other relevant financial data from business documents.",
  ],
},
{
  uuid: "g",
  question: "How is DocSense AI Agent priced?",
  answer: [
    "DocSense AI Agent is priced based on document processing volume. Each document processed by the AI Agent is considered a usage unit, allowing pricing to scale with your document processing requirements and business workflows.",
  ],
},
{
  uuid: "h",
  question: "How can I get started with FinFloh’s DocSense AI Agent?",
  answer: [
    "You can get started by scheduling a demo or discovery session with the FinFloh team. We assess your document types, extraction requirements, existing workflows, and integration needs, then configure DocSense AI Agent to support your specific business processes.",
  ],
},
];

const flohsense = () => {
  return (
    <>
      <HeadComponent
        title="AI-Powered Document Intelligence to Unlock Data from Every Document"
        description="Extract structured data, actionable insights, and key information from contracts, SOWs, POs, invoices, remittance advices, and bank statements without manual document processing."
        canonicalUrl="https://finfloh.com/docsense-ai-agent"
        // headline="AI Agent for Customer Queries & Issues"
        // keywords="Receivables, AR, A/R, AR Automation, AI, Accounts Receivable"
        // includePublisher
        // includeMainEntity
        // MainEntityProps={{
        //   entityType: "Article",
        //   headline: "FlohSense AI by FinFloh - Always on Finance AI Agent",
        //   articleSection: [
        //     "Why do Traditional Customer Communication Channels Fall Short?",
        //     "How does FlohSense AI agent work with your customer queries in emails/chats?",
        //     "Customer Queries / Issues",
        //     "Collections",
        //   ],
        // }}
        // includeBreadcrumbs
        // breadcrumbItems={[
        //   {
        //     name: "FlohSense AI Agent",
        //     item: "https://finfloh.com/flohsense-ai-agent",
        //   },
        // ]}
      />

      <WebsiteLayout>
        <div>
          <HeroSection
            title={docsenseContent.heroSection.title}
            kicker={docsenseContent.heroSection.kicker}
            description={docsenseContent.heroSection.description}
            btnText={docsenseContent.heroSection.btnText}
            utmURLs={docsenseContent.heroSection.btnLink}
            image={docsenseContent.heroSection.image}
            icon={<RightArrow />}
          />
          <CustomerLogos />
          <div className="container main-container">
            <FocusSection
              title={docsenseContent.focusSection.title}
              description={docsenseContent.focusSection.description}
              image={docsenseContent.focusSection.image}
              features={docsenseContent.focusSection.features}
            />

            <SpotlightSection
              title={docsenseContent.spotlightSection.title}
              kicker={docsenseContent.spotlightSection.kicker}
              image={docsenseContent.spotlightSection.image}
              features={docsenseContent.featureCards.features}
            />

            {/* Feature Section */}
            <FeatureSection
              sections={docsenseContent.featureSection.sections}
              icon={<RightArrow />}
            />
{/* 
            <KeyFeature
              title={docsenseContent.keyFeature.title}
              description={docsenseContent.keyFeature.description}
              ctaText={docsenseContent.keyFeature.ctaText}
              ctaLink={docsenseContent.keyFeature.ctaLink}
              image={docsenseContent.keyFeature.image}
            /> */}

            {/* <ValueAddFeature features={docsenseContent.valueAddFeature.features} /> */}
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
