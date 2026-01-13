import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import CommonButton from "../components/Common/CommonButton";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust";
import LinkButton from "../components/Common/LinkButton";

// Website Content
const featureData = [
  {
    category:
      "Better Integrations for Easier Data Access & Flow across the Systems",
    image: "/images/competitors-page/integrations-systems.svg",
    features: [
      { Feature: "Sync With ERP", Finfloh: true, Upflow: true },
      { Feature: "Sync With CRM", Finfloh: true, Upflow: true },
      { Feature: "Unified Data Warehouse", Finfloh: true, Upflow: false },
      {
        Feature: "Sync With Credit Data Agencies",
        Finfloh: true,
        Upflow: false,
      },
    ],
    flohsenseAI: {
      description: "Real-time, multi-source financial data orchestration",
    },
  },

  {
    category: "AI Agents that Think & Act like your Finance Team",
    image: "/images/competitors-page/dispute-loop-workflow.svg",
    features: [
      {
        Feature: "Understand & reply to customer emails & chats",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Trigger & track dispute resolution workflows",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Fetch payment proofs from emails & attachments",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Auto send invoices & ledger statements on request",
        Finfloh: true,
        Upflow: false,
      },
    ],
    flohsenseAI: { description: "Autonomous finance agents working 24x7" },
  },

  {
    category: "Faster and more Accurate Credit Decision Making with AI & ML",
    image: "/images/competitors-page/credit-decision-ai.svg",
    features: [
      { Feature: "ML-based Credit Scoring", Finfloh: true, Upflow: false },
      {
        Feature: "AI-based Credit Decisions in CRMs",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Automated Credit Onboarding for new deals & renewals",
        Finfloh: true,
        Upflow: false,
      },
      { Feature: "Real-time Risk Alerts", Finfloh: true, Upflow: false },
    ],
    flohsenseAI: { description: "AI-driven buyer risk & revenue intelligence" },
  },

  {
    category:
      "Take Full Control of your Invoices with Automation & Seamless Management",
    image: "/images/competitors-page/invoice-automation.svg",
    features: [
      {
        Feature: "Automated Invoice Creation from CRM / Contracts / Billing",
        Finfloh: true,
        Upflow: false,
      },
      { Feature: "Automated Invoice Sending", Finfloh: true, Upflow: false },
      { Feature: "Manual Invoice Sending", Finfloh: true, Upflow: false },
      {
        Feature: "Invoice Verification against Orders & Contracts",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Invoice Audit Trails & Timelines",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Invoice Upload into Buyer Portals",
        Finfloh: true,
        Upflow: false,
      },
    ],
    flohsenseAI: { description: "Zero-touch invoice-to-customer delivery" },
  },

  {
    category: "Collect your Receivables Faster & Reduce DSO by up to 50%",
    image: "/images/competitors-page/collection-workflow.svg",
    features: [
      { Feature: "Collection Workflows", Finfloh: true, Upflow: true },
      {
        Feature: "Automated Collection Follow-Ups & Reminders",
        Finfloh: true,
        Upflow: true,
      },
      { Feature: "Pre-built Dunning Templates", Finfloh: true, Upflow: true },
      {
        Feature: "AI-based Collector’s Worklist",
        Finfloh: true,
        Upflow: false,
      },
      { Feature: "Promise-to-Pay Capture", Finfloh: true, Upflow: true },
    ],
    flohsenseAI: { description: "AI-optimized collection prioritization" },
  },

  {
    category: "Dispute Management & Resolution",
    image: "/images/competitors-page/dispute-loop-workflow.svg",
    features: [
      { Feature: "Dispute Resolution Workflows", Finfloh: true, Upflow: false },
      {
        Feature: "Dedicated Owner Assignment & TATs",
        Finfloh: true,
        Upflow: false,
      },
      {
        Feature: "Predictive Intelligence to detect disputes early",
        Finfloh: true,
        Upflow: false,
      },
    ],
    flohsenseAI: { description: "Predict disputes before they delay cash" },
  },
];

const upflowAlternative = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh vs Upflow: AI-Powered AR & Credit-to-Cash Platform"
        description="FinFloh vs Upflow — Compare AI-powered Credit-to-Cash automation. FinFloh delivers end-to-end AR, credit risk, invoicing, collections & cash application while Upflow focuses on collections."
        canonicalUrl="https://finfloh.com/finfloh-vs-upflow"
        mainEntityOfPage="https://finfloh.com/finfloh-vs-upflow"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Automation Platform",
          serviceType: "Invoice-to-Cash Platform and AR Automation",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "FinFloh vs Upflow",
            item: "https://finfloh.com/finfloh-vs-upflow",
          },
        ]}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Why FinFloh Stands Out",
          },
          {
            "@type": "WebPageElement",
            name: "Why choose FinFloh over Upflow?",
          },
          {
            "@type": "WebPageElement",
            name: "Better Integrations for Easier Data Access & Flow across the Systems",
          },
          {
            "@type": "WebPageElement",
            name: "Flohsense AI Agent that think & act like your Finance Team",
          },
        ]}
      />

      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main">
            {/* Hero Section */}
            <section className="hero-comparison-section">
              <div className="comparison-section-content-wrapper">
                <div className="comparison-section-content">
                  <h1>FinFloh vs. Upflow</h1>
                  <p>
                    FinFloh delivers full AR-to-Treasury lifecycle automation —
                    from invoice validation & generation to credit risk scoring,
                    collections, cash application. Upflow focuses on collections
                    automation, personalized reminders, and real-time AR
                    visibility.
                  </p>
                </div>
                <CommonButton
                  text={"Book a Free Demo"}
                  type={"primary"}
                  href={
                    "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-upflow&utm_medium=finfloh_website"
                  }
                  openInNewTab={true}
                  iconSrc="images/ArrowRight.svg"
                  iconPosition="right"
                />
                {/* Ratings Card */}
                <section className="g2-rating-section">
                  <div className="g2-logo-wrapper">
                    <img
                      src="/images/competitors-page/g2-logo.svg"
                      alt="G2 Brand logomark"
                    />
                    <p>
                      User
                      <br />
                      Ratings
                    </p>
                  </div>
                  <div className="g2-rating-wrapper">
                    <div className="g2-rating-card">
                      <div className="res-img-ign">
                        <img
                          src="/images/competitors-page/finfloh-logo.svg"
                          alt="FinFloh"
                        />
                      </div>
                      <span>
                        <img
                          src="/images/competitors-page/star_half.svg"
                          alt="star"
                        />
                        <p>4.95</p>
                      </span>
                    </div>
                    <div className="g2-rating-card">
                      <div className="res-img-ign">
                        <img
                          src="/images/competitors-page/vs-upflow/upflow.svg"
                          alt="Upflow"
                        />
                      </div>
                      <span>
                        <img
                          src="/images/competitors-page/star_half.svg"
                          alt="star"
                        />
                        <p>4.8</p>
                      </span>
                    </div>
                  </div>
                </section>
                {/* Illustration hero section */}
              </div>
              <img
                className="hero-illustration"
                src="/images/competitors-page/vs-upflow/comparison-chart-upflow.svg"
                alt="G2 Graph"
              />
            </section>

            {/* company logo */}
            <div className="book-a-demo-container bg-container">
              <div className="container-main EnterpriseIcons">
                <CompaniesLogo />
              </div>
            </div>
            {/* fold 2 */}
            <div className="comparison-usp-wrapper">
              <div className="comparison-usp-header">
                <h2 className="comparison-h2">
                  Why <span className="green-text-highlight">FinFloh </span>
                  Stands Out
                </h2>
                <div className="lineHeader"></div>
              </div>
              <div className="usp-card-wrapper">
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/autonomous-agent.svg"
                    alt="Autonomous AI Agents"
                  />
                  <h3>
                    Autonomous AI Agents for End-to-End Invoice-to-Cash
                    Automation
                  </h3>
                </div>
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/real-time.svg"
                    alt="Data Orchestration"
                  />
                  <h3>
                    Real-Time, Multi-Source Data Orchestration for Single Source
                    of Truth
                  </h3>
                </div>
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/workflow-automation.svg"
                    alt="Workflow Automation"
                  />
                  <h3>AI-Driven, Customizable Workflow Automation</h3>
                </div>
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/credit-intelligence.svg"
                    alt="Credit Intelligence"
                  />
                  <h3>
                    Credit Intelligence That Connects to Revenue Optimization
                  </h3>
                </div>
              </div>
            </div>

            {/* Comparison chart for different parts */}
            <section className="comparison-table">
              <div className="sectionHeaders">
                <h2 className="comparison-h2">
                  Why choose FinFloh over Upflow?
                </h2>
                <div className="lineHeader"></div>
              </div>
              {/* table data entry */}
              <div className="features-comparison-chart">
                {featureData.map((set, index) => (
                  <div key={index} className="feature-table-wrapper">
                    <div className="feature-header">
                      <h3>{set.category}</h3>
                      <CommonButton
                        text={"Book a Free Demo"}
                        type={"primary"}
                        href={
                          "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-upflow&utm_medium=finfloh_website"
                        }
                        openInNewTab={true}
                        iconSrc="images/ArrowRight.svg"
                        iconPosition="right"
                      />
                    </div>

                    <div className="feature-wrapper">
                      <div className="feature-container-left">
                        <div className="table-wrapper">
                          <table className="featureTable">
                            <thead>
                              <tr>FEATURES</tr>
                              <tr className="green-highlight">
                                <img
                                  src="/images/competitors-page/finfloh-logo.svg"
                                  alt="FinFloh"
                                />
                              </tr>
                              <tr>
                                <img
                                  src="/images/competitors-page/vs-upflow/upflow.svg"
                                  alt="Upflow"
                                />
                              </tr>
                            </thead>
                            <tbody>
                              {set.features.map((feature, i) => (
                                <tr key={i}>
                                  <td>{feature.Feature}</td>
                                  <td className="green-highlight">
                                    {feature.Finfloh ? (
                                      <img
                                        src="images/competitors-page/check.svg"
                                        alt="check icon"
                                      />
                                    ) : (
                                      <img
                                        src="/images/competitors-page/cross.svg"
                                        alt="cross icon"
                                      />
                                    )}
                                  </td>
                                  <td>
                                    {feature.upflow ? (
                                      <img
                                        src="images/competitors-page/check.svg"
                                        alt="check icon"
                                      />
                                    ) : (
                                      <img
                                        src="/images/competitors-page/cross.svg"
                                        alt="cross icon"
                                      />
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {set.flohsenseAI?.description && (
                          <div className="flohsenseAI-container">
                            <img
                              src="/images/fAI.svg"
                              alt="FlohSense AI Logo"
                            />
                            <div className="flohsenseAI-content">
                              <h4>FLOHSENSE AI AGENT</h4>
                              <p>{set.flohsenseAI.description}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="TestingImage">
                        <img src={set.image} alt={set.category} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* whytrustfinfloh and testimonials section */}
            <TestimonialsWhyTrust />

            {/* newsletters section */}
            <div
              className="whyfinfloh-newsletter"
              style={{ marginTop: "86px" }}
            >
              <div className="whyfinfloh-newsletter-cnt">
                <p>
                  Book a 30-minute demo and experience firsthand how FinFloh
                  outperforms Upflow.
                </p>
              </div>
              <div className="whyfinfloh-newsletter-btn">
                <LinkButton
                  openInNewTab={true}
                  href="https://finfloh.com/book-a-demo?utm_source=why_finfloh&utm_medium=finfloh_website"
                >
                  Talk To Us
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default upflowAlternative;
