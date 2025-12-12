import React, { useState } from "react";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";

const Refer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    finance_head_email: "",
    phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Validate name (no numeric or special characters)
    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, ""); // Remove numeric and special characters
    }

    if (name === "email") {
      newValue = value;
    }
    if (name === "finance_head_email") {
      newValue = value;
    }

    // Validate phone number (10 digits only)
    if (name === "phone") {
      newValue = value.replace(/\D/g, ""); // Remove non-digit characters
      newValue = newValue.slice(0, 10); // Limit to 10 digits
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://stageapi.finfloh.com/v1/website/referral-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Handle success, such as showing a success message or redirecting
        setFormData({
          name: "",
          email: "",
          finance_head_email: "",
          phone: "",
        });
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form.");
        // Handle error, such as showing an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const validateEmail = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidFinanceEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.finance_head_email
    );

    if (!isValidEmail) {
      alert("Please enter a valid email for Your Email");
      return false;
    }

    if (!isValidFinanceEmail) {
      alert("Please enter a valid email for CFO/Finance Head’s Email");
      return false;
    }

    if (formData.email === formData.finance_head_email) {
      alert(
        "Emails for Your Email and CFO/Finance Head’s Email cannot be the same"
      );
      return false;
    }
    if (
      !isValidEmail ||
      !isValidFinanceEmail ||
      formData.email === formData.finance_head_email
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }

    return true;
  };

  const handleBlur = () => {
    validateEmail();
  };

  return (
    <WebsiteLayout>
      <div className="bg-container" style={{ background: "#f1f3e4" }}>
        <div
          className="container-main centerLize"
          style={{ flexDirection: "column" }}
        >
          <h1 className="refer-title">
            Refer your CFO or Finance Head to try out FinFloh & get a $50 gift
            card
          </h1>
          <div className="refer-Container">
            {!isSubmitted ? (
              <>
                <div className="referForm-fields">
                  <p style={{ margin: "0px" }} className="referForm-label">
                    Your Name*
                  </p>
                  <input
                    placeholder="Your Name"
                    className="refer-form"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="referForm-fields">
                  <p style={{ margin: "0px" }} className="referForm-label">
                    Your Email*
                  </p>
                  <input
                    placeholder="Your Email"
                    className="refer-form"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="referForm-fields">
                  <p style={{ margin: "0px" }} className="referForm-label">
                    CFO/Finance Head’s Email*
                  </p>
                  <input
                    placeholder="CFO Email"
                    className="refer-form"
                    name="finance_head_email"
                    value={formData.finance_head_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="referForm-fields">
                  <p style={{ margin: "0px" }} className="referForm-label">
                    CFO/Finance Head’s Phone Number
                  </p>
                  <input
                    placeholder="CFO Phone Number"
                    className="refer-form"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="refer-btn"
                  disabled={!isFormValid}
                  style={{ opacity: !isFormValid ? "0.5" : "1" }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  gap: "20px",
                }}
              >
                <div
                  className="circle-container "
                  style={{ background: "00954A" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <path
                      d="M40 79.5371C61.9636 79.5371 79.7685 61.7321 79.7685 39.7686C79.7685 17.805 61.9636 0 40 0C18.0364 0 0.231445 17.805 0.231445 39.7686C0.231445 61.7321 18.0364 79.5371 40 79.5371Z"
                      fill="#00954A"
                    />
                    <path
                      d="M21.0664 42.9737L29.9861 51.8935C30.8483 52.7556 32.2465 52.7556 33.1141 51.8935L58.9338 26.0737"
                      stroke="white"
                      stroke-width="4.42118"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <p className="success-Title">Thank you for the referral</p>
                <p className="success-description">
                  Once your team goes live with us, expect to receive your gift
                  card directly in your inbox
                </p>
                <p className="socialMedia-title">
                  Stay in the loop with FinFloh!
                </p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div className="circle-container">
                    <a
                      href="https://www.youtube.com/channel/UCNraxyYw72Q87xncGvzs4-g"
                      target="_blank"
                    >
                      <img alt="youtube" src="/images/youtube.svg" />
                    </a>
                  </div>

                  <div className="circle-container">
                    <a
                      href="https://www.linkedin.com/company/89691413/admin/feed/posts/"
                      target="_blank"
                    >
                      <img alt="youtube" src="/images/linkedin.svg" />
                    </a>
                  </div>
                  <div className="circle-container">
                    <a
                      href="https://mail.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="gmail" src="/images/gmail.svg" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};
export default Refer;
