import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { validateBusinessEmail } from "../../utils/emailValidation";
import CompaniesLogo from "../Common/CompaniesLogo";
import ButtonCommon from "../UI/Button/Button";
import Play from "../../public/icons/play.svg";
import styles from "./MainBanner.module.scss";

const MainBanner = ({ utmURLs }) => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailTimeout, setEmailTimeout] = useState(null);
  const mainForm = useRef();
  const { homePage_bookDemo_header, homePage_bookDemo_newsLetter } =
    utmURLs || {};

  const handleEmailInput = (e) => {
    const newEmail = e.target.value;
    setUserEmail(newEmail);

    if (emailTimeout) clearTimeout(emailTimeout);

    const timeoutId = setTimeout(() => {
      if (newEmail === "") {
        setIsValidEmail(true);
        setErrorMsg("");
      } else {
        const isValid = validateBusinessEmail(newEmail);
        setIsValidEmail(isValid);
        setErrorMsg(isValid ? "" : "Please enter a valid business email.");
      }
    }, 800);

    setEmailTimeout(timeoutId);
  };

  const sendEmailMain = (e) => {
    e.preventDefault();

    const isEmailNowValid = validateBusinessEmail(userEmail);
    setIsValidEmail(isEmailNowValid);

    if (!isEmailNowValid) {
      setErrorMsg("Please enter a valid business email.");
      return;
    }

    emailjs
      .sendForm(
        "service_duwcr2b",
        "template_mf4qcim",
        mainForm.current,
        "eYpYIaQsGFViF3_LO",
      )
      .then(() => {
        setUserEmail("");
        setErrorMsg("");
        setIsValidEmail(true);
        router.push(
          homePage_bookDemo_header ||
            homePage_bookDemo_newsLetter ||
            "/demo-request-successful",
        );
      })
      .catch(() =>
        setErrorMsg("Failed to send email. Please try again later."),
      );
  };

  const handleEmailBlur = () => {
    if (userEmail !== "" && !isValidEmail) {
      setErrorMsg("Please enter a valid business email.");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <div className="bg-container">
      <div className={`mainBannerContainer ${styles.hero}`}>
        <div className={`main-banner-container ${styles.heroContent}`}>
          <div className="lending-title-container">
            <h1 className="heading_xs highlight-text--gradient">AI-Native Contract-to-Cash Automation</h1>
            <h2 className="newLending-heading">
              Automate Invoicing.<br /> 
              Accelerate Collections. <br />
              Reconcile Cash.
            </h2>
            <p className="lending-description">
             AI Agents that think and act like your Finance Team, connecting systems and processes into one intelligent Contract-to-Cash
            </p>
          </div>

          <form
            className="newBook-demo"
            ref={mainForm}
            onSubmit={sendEmailMain}
          >
            <input
              type="email"
              onChange={handleEmailInput}
              value={userEmail}
              className="customInput"
              placeholder="Enter business email ID"
              name="user_email"
              onBlur={handleEmailBlur}
              required
            />
            {errorMsg && (
              <p className="homepage-custom-error-message">{errorMsg}</p>
            )}
            <button
              type="submit"
              className="custom_btn"
              disabled={!isValidEmail}
            >
              Book a demo
            </button>
          </form>

          <form
            ref={mainForm}
            onSubmit={sendEmailMain}
            className="newBook-demo-mobile"
          >
            <input
              type="email"
              onChange={handleEmailInput}
              value={userEmail}
              className="customInput"
              placeholder="Whats your email address?"
              name="user_email"
              onBlur={handleEmailBlur}
              required
            />
            {errorMsg && (
              <p className="homepage-custom-error-message homepage-custom-error-message-mb">
                {errorMsg}
              </p>
            )}
            <button
              type="submit"
              className="custom_btn"
              disabled={!isValidEmail}
            >
              Book a demo
            </button>
          </form>

          <ButtonCommon
            label="Explore Product Demo"
            href="/explore-product"
            startIcon={<Play />}
            variant="link"
          />
        </div>

        <div
          className={`book-a-demo-container bg-container ${styles.heroLogos}`}
        >
          <div className="container-main EnterpriseIcons">
            <CompaniesLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
