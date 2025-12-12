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
      <div className="bg-container" style={{margin: "120px 0px"}}>
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
                            FinFloh is a global accounts receivable automation
                            software that enables B2B finance teams to transform
                            their accounts receivable process by collecting
                            receivables faster, reducing DSO, closing disputes
                            effortlessly, and minimizing bad debt. This makes
                            the overall accounts receivable management seamless
                            and enhances collections efficiency.
                          </p>
                          <p>
                            Collaborative communication is at the center of
                            FinFloh's accounts receivable technology, bringing
                            together finance, accounts receivable, sales, and
                            customer support teams to help resolve issues and
                            disputes efficiently, which ultimately leads to
                            increased cash flow.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "b",
                      question: "Can FinFloh integrate with Oracle Netsuite?",
                      answer: (
                        <p>
                          Yes, FinFloh is ERP agnostic and can integrate with
                          any ERP/accounting system, including Netsuite, SAP,
                          Microsoft Dynamics 365, Oracle and more.
                        </p>
                      ),
                    },
                    {
                      uuid: "c",
                      question:
                        "Can FinFloh help me find the gaps in my current Accounts Receivable process?",
                      answer: (
                        <>
                          <p>
                            Absolutely! Yes, we would be happy to schedule a
                            call with you to understand your current accounts
                            receivable process, identify areas of improvement,
                            and suggest appropriate solutions.
                          </p>
                          <p>
                            You can reach out to us by email at
                            hello@finfloh.com.
                          </p>
                        </>
                      ),
                    },
                    {
                      uuid: "d",
                      question: "What is the Pricing for FinFloh?",
                      answer: (
                        <p>
                          Our pricing usually comprises two components,
                          including a one-time setup fee and an annual recurring
                          platform fee. We offer customized pricing tailored to
                          your specific business needs, and you can discuss your
                          requirements with us during a call.
                        </p>
                      ),
                    },
                    {
                      uuid: "e",
                      question:
                        "How can FinFloh help me reduce payment delays?",
                      answer: (
                        <p>
                          By using FinFloh's collaborative accounts receivable
                          automation software, you can integrate finance, sales,
                          and customer support teams to ensure that no
                          information falls through the cracks. In addition, you
                          can take advantage of our prioritized collection
                          worklist, multi-channel payment reminders, predefined
                          dunning templates and real-time risk alerts to stay on
                          top of unpaid invoices, reduce payment delays, and
                          decrease DSO.
                        </p>
                      ),
                    },
                    {
                      uuid: "f",
                      question:
                        "How long does it take to get started and implement FinFloh for my organization?",
                      answer: (
                        <p>
                          It completely depends on the complexity of scope.
                          Typically it takes us 2-6 weeks for the complete setup
                          and go-live of our Accounts Receivable tool.
                        </p>
                      ),
                    },
                    {
                      uuid: "g",
                      question:
                        "How can FinFloh's accounts receivable software benefit my business?",
                      answer: (
                        <p>
                          FinFloh's accounts receivable software offers advanced
                          features such as automated workflows, real-time
                          tracking, and data-driven credit decisioning, all
                          aimed at optimizing accounts receivable management and
                          maximizing cash flows.
                        </p>
                      ),
                    },
                    {
                      uuid: "h",
                      question:
                        "Does FinFloh's accounts receivable software integrate with other systems?",
                      answer: (
                        <p>
                          Yes, FinFloh's accounts receivable software offers
                          native integration with ERP/CRM systems to ensure
                          seamless data synchronization and eliminate manual
                          errors in accounts receivable management processes.
                        </p>
                      ),
                    },
                    {
                      uuid: "i",
                      question:
                        "How does FinFloh's accounts receivable software handle invoice disputes?",
                      answer: (
                        <p>
                          FinFloh's accounts receivable software offers
                          centralized communication channels, real-time dispute
                          tracking, and customizable dispute workflows, enabling
                          businesses to resolve invoice disputes faster and
                          close process silos efficiently.
                        </p>
                      ),
                    },
                    {
                      uuid: "j",
                      question:
                        "Does FinFloh's accounts receivable software support automated invoice sending?",
                      answer: (
                        <p>
                          Yes, FinFloh's accounts receivable software automates
                          the process of sending invoices via email and APIs
                          into buyer's inbox, eliminating manual efforts and
                          ensuring timely delivery of invoices to customers.
                        </p>
                      ),
                    },
                    {
                      uuid: "k",
                      question:
                        "Can FinFloh's accounts receivable software help prioritize collection efforts?",
                      answer: (
                        <p>
                          Absolutely. FinFloh's accounts receivable software
                          provides prioritized worklists and predictive
                          analytics to identify high-risk accounts, enabling
                          businesses to maximize collections efficiency and
                          minimize manual dunning.
                        </p>
                      ),
                    },
                    {
                      uuid: "l",
                      question:
                        "How does FinFloh's accounts receivable software handle cash application?",
                      answer: (
                        <p>
                          FinFloh's accounts receivable software leverages OCR
                          technology to read through remittance data and bank
                          account statements, match invoices with payments,
                          automate cash posting, and update invoice-payment
                          matching in ERP systems, ensuring accurate and
                          efficient cash application processes.
                        </p>
                      ),
                    },
                    {
                      uuid: "m",
                      question:
                        "Does FinFloh's accounts receivable software offer credit decisioning capabilities?",
                      answer: (
                        <p>
                          Yes, FinFloh's accounts receivable software provides
                          AI-driven credit scoring, buyer intelligence, and
                          real-time risk alerts, empowering businesses to make
                          faster and more accurate credit decisions tailored to
                          each customer's credit risk profile.
                        </p>
                      ),
                    },
                    {
                      uuid: "n",
                      question:
                        "Can FinFloh's accounts receivable software improve communication between buyers and sellers?",
                      answer: (
                        <p>
                          Absolutely. FinFloh's accounts receivable software
                          provides centralized communication channels, event
                          timelines, and dashboard features to facilitate
                          seamless communication and collaboration between
                          buyers and sellers.
                        </p>
                      ),
                    },
                    {
                      uuid: "o",
                      question:
                        "Can FinFloh's accounts receivable software help with accurate cash forecasting?",
                      answer: (
                        <p>
                          Yes, FinFloh's accounts receivable software provides
                          advanced analytics and buyer data insights, enabling
                          businesses to accurately forecast cash flows and make
                          informed financial decisions.
                        </p>
                      ),
                    },
                    {
                      uuid: "p",
                      question:
                        "How does FinFloh's accounts receivable software handle payment advices?",
                      answer: (
                        <p>
                          FinFloh's accounts receivable software automates
                          follow-ups for payment advices and auto-extraction of
                          payment-related information from emails and buyer
                          dashboards, ensuring efficient communication and
                          record-keeping.
                        </p>
                      ),
                    },
                    {
                      uuid: "q",
                      question:
                        "Does FinFloh's accounts receivable software offer a free trial?",
                      answer: (
                        <p>
                          Yes, FinFloh offers a 14-days free trial of its
                          accounts receivable software, allowing businesses to
                          experience its features and benefits firsthand before
                          making a commitment.
                        </p>
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
                        transition: "transform 0.3s ease"
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
