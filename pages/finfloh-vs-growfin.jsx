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
      { Feature: "Sync With ERP", Finfloh: true, Growfin: true },
      { Feature: "Sync With CRM", Finfloh: true, Growfin: true },
      { Feature: "Unified Data Warehouse", Finfloh: true, Growfin: false },
      {
        Feature: "Sync With Credit Data Agencies",
        Finfloh: true,
        Growfin: false,
      },
    ],
    flohsenseAI: {
      description: "Integrated With CRM, ERP & Email Systems",
    },
  },
  {
    category: "Faster and more Accurate Credit Decision Making with AI & ML",
    image: "/images/competitors-page/credit-decision-ai.svg",
    features: [
      {
        Feature: "ML-Based Credit Scoring",
        Finfloh: true,
        Growfin: false,
      },
      {
        Feature: "AI-Based Credit Decisions In CRMs",
        Finfloh: true,
        Growfin: false,
      },
      {
        Feature:
          "Automated Credit Onboarding For New Opportunities/Expansion Projects/Renewals",
        Finfloh: true,
        Growfin: false,
      },
      {
        Feature: "Real-Time Risk Alerts",
        Finfloh: true,
        Growfin: false,
      },
    ],
    flohsenseAI: {
      description: "Analyze buyer sentiment and behaviour over emails",
    },
  },
  {
    category:
      "Take Full Control of your Invoices with Automation & Seamless Management",
    image: "/images/competitors-page/invoice-automation.svg",
    features: [
      {
        Feature:
          "Automated Invoice Creation With Feeds From CRM/Contracts/Billing Systems",
        Finfloh: true,
        Growfin: false,
      },
      { Feature: "Automated Invoice Sending", Finfloh: true, Growfin: true },
      { Feature: "Manual Invoice Sending", Finfloh: true, Growfin: false },
      {
        Feature: "Invoice Validation (Matching With Quotes/Orders/Contracts)",
        Finfloh: true,
        Growfin: true,
      },
      {
        Feature: "Invoice/Customer Audit Trails (Timelines) ",
        Finfloh: true,
        Growfin: false,
      },
      // {
      //   Feature:
      //     "Flohsense AI Agent Understand & Reply To Customer Emails & Chats",
      //   Finfloh: true,
      //   Growfin: false,
      // },
    ],
    flohsenseAI: {
      description: "Understand & Auto-Reply To Customer Emails & Chats",
    },
  },
  {
    category: "Collect your Receivables Faster & Reduce DSO by up to 50%",
    image: "/images/competitors-page/collection-workflow.svg",
    features: [
      {
        Feature: "Collection Workflows",
        Finfloh: true,
        Growfin: true,
      },
      {
        Feature: "Automated Collection Follow-Ups & Reminders",
        Finfloh: true,
        Growfin: true,
      },
      {
        Feature: "Dynamic Dunning as Buyer Credit Risk",
        Finfloh: true,
        Growfin: false,
      },
      {
        Feature: "AI-based Collector's Worklist",
        Finfloh: true,
        Growfin: false,
      },
      {
        Feature: "Promise-to-Pay Capture",
        Finfloh: true,
        Growfin: true,
      },
      // {
      //   Feature:
      //     "Flohsense AI Agent Auto Send Invoices, Ledger Statements On Request",
      //   Finfloh: true,
      //   Growfin: false,
      // },
    ],
    flohsenseAI: {
      description: "Auto Send Invoices, Ledger Statements On Request",
    },
  },
  //   {
  //     category: "Dispute Management & Collections",
  //     image: "/images/competitors-page/dispute-loop-workflow.svg",
  //     features: [
  //       {
  //         Feature: "Dispute Resolution Workflows",
  //         Finfloh: true,
  //         Growfin: false,
  //       },
  //       {
  //         Feature: "Dedicated Owner Assignment & TATs",
  //         Finfloh: true,
  //         Growfin: false,
  //       },
  //       {
  //         Feature:
  //           "Predictive Intelligence to determine Disputes before they occur",
  //         Finfloh: true,
  //         Growfin: false,
  //       },
  //       // {
  //       //   Feature:
  //       //     "Flohsense AI Agent Auto-read disputes/issues from emails & trigger resolution workflows",
  //       //   Finfloh: true,
  //       //   Growfin: false,
  //       // },
  //     ],
  //     flohsenseAI: {
  //       description:
  //         "Auto-read disputes/issues from emails & trigger resolution workflows",
  //     },
  //   },
  {
    category: "Cash Application",
    image: "/images/competitors-page/cash-application.svg",
    features: [
      {
        Feature:
          "3-way recon amongst payment/customer/invoices with tax adjustment",
        Finfloh: true,
        Growfin: true,
      },
      {
        Feature:
          "Automated cash posting into Accounting Software in the right currency",
        Finfloh: true,
        Growfin: true,
      },
      {
        Feature: "OCR on Bank Statement pdf in multiple languages ",
        Finfloh: true,
        Growfin: false,
      },
      // {
      //   Feature:
      //     "FlohSense AI Agent to extract payment details from customer emails/chats",
      //   Finfloh: true,
      //   Growfin: false,
      // },
    ],
    flohsenseAI: {
      description: "Extract payment details from customer emails/chats",
    },
  },
];

const GrowfinAlternative = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh vs Growfin: Better AR Platform for Collections, Credit & Cash Flow"
        description="FinFloh goes beyond Growfin with a complete O2C platform. Automate credit scoring, AR, and collections using AI to cut DSO and boost cash flow."
        canonicalUrl="https://finfloh.com/finfloh-vs-growfin"
        mainEntityOfPage="https://finfloh.com/finfloh-vs-growfin"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "Accounts Receivable Automation Platform",
          serviceType: "Invoice-to-Cash Platform and AR Automation",
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "FinFloh vs Growfin",
            item: "https://finfloh.com/finfloh-vs-growfin",
          },
        ]}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Why FinFloh Stands Out",
          },
          {
            "@type": "WebPageElement",
            name: "Why choose FinFloh over Growfin?",
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
                  <h1>
                    FinFloh vs. Growfin
                    <br />A Broader, Smarter AR Platform
                  </h1>
                  <p>
                    While Growfin focuses on automating Accounts Receivable,
                    FinFloh manages the entire Credit-to-Cash lifecycle with AI
                    and automation — from invoice validation and credit
                    decisions to collections and disputes.
                  </p>
                </div>
                <CommonButton
                  text={"Book A Demo"}
                  type={"primary"}
                  href={
                    "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-growfin&utm_medium=finfloh_website"
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
                          src="/images/competitors-page/growfin.svg"
                          alt="Growfin"
                        />
                      </div>
                      <span>
                        <img
                          src="/images/competitors-page/star_half.svg"
                          alt="star"
                        />
                        <p>4.75</p>
                      </span>
                    </div>
                  </div>
                </section>
                {/* Illustration hero section */}
              </div>
              <img
                className="hero-illustration"
                src="/images/competitors-page/growfin-comparison-chart.svg"
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
                  <h3>Real-time, Multi-Source Single Source of Truth</h3>
                </div>
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/workflow-automation.svg"
                    alt="Workflow Automation"
                  />
                  <h3>
                    FlohSense AI agent for smart, responsive communications
                  </h3>
                </div>
                <div className="usp-single-card">
                  <img
                    src="/images/competitors-page/credit-intelligence.svg"
                    alt="Credit Intelligence"
                  />
                  <h3>
                    Credit Intelligence That Connects with Revenue Optimization
                  </h3>
                </div>
              </div>
            </div>

            {/* Comparison chart for different parts */}
            <section className="comparison-table">
              <div className="sectionHeaders">
                <h2 className="comparison-h2">
                  Why choose FinFloh over Growfin?
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
                        text={"Book A Demo"}
                        type={"primary"}
                        href={
                          "https://finfloh.com/book-a-demo?utm_source=finfloh-vs-growfin&utm_medium=finfloh_website"
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
                                  src="/images/competitors-page/growfin.svg"
                                  alt="Growfin"
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
                                    {feature.Growfin ? (
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
                  Take Control of Your <br /> Credit-to-Cash Journey Today!{" "}
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

export default GrowfinAlternative;
