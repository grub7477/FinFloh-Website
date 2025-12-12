import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailJsButton = ({
  templateID = "template_mf4qcim",
  service_ID = "service_duwcr2b",
  user_ID = "eYpYIaQsGFViF3_LO",
  onSuccess,
  placeholder = "Email Address",
  submitBtnTxt = "Book A Demo",
  showTrial = true,
  errorClassName,
}) => {
  const mainForm = useRef();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [emailTimeout, setEmailTimeout] = useState(null);

  const sendEmailMain = (e) => {
    e.preventDefault();
  
    // Always revalidate before submitting
    const isEmailNowValid = validateEmail(email);
  
    setIsValidEmail(isEmailNowValid);
  
    if (!isEmailNowValid) {
      setEmailErrorMessage("Please enter a valid business email.");
      return;
    }
  
    // Proceed safely
    emailjs.sendForm(service_ID, templateID, mainForm.current, user_ID)
      .then(() => {
        onSuccess && onSuccess();
        setEmail("");
        setIsValidEmail(true);
      })
      .catch(() => setSubmitError("Failed to send email. Please try again later."));
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidSyntax = emailRegex.test(email);
    const domainPart = email.includes("@") ? email.split("@")[1] : "";
    const domain = domainPart ? domainPart.toLowerCase() : "";

    const excludedDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
      "live.com",
      "msn.com",
      "protonmail.com",
      "zoho.com",
      "gmx.com",
      "mail.com",
      "yandex.com",
      "haotuwu.com",
      "tempmail.com",
    ];

    // Check if the domain is excluded (in the list)
    const isValidDomain = domain === "" || !excludedDomains.some(
      (excludedDomain) => domain.toLowerCase() === excludedDomain.toLowerCase()
    );

    return isValidSyntax && isValidDomain;
  };

  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);
  //   setIsValidEmail(validateEmail(newEmail));
  //   setEmailErrorMessage(
  //     validateEmail(newEmail) ? "" : "Please enter a valid business email."
  //   );

  // };
  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);
  //   if (newEmail === "") {
  //     setIsValidEmail(true);
  //     setEmailErrorMessage("");
  //   } else {
  //     const isValid = validateEmail(newEmail);
  //     setIsValidEmail(isValid);
  //     setEmailErrorMessage(
  //       isValid ? "" : "Please enter a valid business email."
  //     );
  //   }
  // };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (emailTimeout) {
      clearTimeout(emailTimeout); // Clear any existing timeout
    }

    // Set a new timeout to validate the email after 800 milliseconds
    const timeoutId = setTimeout(() => {
      if (newEmail === "") {
        setIsValidEmail(true);
        setEmailErrorMessage("");
      } else {
        const isValid = validateEmail(newEmail);
        setIsValidEmail(isValid);
        setEmailErrorMessage(
          isValid ? "" : "Please enter a valid business email."
        );
      }
    }, 900); // 900ms delay

    setEmailTimeout(timeoutId); // Store the new timeout ID
  };

  const handleEmailBlur = () => {
    if (email !== "" && !isValidEmail) {
      setEmailErrorMessage("Please enter a valid business email.");
    } else {
      setEmailErrorMessage("");
    }
  };

  return (
    <div
      className={`${
        !showTrial && "demoInput"
      } hero_newsletter emailJS-dislay "`}
    >
      <form
        className="newsletter-form demoContainer"
        style={{ gap: !isValidEmail && "5px" }}
        ref={mainForm}
        onSubmit={sendEmailMain}
      >
        <input
          type="email"
          className={`form-control ${!isValidEmail && "invalid-email"}`}
          placeholder={placeholder}
          name="user_email"
          value={email}
          onChange={handleEmailChange}
          required
          // onBlur={() => setIsValidEmail(validateEmail(email))}
          onBlur={handleEmailBlur}
        />

        {/* {!isValidEmail && (
          <p
            style={{
              color: "#c72d6f",
              fontSize: "12px",
              fontWeight: "400",
              marginBottom: "0px",
            }}
          >
            Please enter a valid business email id
          </p>
        )} */}
        {emailErrorMessage && (
          <p className="homepage-error-message" id={errorClassName}>
            {emailErrorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={!isValidEmail} // Disable button if email is invalid
          style={{ opacity: isValidEmail ? 1 : 0.5 }} // Adjust opacity based on validation
        >
          {submitBtnTxt}
        </button>
      </form>
    </div>
  );
};

export default EmailJsButton;
