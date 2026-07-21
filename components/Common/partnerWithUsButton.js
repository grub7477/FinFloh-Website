import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { validateBusinessEmail } from "../../utils/emailValidation";

const PartnerWithUsButton = ({ // FIXED: component names must be PascalCase, or React won't render it as a component
  templateID,
  serviceID,
  userID,
  onSuccess,
  placeholder = "Enter Your Business Email", // CHANGED: matches your screenshot copy
  submitBtnTxt = "Partner With Us",          // CHANGED: matches your screenshot copy
  showTrial = true,
  errorClassName,
  layout = "stacked", // CHANGED: defaults to stacked since this component is dedicated to the Partner page
}) => {
  const mainForm = useRef();
  const emailTimeoutRef = useRef(null);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      if (emailTimeoutRef.current) clearTimeout(emailTimeoutRef.current);
    };
  }, []);

  const sendEmailMain = (e) => {
    e.preventDefault();

    const isEmailNowValid = validateBusinessEmail(email);
    setIsValidEmail(isEmailNowValid);

    if (!isEmailNowValid) {
      setEmailErrorMessage("Please enter a valid business email.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .sendForm(serviceID, templateID, mainForm.current, userID)
      .then(() => {
        onSuccess && onSuccess();
        setEmail("");
        setIsValidEmail(true);
      })
      .catch(() => setSubmitError("Failed to send email. Please try again later."))
      .finally(() => setIsSubmitting(false));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (emailTimeoutRef.current) clearTimeout(emailTimeoutRef.current);

    emailTimeoutRef.current = setTimeout(() => {
      if (newEmail === "") {
        setIsValidEmail(true);
        setEmailErrorMessage("");
      } else {
        const isValid = validateBusinessEmail(newEmail);
        setIsValidEmail(isValid);
        setEmailErrorMessage(isValid ? "" : "Please enter a valid business email.");
      }
    }, 900);
  };

  const handleEmailBlur = () => {
    setEmailErrorMessage(email !== "" && !isValidEmail ? "Please enter a valid business email." : "");
  };

  return (
    <div className={`${!showTrial ? "demoInput" : ""} hero_newsletter emailJS-dislay`}>
      <form
        className={`newsletter-form demoContainer ${layout === "stacked" ? "newsletter-form--stacked" : ""}`}
        style={{ gap: !isValidEmail ? "5px" : undefined }}
        ref={mainForm}
        onSubmit={sendEmailMain}
      >
        <input
          type="email"
          className={`form-control ${!isValidEmail ? "invalid-email" : ""}`}
          placeholder={placeholder}
          name="user_email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
        />

        {emailErrorMessage && (
          <p className="homepage-error-message" id={errorClassName}>
            {emailErrorMessage}
          </p>
        )}

        {submitError && <p className="homepage-error-message">{submitError}</p>}

        <button
          type="submit"
          disabled={!isValidEmail || isSubmitting}
          style={{ opacity: isValidEmail ? 1 : 0.5 }}
        >
          {isSubmitting ? "Sending..." : submitBtnTxt}
        </button>
      </form>
    </div>
  );
};

export default PartnerWithUsButton;