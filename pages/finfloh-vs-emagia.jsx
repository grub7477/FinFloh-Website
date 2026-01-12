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
      { Feature: "Sync With ERP", Finfloh: true, Emagia: true },
      { Feature: "Sync With CRM", Finfloh: true, Emagia: true },
      { Feature: "Unified Data Warehouse", Finfloh: true, Emagia: false },
      {
        Feature: "Sync With Credit Data Agencies",
        Finfloh: true,
        Emagia: false,
      },
    ],
    flohsenseAI: {
      description: "Single source of truth across credit, AR & payments",
    },
  },

  {
    category: "AI Agents that Think & Act like your Finance Team",
    image: "/images/competitors-page/ai-agent.svg",
    features: [
      {
        Feature: "Understand & reply to customer emails & chats",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "Trigger & track dispute resolution workflows",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "Fetch payment proofs from emails & attachments",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "Auto send invoices & ledger statements on request",
        Finfloh: true,
        Emagia: false,
      },
    ],
    flohsenseAI: {
      description: "Autonomous finance agents working 24x7",
    },
  },

  {
    category: "Faster and more Accurate Credit Decision Making with AI & ML",
    image: "/images/competitors-page/credit-decision-ai.svg",
    features: [
      {
        Feature: "ML-based Credit Scoring using Market Intelligence",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "AI-based Credit Decisions in CRMs",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "Automated Credit Onboarding for new deals & renewals",
        Finfloh: true,
        Emagia: false,
      },
      { Feature: "Credit Risk Alerts", Finfloh: true, Emagia: true },
    ],
    flohsenseAI: {
      description: "AI-driven buyer risk & revenue intelligence",
    },
  },

  {
    category:
      "Take Full Control of your Invoices with Automation & Seamless Management",
    image: "/images/competitors-page/invoice-automation.svg",
    features: [
      {
        Feature: "OCR-driven Invoice Validation (contracts & orders)",
        Finfloh: true,
        Emagia: false,
      },
      { Feature: "Automated Invoice Sending", Finfloh: true, Emagia: true },
      { Feature: "Manual Invoice Sending", Finfloh: true, Emagia: false },
      {
        Feature: "Automated Invoice Creation from CRM / Contracts / Billing",
        Finfloh: true,
        Emagia: true,
      },
    ],
    flohsenseAI: {
      description: "AI-verified invoices before they reach customers",
    },
  },

  {
    category: "Collect your Receivables Faster & Reduce DSO by up to 50%",
    image: "/images/competitors-page/collection-workflow.svg",
    features: [
      { Feature: "Collection Workflows", Finfloh: true, Emagia: true },
      {
        Feature: "Automated Collection Follow-Ups & Reminders",
        Finfloh: true,
        Emagia: true,
      },
      {
        Feature: "Customer Reminders Linked with Credit Risk",
        Finfloh: true,
        Emagia: false,
      },
      { Feature: "AI-based Collector’s Worklist", Finfloh: true, Emagia: true },
      { Feature: "Promise-to-Pay Capture", Finfloh: true, Emagia: true },
    ],
    flohsenseAI: {
      description: "AI-optimized collection prioritization",
    },
  },

  {
    category: "Put an End to your Dispute Loops",
    image: "/images/competitors-page/dispute-loop-workflow.svg",
    features: [
      { Feature: "Dispute Resolution Workflows", Finfloh: true, Emagia: true },
      {
        Feature: "Dedicated Owner Assignment & TATs",
        Finfloh: true,
        Emagia: false,
      },
      {
        Feature: "Predictive Intelligence to prevent disputes",
        Finfloh: true,
        Emagia: false,
      },
    ],
    flohsenseAI: {
      description: "Predict disputes before they delay cash",
    },
  },
];

const emagiaAlternative = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh vs Emagia: AI-Powered Invoice-to-Cash Platform"
        description="Compare FinFloh vs Emagia. FinFloh delivers AI-native invoice intelligence, credit risk, collections, disputes and cash application while Emagia automates traditional Order-to-Cash workflows."
        canonicalUrl="https://finfloh.com/finfloh-vs-emagia"
        mainEntityOfPage="https://finfloh.com/finfloh-vs-emagia"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Automation Platform",
          serviceType: "Invoice-to-Cash Platform and AR Automation",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "FinFloh vs Emagia",
            item: "https://finfloh.com/finfloh-vs-emagia",
          },
        ]}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Why FinFloh Stands Out",
          },
          {
            "@type": "WebPageElement",
            name: "Why choose FinFloh over Emagia?",
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
                  <h1>FinFloh vs. Emagia</h1>
                  <p>
                    FinFloh brings together invoice intelligence, credit
                    decisions, collections and communications into a single
                    AI-native platform powered by a unified data warehouse and
                    FlohSense AI agent, while Emagia focuses on automating
                    existing Order-to-Cash processes.
                  </p>
                </div>
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
                          src="/images/competitors-page/vs-emagia/emagia.svg"
                          alt="Emagia"
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
                src="/images/competitors-page/vs-emagia/comparison-chart-emagia.svg"
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
                  Why choose FinFloh over Emagia?
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
                          "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-emagia&utm_medium=finfloh_website"
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
                                  src="/images/competitors-page/vs-emagia/emagia.svg"
                                  alt="emagia"
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
                                    {feature.emagia ? (
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
                  outperforms Emagia.
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

export default emagiaAlternative;
