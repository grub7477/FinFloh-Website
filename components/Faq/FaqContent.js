import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import CommonButton from "../Common/CommonButton";

const FaqContent = (props) => {
  const [showAll, setShowAll] = useState(false);
  const initialQuestions = 5;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="bg-container" style={{ margin: "120px 0px" }}>
        <div className="container-main">
          <div className="faq-container">
            <div className="faq-content">
              <h2 className="faq-content-text-title">
                Frequently asked questions
              </h2>
              <h3 className="faq-content-text-subtext">
                What would you like <br /> to know about FinFloh?
              </h3>
              {/* <CommonButton
                text={"Get Started"}
                type={"primary"}
                href="https://meetings.hubspot.com/finfloh"
                openInNewTab={true}
                iconSrc="images/ArrowRight.svg"
                iconPosition="right"
              /> */}
            </div>

            <div className="faq-accordion-container">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  {[
                    {
                      uuid: "a",
                      question: "What does FinFloh do?",
                      answer: (
                        <>
                          <p>
                            FinFloh is an AI-native B2B accounts receivable
                            automation and credit decisioning platform built for
                            finance teams managing postpaid billing. It
                            automates the entire invoice-to-cash process —
                            including invoice generation, invoice sending,
                            collections, cash application, credit risk scoring,
                            and credit onboarding decisions.
                          </p>
                          <p>
                            By connecting ERP and CRM systems, FinFloh helps
                            companies reduce DSO, improve cash flow visibility,
                            and eliminate manual receivables operations.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "b",
                      question:
                        "What is accounts receivable automation, and how does FinFloh support it?",
                      answer: (
                        <>
                          <p>
                            Accounts receivable automation software digitizes
                            and automates invoice-to-cash workflows such as
                            invoice distribution, collections follow-ups,
                            dispute tracking, cash application, and
                            reconciliation.
                          </p>
                          <p>
                            FinFloh automates these processes end-to-end while
                            adding structured prioritization, performance
                            visibility, and AI-driven credit intelligence. This
                            enables finance teams to operate faster, reduce
                            errors, and gain real-time control over receivables
                            performance.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "c",
                      question:
                        "How does FinFloh reduce DSO (Days Sales Outstanding)?",
                      answer: (
                        <>
                          <p>
                            DSO decreases when invoices are issued accurately,
                            follow-ups are consistent, high-risk accounts are
                            prioritized, and disputes are resolved quickly.
                          </p>
                          <p>
                            FinFloh reduces DSO by automating collections
                            workflows, enabling risk-based prioritization,
                            embedding structured credit controls directly within
                            CRM systems, and triggering internal alerts and
                            escalations for delayed payments. This improves
                            working capital efficiency and accelerates cash
                            recovery.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "d",
                      question:
                        "How is FinFloh different from ERP accounts receivable modules?",
                      answer: (
                        <>
                          <p>
                            ERP systems primarily record accounting transactions
                            and generate financial reports. They typically do
                            not automate collections workflows, intelligent cash
                            matching, or structured credit approval processes.
                          </p>
                          <p>
                            FinFloh works alongside ERP systems to automate
                            invoice-to-cash operations, apply AI-based cash
                            application, and enable structured credit
                            decisioning within CRM workflows. It adds
                            operational automation, performance tracking, and
                            decision intelligence on top of accounting systems.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "e",
                      question:
                        "Does FinFloh integrate with ERP and CRM systems such as Oracle NetSuite, Oracle Fusion, Microsoft Dynamics 365, and SAP S/4HANA?",
                      answer: (
                        <>
                          <p>
                            Yes. FinFloh integrates with leading ERP systems
                            such as Oracle NetSuite, Oracle Fusion, Microsoft
                            Dynamics 365, and SAP S/4HANA, and connects
                            seamlessly with CRM platforms.
                          </p>
                          <p>
                            By synchronizing receivables data, collections
                            activity, and credit decisions across ERP and CRM
                            systems, FinFloh eliminates manual reconciliation,
                            improves cross-functional visibility, and ensures
                            structured credit controls within customer
                            onboarding workflows.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "f",
                      question:
                        "How does FinFloh handle automated cash application?",
                      answer: (
                        <>
                          <p>
                            FinFloh uses AI-based matching algorithms to
                            reconcile incoming payments with open invoices.
                          </p>
                          <p>
                            It supports complex scenarios such as partial
                            payments, short payments, consolidated remittances,
                            and structured exception workflows. By automating
                            cash application, finance teams improve
                            reconciliation accuracy, reduce manual workload, and
                            accelerate month-end closing cycles.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "g",
                      question:
                        "What is automated credit risk scoring and decisioning in FinFloh?",
                      answer: (
                        <>
                          <p>
                            Automated credit risk scoring evaluates customers
                            using financial data, behavioral signals, and
                            predefined risk parameters to generate structured
                            credit scores.
                          </p>
                          <p>
                            FinFloh applies parameter-level scoring with dynamic
                            weightages and translates risk scores into
                            actionable credit onboarding recommendations
                            directly within CRM workflows. This standardizes
                            credit approvals, improves transparency, and reduces
                            bad debt exposure.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "h",
                      question: "How does FinFloh accelerate collections?",
                      answer: (
                        <>
                          <p>
                            FinFloh accelerates collections by automating
                            follow-ups, prioritizing high-impact accounts based
                            on aging and risk signals, and providing structured
                            visibility into disputes and payment behavior.
                          </p>
                          <p>
                            It triggers internal alerts and escalation workflows
                            for delayed payments while providing performance
                            dashboards for managers to track recovery trends and
                            team efficiency. This improves recovery rates and
                            shortens collection cycles.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "i",
                      question:
                        "How does FinFloh improve finance team productivity and reduce manual workload?",
                      answer: (
                        <>
                          <p>
                            Manual accounts receivable processes often require
                            significant effort for follow-ups, reconciliation,
                            dispute management, and credit evaluations.
                          </p>
                          <p>
                            FinFloh automates repetitive invoice-to-cash
                            workflows and introduces structured prioritization
                            and performance tracking. This allows finance teams
                            to reduce manual effort, minimize errors, and scale
                            receivables operations without proportionally
                            increasing headcount.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "j",
                      question:
                        "How does FlohSense AI Agent automate and enable the invoice-to-cash process?",
                      answer: (
                        <>
                          <p>
                            FlohSense AI Agent acts as the intelligence layer
                            across FinFloh’s invoice-to-cash workflows. It reads
                            and interprets operational data and customer
                            communications to automate actions across invoice
                            generation, invoice sending, collections reminders,
                            cash application, and dispute handling.
                          </p>
                          <p>
                            The AI Agent parses customer email responses to
                            capture promise-to-pay commitments, payment
                            references, and dispute details, converting
                            unstructured communication into structured
                            workflows. It assists in matching payments to
                            invoices, triggering follow-ups, routing disputes,
                            and recommending next-best actions.
                          </p>
                          <p>
                            By connecting invoice sending, dunning, cash
                            reconciliation, and dispute resolution into a
                            unified, data-driven process, FlohSense reduces
                            manual intervention, improves automation rates, and
                            accelerates working capital cycles.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "k",
                      question:
                        "Which types of businesses benefit most from FinFloh?",
                      answer: (
                        <>
                          <p>
                            FinFloh is built for B2B companies with postpaid
                            billing models, including SaaS, manufacturing,
                            distribution, and service-based businesses with
                            structured credit processes.
                          </p>
                          <p>
                            It is most valuable for CFOs, finance leaders, and
                            credit managers seeking to automate invoice-to-cash
                            workflows, improve working capital predictability,
                            and implement data-driven credit decisioning across
                            ERP and CRM systems.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "l",
                      question:
                        "How can I get started with FinFloh and how long does implementation take?",
                      answer: (
                        <>
                          <p>
                            You can get started by scheduling a demo or
                            consultation with our team. We will review your
                            current invoice-to-cash workflows, ERP and CRM
                            landscape, credit policies, and receivables
                            performance to identify automation opportunities.
                          </p>
                          <p>
                            Most organizations can go live within a few weeks,
                            depending on integration scope and process
                            complexity. FinFloh’s implementation approach
                            focuses on rapid deployment with minimal IT
                            dependency while ensuring secure ERP and CRM
                            integration.
                          </p>
                          <p>
                            Our onboarding process includes workflow
                            configuration, policy setup, system integrations,
                            and user enablement — enabling finance and revenue
                            teams to transition smoothly to automated, AI-driven
                            invoice-to-cash operations.
                          </p>
                        </>
                      ),
                    },
                  ]
                    .slice(0, showAll ? undefined : initialQuestions)
                    .map((item) => (
                      <AccordionItem key={item.uuid} uuid={item.uuid}>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            {item.question}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>{item.answer}</AccordionItemPanel>
                      </AccordionItem>
                    ))}
                </Accordion>
                <div className="showMoreBtn-container">
                  <button
                    onClick={toggleShowAll}
                    className="showMoreBtn"
                    style={{ textDecoration: "none" }}
                  >
                    {showAll ? "Show Less" : "Show More"}
                    <img
                      src="/images/Dropdown1.svg"
                      alt="Dropdown icon"
                      style={{
                        marginLeft: "8px",
                        transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
