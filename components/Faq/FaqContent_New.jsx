import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = ({
  bgColor,
  title,
  subTitle,
  questions,
  addContactButton,
}) => {
  return (
    <>
      <section
        style={bgColor ? { background: bgColor } : {}}
        className="faq-area ptb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-100">
              <div className="single-team content_box">
                <div className="sub_text_title">{title}</div>
                <h3 className="sub_text pb-3" style={{ textTransform: "none" }}>
                  {subTitle}
                </h3>
                {/* Render the button if addContactButton is provided */}
                {addContactButton && (
                  <div className="cal-btn">
                    <a
                      target="_blank"
                      href="https://finfloh.com/book-a-demo?utm_source=credit_page_faq&utm_medium=finfloh_website"
                    >
                      <button className="quote-roi-btn">
                        Contact Us
                        <img
                          src="images/Redirect-roi.svg"
                          alt="redirect-logo"
                        />
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion
                  allowZeroExpanded
                  preExpanded={questions
                    .filter((item) => item.uuid === "a")
                    .map((item) => item.uuid)}
                >
                  {questions.map((item) => (
                    <AccordionItem key={item.uuid} uuid={item.uuid}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {item.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        {item.answer.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
