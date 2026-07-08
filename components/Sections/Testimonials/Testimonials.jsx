import { useState } from "react";

const testimonials = [
  {
    text: `FinFloh has transformed our credit-to-cash processes from credit onboarding in Salesforce to invoice-to-cash. Using AI-driven credit intelligence, automated workflows and native ERP-CRM sync, we are saving 200 man-hours per month and scaling it up to 400 man-hours soon. We have also reduced DSO by 40-50% and increased on-time payments by 10% for 30 days past due invoices.`,
    name: "Gopal Agarwal",
    designation: "Vice President and Head of Finance, Yellow AI",
    double_quote: "/images/double_quote.svg",
    image: "/images/pp-yellow.svg",
  },
  {
    text: `FinFloh has streamlined our Invoice-to-Cash process with automation and AI, saving 400 man-hours monthly while handling 2500+ invoices monthly & reducing overdue balances by 5.1% in two months.`,
    name: "Subhasish Sain",
    designation: "Business Head, Re Sustainability Ltd",
    double_quote: "/images/double_quote.svg",
    image: "/images/sustain_logo.svg",
  },
];

const Testimonial = () => {
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
      <h2
        className="lending-foldSecond"
        style={{ marginTop: "86px", fontSize: "28px" }}
      >
        Hear it from our Customers
      </h2>

      <div className=" container testimonial_section">
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

      <div className=" container testimonial-pagination-arrow">
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

export default Testimonial;