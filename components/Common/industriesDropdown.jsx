// components/ProductsDropdown.js
import Link from "next/link";

const IndustriesDropdown = () => {
  const IndustriesData = {
    Industries: [
      {
        title: "Services",
        /*subtitle: "Automate billing and collections.",*/
        icon: "/icons/services.svg",
        url: "/industries/services",
      },
      {
        title: "Travel",
        /*subtitle: "Automate billing and collections.",*/
        icon: "/icons/travel.svg",
        url: "/industries/travel",
      },
    ],
  };

  return (
    // <ul className="dropdown-menu dropdown-menu1">
    <div className="products-dropdown">
      {/* Left Section - Get Paid Faster */}
      <div className="products-dropdown-left">
        <div className="products-dropdown-left-heading">All Industries</div>
        {IndustriesData.Industries.map((product, index) => (
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
      {/* <div className="products-dropdown-right">
        <div>
          <div className="products-dropdown-left-heading">
            WHAT’S TRENDING ?
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {IndustriesData.Industries.map((resource, index) => (
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
      </div> */}
    </div>
    // </ul>
  );
};

export default IndustriesDropdown;
