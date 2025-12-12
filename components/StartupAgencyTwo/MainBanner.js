import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import Marquee from "../Common/Marque";

const INVOICE_TYPE = [
  {
    icon: "images/collect-icon.svg",
    text: "Floh <strong>Collect</strong> AI",
  },
  {
    icon: "images/credit-icon.svg",
    text: "Floh <strong>Credit</strong> AI",
  },
  {
    icon: "images/recon-icon.svg",
    text: "Floh <strong>Recon</strong> AI",
  },
  {
    icon: "images/invoice-icon.svg",
    text: "Floh <strong>Invoice</strong> AI",
  },
];
const MainBanner = ({ utmURLs }) => {
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
        "eYpYIaQsGFViF3_LO"
      )
      .then(() => {
        setUserEmail(""); // Reset email input field
        setFormSuccess(true);
        setErrorMsg("");
        setIsValidEmail(true);
        router.push(
          homePage_bookDemo_header ||
            homePage_bookDemo_newsLetter ||
            "/demo-request-successful"
        );
      })
      .catch(() => setErrorMsg("Failed to send email. Please try again later."));
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

  const ModalVideo = dynamic(() => import("react-modal-video"), {
    ssr: false,
  });

  return (
    <div className="bg-container">
      <div
        className="bg-container mainBannerContainer"
        style={{
          background: "linear-gradient(0deg, #e6f7ec 0%, #fff 100%)",
          backgroundImage:
            'url("/images/homepage-illustration.svg"), linear-gradient(0deg, #e6f7ec 0%, #fff 100%)',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-banner-container">
          {/* <h1 className="lending-title" style={{color:'#002211'}}>Accounts Receivable Software</h1> */}
          <div className="lending-title-container">
            <p className="newLending-heading">
              Faster Collections. <br /> Smarter Credit Decisions. <br />{" "}
              Quicker Recon.
            </p>
            <p className="lending-description">
              Autonomous Order-to-Cash with AI Agents <br /> that think & act
              like your finance team
            </p>
          </div>

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
        </div>

        {/* <p className="video-link">
          Why FinFloh?{" "}
          <a
            href="https://www.youtube.com/watch?v=-D13kBGW6fs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#00954A",
              fontWeight: "600",
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            Check our video
          </a>{" "}
        </p> */}
        <div className="container-main">
          <div className="capsule-container">
            {INVOICE_TYPE?.map((item, index) => (
              <div key={index} className="invoice-type">
                <img src={item.icon} alt={`${item.text} icon`} />
                <p dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
