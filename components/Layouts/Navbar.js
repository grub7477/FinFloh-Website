import React, { useEffect, useState, useRef } from "react";
import Link from "../../utils/ActiveLink";
import LinkButton, { LinkBtnType } from "../Common/LinkButton";
import { Theme, logoURLMap } from "../../utils/constants";
import { PRODUCT, PRODUCT_INFO_MAP } from "../Common/ProductArea";
import NavBarSmallScreen from "./NavBarSmallScreen";
import ProductsDropdown from "../Common/ProductsDropdown";
import ResourcesDropdown from "../Common/ResourcesDropdown";
const Navbar = (props) => {
  const logoURL = logoURLMap[props.theme];

  const { noNavbar = true } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);

  const { utmURLs = {}, PRODUCT_INFO_MAP_url = {} } = props;
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const bannerHeight = bannerRef.current
        ? bannerRef.current.offsetHeight
        : 0;
      const shouldSetScrolled = scrollTop >= bannerHeight;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavComp = (props) => {
    const aStyle = {
      color:
        props.theme === Theme.DARK
          ? isScrolled
            ? "#0c1612"
            : "#0c1612"
          : "#0c1612",
    };

    return (
      <ul className={`${!noNavbar && "d-none"} navbar-nav navbar-dropdown`}>
        <li className="nav-item">
          <Link
            href={
              // utmURLs?.pricing_navbar ||
              // utmURLs?.homePage_pricing_navbar ||
              "/why-finfloh"
            }
          >
            <a className="nav-link" style={aStyle}>
              Why FinFloh{" "}
              {props.smallerScreen ? <img src={"/images/Redirect.svg"} /> : ""}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#">
            <a
              className="nav-link"
              style={aStyle}
              onClick={(e) => e.preventDefault()}
            >
              Products{" "}
              {props.smallerScreen ? (
                ""
              ) : (
                <img
                  src={
                    props.theme === Theme.LIGHT
                      ? "/images/Dropdown.svg"
                      : "/images/Dropdown.svg"
                  }
                  alt="Dropdown menu icon FinFloh"
                />
              )}
            </a>
          </Link>
          <ul className="dropdown-menu dropdown-menu1">
            {/* <div className="products-dropdown">
              <div className="products-dropdown-left">
                <div className="products-dropdown-left-heading">
                  Get Paid Faster
                </div>
                <Link href="/products/credit-decisioning-ai">
                  <a>
                    <div className="products-dropdown-left-content">
                      <div className="products-dropdown-left-icon">
                        <img src="/images/file_export.svg" />
                      </div>
                      <div className="products-dropdown-left-content-main">
                        <div className="products-dropdown-left-title">
                          Invoice Verification & Delivery
                        </div>
                        <div className="products-dropdown-left-subtitle">
                          Auto verify invoices & deliver
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className="products-dropdown-left-content">
                  <div className="products-dropdown-left-icon">
                    <img src="/images/attach_email.svg" />
                  </div>
                  <div className="products-dropdown-left-content-main">
                    <div className="products-dropdown-left-title">
                      Invoice Verification & Delivery
                    </div>
                    <div className="products-dropdown-left-subtitle">
                      Auto verify invoices & deliver
                    </div>
                  </div>
                </div>
                <div className="products-dropdown-left-content">
                  <div className="products-dropdown-left-icon">
                    <img src="/images/quick_phrases.svg" />
                  </div>
                  <div className="products-dropdown-left-content-main">
                    <div className="products-dropdown-left-title">
                      Invoice Verification & Delivery
                    </div>
                    <div className="products-dropdown-left-subtitle">
                      Auto verify invoices & deliver
                    </div>
                  </div>
                </div>
                <div className="products-dropdown-left-content">
                  <div className="products-dropdown-left-icon">
                    <img src="/images/credit_score.svg" />
                  </div>
                  <div className="products-dropdown-left-content-main">
                    <div className="products-dropdown-left-title">
                      Invoice Verification & Delivery
                    </div>
                    <div className="products-dropdown-left-subtitle">
                      Auto verify invoices & deliver
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-dropdown-right">
                <div>
                  <div className="products-dropdown-left-heading">
                    Make Better Decisions
                  </div>
                  <div className="products-dropdown-right-content">
                    <div className="products-dropdown-left-icon">
                      <img src="/images/file_export.svg" />
                    </div>
                    <div className="products-dropdown-left-content-main">
                      <div className="products-dropdown-left-title">
                        Invoice Verification & Delivery
                      </div>
                      <div className="products-dropdown-left-subtitle">
                        Auto verify invoices & deliver
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="products-dropdown-left-heading">
                    Integrate with Ease
                  </div>
                  <div className="products-dropdown-right-content">
                    <div className="products-dropdown-left-icon">
                      <img src="/images/file_export.svg" />
                    </div>
                    <div className="products-dropdown-left-content-main">
                      <div className="products-dropdown-left-title">
                        Invoice Verification & Delivery
                      </div>
                      <div className="products-dropdown-left-subtitle">
                        Auto verify invoices & deliver
                      </div>
                    </div>
                  </div>
                </div>

                <div className="products-dropdown-right-content-para">
                  Still not sure on what product is best for your businesss
                  contact our <span>customer support</span>
                </div>
              </div>
            </div> */}
            <ProductsDropdown />
            {/* {Object.values(PRODUCT).map((product) => {
              return (
                <li key={product}>
                  <Link
                    href={
                      PRODUCT_INFO_MAP_url[product]?.url_navbar ||
                      PRODUCT_INFO_MAP[product]?.url
                    }
                    activeClassName="active"
                  >
                    <a className="nav-link">
                      {PRODUCT_INFO_MAP[product].title}
                    </a>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </li>

        <li className="nav-item">
          <Link href="#">
            <a
              className="nav-link"
              style={aStyle}
              onClick={(e) => e.preventDefault()}
            >
              Resources{" "}
              {props.smallerScreen ? (
                ""
              ) : (
                <img
                  src={
                    props.theme === Theme.LIGHT
                      ? "/images/Dropdown.svg"
                      : "/images/Dropdown.svg"
                  }
                  alt="Dropdown menu icon FinFloh"
                />
              )}
            </a>
          </Link>

          <ul className="dropdown-menu dropdown-menu1">
            {/* <li>
              <a className="nav-link" href="/blog" onClick={props.onClickClose}>
                Blog
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/roi-calculator"
                onClick={props.onClickClose}
              >
                ROI Calculator
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="/podcast"
                onClick={props.onClickClose}
              >
                Podcast
              </a>
            </li> */}
            <ResourcesDropdown />
          </ul>
        </li>

        <li className="nav-item">
          <Link
            href={utmURLs?.about_us_nabvar || "/about-us"}
            activeClassName="active"
          >
            <a className="nav-link" style={aStyle}>
              Company{" "}
              {props.smallerScreen ? <img src={"/images/Redirect.svg"} /> : ""}
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            href={
              utmURLs?.pricing_navbar ||
              utmURLs?.homePage_pricing_navbar ||
              "/pricing"
            }
          >
            <a className="nav-link" style={aStyle}>
              Pricing{" "}
              {props.smallerScreen ? <img src={"/images/Redirect.svg"} /> : ""}
            </a>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      {props.showMainBannerTop && (
        // <div
        //   className="banner-container"
        //   ref={bannerRef}
        //   style={{ cursor: "pointer" }}
        // >
        //   <a
        //     href="/podcast/cfo-leadership-at-public-firms-strategy-scale-ai?type=inside-the-cfo-office"
        //     target="_blank"
        //   >
        //     {" "}
        //     <div className="banner-left">
        //       <img
        //         className="banner-icon"
        //         src="/images/banner-icon.svg"
        //         alt="Inside the CFO Office Icon FinFloh"
        //       />
        //     </div>
        //   </a>

        //   <a
        //     href="/podcast/cfo-leadership-at-public-firms-strategy-scale-ai?type=inside-the-cfo-office"
        //     target="_blank"
        //   >
        //     <div className="banner-middle">
        //       <p className="banner-middle-title">
        //         PODCAST . EP 11 . Gary Lu . CFO . Biomerica
        //       </p>
        //       <p className="banner-middle-subHeading">
        //         CFO Leadership at Public Firms: Strategy, Scale & AI
        //       </p>
        //     </div>
        //   </a>

        //   <a
        //     href="/podcast/cfo-leadership-at-public-firms-strategy-scale-ai?type=inside-the-cfo-office"
        //     target="_blank"
        //   >
        //     <div className="banner-right">
        //       <a
        //         href="/podcast/cfo-leadership-at-public-firms-strategy-scale-ai?type=inside-the-cfo-office"
        //         target="_blank"
        //       >
        //         <button> Watch Video</button>
        //         <img
        //           className="mobile-icon"
        //           src="/images/redirect-icon.svg"
        //           alt="External link icon FinFloh"
        //         />
        //       </a>
        //     </div>
        //   </a>
        // </div>
        // <div
        //   className="banner-container"
        //   ref={bannerRef}
        //   style={{ cursor: "pointer" }}
        // >
        //   <a
        //     href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
        //     target="_blank"
        //   >
        //     {" "}
        //     <div className="banner-left">
        //       <img
        //         className="banner-icon"
        //         src="/images/MomentumLeaderSpring.svg"
        //         alt="Inside the CFO Office Icon FinFloh"
        //       />
        //     </div>
        //   </a>

        //   <a
        //     href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
        //     target="_blank"
        //   >
        //     <div className="banner-middle">
              
        //       <p className="banner-middle-title">
        //       FinFloh is now the Most Trending Accounts Receivable Automation Software on G2
        //       </p>
        //     </div>
        //   </a>

        //   <a
        //     href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
        //     target="_blank"
        //   >
        //     <div className="banner-right">
        //       <a
        //         href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
        //         target="_blank"
        //       >
        //         <button> Why FinFloh</button>
        //         <img
        //           className="mobile-icon"
        //           src="/images/redirect-icon.svg"
        //           alt="External link icon FinFloh"
        //         />
        //       </a>
        //     </div>
        //   </a>
        // </div>
        // <div>
        //   <a
        //     href="https://www.producthunt.com/posts/finfloh-credit-decisioning-ai-2"
        //     target="_blank"
        //     style={{ width: "100%" }}
        //   >
        //     <div className="banner-new-container" ref={bannerRef}>
        //       <div className="banner-new">
        //         <div className="banner-new-left">
        //           <div className="live-div">
        //             <img src="/images/logos/Ellipse1.svg" />
        //             <p>LIVE</p>
        //           </div>
        //           <p>
        //             Hi 👋, Check out FinFloh Credit Decisioning AI on Product
        //             Hunt 🎉
        //           </p>
        //         </div>
        //         <div className="banner-new-right">
        //           <a
        //             href="https://www.producthunt.com/posts/finfloh-credit-decisioning-ai-2"
        //             target="_blank"
        //           >
        //             <img
        //               src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=438955&theme=light"
        //               alt="FinFloh - Accounts&#0032;receivable&#0032;software&#0032;for&#0032;CFOs&#0032;&#0038;&#0032;B2B&#0032;finance&#0032;teams | Product Hunt"
        //               // style="width: 250px; height: 54px;"
        //               // width="250"
        //               // height="54"
        //               style={{ width: "250px", height: "54px" }}
        //             />
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //   </a>
        // </div>

        // <div>
        //   <a
        //     href="https://finfloh.com/book-a-demo?utm_source=homepage_announcement_strip&utm_medium=finfloh_website"
        //     target="_blank"
        //     style={{ width: "100%" }}
        //   >
        //     <div className="banner-new-container" ref={bannerRef}>
        //       <div className="banner-new container-main">
        //         <div className="banner-new-left">
        //           <div className="live-div">
        //             <img src="/images/g2-award-logo.svg" />
        //             <p style={{ fontWeight: "700", color: "#021",width: '116px' }}>
        //               G2 Awards
        //             </p>
        //           </div>
        //           <p>
        //             FinFloh awarded with Momentum Leader in the Credit,
        //             Collections & Accounts Receivable category <br/>at  G2 Winter
        //             Awards
        //           </p>
        //         </div>
        //         <div className="banner-new-right">
        //           {/* <a
        //             href="https://www.producthunt.com/posts/finfloh-credit-decisioning-ai-2"
        //             target="_blank"
        //           >
        //             <img
        //               src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=438955&theme=light"
        //               alt="FinFloh - Accounts&#0032;receivable&#0032;software&#0032;for&#0032;CFOs&#0032;&#0038;&#0032;B2B&#0032;finance&#0032;teams | Product Hunt"
        //               // style="width: 250px; height: 54px;"
        //               // width="250"
        //               // height="54"
        //               style={{ width: "250px", height: "54px" }}
        //             />
        //           </a> */}
        //           <LinkButton
        //             type={LinkBtnType.SECONDARY}
        //             style={{
        //               background: "#021",
        //               color: "#fff",
        //               borderRadius: "9px",
        //               padding: "12px 16px",
        //             }}
        //             // theme={!isScrolled ? props.theme : "Light"}
        //             href={
        //               "https://finfloh.com/book-a-demo?utm_source=homepage_announcement_strip&utm_medium=finfloh_website"
        //             }
        //             id={"demoButton"}
        //           >
        //             Book A Demo
        //           </LinkButton>
        //         </div>
        //       </div>
        //     </div>
        //   </a>
        // </div>
        <div></div>
      )}

      <div
        className={`${
          props.theme === Theme.DARK ? "bg-container" : "bg-container"
        } ${isScrolled ? "stickNavbarcolor" : "stickNavbar"}`}
      >
        <div className="container-main noPadding">
          <div
            id="navbar"
            className="navbar-area navbar-style-3 container-main"
            style={{ padding: "0px" }}
          >
            <nav className="navbar navbar-expand-md navbar-light pos-rel">
              <div
                className="container"
                style={{ maxWidth: "100%", padding: "0" }}
              >
                <Link href={utmURLs?.logo_navbar || "/"}>
                  <img
                    className="cursor-pointer"
                    src={logoURL}
                    alt="Logo of FinFloh"
                  />
                </Link>
                {/* Toggle navigation */}
                <div
                  id="navbarSupportedContent"
                  className={`navb ${!noNavbar ? "w-0" : "w-100"}`}
                >
                  <NavComp {...props} />
                  <div className="others-options d-none d-sm-flex">
                    {!noNavbar && (
                      <LinkButton
                        href={
                          utmURLs?.freeTrial_navbar ||
                          utmURLs?.homePage_freeTrial_navbar ||
                          "https://finfloh.com/free-trial"
                        }
                        theme={!isScrolled ? props.theme : "Light"}
                        type={LinkBtnType.SECONDARY}
                      >
                        Try For Free
                      </LinkButton>
                    )}
                    {noNavbar && (
                      <div className="try-for-free-btn">
                        <LinkButton
                          href={
                            utmURLs?.freeTrial_navbar ||
                            utmURLs?.homePage_freeTrial_navbar ||
                            "https://finfloh.com/free-trial"
                          }
                          theme={!isScrolled ? props.theme : "Light"}
                          type={LinkBtnType.SECONDARY}
                        >
                          Try For Free
                        </LinkButton>
                      </div>
                    )}
                    <LinkButton
                      type={LinkBtnType.SECONDARY}
                      theme={!isScrolled ? props.theme : "Light"}
                      href={
                        utmURLs?.bookDemo_navbar ||
                        utmURLs?.homePage_bookDemo_navbar ||
                        "/book-a-demo"
                      }
                      id={"demoButton"}
                    >
                      Book A Demo
                    </LinkButton>
                  </div>
                </div>

                <NavBarSmallScreen Comp={NavComp} theme={props.theme} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
