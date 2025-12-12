// components/ProductsDropdown.js
import Link from "next/link";

const ProductsDropdown = () => {
  const productData = {
    GET_PAID_FASTER: [
      {
        title: "Invoice Validation Automation",
        subtitle: "Invoice generation, validation & sending",
        icon: "/images/file_export.svg",
        url: "/invoice-validation-automation",
      },
      {
        title: "Receivables Collection",
        subtitle: "Automate AR collection follow-ups",
        icon: "/images/attach_email.svg",
        url: "/accounts-receivable-collections",
      },
      // {
      //   title: "Dispute Resolution",
      //   subtitle: "Put an end to dispute loops",
      //   icon: "/images/quick_phrases.svg",
      //   url: "/collaborative-communication",
      // },
      {
        title: "Cash Application",
        subtitle: "Auto match invoices with payments",
        icon: "/images/credit_score.svg",
        url: "/automated-cash-application-software",
      },
    ],
    MAKE_BETTER_DECISIONS: [
      {
        title: "AI-driven Credit Decisions",
        subtitle: "Better contract/pricing terms & ARR",
        icon: "/images/Magic_button.svg",
        url: "/credit-decisioning",
      },
      // {
      //   title: "Automated Onboarding in CRM",
      //   subtitle: "Quicker opportunity to go-live",
      //   icon: "/images/rubric.svg",
      //   url: "/credit-decisioning/#section-1",
      // },
      {
        title: "ML-driven Credit Scoring",
        subtitle: "Dynamic market/historical data checks",
        icon: "/images/readiness_score.svg",
        url: "/credit-decisioning/#section-2",
      },
      // {
      //   title: "Existing Buyer's Risk Control",
      //   subtitle: "Automated periodic reviews",
      //   icon: "/images/restore_page.svg",
      //   url: "/credit-decisioning/#section-3",
      // },
    ],

    WHATS_NEW: [
      {
        title: "FlohSense AI -",
        description: "Your 24x7 Finance Communications Agent",
        icon: "/images/Live Icon.svg",
        url: "/flohsense-ai-agent",
      },
    ],
  };

  return (
    // <ul className="dropdown-menu dropdown-menu1">
    <div className="products-dropdown">
      {/* Left Section - Get Paid Faster */}
      <div className="products-dropdown-left">
        <div className="products-dropdown-left-heading">Get Paid Faster</div>
        {productData.GET_PAID_FASTER.map((product, index) => (
          <Link href={product.url} activeClassName="active" key={index}>
            <div className="products-dropdown-left-content">
              <div className="products-dropdown-left-icon">
                <img src={product.icon} alt={`${product.title} Icon`} />
              </div>
              <div className="products-dropdown-left-content-main">
                <div className="products-dropdown-left-title">
                  {product.title}
                </div>
                <div className="products-dropdown-left-subtitle">
                  {product.subtitle}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* middle Section - Make Better Decisions */}
      <div className="products-dropdown-left">
        <div className="products-dropdown-left-heading">
          Make Better Decisions
        </div>
        {productData.MAKE_BETTER_DECISIONS.map((product, index) => (
          <Link href={product.url} activeClassName="active" key={index}>
            <div className="products-dropdown-left-content">
              <div className="products-dropdown-left-icon">
                <img src={product.icon} alt={`${product.title} Icon`} />
              </div>
              <div className="products-dropdown-left-content-main">
                <div className="products-dropdown-left-title">
                  {product.title}
                </div>
                <div className="products-dropdown-left-subtitle">
                  {product.subtitle}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* end Section - what's new */}
      <div className="products-dropdown-right">
        {/* what's new */}
        <div>
          <div className="products-dropdown-right-heading">WHAT'S NEW ?</div>
          {productData.WHATS_NEW.map((product, index) => (
            <Link href={product.url} activeClassName="active" key={index}>
              <div
                className="products-dropdown-right-content"
                style={{ background: "#0C492B" }}
                key={index}
              >
                <div className="products-dropdown-right-content-main">
                  <img
                    src={product.icon}
                    alt={`${product.title} Icon`}
                    style={{ padding: "0px" }}
                  />
                  <div
                    className="products-dropdown-left-title"
                    style={{
                      color: "#FFF",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {product.title}
                    <p
                      className="products-dropdown-right-content-para"
                      style={{ color: "#FFF" }}
                    >
                      {" "}
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Static Support Text */}
        <div className="products-dropdown-right-content-para">
          Not sure which product fits your business needs?
          <Link href="https://finfloh.com/book-a-demo?utm_source=homepage_navbar&utm_medium=finfloh_website">
            <p
              style={{
                color: "#00954a",
                fontWeight: "500",
                textDecoration: "underline",
                textTransform: "unset",
              }}
            >
              Talk to our experts
            </p>
          </Link>
        </div>
      </div>
    </div>
    // </ul>
  );
};

export default ProductsDropdown;
