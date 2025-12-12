import React from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import LinkButton from "../components/Common/LinkButton";
const awards = () => {
  return (
    <>
      <HeadComponent
        title="FinFloh - Awards & Recognitions"
        description="Explore FinFloh's achievements and recognitions for transforming the office of the CFO with AI & automation."
      />
      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main">
            {/* Awards Header */}
            <div className="awards-header">
              <div className="awards-header-para">
                <p className="awards-header-main-heading">
                  FinFloh Awards & Recognitions
                </p>
                <p className="awards-header-subheading">
                  At FinFloh, we’re proud to be recognized for our innovation
                  and excellence in transforming the finance industry with AI,
                  Automations & Market Intelligence.
                </p>
              </div>
              <div className="awards-header-content">
                <p className="awards-header-heading">
                  FinFloh wins Momentum Leader Award for Credit, Collections &
                  Accounts Receivable at G2 Winter Awards
                </p>
                <img src="/images/awards-img.svg"  alt="award finfloh"/>
                <div>
                  <p className="awards-main-para-content">
                    Great news! FinFloh has been named the Momentum Leader in
                    the Credit, Collections & Accounts Receivable category at
                    the G2 Winter Awards for 2024. This recognition underscores
                    the company’s commitment to streamlining the credit
                    decisioning and accounts receivable processes for finance
                    teams through the power of AI and automation. <br />
                    <br /> By offering a comprehensive platform for smarter
                    credit onboarding decisions, automated invoicing,
                    streamlined collections, dispute resolution, and automated
                    cash application, FinFloh enables businesses to reduce
                    manual effort, make more informed decisions, and improve
                    cash flow. <br />
                    <br /> The award marks the culmination of a year filled with
                    milestones and growth for FinFloh. The company had the
                    privilege of onboarding forward-thinking enterprises such as
                    Yellow AI, Gupshup, Re Sustainability and many others, whose
                    trust in FinFloh’s vision has been a significant motivator
                    to keep innovating. Beyond this, FinFloh launched two
                    podcasts,{" "}
                    <a
                      href="https://www.youtube.com/playlist?list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3"
                      style={{ textDecoration: "underline", fontWeight: "500" }}
                    >
                      Inside the CFO Office
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.youtube.com/playlist?list=PLSh1ycsSrby8zvJ3xBfZfDjCg1Mvzapf-"
                      style={{ textDecoration: "underline", fontWeight: "500" }}
                    >
                      AI in Finance
                    </a>
                    , offering finance leaders insights into navigating the
                    challenges of today’s dynamic financial landscape. <br />{" "}
                    <br />
                    This recognition adds to an impressive list of achievements
                    in 2024. FinFloh began the year with a major win at the
                    Wharton India Startup Challenge, a prestigious honor that
                    validated its mission to reshape the finance industry. This
                    was followed by being named Best Accounts Receivable
                    Software Developer 2024 - USA and receiving the Top Trending
                    Software 2024 title from Software Suggest. The company also
                    earned the distinction of being a Top 3 Product of the Day
                    on Product Hunt twice, a reflection of the growing interest
                    and traction its platform has generated. <br />
                    <br />
                    FinFloh also has SOC2, GDPR and ISO certifications, further
                    strengthening its reputation as a secure and trusted partner
                    for enterprises. Earlier in the year, the company was
                    recognized at G2’s Spring, Fall, and Summer Awards,
                    cementing its status as a leader in the accounts receivable
                    technology space. The Momentum Leader title at the G2 Winter
                    Awards is a fitting recognition of FinFloh’s continued
                    impact and innovation. <br />
                    <br /> With a strong foundation built on innovation, trust,
                    and excellence, FinFloh is poised to continue redefining the
                    future of accounts receivable and credit decisioning for
                    years to come.
                  </p>
                </div>
              </div>
              <div
                className="whyfinfloh-newsletter-btn"
                style={{ marginTop: "120px" }}
              >
                <LinkButton
                  openInNewTab={true}
                  href="https://finfloh.com/book-a-demo?utm_source=why_finfloh&utm_medium=finfloh_website"
                >
                  Talk To Us
                </LinkButton>
              </div>
            </div>
            {/* why finfloh trusted section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "60px",
                marginBottom: "24px",
              }}
            >
              <p
                className="InspireAwards-heading "
                style={{ maxWidth: "100%" }}
              >
                Recognitions FinFloh got at G2 Awards for Credit, Collections &
                AR
              </p>
            </div>
            <div className="EnterpriseIcons-section">
              <div className="EnterpriseIcons">
                {/* Sliding Logos for Larger Screens */}
                <div className="logos">
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

            {/* icons */}
            <div className="InspireAwards-heading">
              Awards That Inspire Us to Do More
            </div>
            <div
              className="wealthFinance-banner-freetrail"
              style={{ marginTop: "36px", marginBottom: "120px" }}
            >
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
                <p>Wharton Challenge Winners’24</p>
              </div>
            </div>

            {/* newsletters section */}
            <div className="whyfinfloh-newsletter">
              <div className="whyfinfloh-newsletter-cnt">
                <p>See why FinFloh is Trusted by Industry Leaders</p>
              </div>
              <div className="whyfinfloh-newsletter-btn">
                <LinkButton
                  openInNewTab={true}
                  href="https://finfloh.com/book-a-demo?utm_source=awards_page&utm_medium=finfloh_website"
                >
                  Book Your Demo Today
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default awards;
