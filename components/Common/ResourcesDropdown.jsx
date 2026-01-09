// components/ProductsDropdown.js
import Link from "next/link";

const ResourcesDropdown = () => {
  const ResourcesData = {
    others: [
      {
        title: "Blog",
        subtitle: "Latest trends in invoice to cash",
        icon: "/images/book_ribbon.svg",
        url: "/blog",
      },
      {
        title: "Podcast",
        subtitle: "Actionable insights from finance leaders",
        icon: "/images/mic_double.svg",
        url: "/podcast",
      },

      {
        title: "ROI Calculator",
        subtitle: "Calculate your cash savings",
        icon: "/images/calculate.svg",
        url: "/roi-calculator",
      },
      {
        title: "AR Glossary",
        subtitle: "Key AR Terms Explained",
        icon: "/images/ar_glossary.svg",
        url: "/glossary",
      },
    ],

    podcast: [
      // latest podcast content manuaaly added
      {
        heading: "Podcast",
        title:
          "The Billing Backbone: The Critical Connection Between Invoices and Orders",
        subtitle: "With Brandon Polson",
        image:
          "/images/podcast/credit-to-cash/ep01/BrandonPolson-ep1-C2C-mobile.svg",
        url: "/podcast/the-billing-backbone:-critical-connection-between-invoices-&-orders",
      },

      // latest blog content manually added
      {
        heading: "Blog",
        title: "Have you outgrown Quickbooks? 9 Signs – It’s Time to Upgrade",
        subtitle: "4 mins read",
        image: "/images/latestBlog.svg",
        url: "https://finfloh.com/blog/outgrowing-quickbooks-9-signs-to-upgrade",
      },
    ],
  };

  return (
    // <ul className="dropdown-menu dropdown-menu1">
    <div className="products-dropdown">
      {/* Left Section - Get Paid Faster */}
      <div className="products-dropdown-left">
        <div className="products-dropdown-left-heading">KNOWLEDGE HUB</div>
        {ResourcesData.others.map((product, index) => (
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

      {/* Right Section - Make Better Decisions */}
      <div className="products-dropdown-right">
        <div>
          <div className="products-dropdown-left-heading">
            WHAT’S TRENDING ?
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {ResourcesData.podcast.map((resource, index) => (
              <a
                href={resource.url}
                activeClassName="active"
                key={index}
                style={{ gap: "24px" }}
                target="_blank"
              >
                <div className="resource-dropdown-right">
                  <div className="resource-dropdown-left-image">
                    <img src={resource.image} alt="PODCAST-IMAGE" />
                  </div>
                  <div className="resource-dropdown-right-content">
                    <div className="resource-dropdown-right-heading">
                      {resource.heading}
                    </div>
                    <div className="resource-dropdown-right-title">
                      {resource.title}
                    </div>
                    <div className="resource-dropdown-right-subtitle">
                      {resource.subtitle}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </ul>
  );
};

export default ResourcesDropdown;
