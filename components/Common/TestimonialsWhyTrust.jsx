import React, { useState } from "react";

const testimonials = [
  {
    text: `FinFloh has transformed our credit-to-cash processes from credit onboarding in Salesforce to invoice-to-cash. Using AI-driven credit intelligence, automated workflows and native ERP-CRM sync, we are saving 200 man-hours per month and scaling it up to 400 man-hours soon. We have also reduced DSO by 40-50% and increased on-time payments by 10% for 30 days past due invoices."`,
    name: "Gopal Agarwal",
    designation: "Vice President and Head of Finance, Yellow AI",
    double_quote: "/images/double_quote.svg",
    image: "/images/pp-yellow.svg",
  },
  {
    text: `FinFloh has streamlined our Invoice-to-Cash process with automation and AI, saving 400 man-hours monthly while handling 2500+ invoices monthly & reducing overdue balances by 5.1% in two months."`,
    name: "Subhasish Sain",
    designation: "Business Head, Re Sustainability Ltd",
    double_quote: "/images/double_quote.svg",
    image: "/images/sustain_logo.svg",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* why finfloh trusted section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
          marginBottom: "36px",
        }}
      >
        <h2
          className="InspireAwards-heading"
          style={{ maxWidth: "100%", fontSize: "28px" }}
        >
          Why Top Businesses Trust FinFloh?
        </h2>
      </div>
      <div className="EnterpriseIcons-section">
        <div className="EnterpriseIcons">
          {/* Sliding Logos for Larger Screens */}
          <div className="logos" style={{ marginBottom: "36px" }}>
            <div className="award-logos-slide logos-slide">
              <img
                src="/images/users-love-us_1.svg"
                alt="Users love us badge FinFloh"
              />
              <img
                src="/images/users-love-us_2.svg"
                alt="Momentum Leader Winter 2025 Badge FinFloh"
              />
              <img
                src="/images/users-love-us_3.svg"
                alt="Users Most Likely to Recommend Badge FinFloh"
              />
              <img
                src="/images/users-love-us_4.svg"
                alt="Easiest to Use Mid Market Badge FinFloh"
              />
              <img
                src="/images/users-love-us_5.svg"
                alt="High Perfomer Winter Mid Market 2025 FinFloh"
              />
              <img
                src="/images/users-love-us_6.svg"
                alt="High Performer Spring 2024 FinFloh"
              />
              <img
                src="/images/users-love-us_7.svg"
                alt="Best Meets Requirements Spring 2024 FinFloh"
              />
              <img
                src="/images/users-love-us_1.svg"
                alt="Users love us badge FinFloh"
              />
              <img
                src="/images/users-love-us_2.svg"
                alt="Momentum Leader Winter 2025 Badge FinFloh"
              />
              <img
                src="/images/users-love-us_3.svg"
                alt="Users Most Likely to Recommend Badge FinFloh"
              />
              <img
                src="/images/users-love-us_4.svg"
                alt="Easiest to Use Mid Market Badge FinFloh"
              />
              <img
                src="/images/users-love-us_5.svg"
                alt="High Perfomer Winter Mid Market 2025 FinFloh"
              />
              <img
                src="/images/users-love-us_6.svg"
                alt="High Performer Spring 2024 FinFloh"
              />
              <img
                src="/images/users-love-us_7.svg"
                alt="Best Meets Requirements Spring 2024 FinFloh"
              />
            </div>
          </div>
        </div>
      </div>

      {/* award and recognition section */}

      {/* <div className="wealthFinance-banner-freetrail">
        <div style={{ maxWidth: "327px", width: "100%" }}>
          <img
            src="/images/product-hunt1.png"
            alt="FinFloh - Accounts & receivable & software& for & CFOs & B2B & finance & teams | Product Hunt"
            className="product-hunt1"
          />
          <img
            src="/images/product-hunt3.png"
            alt="FinFloh - Accounts& receivable & software for & CFOs B2B & finance & teams | Product Hunt"
            className="product-hunt3"
          />
        </div>
        <div className="wealthFinance-logo">
          <img
            src="/images/TopTrending_2024.svg"
            alt="TopTrending_2024.svg"
            // className="product_wealth-finance"
          />
        </div>
        <div className="wealthFinance-logo">
          <img src="/images/wealth-freeTrail.svg" alt="wealth-finance1" />
          <p>Best A/R Software Developer 2024 - USA</p>
        </div>
        <div className="wealthFinance-logo">
          <img
            src="/images/wealth-freeTrail2.svg"
            alt="wealth-finance2"
            className="product_wealth-finance"
          />
          <p>Wharton Challenge Winners'24</p>
        </div>
      </div> */}

      <div className="awardRecognition">
        <div className="awardRecognition-header">
          <h3>FinFloh: A Cut Above The Rest</h3>
        </div>
        <div className="awardRecognition-content">
          <div className="awardRecognition-left">
            <img
              src="/images/awards-logos/awardRecognition.svg"
              alt="award-recognition"
            />
          </div>
          <div className="awardRecognition-right">
            <div className="awardsImages">
              <img
                src="/images/awards-logos/momentumleader1.svg"
                alt="momentumleader1"
              />
              <img
                src="/images/awards-logos/softwaresuggest2.svg"
                alt="softwaresuggest2"
              />
              <img src="/images/awards-logos/nextunicorn-awards.svg" alt="nextunicorn-awards" />

              <img
                src="/images/awards-logos/wealthandfinance3.svg"
                alt="wealthandfinance3"
              />
              <img
                src="/images/awards-logos/idfcunicorn4.svg"
                alt="idfcunicorn4"
              />
              <img src="/images/awards-logos/wharton5.svg" alt="wharton5" />
              {/* <img
                src="/images/awards-logos/producthunt6.svg"
                alt="producthunt6"
              /> */}
              
            </div>
          </div>
        </div>
      </div>

      {/* testimonials section */}

      <h2
        className="lending-foldSecond"
        style={{ marginTop: "86px", fontSize: "28px" }}
      >
        Hear it from our Customers
      </h2>

      <div className="testimonial_section">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial_slide_${
              index === currentIndex ? "active" : "inactive"
            }`}
            style={{
              display: index === currentIndex ? "flex" : "none",
            }}
          >
            <div className="testimonial_section_left">
              <div className="testimonial_image">
                <img src={testimonial.double_quote} alt="double_quote" />
              </div>
              <div className="testimonial_text_middle">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial_text_end">
                <p className="testimonial_text_heading">{testimonial.name},</p>
                <p className="testimonial_text_subheading">
                  {testimonial.designation}
                </p>
              </div>
            </div>
            <div className="testimonial_section_right">
              <img src={testimonial.image} alt="testimonial-logo" />
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-pagination-arrow">
        <div className="testimonial_arrow_left" onClick={handlePrev}>
          <img src="/images/Back.svg" alt="arrow_left" />
        </div>
        <div className="testimonial-pagination">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <div className="testimonial_arrow_right" onClick={handleNext}>
          <img src="/images/Next.svg" alt="arrow_right" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
