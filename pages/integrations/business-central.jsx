// Import
import HeadComponent from "../../components/Common/HeadComponent";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import ButtonCommon from "../../components/UI/Button/Button";
import { useEffect, useRef, useState } from "react";

import styles from "./integration.module.scss";
import FaqContent_new from "../../components/Faq/FaqContent_New";
import LinkButton from "../../components/Common/LinkButton";

// const
const GAP_CONTENT = [
  {
    id: "0",
    // TODO: Replace icon (PDF uses a "book" icon for this card)
    icon: "/icons/integrations/ledger.svg",
    title: "Customer balances need more context",
    content:
      "A customer ledger shows recorded transactions and outstanding amounts. Investigating differences can require matching invoices, payments, credit memos, deductions and supporting evidence.",
  },
  {
    id: "1",
    // TODO: Replace icon (PDF uses a "refresh / sync" icon for this card)
    icon: "/icons/integrations/matching.svg",
    title: "Payment exceptions require investigation",
    content:
      "Partial payments, multi-invoice remittances, unclear references and deductions can make it difficult to determine exactly what a customer has paid and what remains outstanding.",
  },
  {
    id: "2",
    // TODO: Replace icon (PDF uses a "mail" icon for this card)
    icon: "/icons/integrations/email.svg",
    title: "Collections require customer intelligence",
    content:
      "An overdue invoice does not explain whether a customer has promised to pay, raised a dispute, requested a copy of an invoice or challenged a commercial term. These signals may sit in customer communications.",
  },
  {
    id: "3",
    // TODO: Replace icon (PDF uses a "document with slash" icon for this card)
    icon: "/icons/integrations/disputes.svg",
    title: "Contract terms and claims must be connected",
    content:
      "Validating a pricing dispute or deduction can require comparing invoice details against contract terms, purchase orders, customer claims and other evidence.",
  },
  {
    id: "4",
    // TODO: Replace icon (PDF uses a "document" icon for this card)
    icon: "/icons/integrations/invoice.svg",
    title: "Posted invoices still need to reach the customer",
    content:
      "Posting a sales invoice in Business Central is one step. Delivery to the right contact or buyer portal, failed sends and copy requests are tracked somewhere else.",
  },
  {
    id: "5",
    // TODO: Replace icon (PDF uses a "chart" icon for this card)
    icon: "/icons/integrations/graph.svg",
    title: "Leaders need more than an ageing report",
    content:
      "Ageing shows how old receivables are, not where they are stuck — by customer, business unit or collector, and why.",
  },
];

const RECONCILIATION_ITEMS = [
  {
    id: "customer-ledger-reconciliation",
    number: "01",
    label: "Customer-Ledger Reconciliation",
    title: "Go Beyond Business Central Customer Ledger Entries",
    description:
      "Customer ledger entries tell you what has been recorded. FinFloh reconciles them against the evidence outside the ERP — remittances, emails, contracts, POs, credit memos and claims — into one explained position per customer.",
    subtask: [
      {
        feature:
          "Business Central customer ledger entries, posted invoices, credit memos, open receivables",
      },
      { feature: "Remittances, emails, contracts, POs, claims" },
      { feature: "FinFloh AI reconciliation" },
      { feature: "Matched items confirmed" },
      { feature: "Exceptions with potential root cause" },
      { feature: "Recommended action per customer" },
    ],
    keyPointer: [
      { point: "What was billed?" },
      { point: "What was paid?" },
      { point: "What was credited?" },
      { point: "Who needs to act?" },
    ],
  },
  {
    id: "invoice-automation",
    number: "02",
    label: "Invoice Automation",
    title: "Accelerate Invoice Delivery and Customer Follow-Up",
    description:
      "Invoices are generated and posted in Business Central. FinFloh picks up relevant posted sales invoices and handles delivery, monitoring and customer follow-up.",
    subtask: [
      { feature: "Posted sales invoice in Business Central" },
      { feature: "Email template and supporting attachments applied" },
      { feature: "Delivered by email or supported buyer portal" },
      { feature: "Delivery status and failures monitored" },
      { feature: "Customer queries for invoices and statements answered" },
    ],
    keyPointer: [
      { point: "Email delivery" },
      { point: "Buyer portals" },
      { point: "Delivery tracking" },
      { point: "Failure alerts" },
    ],
  },
  {
    id: "collections",
    number: "03",
    label: "Collections",
    title: "Turn Business Central Ageing Into a Collector Worklist",
    description:
      "An ageing bucket doesn't explain why a customer hasn't paid. FinFloh adds payment behaviour, open disputes and prior commitments, then tells collectors what to do next.",
    subtask: [
      { feature: "Business Central open receivables + customer context" },
      { feature: "FinFloh AI prioritization" },
      { feature: "Collector worklist with next action" },
      { feature: "Reminders based on ageing and configured rules" },
      { feature: "Promise-to-Pay captured and followed up" },
      { feature: "Alerts and escalations for payment delays" },
    ],
    keyPointer: [
      { point: "Risk-based priority" },
      { point: "Automated reminders" },
      { point: "Promise-to-Pay" },
      { point: "Escalations" },
    ],
  },
  {
    id: "cash-application",
    number: "04",
    label: "Cash Application",
    title: "Match Incoming Payments and Resolve Exceptions",
    description:
      "Complement Business Central's payment application and reconciliation with intelligence for complex matching — FinFloh reads remittance advice, identifies the customer and routes uncertain matches for review.",
    subtask: [
      { feature: "Bank statement / payment received" },
      { feature: "Remittance advice read" },
      { feature: "FinFloh AI matching against open invoices" },
      { feature: "Customer + invoices identified" },
      { feature: "Uncertain matches routed for review" },
      { feature: "Approved application synchronized where supported" },
    ],
    keyPointer: [
      { point: "Multi-invoice payments" },
      { point: "Partial payments" },
      { point: "Deductions" },
      { point: "Unmatched receipts" },
    ],
  },
  {
    id: "flohsense-ai",
    number: "05",
    label: "FlohSense AI Agent",
    title: "Bring Customer Communication Into the Receivable",
    description:
      "Customer replies, payment commitments and dispute threads live in inboxes, not in Business Central. FlohSense reads that correspondence, understands what the customer said, and attaches it to the receivable it belongs to.",
    subtask: [
      { feature: "Customer email or reply received" },
      { feature: "FlohSense reads and interprets intent" },
      { feature: "Linked to the Business Central customer and invoice" },
      { feature: "Promise-to-Pay, dispute or query captured" },
      { feature: "Workflow triggered or routed to an owner" },
    ],
    keyPointer: [
      { point: "Promise-to-Pay capture" },
      { point: "Dispute detection" },
      { point: "Query identification" },
      { point: "Auto-routing" },
    ],
  },
  {
    id: "contract-intelligence-disputes",
    number: "06",
    label: "Contract Intelligence & Disputes",
    title: "Investigate Claims with Contract and Customer-Ledger Context",
    description:
      "DocSense AI extracts pricing and billing terms from contracts. FinFloh compares them with invoice and ledger data and the customer's claim to investigate short-payments and deductions.",
    subtask: [
      { feature: "Short-payment linked to the Business Central invoice" },
      { feature: "Claim reason read from customer email" },
      { feature: "Contract terms extracted by DocSense AI" },
      { feature: "Claim validated against available evidence" },
      { feature: "Owner assigned, resolution tracked" },
      { feature: "ERP updated where supported" },
    ],
    keyPointer: [
      { point: "Pricing disputes" },
      { point: "Billing-term claims" },
      { point: "Deductions" },
      { point: "Quantity disputes" },
    ],
  },
  {
    id: "ar-performance-insights",
    number: "07",
    label: "A/R Performance & Insights",
    title: "Understand Receivables Performance and Where to Act",
    description:
      "Help finance leaders assess collections, ageing, customer exposure and operational performance across the FinFloh platform.",
    subtask: [
      { feature: "Monitor DSO, ageing and collection trends" },
      {
        feature:
          "Track performance by company, business unit, customer and collector, where data is available",
      },
      { feature: "Identify gaps, bottlenecks and anomalies" },
      { feature: "Forecast collections and cash flow where supported" },
    ],
    keyPointer: [
      { point: "DSO & ageing" },
      { point: "Collector performance" },
      { point: "Customer exposure" },
      { point: "Forecasting" },
    ],
  },
];

const CONTROL_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Role-based workflows where supported",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Approval controls before ERP updates",
  },
  {
    id: "2",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Exception visibility by owner",
  },
  {
    id: "3",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Complete audit trail",
  },
  {
    id: "4",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Action history per transaction",
  },
  {
    id: "5",
    icon: "/icons/integrations/blueCheck.svg",
    title: "User accountability",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Traceability to Business Central records",
  },
  {
    id: "7",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Data synchronization visibility",
  },
];

const IMPLEMENTATION_CONTENT = [
  {
    id: "1",
    number: "01",
    title: "Connect",
    description: [
      "Integration setup and Business Central data source mapping — customers, ledger entries, posted invoices, credit memos",
    ],
  },
  {
    id: "2",
    number: "02",
    title: "Configure",
    description: ["Workflow configuration, user and role setup"],
  },
  {
    id: "3",
    number: "03",
    title: "Validate",
    description: ["Data validation and testing with real AR data"],
  },
  {
    id: "4",
    number: "04",
    title: "Go Live",
    description: ["Controlled rollout and team onboarding"],
  },
];

const BUSINESS_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Less manual reconciliation",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster resolution of payment exceptions",
  },
  {
    id: "2",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Lower manual AR workload",
  },
  {
    id: "3",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Collectors focused on the right accounts",
  },
  {
    id: "4",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Promise-to-Pay commitments tracked",
  },
  {
    id: "5",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster dispute and deduction investigation",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Better receivables visibility",
  },
  {
    id: "7",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Clearer customer-ledger positions",
  },
];

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "What does FinFloh do for Microsoft Dynamics 365 Business Central?",
    answer: [
      "FinFloh is an AI-powered accounts receivable automation and customer-ledger intelligence platform that works alongside Business Central. It connects Business Central receivables data with contracts, payments, customer communications and supporting documents to support invoice delivery, collections, cash application and dispute workflows.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh integrate with Business Central?",
    answer: [
      "FinFloh connects to Business Central to access relevant customer, invoice, credit memo, ledger and receivables data. The integration method, data scope and sync frequency are confirmed with your team during implementation, based on your Business Central environment and requirements.",
    ],
  },
  {
    uuid: "c",
    question:
      "Does FinFloh replace Business Central's accounts receivable functionality?",
    answer: [
      "No. Business Central remains your financial system of record for customers, invoicing, ledger entries and payment application. FinFloh adds an execution and intelligence layer around those records.",
    ],
  },
  {
    uuid: "d",
    question: "How does FinFloh reconcile Business Central customer ledgers?",
    answer: [
      "FinFloh compares customer ledger entries with invoices, payments, credit memos, remittances, communications and supporting documents. It identifies unmatched items, short-payments and discrepancies, and surfaces potential causes for your team to review.",
    ],
  },
  {
    uuid: "e",
    question: "How does FinFloh support cash application for Business Central?",
    answer: [
      "FinFloh extracts payment details from bank statements and remittance advice, matches payments to customers and open invoices, and flags partial payments, deductions and uncertain matches for review before posting or synchronization.",
    ],
  },
  {
    uuid: "f",
    question: "Can FinFloh help investigate short-payments and deductions?",
    answer: [
      "Yes. FinFloh connects the payment, invoice, customer claim and contract terms extracted by DocSense AI, so your team can validate a deduction against evidence and track it through resolution.",
    ],
  },
  {
    uuid: "g",
    question: "How does FinFloh automate collections and track Promise-to-Pay?",
    answer: [
      "FinFloh builds prioritized collector worklists from receivables and ageing data, sends reminders based on configured rules, and captures Promise-to-Pay commitments so collectors can follow up when they fall due.",
    ],
  },
  {
    uuid: "h",
    question:
      "Can FinFloh read customer emails and identify payment or dispute signals?",
    answer: [
      "Yes. FlohSense AI reads customer emails and communications to identify payment commitments, risks, queries and dispute reasons, and links them to the relevant customer and invoice.",
    ],
  },
  {
    uuid: "i",
    question: "Does FinFloh support invoice delivery and monitoring?",
    answer: [
      "Yes. Invoices are generated and posted in Business Central; FinFloh supports delivery by email and supported buyer portals, configurable templates and attachments, and monitoring of delivery status and failures.",
    ],
  },
  {
    uuid: "j",
    question: "Can FinFloh write updates back to Business Central?",
    answer: [
      "Where supported, approved outcomes can be synchronized with Business Central. Which updates are in scope depends on your configuration and integration setup, and is agreed during implementation.",
    ],
  },
  {
    uuid: "k",
    question: "How long does implementation take?",
    answer: [
      "Timelines depend on integration scope, data sources and the workflows you enable. Implementation follows a connect, configure, validate and go-live sequence; our team shares a plan after reviewing your Business Central setup.",
    ],
  },
];

// Main
export default function BusinessCentralPage() {
  // const
  const [activeReconciliationId, setActiveReconciliationId] = useState(
    RECONCILIATION_ITEMS[0].id,
  );
  const cardRefs = useRef({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveReconciliationId(topMost.target.dataset.id);
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    );

    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id) => {
    setActiveReconciliationId(id);
    isClickScrolling.current = true;

    cardRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.clearTimeout(handleTabClick._t);
    handleTabClick._t = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <>
      <HeadComponent
        title="AI Accounts Receivable Automation for Microsoft Dynamics 365 Business Central | FinFloh"
        description="FinFloh extends Microsoft Dynamics 365 Business Central with AI for customer-ledger reconciliation, invoice delivery, collections, cash application & disputes."
        canonicalUrl="https://finfloh.com/integrations/business-central"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Automation for Microsoft Dynamics 365 Business Central",
          serviceType:
            "AI-Driven Accounts Receivable Automation for Business Central",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Microsoft Dynamics 365 Business Central",
            item: "https://finfloh.com/integrations/business-central",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            question:
              "What does FinFloh do for Microsoft Dynamics 365 Business Central?",
            answer:
              "FinFloh is an AI-powered accounts receivable automation and customer-ledger intelligence platform that works alongside Business Central. It connects Business Central receivables data with contracts, payments, customer communications and supporting documents to support invoice delivery, collections, cash application and dispute workflows.",
          },
          {
            question: "How does FinFloh integrate with Business Central?",
            answer:
              "FinFloh connects to Business Central to access relevant customer, invoice, credit memo, ledger and receivables data. The integration method, data scope and sync frequency are confirmed with your team during implementation, based on your Business Central environment and requirements.",
          },
          {
            question:
              "Does FinFloh replace Business Central's accounts receivable functionality?",
            answer:
              "No. Business Central remains your financial system of record for customers, invoicing, ledger entries and payment application. FinFloh adds an execution and intelligence layer around those records.",
          },
          {
            question:
              "How does FinFloh reconcile Business Central customer ledgers?",
            answer:
              "FinFloh compares customer ledger entries with invoices, payments, credit memos, remittances, communications and supporting documents. It identifies unmatched items, short-payments and discrepancies, and surfaces potential causes for your team to review.",
          },
          {
            question:
              "How does FinFloh support cash application for Business Central?",
            answer:
              "FinFloh extracts payment details from bank statements and remittance advice, matches payments to customers and open invoices, and flags partial payments, deductions and uncertain matches for review before posting or synchronization.",
          },
          {
            question: "Can FinFloh help investigate short-payments and deductions?",
            answer:
              "Yes. FinFloh connects the payment, invoice, customer claim and contract terms extracted by DocSense AI, so your team can validate a deduction against evidence and track it through resolution.",
          },
          {
            question:
              "How does FinFloh automate collections and track Promise-to-Pay?",
            answer:
              "FinFloh builds prioritized collector worklists from receivables and ageing data, sends reminders based on configured rules, and captures Promise-to-Pay commitments so collectors can follow up when they fall due.",
          },
          {
            question:
              "Can FinFloh read customer emails and identify payment or dispute signals?",
            answer:
              "Yes. FlohSense AI reads customer emails and communications to identify payment commitments, risks, queries and dispute reasons, and links them to the relevant customer and invoice.",
          },
          {
            question: "Does FinFloh support invoice delivery and monitoring?",
            answer:
              "Yes. Invoices are generated and posted in Business Central; FinFloh supports delivery by email and supported buyer portals, configurable templates and attachments, and monitoring of delivery status and failures.",
          },
          {
            question: "Can FinFloh write updates back to Business Central?",
            answer:
              "Where supported, approved outcomes can be synchronized with Business Central. Which updates are in scope depends on your configuration and integration setup, and is agreed during implementation.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Timelines depend on integration scope, data sources and the workflows you enable. Implementation follows a connect, configure, validate and go-live sequence; our team shares a plan after reviewing your Business Central setup.",
          },
        ]}
      />
      <WebsiteLayout>
        {/* Hero Section */}
        <section className="section">
          <div className={`container ${styles.HeroContainer}`}>
            <div className={styles.ContentWrapper}>
              <h2 className={styles.Kicker}>
                Finfloh for Microsoft Dynamics 365 Business Central
              </h2>
              <h1 className={styles.MainHeaderFont}>
                AI-Powered Accounts Receivable Automation for Microsoft Dynamics
                365 Business Central
              </h1>
              <ButtonCommon
                label="Talk to An Expert"
                href="/book-a-demo?utm_source=business_central_main_cta&utm_medium=finfloh_website&utm_campaign=business_central_page"
              />
              <p className={styles.ParaDef}>
                Extend Business Central with AI-powered invoice automation,
                collections, cash application and customer-ledger intelligence.
                Connect receivables data with contracts, payments, customer
                communications and supporting documents to reduce manual
                investigation and improve AR execution.
              </p>
            </div>
            <div>
              {/* TODO: Replace this hero image with the Business Central hero image (current path is a placeholder) */}
              <img
                src="/images/dynamicsHeroIllustration.jpg"
                alt="Microsoft dynamics Logo"
              />
            </div>
          </div>
        </section>

        {/* Value Prop */}
        {/* <section className="section">
          <div className={styles.ContainerFloating}>
            <div
              className={` ${styles.CenterAlignAll} ${styles.ContentWrapper}`}
            >
              <h3 className={styles.Kicker}>
                Business Central stays your system of record.
              </h3>
              <h2 className={styles.HeaderFont}>
                FinFloh becomes your AR execution layer.
              </h2>
            </div>
          </div>
        </section> */}

        {/* The GAP Section */}
        <section className="section">
          <div className="container stack stack--extra-loose">
            <div className="HeadingWrapper">
              <div className="ContentContainer">
                <h3 className="kickerH3">The GAP</h3>
                <h2>
                  Your Receivables Live in Business Central.
                  <br />
                  The Full Context Often Doesn't.
                </h2>
              </div>
              <div>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>
            </div>
            <div className={styles.CardWrapper}>
              {GAP_CONTENT.map((key, index) => (
                <div className={styles.Card} key={index}>
                  <img src={key.icon} className="icon--lg" />
                  <h4 className="heading_md">{key.title}</h4>
                  <p className="p18">{key.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: The Connection Part */}

        {/* Section 5: */}
        <section className="section">
          <div className="gridLayout_2column container">
            {/* Left side */}
            <div className="leftWrapper leftWrapper--sticky">
              <div className="HeadingWrapper">
                <h3 className="kickerH3">THE SOLUTIONS</h3>
                <h2>
                  Connected Workflows
                  <br /> on Top of Business Central
                </h2>
                <p>
                  Each one closes a gap above — reading relevant Business
                  Central data, adding the context the ERP never sees, and
                  synchronizing approved outcomes back where supported.
                </p>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>

              <div className="tab_nav">
                {RECONCILIATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`tab-btn ${activeReconciliationId === item.id ? "active" : ""}`}
                    onClick={() => handleTabClick(item.id)}
                  >
                    <span className="tab-indicator" />
                    <h4 className="CardHeader">{item.label}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="CardWrapper_Vertical">
              {RECONCILIATION_ITEMS.map((item) => (
                <div
                  key={item.id}
                  data-id={item.id}
                  ref={(el) => (cardRefs.current[item.id] = el)}
                  className="Loose_card"
                >
                  <h4 className="heading_xs ">{item.label}</h4>
                  <h5 className="h3">{item.title}</h5>
                  <p className="p18">{item.description}</p>
                  <div>
                    <ul className="unorderedList_new">
                      {item.subtask.map((key, i) => (
                        <li className="listItems_new" key={i}>
                          <img
                            src="/icons/integrations/blueDot.svg"
                            alt=""
                            className="icon"
                          />
                          {key.feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="divider_new"></div>
                  <div className="cardFlex">
                    {item.keyPointer.map((key, i) => (
                      <span className="tagInsideCard" key={i}>
                        <p>{key.point}</p>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: */}

        {/* Section 7: CONTROLS & AUDITABILITY */}
        <section className="section">
          <div className="container stack stack--extra-loose">
            <div className={styles.HeadingWrapper}>
              <div className={styles.ContentContainer}>
                <h3 className="kickerH3">CONTROLS & AUDITABILITY</h3>
                <h2>Automation Your Auditors Can Follow</h2>
                <p>
                  Business Central remains the system of record. Every FinFloh
                  action is traceable to the transaction, the evidence behind it
                  and the person who approved it.
                </p>
              </div>
              <div>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>
            </div>
            <div className={styles.CardWrapper_4cards}>
              {CONTROL_CONTENT.map((key, i) => (
                <div className={styles.Card_4Column} key={i}>
                  <img
                    src="/icons/integrations/blueCheck.svg"
                    className="icon--lg"
                  />
                  <h4 className="heading_md">{key.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Integration: IMPLEMENTATION */}
        <section className="section">
          <div className="container stack stack--extra-loose">
            <div className={styles.HeadingWrapper}>
              <div className={styles.ContentContainer}>
                <h3 className="kickerH3">Implementation</h3>
                <h2>Connect to Business Central Without Replacing Your ERP</h2>
              </div>
              <div>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>
            </div>
            <div className={styles.Card_GridLayout}>
              {IMPLEMENTATION_CONTENT.map((key, i) => (
                <div className={styles.CardGrid} key={i}>
                  <p className={styles.kicker}>{key.number}</p>
                  <h4 className="heading_md">{key.title}</h4>
                  <p className={styles.ParaDef}>{key.description}</p>
                </div>
              ))}
              <div className={styles.gridWide}>
                <div className={styles.CardGrid}>
                  <div>
                    <p className={styles.kicker}>05</p>
                    <h4 className="heading_md">Scale</h4>
                    <p className={styles.ParaDef}>
                      Add companies, workflows and complexity as the business
                      grows
                    </p>
                  </div>
                  <div>
                    <ButtonCommon
                      label="Talk to an expert"
                      href="/book-a-demo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: BUSINESS OUTCOMES */}
        <section className="section">
          <div className="container stack stack--extra-loose">
            <div className={styles.HeadingWrapper}>
              <div className={styles.ContentContainer}>
                <h3 className="kickerH3">BUSINESS OUTCOMES</h3>
                <h2>What Changes for a Business Central Finance Team</h2>
                <p>
                  Quicken your audit process through clearly defined processes,
                  documents and outcomes. Track the process steps to completion.
                </p>
              </div>
              <div>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>
            </div>
            <div className={styles.CardWrapper_4cards}>
              {BUSINESS_CONTENT.map((key, i) => (
                <div className={styles.Card_4Column} key={i}>
                  <img src={key.icon} className="icon--lg" />
                  <h4 className="heading_md">{key.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqContent_new
          bgColor="#ffffff"
          title="FAQ"
          subTitle="Frequently Asked Questions
          "
          questions={FAQ_CONTENT}
        />

        {/* Contact Us */}
        <div
          className="container whyfinfloh-newsletter"
          style={{ padding: "48px" }}
        >
          <div className="whyfinfloh-newsletter-cnt">
            <h2 className="h3 text-inverse">
              Get More from
              <br /> Business Central Receivables
            </h2>
          </div>
          <div className="whyfinfloh-newsletter-btn">
            <LinkButton openInNewTab={true} href="/book-a-demo">
              Talk To An Expert
            </LinkButton>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
}