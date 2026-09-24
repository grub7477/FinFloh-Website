// components/ProductsDropdown.js
import Link from "next/link";

const AboutFinFlohDropdown = () => {
  const productData = {
    ABOUTFINFLOH: [
      {
        title: "Why FinFloh",
        // subtitle: "Contract insights & analysis",
        icon: "/icons/integrations/infinity.svg",
        url: "/why-finfloh",
      },
      {
        title: "About FinFloh",
        // subtitle: "Invoice generation, validation & sending",
        icon: "/icons/integrations/info.svg",
        url: "/about-us",
      },
    ],

    INTEGRATIONS: [
      {
        title: "Oracle Netsuite",
        // description: "ERP",
        icon: "/icons/integrations/netsuite_icon.svg",
        url: "/integrations/netsuite",
      },
    ],
  };

  return (
    // <ul className="dropdown-menu dropdown-menu1">
    <div className="products-dropdown">
      {/* Left Section - Get Paid Faster */}
      <div className="products-dropdown-left">
        <div className="products-dropdown-left-heading">Learn About FinFloh</div>
        {productData.ABOUTFINFLOH.map((product, index) => (
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
          Integrations
        </div>
        {productData.INTEGRATIONS.map((product, index) => (
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
          {/* <div className="products-dropdown-right-heading">WHAT'S NEW ?</div> */}
          {/* {productData.WHATS_NEW.map((product, index) => (
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
          ))} */}
        </div>

        {/* Static Support Text */}
        {/* <div className="products-dropdown-right-content-para">
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
        </div> */}
      </div>
    </div>
    // </ul>
  );
};

export default AboutFinFlohDropdown;
