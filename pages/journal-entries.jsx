import React from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import LinkButton from "../components/Common/LinkButton";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust";
const whyFinfloh = () => {
  const AR_MANAGEMENT = [
    { title: "30%", description: "Reduction in DSO" },
    { title: "20%", description: "Increase in Cash Flows" },
    { title: "70%", description: "Reduction in Decision Making Time" },
    { title: "50%", description: "Increase in Collections Efficiency" },
  ];
  return (
    <>
      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main journal-entries-main">
            {/* Why Finfloh Header */}
            <div className="journal-entries-header">
              <div className="je-container">
                <h1>
                  Automating Loan Journal Entries in ERP for Bank & NBFC's
                </h1>
                <p>
                  FinFloh solves this through a seamless automation-driven layer
                  that updates the ERP instantly and accurately—eliminating
                  spreadsheets, manual mapping, version errors, and
                  reconciliation chaos.
                </p>
                <LinkButton
                  openInNewTab={true}
                  href="https://finfloh.com/book-a-demo?utm_source=why_finfloh&utm_medium=finfloh_website"
                >
                  Book A Demo
                </LinkButton>
              </div>
            </div>

            {/* Why Finfloh reason to choose Section */}
            <div className="journal-entries-reasons-section">
              <h2>
                Why Automating Loan Journal Entries Matters for Banks & NBFCs
              </h2>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#1</span>
                  <h3>Manual Workloads Slow Down Accounting Teams</h3>
                  <p>
                    Managing repayment files from multiple sources is manual,
                    error-prone, and often leads to month-end audit issues.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#2</span>
                  <h3>Delayed Updates Impact Financial Accuracy</h3>
                  <p>
                    When repayments or settlements aren’t updated in the ERP/GL
                    in real time, loan balances, interest income, and NPA
                    calculations become inaccurate—turning month-end close into
                    a fire drill.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#3</span>
                  <h3>Lack of Integration Between LMS and ERP</h3>
                  <p>
                    Banks and NBFCs run on multiple systems—CBS, LMS, payment
                    gateways, ERP—that rarely sync in real time. FinFloh acts as
                    the intelligent layer between them, using event-based
                    automation to move financial data seamlessly, without noise
                    or delays.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How FinFloh Automates */}
            <div className="journal-entries-reasons-section">
              <h2>How FinFloh Automates Journal Entry Updates in ERP</h2>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#1</span>
                  <h3>
                    Event-Based Automation for Repayments, Settlements & More
                  </h3>
                  <p>
                    When repayments or settlements aren’t reflected in the
                    ERP/GL in real time, loan balances go out of sync, interest
                    income becomes inaccurate, NPA calculations get distorted,
                    and month-end close turns into a fire drill.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#2</span>
                  <h3>
                    Identifies Principal, Interest, Fee & Tax Automatically
                  </h3>
                  <p>
                    FinFloh automatically parses every repayment into principal,
                    interest, fees, and taxes, and posts each component to the
                    correct GL, cost center, product, or branch—fully aligned
                    with your accounting policies.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#3</span>
                  <h3>Instant Reflection of Repayments in ERP</h3>
                  <p>
                    FinFloh acts as an intelligent, event-driven accounting
                    layer that connects all lending and finance systems—ensuring
                    financial data flows instantly, accurately, and without
                    manual intervention.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#4</span>
                  <h3>Plug-and-Play Integration Across Systems</h3>
                  <p>
                    FinFloh acts as an intelligent, event-driven accounting
                    layer that connects all systems and moves financial data
                    instantly—without delays, noise, or manual intervention.
                  </p>
                </div>
              </div>
              <div className="journal-entries-reasons-cards">
                <div className="journal-entries-card">
                  <span>#5</span>
                  <h3>Complete Audit Trail, Approvals & Policy Control</h3>
                  <p>
                    FinFloh acts as an intelligent accounting layer that
                    connects all systems through event-driven automation,
                    ensuring financial data flows instantly, accurately, and
                    without noise.
                  </p>
                </div>
              </div>
            </div>
            <section className="Integrations-banks-nbfc">
              <div className="integration-je-content-wrapper">
                <h2>Out-Of-The-Box Seamless Integration</h2>
                <p>
                  Integrate with your ERP/Accounting Software, Payments, CRM,
                  Communications & other tools in just a few simple steps
                  without any coding efforts and start managing your accounts
                  receivables with ease.
                </p>
              </div>
              <div className="integrations-je-ph">
                <img
                  src="/images/journal-entries/integrations-je.svg"
                  alt="Journal Entry Integration logos"
                />
              </div>
            </section>
            {/* feature section */}
            <div className="feature-content-je">
              <div className="feature-je-content-wrapper">
                <h2 className="feature-title-je">
                  What Banks and NBFCs Gain With FinFloh’s ERP Automation
                </h2>
                <p className="feature-para-je">
                  FinFloh automates event-driven accounting for banks and NBFCs,
                  ensuring every repayment, settlement, and disbursal is
                  accurately reflected in the ERP in real time—without manual
                  intervention or reconciliation chaos.
                </p>
                <div className="feature-item-wrapper-je">
                  <li>
                    <b>Zero manual journal entries:</b> repetitive daily work is
                    eliminated
                  </li>
                  <li>
                    <b>Real-time loan book accuracy:</b> ERP always shows the
                    true position
                  </li>
                  <li>
                    <b>Faster month-end close:</b> clean data, no last-minute
                    reconciliations
                  </li>
                  <li>
                    <b>Stronger compliance & governance:</b> audit-ready entries
                    with full traceability
                  </li>
                </div>
              </div>
              <div className="feature-image-je">
                <img
                  src="/images/competitors-page/collection-workflow.svg"
                  alt=""
                />
              </div>
            </div>

            {/* newsletter */}
            <div
              className="journal-entries-newsletter"
              style={{ marginTop: "86px" }}
            >
              <div className="journal-entries-newsletter-cnt">
                <p>
                  Take Control of Your <br /> Credit-to-Cash Journey Today!{" "}
                </p>
              </div>
              <div className="journal-entries-newsletter-btn">
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

export default whyFinfloh;
