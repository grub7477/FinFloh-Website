import React, { useEffect, useState, useRef } from "react";
import Link from "../../utils/ActiveLink";
import LinkButton, { LinkBtnType } from "../Common/LinkButton";
import { Theme, logoURLMap } from "../../utils/constants";
import { PRODUCT, PRODUCT_INFO_MAP } from "../Common/ProductArea";
import NavBarSmallScreen from "./NavBarSmallScreen";
import ProductsDropdown from "../Common/ProductsDropdown";
import ResourcesDropdown from "../Common/ResourcesDropdown";
import { MainBanner } from "../UI/Banner/MainBanner";
import IndustriesDropdown from "../Common/industriesDropdown";

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
            <ProductsDropdown />
          </ul>
        </li>

        <li className="nav-item">
          <Link href="#">
            <a
              className="nav-link"
              style={aStyle}
              onClick={(e) => e.preventDefault()}
            >
              Industries{" "}
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
            <IndustriesDropdown />
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
            <ResourcesDropdown />
          </ul>
        </li>
        <li className="nav-item">
          <Link
            href={utmURLs?.partner_program || "/partner-program"}
            activeClassName="active"
          >
            <a className="nav-link" style={aStyle}>
              Partner{" "}
              {props.smallerScreen ? <img src={"/images/Redirect.svg"} /> : ""}
            </a>
          </Link>
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
      {props.showMainBannerTop && <MainBanner bannerRef={bannerRef} />}
      {/* {props.showMainBannerTop && (
        <div
          className="banner-container"
          ref={bannerRef}
          style={{ cursor: "pointer" }}
        >
          <a
            href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
            target="_blank"
          >
            {" "}
            <div className="banner-left">
              <img
                className="banner-icon"
                src="/images/MomentumLeaderSpring.svg"
                alt="Inside the CFO Office Icon FinFloh"
              />
            </div>
          </a>

          <a
            href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
            target="_blank"
          >
            <div className="banner-middle">
              <p className="banner-middle-title">
                FinFloh is now the Most Trending Accounts Receivable Automation
                Software on G2
              </p>
            </div>
          </a>

          <a
            href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
            target="_blank"
          >
            <div className="banner-right">
              <a
                href="https://finfloh.com/why-finfloh?utm_source=homepage_announcementstrip"
                target="_blank"
              >
                <button> Why FinFloh</button>
                <img
                  className="mobile-icon"
                  src="/images/redirect-icon.svg"
                  alt="External link icon FinFloh"
                />
              </a>
            </div>
          </a>
        </div>
      )} */}

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
                    {/* {noNavbar && (
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
                    )} */}
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
