import React from "react";
import BookDemoButton from "./BookDemoButton";
import EmailJsButton from "./EmailJsButton";

const NewNewsLetter = ({
  heading = "Supercharge your A/R with FinFloh",
  text = "Talk to our finance experts and begin your AR transformation journey today.",
  type,
  utmURLs,
  onSuccess,
  submitBtnTxt = "Subscribe",
  placeholder = "Enter Your Business Email",
  showTrial = false,
}) => {
  return (
    <div className="bg-container NewNewsletter-bg">
      <div className="NewNewsletter-container mb_NewNewsletter">
        <div className="NewNewsletter-content">
          <h3>{heading}</h3>
          <p className="sub-title">
            {text?.length >= 0
              ? text
              : "Talk to our finance experts and begin your AR transformation journey today."}
          </p>
        </div>
        <div className="NewNewsletter-button">
          {type ? (
            <EmailJsButton
              templateID="template_yse6rfm"
              submitBtnTxt={submitBtnTxt}
              placeholder={placeholder}
              onSuccess={onSuccess}
              showTrial={showTrial}
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
export default NewNewsLetter;
