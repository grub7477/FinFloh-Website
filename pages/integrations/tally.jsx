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
    title: "Party Ledgers Don't Reconcile Themselves",
    content:
      "Balance confirmations go back and forth over email and Excel because the customer’s books, bank credits and your Tally ledger never quite agree.",
  },
  {
    id: "1",
    icon: "/icons/integrations/matching.svg",
    title: 'Receipts Land "On Account"',
    content:
      "Bank credits get booked against the party, but without bill-wise allocation — so the outstanding report shows bills as unpaid that were actually settled.",
  },
  {
    id: "2",
    icon: "/icons/integrations/email.svg",
    title: "TDS Turns Every Payment Into a Puzzle",
    content:
      "Customers pay net of TDS, bank charges or deductions, and someone has to work out what the short amount is before the receipt can be posted.",
  },
  {
    id: "3",
    icon: "/icons/integrations/disputes.svg",
    title: "Ageing Alone Doesn’t Collect Cash",
    content:
      "Tally shows which bills are overdue, not why. Collectors don’t see promises, disputes or payment behaviour next to the outstanding.",
  },
  {
    id: "4",
    icon: "/icons/integrations/invoice.svg",
    title: "Follow-ups Live in WhatsApp and Inboxes",
    content:
      "Reminders, customer replies and payment advices sit across personal email and chat — never alongside the bill they relate to.",
  },
  {
    id: "5",
    icon: "/icons/integrations/graph.svg",
    title: "Multiple Companies, One Tired Team",
    content:
      "Groups running several Tally companies or GSTINs rebuild consolidated receivables by exporting and stitching reports every month.",
  },
];

const RECONCILIATION_ITEMS = [
  {
    id: "customer-ledger-reconciliation",
    number: "01",
    label: "Customer Ledger Reconciliation",
    title: "Go Beyond the Tally Outstanding Report",
    description:
      "Outstanding tells you a balance exists. FinFloh reconciles each party ledger in Tally against bank credits, remittances, emails, POs and the customer’s own statement — into one explained position per customer, ready for balance confirmation.",
    subtask: [
      { feature: "Tally party ledger, sales & receipt vouchers" },
      { feature: "Bank statements, remittances, emails, customer statements" },
      { feature: "FinFloh AI reconciliation" },
      { feature: "Matched entries confirmed" },
      { feature: "Differences with root cause" },
      { feature: "Balance confirmation ready to send" },
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
    title: "Validate Every Invoice Before It Hits Tally",
    description:
      "FinFloh reads the PO, rate contract or work order and checks the invoice against it — pricing, GST and terms — so billing errors are caught before they turn into short payments.",
    subtask: [
      { feature: "PO / contract / work order" },
      { feature: "DocSense extraction" },
      { feature: "Rate, GST and term validation" },
      { feature: "Invoice validated" },
      { feature: "Sales voucher posted to Tally" },
      { feature: "Delivered to customer with e-invoice details" },
    ],
    keyPointer: [
      { point: "Pricing validation" },
      { point: "GST validation" },
      { point: "Delivery tracking" },
      { point: "Discrepancy alerts" },
    ],
  },
  {
    id: "collections",
    number: "03",
    label: "Collections",
    title: "Turn Tally Ageing Into a Collector Worklist",
    description:
      "An overdue bill doesn't explain why a customer hasn't paid. FinFloh adds payment behaviour, open disputes and past promises to your Tally outstandings, then tells collectors exactly who to call and what to say.",
    subtask: [
      { feature: "Tally bill-wise outstandings + party context" },
      { feature: "FinFloh AI prioritization" },
      { feature: "Collector worklist with next action" },
      { feature: "Email / WhatsApp reminders" },
      { feature: "Promise-to-pay tracked" },
      { feature: "Receipt recorded in Tally" },
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
    title: "From Bank Credit to Bill-wise Receipt",
    description:
      "FinFloh reads the bank statement and remittance advice, identifies the party, allocates the amount against the right bills — accounting for TDS and bank charges — and routes only genuine exceptions to a person.",
    subtask: [
      { feature: "Bank credit received" },
      { feature: "Remittance / UTR read" },
      { feature: "FinFloh AI matching" },
      { feature: "Party + bills identified" },
      { feature: "TDS and charges split out" },
      { feature: "Exceptions routed to a person" },
      { feature: "Receipt voucher posted to Tally, bill-wise" },
    ],
    keyPointer: [
      { point: "Partial payments" },
      { point: "TDS deductions" },
      { point: "Bank charges" },
      { point: "On-account clean-up" },
    ],
  },
  {
    id: "flohsense-ai",
    number: "05",
    label: "FlohSense AI Agent",
    title: "Bring Customer Conversations Into the Receivable",
    description:
      "Payment commitments, disputes and remittance advices arrive by email, not in Tally. FlohSense reads that correspondence, understands what the customer actually said, and attaches it to the party and bill it belongs to.",
    subtask: [
      { feature: "Customer email or reply received" },
      { feature: "FlohSense reads and interprets intent" },
      { feature: "Linked to the Tally party and bill reference" },
      { feature: "Promise-to-pay, dispute or query captured" },
      { feature: "Workflow triggered or routed to an owner" },
      { feature: "Reply drafted for routine queries" },
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
    id: "disputes-deductions",
    number: "06",
    label: "Disputes & Deductions",
    title: "Turn Every Short Payment Into an Actionable Exception",
    description:
      "A short receipt against a Tally bill becomes a classified exception — TDS, rate difference, damage, scheme claim — with the evidence attached, a named owner and a tracked path to credit note or recovery.",
    subtask: [
      { feature: "Short payment detected against a Tally bill" },
      { feature: "AI classification and confidence score" },
      { feature: "Investigation across invoice, PO, remittance, email" },
      { feature: "Decision: accept, reject or partially accept" },
      { feature: "Owner accountable, recovery tracked" },
      { feature: "Credit note or journal posted to Tally, where supported" },
    ],
    keyPointer: [
      { point: "TDS mismatches" },
      { point: "Rate differences" },
      { point: "Scheme claims" },
      { point: "Quantity disputes" },
      { point: "GST differences" },
    ],
  },
];

const CONTROL_CONTENT = [
  {
    id: "0",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Maker-checker approvals before posting to Tally",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Role-based workflows",
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
    title: "Action history per bill",
  },
  {
    id: "5",
    icon: "/icons/integrations/blueCheck.svg",
    title: "User accountability",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Voucher-level traceability",
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
      "Secure Tally connector setup, company and ledger mapping",
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
    description: ["Data validation and testing with live outstandings"],
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
    title: "Faster Invoice-to-Cash",
  },
  {
    id: "1",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Fewer On-Account Receipts",
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
    title: "Faster TDS & Deduction Resolution",
  },
  {
    id: "6",
    icon: "/icons/integrations/blueCheck.svg",
    title: "Cleaner Bill-wise Outstandings",
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
    question: "Does FinFloh replace Tally?",
    answer: [
      "No. Tally remains your books of account and your accountants keep working in it. FinFloh works alongside it as an AI-powered accounts receivable layer — reading Tally data, adding the context that sits outside it, and automating the AR work around it.",
    ],
  },
  {
    uuid: "b",
    question: "Which versions of Tally does FinFloh support?",
    answer: [
      "FinFloh is built for TallyPrime and Tally.ERP 9. The exact release and setup for your company — single-user, multi-user or Tally on a server or cloud host — is confirmed during integration design.",
    ],
  },
  {
    uuid: "c",
    question: "How does FinFloh connect to Tally?",
    answer: [
      "FinFloh uses a secure connector that syncs party ledgers, vouchers and bill-wise outstandings from your Tally companies, so your team works from current data rather than exported Excel reports.",
    ],
  },
  {
    uuid: "d",
    question: "Can FinFloh post entries into Tally, or only read from it?",
    answer: [
      "Both. FinFloh reads from Tally and can post approved entries back — such as receipt vouchers with bill-wise allocation, credit notes and journal entries for deductions. What is posted is confirmed per deployment and governed by your maker-checker approvals.",
    ],
  },
  {
    uuid: "e",
    question: "Can FinFloh work across multiple Tally companies?",
    answer: [
      "Yes. Groups with several Tally companies, branches or GSTINs can see receivables, collections and reconciliation in one place, while each company’s books stay separate in Tally.",
    ],
  },
  {
    uuid: "f",
    question: "How does FinFloh handle TDS deducted by customers?",
    answer: [
      "When a customer pays net of TDS, FinFloh identifies the deduction, separates it from genuine short payments, and allocates the receipt against the right bills. TDS amounts can be checked against Form 26AS data where it is provided.",
    ],
  },
  {
    uuid: "g",
    question: "How does FinFloh help with ledger reconciliation and balance confirmations?",
    answer: [
      "FinFloh reconciles each Tally party ledger against bank credits, remittances, emails and the customer’s statement, shows matched entries and differences with root cause, and prepares the position for balance confirmation.",
    ],
  },
  {
    uuid: "h",
    question: "How does cash application work with Tally?",
    answer: [
      "FinFloh reads bank statements and remittance advice, identifies the party, matches against open bills and scores its confidence. High-confidence matches are posted as bill-wise receipts in Tally; genuine exceptions go to a person for review.",
    ],
  },
  {
    uuid: "i",
    question: "Can collection reminders go out on WhatsApp?",
    answer: [
      "FinFloh supports automated email reminders and can include WhatsApp in the follow-up flow where configured, with every reminder and customer reply tracked against the bill.",
    ],
  },
  {
    uuid: "j",
    question: "Is our Tally data secure?",
    answer: [
      "FinFloh syncs only the data needed for AR workflows, over an encrypted connection, with role-based access and a full audit trail of every action and every entry posted back to Tally.",
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
        title="AI Accounts Receivable Automation for TallyPrime | FinFloh"
        description="FinFloh connects with TallyPrime and Tally.ERP 9 to automate invoice validation, customer-ledger reconciliation, collections, cash application, TDS and deductions with AI-powered AR automation."
        canonicalUrl="https://finfloh.com/integrations/tally"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI Accounts Receivable Automation for TallyPrime",
          serviceType:
            "AI-Powered Accounts Receivable Automation for TallyPrime and Tally.ERP 9",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "TallyPrime",
            item: "https://finfloh.com/integrations/tally",
          },
        ]}
        includeFAQ
        FAQProps={[
          {
            question: "Does FinFloh replace Tally?",
            answer:
              "No. Tally remains your books of account and your accountants keep working in it. FinFloh works alongside it as an AI-powered accounts receivable layer — reading Tally data, adding the context that sits outside it, and automating the AR work around it.",
          },
          {
            question: "Which versions of Tally does FinFloh support?",
            answer:
              "FinFloh is built for TallyPrime and Tally.ERP 9. The exact release and setup for your company — single-user, multi-user or Tally on a server or cloud host — is confirmed during integration design.",
          },
          {
            question: "How does FinFloh connect to Tally?",
            answer:
              "FinFloh uses a secure connector that syncs party ledgers, vouchers and bill-wise outstandings from your Tally companies, so your team works from current data rather than exported Excel reports.",
          },
          {
            question: "Can FinFloh post entries into Tally, or only read from it?",
            answer:
              "Both. FinFloh reads from Tally and can post approved entries back — such as receipt vouchers with bill-wise allocation, credit notes and journal entries for deductions. What is posted is confirmed per deployment and governed by your maker-checker approvals.",
          },
          {
            question: "Can FinFloh work across multiple Tally companies?",
            answer:
              "Yes. Groups with several Tally companies, branches or GSTINs can see receivables, collections and reconciliation in one place, while each company’s books stay separate in Tally.",
          },
          {
            question: "How does FinFloh handle TDS deducted by customers?",
            answer:
              "When a customer pays net of TDS, FinFloh identifies the deduction, separates it from genuine short payments, and allocates the receipt against the right bills. TDS amounts can be checked against Form 26AS data where it is provided.",
          },
          {
            question: "How does FinFloh help with ledger reconciliation and balance confirmations?",
            answer:
              "FinFloh reconciles each Tally party ledger against bank credits, remittances, emails and the customer’s statement, shows matched entries and differences with root cause, and prepares the position for balance confirmation.",
          },
          {
            question: "How does cash application work with Tally?",
            answer:
              "FinFloh reads bank statements and remittance advice, identifies the party, matches against open bills and scores its confidence. High-confidence matches are posted as bill-wise receipts in Tally; genuine exceptions go to a person for review.",
          },
          {
            question: "Can collection reminders go out on WhatsApp?",
            answer:
              "FinFloh supports automated email reminders and can include WhatsApp in the follow-up flow where configured, with every reminder and customer reply tracked against the bill.",
          },
          {
            question: "Is our Tally data secure?",
            answer:
              "FinFloh syncs only the data needed for AR workflows, over an encrypted connection, with role-based access and a full audit trail of every action and every entry posted back to Tally.",
          },
        ]}
      />
      <WebsiteLayout>
        {/* Hero Section */}
        <section className="section">
          <div className={`container ${styles.HeroContainer}`}>
            <div className={styles.ContentWrapper}>
              <h2 className={styles.Kicker}>
                FinFloh for TallyPrime
              </h2>
              <h1 className={styles.MainHeaderFont}>
                AI-Powered Accounts Receivable Automation for Tally
              </h1>
              <ButtonCommon
                label="Talk to An Expert"
                href="/book-a-demo?utm_source=tally_main_cta&utm_medium=finfloh_website&utm_campaign=tally_page"
              />
              <p className={styles.ParaDef}>
                Connect FinFloh with TallyPrime or Tally.ERP 9 to automate invoice validation,
                customer-ledger reconciliation, collections, cash application and
                TDS-aware deductions — without changing how your accountants work
                in Tally.
              </p>
            </div>
            <div>
              {/* TODO: Replace this hero image with the Business Central hero image (current path is a placeholder) */}
              <img
                src="/images/tallyHeroIllustration.jpg"
                alt="TallyPrime integration with FinFloh"
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
                Tally stays your books of account.
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
                  Tally Keeps the Books.
                  <br />
                  Your AR Team Still Does the Chasing.
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
                  <br /> on Top of Tally
                </h2>
                <p>
                  Each one closes a gap above — reading your Tally ledgers and vouchers, adding
                  the context Tally never sees, and posting approved entries back.
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
                <h2>Automation Your CA and Auditors Can Follow</h2>
                <p>
                  Tally remains your books of account. Every FinFloh action is traceable to the
                  bill, voucher, evidence behind it and the person who approved it.
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
                <h2>Live on Tally in Weeks, Not Quarters</h2>
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
                      Additional Tally companies, branches and GSTINs as the business grows
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
                <h2>What Changes for a Tally Finance Team</h2>
                <p>
                  Connect Tally with FinFloh and automate the work between sales voucher, bank
                  credit and closed bill.
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
          title="Tally Integration FAQ"
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
              Turn Your Tally Receivables Into an
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