
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
    title: "Receipts Pile Up as Unapplied",
    content:
      "Lockbox and AutoMatch handle clean remittances. Anything with a missing reference, multiple invoices or a deduction falls into unapplied and on-account queues for someone to work by hand.",
  },
  {
    id: "1",
    icon: "/icons/integrations/matching.svg",
    title: "Remittance Detail Lives Outside Fusion",
    content:
      "Payment advices arrive as email bodies, PDFs and customer-portal downloads. Before Fusion can apply the cash, an analyst has to read them and key the detail in.",
  },
  {
    id: "2",
    icon: "/icons/integrations/email.svg",
    title: "Short Payments Become Aged Balances",
    content:
      "Customers deduct for pricing, freight, damages and promotions. Raising adjustments and chasing evidence across systems is slow, so deductions age into write-offs.",
  },
  {
    id: "3",
    icon: "/icons/integrations/disputes.svg",
    title: "Collectors Lack the Full Story",
    content:
      "Fusion knows what is overdue. It doesn't see the promise made on a call, the dispute raised by email, or how this customer has paid over the last year.",
  },
  {
    id: "4",
    icon: "/icons/integrations/invoice.svg",
    title: "Every Business Unit Works Differently",
    content:
      "Shared-service teams serving many business units, ledgers and currencies rebuild a single receivables view from exports and spreadsheets every month.",
  },
  {
    id: "5",
    icon: "/icons/integrations/graph.svg",
    title: "Customizations Fight Quarterly Updates",
    content:
      "Every extension built into Fusion has to survive Oracle's quarterly update cycle. Teams avoid building AR automation in the ERP and fall back to manual work.",
  },
];

const RECONCILIATION_ITEMS = [
  {
    id: "customer-ledger-reconciliation",
    number: "01",
    label: "Customer Reconciliation",
    title: "Go Beyond the Fusion Aging Report",
    description:
      "Aging tells you a balance exists. FinFloh reconciles each customer account in Fusion against bank receipts, remittances, emails, POs and the customer's own statement — into one explained position per customer, across every business unit.",
    subtask: [
      {
        feature:
          "Fusion customer account, transactions and receipts",
      },
      {
        feature:
          "Bank files, remittances, emails, customer statements",
      },
      { feature: "FinFloh AI reconciliation" },
      { feature: "Matched items confirmed" },
      { feature: "Differences with root cause" },
      {
        feature:
          "Statement or balance confirmation ready to send",
      },
    ],
    keyPointer: [
      { point: "What was billed?" },
      { point: "What was received?" },
      { point: "What was deducted?" },
      { point: "Who needs to act?" },
    ],
  },
  {
    id: "invoice-automation",
    number: "02",
    label: "Invoice Automation",
    title: "Validate Every Invoice Before It Leaves Fusion",
    description:
      "FinFloh reads the PO, contract or rate agreement and checks the AR transaction against it — pricing, tax, terms and billing references — so errors are caught before they turn into disputes and short payments.",
    subtask: [
      { feature: "PO / contract / rate agreement" },
      { feature: "DocSense extraction" },
      { feature: "Price, tax and term validation" },
      { feature: "Transaction validated" },
      {
        feature:
          "Invoice delivered or uploaded to customer portal",
      },
      { feature: "Delivery and acceptance tracked" },
    ],
    keyPointer: [
      { point: "Pricing validation" },
      { point: "Tax validation" },
      { point: "Portal submission" },
      { point: "Discrepancy alerts" },
    ],
  },
  {
    id: "collections",
    number: "03",
    label: "Collections",
    title: "Turn Fusion Aging Into a Collector Worklist",
    description:
      "An overdue transaction doesn't explain why a customer hasn't paid. FinFloh adds payment behaviour, open disputes and past promises to your Fusion receivables, then tells each collector exactly who to contact and what to say.",
    subtask: [
      {
        feature:
          "Fusion open transactions + customer context",
      },
      { feature: "FinFloh AI prioritization" },
      { feature: "Collector worklist with next action" },
      { feature: "Personalized email reminders" },
      { feature: "Promise-to-Pay tracked" },
      { feature: "Receipt applied in Fusion" },
    ],
    keyPointer: [
      { point: "Risk-based priority" },
      { point: "Automated dunning" },
      { point: "Promise-to-Pay" },
      { point: "Escalations" },
    ],
  },
  {
    id: "cash-application",
    number: "04",
    label: "Cash Application",
    title: "Apply What Lockbox and AutoMatch Leave Behind",
    description:
      "FinFloh reads bank files and remittance advice in any format, identifies the customer, matches the receipt to the right transactions — accounting for deductions and charges — and routes only genuine exceptions to an analyst.",
    subtask: [
      {
        feature:
          "Receipt lands in Fusion, unapplied or on account",
      },
      {
        feature:
          "Remittance read from email, PDF or portal",
      },
      { feature: "FinFloh AI matching" },
      { feature: "Customer + transactions identified" },
      { feature: "Deductions and charges split out" },
      { feature: "Exceptions routed to an analyst" },
      {
        feature:
          "Receipt application posted to Fusion",
      },
    ],
    keyPointer: [
      { point: "Partial payments" },
      { point: "Multi-invoice receipts" },
      { point: "Cross-currency" },
      { point: "Unapplied clean-up" },
    ],
  },
  {
    id: "flohsense-ai",
    number: "05",
    label: "FlohSense AI Agent",
    title: "Bring Customer Conversations Into the Receivable",
    description:
      "Payment commitments, disputes and remittance advices arrive by email, not in Fusion. FlohSense reads that correspondence, understands what the customer actually said, and attaches it to the customer account and transaction it belongs to.",
    subtask: [
      { feature: "Customer email or reply received" },
      { feature: "FlohSense reads and interprets intent" },
      {
        feature:
          "Linked to the Fusion customer and transaction",
      },
      {
        feature:
          "Promise-to-Pay, dispute or query captured",
      },
      {
        feature:
          "Workflow triggered or routed to an owner",
      },
      { feature: "Reply drafted for routine queries" },
    ],
    keyPointer: [
      { point: "Promise-to-Pay capture" },
      { point: "Dispute detection" },
      { point: "Remittance extraction" },
      { point: "Auto-routing" },
      { point: "Drafted replies" },
    ],
  },
  {
    id: "disputes-deductions",
    number: "06",
    label: "Disputes & Deductions",
    title: "Turn Every Short Payment Into an Actionable Exception",
    description:
      "A short payment against a Fusion transaction becomes a classified exception — pricing, freight, damage, promotion, tax — with the evidence attached, a named owner and a tracked path to adjustment, credit memo or recovery.",
    subtask: [
      {
        feature:
          "Short payment detected against a Fusion transaction",
      },
      { feature: "AI classification and confidence score" },
      {
        feature:
          "Investigation across invoice, PO, remittance, email",
      },
      {
        feature:
          "Decision: accept, reject or partially accept",
      },
      { feature: "Owner accountable, recovery tracked" },
      {
        feature:
          "Adjustment or credit memo posted to Fusion, where supported",
      },
    ],
    keyPointer: [
      { point: "Pricing deductions" },
      { point: "Freight claims" },
      { point: "Promotions" },
      { point: "Quantity disputes" },
      { point: "Tax differences" },
    ],
  },
];

const CONTROL_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Approval workflows before posting to Fusion",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Role-based access by business unit",
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
    title: "Segregation-of-duties support",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Transaction-level traceability",
  },
  {
    id: "7",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Sync status visibility",
  },
];

const IMPLEMENTATION_CONTENT = [
  {
    id: "1",
    number: "01",
    title: "Connect",
    description: [
      "Secure connection to Fusion via standard APIs, business unit, ledger and customer mapping",
    ],
  },
  {
    id: "2",
    number: "02",
    title: "Configure",
    description: [
      "Workflow and matching rules, user and role setup",
    ],
  },
  {
    id: "3",
    number: "03",
    title: "Validate",
    description: [
      "Data validation and parallel run on live receivables",
    ],
  },
  {
    id: "4",
    number: "04",
    title: "Go Live",
    description: [
      "Controlled rollout and team onboarding",
    ],
  },
];

const BUSINESS_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Lower DSO",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Higher Auto-Application Rates",
  },
  {
    id: "2",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Fewer Unapplied Receipts",
  },
  {
    id: "3",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Deduction Resolution",
  },
  {
    id: "4",
    icon: "/icons/integrations/blueCheck.svg",
    title: "More Productive Collectors",
  },
  {
    id: "5",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Cleaner Customer Balances",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Shared-Service Scale Without Added Headcount",
  },
  {
    id: "7",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Faster Period Close",
  },
];

const FAQ_CONTENT = [
  {
    uuid: "a",
    question: "Does FinFloh replace Oracle Fusion Receivables?",
    answer: [
      "No. Oracle Fusion Cloud ERP remains your system of record and your team keeps working in it. FinFloh works alongside it as an AI-powered accounts receivable layer — reading Fusion data, adding the context that sits outside it, and automating the AR work around it.",
    ],
  },
  {
    uuid: "b",
    question: "How does FinFloh connect to Oracle Fusion?",
    answer: [
      "FinFloh connects through Oracle's standard interfaces — such as the Fusion REST APIs and scheduled report extracts — and can work through Oracle Integration Cloud where you already use it. The exact approach for your environment is confirmed during integration design.",
    ],
  },
  {
    uuid: "c",
    question: "Does FinFloh require customizations inside Fusion?",
    answer: [
      "No core customizations are needed. Because FinFloh uses standard interfaces rather than changes inside Fusion, the integration is designed to carry through Oracle's quarterly updates without rework.",
    ],
  },
  {
    uuid: "d",
    question: "Can FinFloh post back into Fusion, or only read from it?",
    answer: [
      "Both. FinFloh reads from Fusion and can post approved actions back — such as receipt applications, adjustments and credit memos. What is posted is confirmed per deployment and governed by your approval workflows.",
    ],
  },
  {
    uuid: "e",
    question: "How does FinFloh work with Lockbox and AutoMatch?",
    answer: [
      "It complements them. Lockbox and AutoMatch keep handling the clean, well-referenced receipts. FinFloh picks up what they leave unapplied or on account — reading remittances from email, PDFs and portals and matching them with AI.",
    ],
  },
  {
    uuid: "f",
    question: "Can FinFloh handle multiple business units, ledgers and currencies?",
    answer: [
      "Yes. Shared-service teams can see receivables, collections, cash application and deductions across business units, ledgers and currencies in one place, while each entity's accounting stays as configured in Fusion.",
    ],
  },
  {
    uuid: "g",
    question:
      "We already use Oracle Advanced Collections. Does FinFloh still help?",
    answer: [
      "Yes. FinFloh adds what collectors usually work around: customer emails, promises-to-pay, disputes and payment-behaviour signals, combined into one prioritized worklist with suggested next actions. How the two work together is agreed during design.",
    ],
  },
  {
    uuid: "h",
    question: "How are deductions handled?",
    answer: [
      "When a customer short-pays, FinFloh classifies the deduction, gathers the evidence from invoices, POs, remittances and email, assigns an owner and tracks it to resolution — with the resulting adjustment or credit memo posted to Fusion where supported.",
    ],
  },
  {
    uuid: "i",
    question: "How long does implementation take?",
    answer: [
      "Most teams go live in weeks. A typical rollout connects to Fusion, maps business units and customers, configures workflows, runs in parallel on live receivables and then expands to further business units.",
    ],
  },
  {
    uuid: "j",
    question: "Is our Oracle Fusion data secure?",
    answer: [
      "FinFloh syncs only the data needed for AR workflows, over encrypted connections, with role-based access and a full audit trail of every action and every entry posted back to Fusion.",
    ],
  },
];

// Main
export default function OracleFusionPage() {
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
        title="AI Accounts Receivable Automation for Oracle Fusion Cloud ERP | FinFloh"
        description="FinFloh connects with Oracle Fusion Cloud ERP to automate invoice validation, customer reconciliation, collections, cash application and deductions across business units, ledgers and currencies with AI-powered AR automation."
        canonicalUrl="https://finfloh.com/erp/oracle-fusion"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI Accounts Receivable Automation for Oracle Fusion Cloud ERP",
          serviceType:
            "AI-Powered Accounts Receivable Automation for Oracle Fusion Cloud ERP",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Oracle Fusion Cloud ERP",
            item: "https://finfloh.com/erp/oracle-fusion",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            question: "Does FinFloh replace Oracle Fusion Receivables?",
            answer:
              "No. Oracle Fusion Cloud ERP remains your system of record and your team keeps working in it. FinFloh works alongside it as an AI-powered accounts receivable layer — reading Fusion data, adding the context that sits outside it, and automating the AR work around it.",
          },
          {
            question: "How does FinFloh connect to Oracle Fusion?",
            answer:
              "FinFloh connects through Oracle's standard interfaces — such as the Fusion REST APIs and scheduled report extracts — and can work through Oracle Integration Cloud where you already use it. The exact approach for your environment is confirmed during integration design.",
          },
          {
            question: "Does FinFloh require customizations inside Fusion?",
            answer:
              "No core customizations are needed. Because FinFloh uses standard interfaces rather than changes inside Fusion, the integration is designed to carry through Oracle's quarterly updates without rework.",
          },
          {
            question: "Can FinFloh post back into Fusion, or only read from it?",
            answer:
              "Both. FinFloh reads from Fusion and can post approved actions back — such as receipt applications, adjustments and credit memos. What is posted is confirmed per deployment and governed by your approval workflows.",
          },
          {
            question: "How does FinFloh work with Lockbox and AutoMatch?",
            answer:
              "It complements them. Lockbox and AutoMatch keep handling the clean, well-referenced receipts. FinFloh picks up what they leave unapplied or on account — reading remittances from email, PDFs and portals and matching them with AI.",
          },
          {
            question:
              "Can FinFloh handle multiple business units, ledgers and currencies?",
            answer:
              "Yes. Shared-service teams can see receivables, collections, cash application and deductions across business units, ledgers and currencies in one place, while each entity's accounting stays as configured in Fusion.",
          },
          {
            question:
              "We already use Oracle Advanced Collections. Does FinFloh still help?",
            answer:
              "Yes. FinFloh adds what collectors usually work around: customer emails, promises-to-pay, disputes and payment-behaviour signals, combined into one prioritized worklist with suggested next actions. How the two work together is agreed during design.",
          },
          {
            question: "How are deductions handled?",
            answer:
              "When a customer short-pays, FinFloh classifies the deduction, gathers the evidence from invoices, POs, remittances and email, assigns an owner and tracks it to resolution — with the resulting adjustment or credit memo posted to Fusion where supported.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Most teams go live in weeks. A typical rollout connects to Fusion, maps business units and customers, configures workflows, runs in parallel on live receivables and then expands to further business units.",
          },
          {
            question: "Is our Oracle Fusion data secure?",
            answer:
              "FinFloh syncs only the data needed for AR workflows, over encrypted connections, with role-based access and a full audit trail of every action and every entry posted back to Fusion.",
          },
        ]}
      />

      <WebsiteLayout>
        {/* Hero Section */}
        <section className="section">
          <div className={`container ${styles.HeroContainer}`}>
            <div className={styles.ContentWrapper}>
              <h2 className={styles.Kicker}>
                FinFloh for Oracle Fusion Cloud ERP
              </h2>
              <h1 className={styles.MainHeaderFont}>
                AI-Powered Accounts Receivable Automation for Oracle Fusion
              </h1>
              <ButtonCommon
                label="Talk to An Expert"
                href="/book-a-demo?utm_source=oracle_fusion_main_cta&utm_medium=finfloh_website&utm_campaign=oracle_fusion_page"
              />
              <p className={styles.ParaDef}>
                Connect FinFloh with Oracle Fusion Cloud Receivables to automate
                invoice validation, customer reconciliation, collections, cash
                application and deductions across every business unit, ledger
                and currency — without customizing Fusion or changing how your
                shared-service team works.
              </p>
              <p className={styles.ParaDef}>
                Oracle Fusion stays your system of record. FinFloh becomes your
                AR execution layer.
              </p>
            </div>
            <div>
              {/* TODO: Replace with the Oracle Fusion hero architecture illustration */}
              <img
                src="/images/oracleFusionHeroIllustration.jpg"
                alt="Oracle Fusion Cloud ERP integrated with FinFloh AI"
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
                Oracle Fusion stays your system of record.
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
                  Fusion Runs the Ledger.
                  <br />
                  Your AR Team Still Works the Exceptions.
                </h2>
                <p>
                  Oracle Fusion records every transaction, receipt and
                  adjustment across your business units. But the remittances it
                  can't read, the short payments it can't explain and the
                  customer emails it never sees still get handled in
                  spreadsheets and shared inboxes.
                </p>
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

        {/* Section 5: THE SOLUTIONS */}
        <section className="section" id="how">
          <div className="gridLayout_2column container">
            {/* Left side */}
            <div className="leftWrapper leftWrapper--sticky">
              <div className="HeadingWrapper">
                <h3 className="kickerH3">THE SOLUTIONS</h3>
                <h2>
                  Connected Workflows
                  <br /> on Top of Oracle Fusion
                </h2>
                <p>
                  Each one closes a gap above — reading your Fusion Receivables
                  data, adding the context Fusion never sees, and posting
                  approved actions back through standard interfaces.
                </p>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>

              <div className="tab_nav">
                {RECONCILIATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`tab-btn ${
                      activeReconciliationId === item.id ? "active" : ""
                    }`}
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
                  <h4 className="heading_xs">{item.label}</h4>
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
                <h2>
                  Automation Your Controllers and Auditors Can Follow
                </h2>
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

        {/* Section 8: IMPLEMENTATION */}
        <section className="section">
          <div className="container stack stack--extra-loose">
            <div className={styles.HeadingWrapper}>
              <div className={styles.ContentContainer}>
                <h3 className="kickerH3">Implementation</h3>
                <h2>Live on Oracle Fusion in Weeks, Not Quarters</h2>
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
                      Additional business units, ledgers and geographies as the
                      business grows.
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
                <h2>
                  What Changes for an Oracle Fusion Finance Team
                </h2>
              </div>
              <div>
                <ButtonCommon label="Talk to an Expert" href="/book-a-demo" />
              </div>
            </div>
            <div className={styles.CardWrapper_4cards}>
              {BUSINESS_CONTENT.map((key, i) => (
                <div className={styles.Card_4Column} key={i}>
                  <img
                    src={key.icon}
                    className="icon--lg"
                  />
                  <h4 className="heading_md">{key.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqContent_new
          bgColor="#ffffff"
          title="Oracle Fusion Integration FAQ"
          subTitle="Frequently Asked Questions"
          questions={FAQ_CONTENT}
        />

        {/* Contact Us */}
        <div
          className="container whyfinfloh-newsletter"
          style={{ padding: "48px" }}
        >
          <div className="whyfinfloh-newsletter-cnt">
            <h2 className="h3 text-inverse">
              Turn Your Oracle Fusion Receivables Into an
              <br /> Intelligent Finance Operation
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
