import React, { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";
import LinkButton, { LinkBtnType } from "../Common/LinkButton";
import { Theme, logoURLMap } from "../../utils/constants";
import { PRODUCT, PRODUCT_INFO_MAP } from "../Common/ProductArea";
import NavBarSmallScreen from "./NavBarSmallScreen";

const Navbar = ({ currentNavbar, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldSetScrolled = scrollTop > 0;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavComp = (props) => {
    return (
      <ul className="navbar-nav navbar-dropdown">
        <li
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(0)}
        >
          <a
            className="nav-link"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              maxWidth: "93px",
              color: currentNavbar === 0 ? "#00954A" : "#5C6662",
              fontWeight: currentNavbar === 0 ? "700" : "400",
            }}
            onClick={(e) => e.preventDefault()}
          >
            Invoice Validation Automation{" "}
          </a>
          <img src="images/right-arrow.svg" />
        </li>

        <li
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(1)}
        >
          <a
            className="nav-link"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              maxWidth: "93px",
              color: currentNavbar === 1 ? "#00954A" : "#5C6662",
              fontWeight: currentNavbar === 1 ? "700" : "400",
            }}
            onClick={(e) => e.preventDefault()}
          >
            Dispute Resolution
          </a>
          <img src="images/right-arrow.svg" />
        </li>

        <li
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(2)}
        >
          <a
            className="nav-link"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              maxWidth: "93px",
              color: currentNavbar === 2 ? "#00954A" : "#5C6662",
              fontWeight: currentNavbar === 2 ? "700" : "400",
            }}
          >
            Collections
          </a>
          <img src="images/right-arrow.svg" />
        </li>

        <li
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(3)}
        >
          <a
            className="nav-link"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              maxWidth: "93px",
              color: currentNavbar === 3 ? "#00954A" : "#5C6662",
              fontWeight: currentNavbar === 3 ? "700" : "400",
            }}
          >
            Cash Application
          </a>
          <img src="images/right-arrow.svg" />
        </li>
        <li
          className="nav-item"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection(4)}
        >
          <a
            className="nav-link"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              maxWidth: "93px",
              color: currentNavbar === 4 ? "#00954A" : "#5C6662",
              fontWeight: currentNavbar === 4 ? "700" : "400",
            }}
          >
            Credit Scoring & Decisions
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div className="bg-container stickNavbar">
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
              <Link href="/">
                <img
                  className="cursor-pointer"
                  src="/images/finfloh-logo.svg"
                  alt="Logo of FinFloh"
                />
              </Link>

              {/* Toggle navigation */}
              <div id="navbarSupportedContent" className={`navb w-100`}>
                <NavComp />
                <div className="others-options d-none d-sm-flex">
                  <LinkButton
                    type={LinkBtnType.SECONDARY}
                    theme={"Light"}
                    href={"/book-a-demo"}
                    // openInNewTab={true}
                    id={"demoButton"}
                  >
                    Book A Demo
                  </LinkButton>
                </div>
              </div>
              <NavBarSmallScreen Comp={NavComp} theme={"Light"} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
