import { useRouter } from "next/router";
import EmailJsButton from "./EmailJsButton";

const BookDemoButton = ({
  theme,
  text,
  isShowMobile = false,
  showFreeTrail = false,
  someOtherCondition = false,
  freeCreditScorePage = false,
  templateID = "template_mf4qcim",
  service_ID = "service_duwcr2b",
  user_ID = "eYpYIaQsGFViF3_LO",
  utmURLs,
  errorClassName,
  ...restProps
}) => {
  const { showTrial = true } = restProps;
  const router = useRouter();
  const { bookDemo_header, bookDemo_newsLetter } = utmURLs || {};
  
  const getRedirectUrl = () => {
    if (showFreeTrail) {
      return "/free-trial-successful";
    } else if (someOtherCondition) {
      return "/quote-request-successful";
    } 
    else if (freeCreditScorePage) {
      return "/free-credit-score-request-successful";
    } 
    else {
      return (
        bookDemo_header || bookDemo_newsLetter || "/demo-request-successful"
      );
    }
  };
  return (
    <>
      {/* <div className="d-none">
        <LinkButton
          href="https://meetings.hubspot.com/finfloh"
          theme={theme}
          openInNewTab={true}
          // style={{width:'100%'}}
          {...restProps}
        >
          {text || "Book A Demo"}
        </LinkButton>
        <div></div>
      </div> */}
      <EmailJsButton
        placeholder="Enter Your Business Email"
        submitBtnTxt={text || "Book A Demo"}
        onSuccess={() => {
          router.push(getRedirectUrl());
        }}
        showTrial={showTrial}
        isShowMobile={isShowMobile}
        templateID={templateID}
        service_ID = {service_ID}
        user_ID = {user_ID}
        errorClassName={errorClassName}
      />
    </>
  );
};

export default BookDemoButton;
