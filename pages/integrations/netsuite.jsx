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
    icon: "/icons/integrations/ledger.svg",
    title: "Ledgers Don't Reconcile Themselves",
    content:
      "Customer invoices, payments, balances and advices sit across ERP, CRM, emails, making it difficult to reconcile.",
  },
  {
    id: "1",
    icon: "/icons/integrations/invoice.svg",
    title: "ERP Invoices Aren't Validated",
    content:
      "Invoices need to be validated against contracts, SOWs, orders and commercial terms that sit in CRM outside the ERP.",
  },
  {
    id: "2",
    icon: "/icons/integrations/graph.svg",
    title: "Collectors Need More Than Aging",
    content:
      "Ageing alone doesn't tell the complete story, the collector must know why payment is delayed or what action to take.",
  },
  {
    id: "3",
    icon: "/icons/integrations/matching.svg",
    title: "Cash Still Needs Matching",
    content:
      "Remittances and payment references need human intervention to map cleanly onto customers and open invoices.",
  },
  {
    id: "4",
    icon: "/icons/integrations/email.svg",
    title: "Customer Emails Aren't in the ERP",
    content:
      "Invoice and reminder emails and customer email responses often sit across inboxes — not alongside the receivables.",
  },
  {
    id: "5",
    icon: "/icons/integrations/disputes.svg",
    title: "Disputes and Deductions Delay A/R",
    content:
      "Short-payments, deductions, claims and disputes take time to resolve and delay receivables.",
  },
];

const RECONCILIATION_ITEMS = [
  {
    id: "contract-intelligence",
    number: "01",
    label: "Customer Ledger Reconciliation",
    title: "Go Beyond NetSuite Open AR",
    description:
      "Open AR tells you a balance exists. FinFloh reconciles NetSuite receivables against the evidence outside the ERP — remittances, emails, contracts, POs, credit notes and claims — into one explained position per customer.",
    subtask: [
      { feature: "NetSuite invoices, payments, credit memos, open AR" },
      { feature: "Remittances, emails, contracts, POs, claims" },
      { feature: "FinFloh AI reconciliation" },
      { feature: "Matched items confirmed" },
      { feature: "Exceptions with root cause" },
      { feature: "Recommended action per customer" },
    ],
    keyPointer: [
      { point: "What was billed?" },
      { point: "What was paid?" },
      { point: "What was deducted?" },
      { point: "Who needs to act?" },
    ],
  },
  {
    id: "invoice-automation",
    number: "02",
    label: "Invoice Automation",
    title: "Validate and Automate Every Invoice",
    description:
      "FinFloh reads the commercial source of truth and checks the invoice against it, so billing errors are caught before they become receivables exceptions.",
    subtask: [
      { feature: "Contract / SOW / PO / billing data" },
      { feature: "DocSense extraction" },
      { feature: "Commercial-term validation" },
      { feature: "Invoice generated and validated" },
      { feature: "Posted to NetSuite" },
      { feature: "Delivered to customer" },
    ],
    keyPointer: [
      { point: "Pricing validation" },
      { point: "Tax validation" },
      { point: "Delivery tracking" },
      { point: "Discrepancy alerts" },
    ],
  },
  {
    id: "collections",
    number: "03",
    label: "Collections",
    title: "Turn NetSuite Ageing Into a Collector Worklist",
    description:
      "An ageing bucket doesn't explain why a customer hasn't paid. FinFloh adds payment behaviour, open disputes and prior commitments, then tells collectors what to do next.",
    subtask: [
      { feature: "NetSuite open AR + customer context" },
      { feature: "FinFloh AI prioritization" },
      { feature: "Collector worklist with next action" },
      { feature: "Customer communication" },
      { feature: "Promise-to-pay / follow-up" },
      { feature: "Payment recorded in NetSuite" },
    ],
    keyPointer: [
      { point: "Risk-based priority" },
      { point: "Automated reminders" },
      { point: "Promise-to-pay" },
      { point: "Escalations" },
    ],
  },
  {
    id: "cash-application",
    number: "04",
    label: "Cash Application",
    title: "From Payment to Posting, Automatically",
    description:
      "FinFloh reads remittance advice, identifies the customer, matches against open invoices and scores its own confidence — routing only genuine exceptions to a human.",
    subtask: [
      { feature: "Bank / payment received" },
      { feature: "Remittance advice read" },
      { feature: "FinFloh AI matching" },
      { feature: "Invoice + customer identified" },
      { feature: "Confidence scoring" },
      { feature: "Exceptions routed to a human" },
      { feature: "Applied cash to NetSuite" },
    ],
    keyPointer: [
      { point: "Partial payments" },
      { point: "TDS / tax adjustments" },
      { point: "Bank charges" },
      { point: "Short payments" },
    ],
  },
  {
    id: "flohsense-ai",
    number: "05",
    label: "FlohSense AI Agent",
    title: "Bring Customer Communication Into the Receivable",
    description:
      "Collection emails, customer replies, payment commitments and dispute threads live in inboxes, not in NetSuite. FlohSense reads that correspondence, understands what the customer actually said, and attaches it to the receivable it belongs to.",
    subtask: [
      { feature: "Customer email or reply received" },
      { feature: "FlohSense reads and interprets intent" },
      { feature: "Linked to the NetSuite customer and invoice" },
      { feature: "Promise-to-pay, dispute or query captured" },
      { feature: "Workflow triggered or routed to an owner" },
      { feature: "Response drafted for routine correspondence" },
    ],
    keyPointer: [
      { point: "Promise-to-pay capture" },
      { point: "Dispute detection" },
      { point: "Payment advice extraction" },
      { point: "Auto-routing" },
      { point: "Drafted replies" },
    ],
  },
  {
    id: "disputes-deduction",
    number: "06",
    label: "Disputes & Deductions",
    title: "Turn Every Deduction Into an Actionable Exception",
    description:
      "A short payment against a NetSuite invoice becomes a classified exception with supporting evidence, a named owner and a tracked path to resolution.",
    subtask: [
      { feature: "Short payment detected and linked to NetSuite" },
      { feature: "AI classification and confidence score" },
      { feature: "Investigation across invoice, contract, remittance, email" },
      { feature: "Decision: accept, reject or partially accept" },
      { feature: "Owner accountable, recovery tracked" },
      { feature: "ERP updated where supported" },
    ],
    keyPointer: [
      { point: "Pricing disputes" },
      { point: "Promotional claims" },
      { point: "Tax differences" },
      { point: "Quantity disputes" },
      { point: "Credit issues" },
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
    title: "ERP traceability",
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
    description: ["Integration setup data source mapping"],
  },
  {
    id: "2",
    number: "02",
    title: "Configure",
    description: ["Workflow configuration user and role setup"],
  },
  {
    id: "3",
    number: "03",
    title: "Validate",
    description: ["Data validation testing with real AR data"],
  },
  {
    id: "4",
    number: "04",
    title: "Go Live",
    description: ["Controlled rollout team onboarding"],
  },
];

const BUSINESS_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Invoice-to-Cash",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Reconciliation",
  },
  {
    id: "2",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Lower Manual AR Workload",
  },
  {
    id: "3",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Cash Application",
  },
  {
    id: "4",
    icon: "/icons/integrations/blueCheck.svg",
    title: "More Productive Collectors",
  },
  {
    id: "5",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Dispute Resolution",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Better Receivables Visibility",
  },
  {
    id: "7",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Month-End Close",
  },
];

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "Does FinFloh replace Oracle NetSuite?",
    answer: [
      "No. NetSuite remains your financial system of record. FinFloh works alongside it as an AI-powered accounts receivable layer — reading NetSuite data, adding the context that sits outside the ERP, and automating the AR workflows around it.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh connect to NetSuite?",
    answer: [
      "FinFloh uses a native NetSuite connector that keeps customer, invoice, payment and receivables data dynamically in sync, so finance teams work from current NetSuite data rather than periodic exports.",
    ],
  },
  {
    uuid: "c",
    question: "Can FinFloh update data in NetSuite, or only read from it?",
    answer: [
      "Both. The connector is two-way: FinFloh retrieves data from NetSuite and writes approved outcomes back — such as payment applications, AR updates, dispute outcomes and workflow status.",
      "Supported write-back objects are confirmed per deployment and governed by your approval controls.",
    ],
  },
  {
    uuid: "d",
    question: "What NetSuite data does FinFloh use?",
    answer: [
      "FinFloh workflows are built around customer master data, invoices, credit memos, sales orders, payments, open receivables, customer transactions and AR balances.",
      "The exact scope for your instance is confirmed during integration design.",
    ],
  },
  {
    uuid: "e",
    question: "How does FinFloh reconcile customer ledgers?",
    answer: [
      "FinFloh reconciles NetSuite receivables against evidence outside the ERP — remittances, emails, contracts, POs, credit notes and claims — and shows matched items, exceptions, root cause and recommended action for each customer.",
    ],
  },
  {
    uuid: "f",
    question: "Can FinFloh validate invoices before they reach the customer?",
    answer: [
      "Yes. FinFloh reads contracts, SOWs, POs and billing inputs, validates pricing, tax and commercial terms against the invoice, and flags discrepancies before the invoice is posted to NetSuite and delivered.",
    ],
  },
  {
    uuid: "g",
    question: "How does FinFloh improve collections on NetSuite AR?",
    answer: [
      "FinFloh layers payment behaviour, open disputes and prior commitments onto NetSuite ageing and open AR, then gives collectors a prioritized worklist with a recommended next action, automated reminders and promise-to-pay tracking.",
    ],
  },
  {
    uuid: "h",
    question: "How does cash application work with NetSuite?",
    answer: [
      "FinFloh reads remittance advice, identifies the customer, matches payments to open invoices and scores its confidence.",
      "High-confidence matches are applied to NetSuite; genuine exceptions are routed to a person for review.",
    ],
  },
  {
    uuid: "i",
    question: "What does the FlohSense AI agent do?",
    answer: [
      "FlohSense reads customer emails and replies, understands intent — a payment commitment, a dispute, a query or payment advice — links it to the right NetSuite customer and invoice, and triggers or routes the next workflow.",
    ],
  },
  {
    uuid: "j",
    question: "How does FinFloh handle disputes and deductions?",
    answer: [
      "Every short payment or deduction becomes a classified exception. FinFloh gathers the supporting invoice, contract, remittance and correspondence, routes it to an owner, and tracks the decision and recovery through to closure with a full audit trail.",
    ],
  },
];

// Main
export default function NetsuitePage() {
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
        title="AI Accounts Receivable Automation for Oracle NetSuite | FinFloh"
        description="FinFloh connects with Oracle NetSuite to automate customer-ledger reconciliation, invoice validation, collections, cash application & disputes with AI."
        canonicalUrl="https://finfloh.com/integrations/netsuite"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Automation for Oracle NetSuite",
          serviceType: "AI-Driven Accounts Receivable Automation for NetSuite",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Oracle NetSuite",
            item: "https://finfloh.com/integrations/netsuite",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            question: "Does FinFloh replace Oracle NetSuite?",
            answer:
              "No. NetSuite remains your financial system of record. FinFloh works alongside it as an AI-powered accounts receivable layer, reading NetSuite data, adding the context that sits outside the ERP, and automating the AR workflows around it.",
          },
          {
            question: "How does FinFloh connect to NetSuite?",
            answer:
              "FinFloh uses a native NetSuite connector that keeps customer, invoice, payment and receivables data dynamically in sync, so finance teams work from current NetSuite data rather than periodic exports.",
          },
          {
            question:
              "Can FinFloh update data in NetSuite, or only read from it?",
            answer:
              "Both. The connector is two-way: FinFloh retrieves data from NetSuite and writes approved outcomes back, such as payment applications, AR updates, dispute outcomes and workflow status. Supported write-back objects are confirmed per deployment and governed by your approval controls.",
          },
          {
            question: "What NetSuite data does FinFloh use?",
            answer:
              "FinFloh workflows are built around customer master data, invoices, credit memos, sales orders, payments, open receivables, customer transactions and AR balances. The exact scope for your instance is confirmed during integration design.",
          },
          {
            question: "How does FinFloh reconcile customer ledgers?",
            answer:
              "FinFloh reconciles NetSuite receivables against evidence outside the ERP, including remittances, emails, contracts, POs, credit notes and claims, and shows matched items, exceptions, root cause and recommended action for each customer.",
          },
          {
            question:
              "Can FinFloh validate invoices before they reach the customer?",
            answer:
              "Yes. FinFloh reads contracts, SOWs, POs and billing inputs, validates pricing, tax and commercial terms against the invoice, and flags discrepancies before the invoice is posted to NetSuite and delivered.",
          },
          {
            question: "How does FinFloh improve collections on NetSuite AR?",
            answer:
              "FinFloh layers payment behaviour, open disputes and prior commitments onto NetSuite ageing and open AR, then gives collectors a prioritized worklist with a recommended next action, automated reminders and promise-to-pay tracking.",
          },
          {
            question: "How does cash application work with NetSuite?",
            answer:
              "FinFloh reads remittance advice, identifies the customer, matches payments to open invoices and scores its confidence. High-confidence matches are applied to NetSuite, and genuine exceptions are routed to a person for review.",
          },
          {
            question: "What does the FlohSense AI agent do?",
            answer:
              "FlohSense AI reads customer emails and replies, understands intent such as a payment commitment, dispute, query or payment advice, links it to the right NetSuite customer and invoice, and triggers or routes the next workflow.",
          },
          {
            question: "How does FinFloh handle disputes and deductions?",
            answer:
              "Every short payment or deduction becomes a classified exception. FinFloh gathers the supporting invoice, contract, remittance and correspondence, routes it to an owner, and tracks the decision and recovery through to closure with a full audit trail.",
          },
        ]}
      />
      <WebsiteLayout>
        {/* Hero Section */}
        <section className="section">
          <div className={`container ${styles.HeroContainer}`}>
            <div className={styles.ContentWrapper}>
              <h2 className={styles.Kicker}>Finfloh for oracle netsuite</h2>
              <h1 className={styles.MainHeaderFont}>
                AI Implementation for A/R that natively connects with Oracle
                Netsuite for your Finance Team to be more efficient
              </h1>
              <ButtonCommon
                label="Talk to An Expert"
                href="/book-a-demo?utm_source=netsuite_main_cta&utm_medium=finfloh_website&utm_campaign=netsuite_page"
              />
              <p className={styles.ParaDef}>
                FinFloh connects Oracle NetSuite with CRM and other systems
                through a single warehouse and deploys AI automations and agents
                to automate invoicing, customer-ledger recon, collections and
                cash application.
              </p>
            </div>
            <div>
              <img src="/images/heroNetsuite.jpg" alt="Netsuite Integrations" />
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
                NetSuite stays your system of record.
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
                  NetSuite Has the Data.
                  <br />
                  Finance Teams Still Have the Work.
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
                  <br /> on Top of NetSuite
                </h2>
                <p>
                  Each one closes a gap above, reading NetSuite data, adding the
                  context the ERP never sees, and writing approved outcomes
                  back.
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
                  Quicken your audit process through clearly defined processes,
                  documents and outcomes. Track the process steps to completion.
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
                <h2>Connect to NetSuite Without Replacing Your ERP</h2>
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
                      Manage increase in size and complexity of business
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
                <h2>What Changes for a NetSuite Finance Team</h2>
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
              Turn Your NetSuite AR Into
              <br /> an Intelligent Finance Operation
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
