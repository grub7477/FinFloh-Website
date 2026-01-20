import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import CustomSlider from "../components/Common/CustomSlider";
import HeadComponent from "../components/Common/HeadComponent";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import { validateBusinessEmail } from "../utils/emailValidation";
const AR_MANAGEMENT = [
  { title: "30%", description: "Reduction in DSO" },
  { title: "20%", description: "Increase in Cash Flows" },
  { title: "70%", description: "Reduction in Decision Making Time" },
  { title: "50%", description: "Increase in Collections Efficiency" },
];

const roiCalculator = () => {
  const router = useRouter();
  const [Open, setOpen] = useState(false);
  const [FormSuccess, setFormSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailTimeout, setEmailTimeout] = useState(null);
  const mainForm = useRef();

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
        // "service_duwcr2b",
        // "template_mf4qcim",
        "service_wpanfz7",
        "template_9ev57or",
        mainForm.current,
        "EQYy0hAZemqqCGtEo"
      )
      .then(() => {
        setUserEmail(""); // Reset email input field
        setFormSuccess(true);
        setErrorMsg("");
        setIsValidEmail(true);
        router.push("/roi-report-requested");
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

  const [annualRevenue, setAnnualRevenue] = useState(100000000);
  const [currentDSO, setCurrentDSO] = useState(90);
  const [teamHeadcount, setTeamHeadcount] = useState(10);
  const [employeeCost, setEmployeeCost] = useState(80000);
  const [dsoReduction, setDsoReduction] = useState(30);
  const efficiencyGain = 0.55;
  const costOfCapital = 0.07;

  const calculateSavings = () => {
    const estimatedDSO = Math.round(
      currentDSO - (dsoReduction / 100) * currentDSO
    );
    const productivitySavings = Math.round(
      teamHeadcount * employeeCost * efficiencyGain
    );
    const reducedDSOSavings = Math.round(
      (currentDSO - estimatedDSO) * (annualRevenue / 365) * costOfCapital
    );
    const oneYearSavings = Math.round(productivitySavings + reducedDSOSavings);
    const monthlyCostOfDelay = Math.round(oneYearSavings / 12);

    return {
      oneYearSavings,
      monthlyCostOfDelay,
      productivitySavings,
      reducedDSOSavings,
      estimatedDSO,
    };
  };

  const {
    oneYearSavings,
    monthlyCostOfDelay,
    productivitySavings,
    reducedDSOSavings,
    estimatedDSO,
  } = calculateSavings();

  return (
    <>
      <HeadComponent
        title="FinFloh ROI Calculator: Drive Cash Savings Strategically"
        description="Calculate how much your business can save annually by automating accounts receivable with FinFloh, and determine your monthly losses from not doing so."
        canonicalUrl="https://finfloh.com/roi-calculator"
        mainEntityOfPage="https://finfloh.com/roi-calculator"
        includeAbout
        includeBreadcrumbs
        includeHasPart
        aboutProps={{
          name: "Accounts Receivable Automation & ROI Calculation",
          serviceType: "ROI Calculator for AR Automation",
        }}
        breadcrumbItems={[
          {
            name: "ROI Calculator",
            item: "https://finfloh.com/roi-calculator",
          },
        ]}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Trusted by Enterprise Finance Teams Worldwide",
          },
          {
            "@type": "WebPageElement",
            name: "Features",
          },
          {
            "@type": "WebPageElement",
            name: "Resources",
          },
        ]}
      />

      <WebsiteLayout>
        <div className="roi-calculator-container bg-container">
          <div className="header-section container-main">
            <p>FINFLOH CASH SAVINGS CALCULATOR</p>
            <h1>Cash Savings Guaranteed With FinFloh</h1>
          </div>

          <div className="savings-output container-main">
            <p>You can save up to</p>
            <span className="savings-result">
              ${oneYearSavings.toLocaleString()}
            </span>
            <p>in yearly savings with FinFloh</p>
          </div>

          <div className="business-details-section container-main">
            <div className="input-heading">Enter Your Business Details</div>

            <div className="input-rows-container">
              <div className="first-input-row">
                <div className="input-column1">
                  <label htmlFor="annualRevenue">Annual Revenue</label>
                  <span className="business-quantity">{`$${(
                    annualRevenue / 1000000
                  ).toLocaleString()}M`}</span>
                  <CustomSlider
                    min={5000000}
                    max={1000000000}
                    step={1000000}
                    value={annualRevenue}
                    onChange={setAnnualRevenue}
                    ariaLabel="Annual Revenue CustomSlider"
                    ariaValueText={`${(
                      annualRevenue / 1000000
                    ).toLocaleString()} Million`}
                  />
                  <div className="min-max-range">
                    <div className="min-value">$5M</div>
                    <div className="max-value">$1000M</div>
                  </div>
                </div>

                <div className="input-column2">
                  <label htmlFor="currentDSO">Current DSO</label>
                  <span className="business-quantity">{`${currentDSO} Days`}</span>
                  <CustomSlider
                    min={30}
                    max={200}
                    step={1}
                    value={currentDSO}
                    onChange={setCurrentDSO}
                    ariaLabel="Current DSO CustomSlider"
                    ariaValueText={`${currentDSO} Days`}
                  />
                  <div className="min-max-range">
                    <div className="min-value">30 Days</div>
                    <div className="max-value">200 Days</div>
                  </div>
                </div>
              </div>

              <div className="second-input-row">
                <div className="input-column3">
                  <label htmlFor="employeeCost">
                    Average Annual Employee Cost
                  </label>
                  <span className="business-quantity">{`$${employeeCost.toLocaleString()}`}</span>
                  <CustomSlider
                    min={30000}
                    max={150000}
                    step={1000}
                    value={employeeCost}
                    onChange={setEmployeeCost}
                    ariaLabel="Employee Cost CustomSlider"
                    ariaValueText={`$${employeeCost.toLocaleString()}`}
                  />
                  <div className="min-max-range">
                    <div className="min-value">$30k</div>
                    <div className="max-value">$150k</div>
                  </div>
                </div>
                <div className="input-column4">
                  <label htmlFor="teamHeadcount">
                    AR/Collections Team Headcount
                  </label>
                  <span className="business-quantity">{`${teamHeadcount} Users`}</span>
                  <CustomSlider
                    min={1}
                    max={50}
                    step={1}
                    value={teamHeadcount}
                    onChange={setTeamHeadcount}
                    ariaLabel="Team Headcount CustomSlider"
                    ariaValueText={`${teamHeadcount} Users`}
                  />
                  <div className="min-max-range">
                    <div className="min-value">1</div>
                    <div className="max-value">50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dso-reduction-section container-main">
            <div className="dso-reduction-description">
              Select Percentage DSO Reduction Possibility with FinFloh
              <p>
                FinFloh has empowered global A/R teams to{" "}
                <span>cut DSO by up to 40%</span>, but even a 20% decrease can
                significantly boost your cash flow.
              </p>
            </div>

            <div className="dso-reduction-options">
              <div
                className={`dso-reduction-button ${
                  dsoReduction === 20 ? "selected" : ""
                }`}
                onClick={() => setDsoReduction(20)}
              >
                20%
              </div>
              <div
                className={`dso-reduction-button ${
                  dsoReduction === 30 ? "selected" : ""
                }`}
                onClick={() => setDsoReduction(30)}
              >
                30%
              </div>
              <div
                className={`dso-reduction-button ${
                  dsoReduction === 40 ? "selected" : ""
                }`}
                onClick={() => setDsoReduction(40)}
              >
                40%
              </div>
            </div>
          </div>

          <div className="input-heading Breakdown-heading container-main">
            Your Savings Breakdown with FinFloh
          </div>

          <div className="savings-breakdown-section container-main">
            <div className="breakdown-container">
              <div className="left-breakdown">
                <div className="breakdown-row1">
                  <p>Yearly Savings after using FinFloh</p>
                  <span className="yearly-savings">
                    ${oneYearSavings.toLocaleString()}
                  </span>
                </div>
                <div className="breakdown-row2">
                  <p>Monthly Loss of not using FinFloh</p>
                  <span className="monthly-loss">
                    ${monthlyCostOfDelay.toLocaleString()}
                  </span>
                </div>
              </div>
              {/* write code for line vertical line */}
              <div className="vertical-line"></div>

              <div className="right-breakdown">
                <div className="breakdown-row3">
                  <p>Savings due to Collections Efficiency Gains</p>
                  <span className="efficiency-savings">
                    ${Math.abs(productivitySavings).toLocaleString()}
                  </span>
                </div>

                <div className="breakdown-row4">
                  <p>Savings due to DSO Reduction</p>
                  <span className="dso-savings">
                    ${Math.abs(reducedDSOSavings).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container-main newsletter-cont ">
            <div className="newsletter-inner-area mb_newsletter">
              <div
                className="newsletter-content"
                style={{
                  display: "flex",
                  padding: "48px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "48px",
                }}
              >
                <h2 style={{ fontFamily: "Satoshi", maxWidth: "800px",fontSize:"36px",lineHeight:"48px" }}>
                  {"Need a Customized Pricing Plan & In-Depth ROI Analysis from our Experts?"}
                </h2>
                <LinkButton
                  href="https://finfloh.com/get-a-quote?utm_source=roi_calculator&utm_medium=finfloh_website"
                  style={{
                    color: "#fff",
                    backgroundColor: "#00954A",
                    height: "52px",
                    padding: " 16px 24px",
                  }}
                >
                  Get a Quote
                </LinkButton>
              </div>
            </div>
          </div> */}
          <div className="container-main roi-analysis-main">
            <div className="roi-analysis">
              <div className="roi-analysis-left">
                <div className="analysis-contant">
                  Get a detailed ROI analysis report customized especially for
                  your firm
                </div>
                <div className="input-factors">
                  <p className="input-factors-heading">input factors</p>
                  <div>
                    <div className="input-factor">
                      <div>
                        <p className="factor1 factor">
                          <img
                            src="../images/check.svg"
                            alt="Green checkmark icon FinFloh"
                          />
                          Count of Invoices per month
                        </p>
                        <p className="factor2 factor">
                          <img
                            src="../images/check.svg"
                            alt="Green checkmark icon FinFloh"
                          />
                          Percentage of Bad Debt
                        </p>
                      </div>
                      <div>
                        <p className="factor3 factor">
                          <img
                            src="../images/check.svg"
                            alt="Green checkmark icon FinFloh"
                          />
                          Number of customers
                        </p>
                        <p className="factor4 factor">
                          <img
                            src="../images/check.svg"
                            alt="Green checkmark icon FinFloh"
                            className="check-img"
                          />
                          Current ERP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roi-analysis-right">
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
                      className="roi-customInput"
                      placeholder="Enter Your Business Email"
                      name="user_email"
                      onBlur={handleEmailBlur}
                      required
                    />
                    {errorMsg && (
                      <p className="homepage-custom-error-message">
                        {errorMsg}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="roi-customButton"
                      disabled={!isValidEmail} // Disable button if email is invalid
                      onClick={sendEmailMain}
                    >
                      Get Your Customized Report
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
                      placeholder="Enter Your Business Email"
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
                      Get Your Customized Report
                    </button>
                  </form>
                </>
              </div>
            </div>
          </div>

          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column" }}
          >
            <p
              className="titleStyle"
              style={{ maxWidth: "800px", fontFamily: "Satoshi" }}
            >
              With FinFloh, Accounts Receivable Management is a Breeze
            </p>

            <div
              className="container-main autoPilot"
              style={{ gap: "10px", padding: "0px" }}
            >
              {AR_MANAGEMENT?.map((data) => (
                <div className="card-container">
                  <p
                    style={{
                      color: "#00954A",
                      fontSize: "48px",
                      fontWeight: "600",
                    }}
                  >
                    {data?.title}
                  </p>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      fontWeight: "500",
                      maxWidth: "200px",
                    }}
                  >
                    {data?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container-main">
            <CompaniesLogo />
          </div>
          {/* <div className="container-main brand-parent-container">
            <div className="brand_container">
              <div className="brand-subContainer">
                <p className="brand_container_heading">
                  Trusted by Accounts Receivable Teams Worldwide
                </p>
              </div>
              <div className="brand-icons">
                <img alt="gupshup-icon" src="images/Gupshup.svg" />
                <img alt="yellow_ai-icon" src="images/yellow_ai.svg" />
                <img alt="knowlarity-icon" src="images/knowlarity.svg" />
                <img alt="Kaleyra-icon" src="images/Kaleyra.svg" />
                <img
                  alt="resustanability-icon"
                  src="images/resustanability.svg"
                />
              </div>
            </div>
          </div> */}
        </div>
      </WebsiteLayout>
    </>
  );
};

export default roiCalculator;
