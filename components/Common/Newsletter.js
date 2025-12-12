import React from "react";
import BookDemoButton from "./BookDemoButton";
import EmailJsButton from "./EmailJsButton";
const Newsletter = (props) => {
  const { utmURLs } = props;
  return (
    <div className="bg-container">
      <div className="container-main newsletter-cont">
        <div className="newsletter-inner-area mb_newsletter">
          <div className="newsletter-content">
            <h2> {props.heading || "Supercharge your A/R with FinFloh"}</h2>
            <span className="sub-title">
              {props?.text?.length >= 0
                ? props.text
                : "Talk to our finance experts and begin your AR transformation journey today."}
            </span>
          </div>
          {props.type ? (
            <EmailJsButton
              templateID="template_yse6rfm"
              submitBtnTxt="Subscribe"
              errorClassName="custom-error"
            />
          ) : (
            <BookDemoButton utmURLs={utmURLs} errorClassName="custom-error" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
