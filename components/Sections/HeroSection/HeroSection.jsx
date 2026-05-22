import ButtonCommon from "../../UI/Button/Button";
import style from "./HeroSection.module.scss";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { validateBusinessEmail } from "../../../utils/emailValidation";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
// import Marquee from "../Common/Marque";

const HeroSection = ({
  variant = "main",
  title,
  kicker,
  description,
  btnText,
  btnLink,
  btnVariant,
  image,
  utmURLs,
}) => {
  const classes = [style.hero_section, style[`hero--${variant}`]]
    .filter(Boolean)
    .join(" ");

  const router = useRouter();
  const [Open, setOpen] = useState(false);
  const [FormSuccess, setFormSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailTimeout, setEmailTimeout] = useState(null);
  const mainForm = useRef();
  const { homePage_bookDemo_header, homePage_bookDemo_newsLetter } =
    utmURLs || {};

  // const handleEmailInput = (value) => {
  //   setUserEmail(value);
  //   if (value === "") {
  //     setIsValidEmail(true);
  //     setErrorMsg("");
  //   } else {
  //     const isValid = validateEmail();
  //     setIsValidEmail(isValid);
  //     setErrorMsg(isValid ? "" : "Please enter a valid business email.");
  //   }
  // };

  const handleEmailInput = (e) => {
    const newEmail = e.target.value;
    setUserEmail(newEmail);

    if (emailTimeout) {
      clearTimeout(emailTimeout); // Clear any existing timeout
    }

    // Set a new timeout to validate the email after 800 milliseconds
    const timeoutId = setTimeout(() => {
      if (newEmail === "") {
        setIsValidEmail(true);
        setErrorMsg("");
      } else {
        const isValid = validateEmail(newEmail);
        setIsValidEmail(isValid);
        setErrorMsg(isValid ? "" : "Please enter a valid business email.");
      }
    }, 800); // 800ms delay

    setEmailTimeout(timeoutId); // Store the new timeout ID
  };
  const validateEmail = (email) => {
    return validateBusinessEmail(email);
  };

  const sendEmailMain = (e) => {
    e.preventDefault();

    // Always revalidate before submitting
    const isEmailNowValid = validateEmail(userEmail);

    setIsValidEmail(isEmailNowValid);

    if (!isEmailNowValid) {
      setErrorMsg("Please enter a valid business email.");
      return;
    }

    // Ensure you're providing the correct recipient address
    emailjs
      .sendForm(
        "service_duwcr2b",
        "template_mf4qcim",
        mainForm.current,
        "eYpYIaQsGFViF3_LO",
      )
      .then(() => {
        setUserEmail(""); // Reset email input field
        setFormSuccess(true);
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

  const openModal = () => {
    setOpen(true);
  };
  const handelclosefn = () => {
    setFormSuccess(false);
  };

  const onClickSuccess = () => {
    setOpen(FormSuccess);
  };

  return (
    <section className={classes}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <h2 style={{ display: "none" }}>{kicker}</h2>
            <h1 className={`ch30 ${style.heading}`}>{title}</h1>
          </div>
          <p className={style.para}>{description}</p>
          <>
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
                disabled={!isValidEmail} // Disable button if email is invalid
                onClick={sendEmailMain}
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
                disabled={!isValidEmail} // Disable button if email is invalid
                onClick={sendEmailMain}
              >
                Book a demo
              </button>
            </form>
          </>
          {/* <ButtonCommon label={btnText} href={btnLink} variant={btnVariant} /> */}
        </div>
        <img className={style.hero__image} src={image} alt={title} />
      </div>
    </section>
  );
};

export default HeroSection;
