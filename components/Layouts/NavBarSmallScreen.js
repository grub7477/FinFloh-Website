import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import LinkButton, { LinkBtnType } from "../Common/LinkButton";
import { Theme, logoURLMap } from "../../utils/constants";

const NavBarSmallScreen = ({ Comp, theme }) => {
  const logoURL = logoURLMap[Theme.LIGHT];
  const [open, setOpen] = useState(false);
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

  const menuImageSrc =
    theme === Theme.DARK
      ? isScrolled
        ? "/images/menu_black.svg"
        : "/images/menu_black.svg"
      : "/images/menu_black.svg";
  return (
    <>
      <a
        className="d-lg-none nav-menu-btn"
        onClick={() => setOpen(true)}
        style={{ width: "fit-content", padding: "3px" }}
      >
        <Image src={menuImageSrc} alt="Black menu icon FinFloh" />
      </a>
      <Offcanvas show={open} onHide={() => setOpen(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logoURL} alt="Logo of FinFloh" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
            <Comp
              theme={Theme.LIGHT}
              onClickClose={() => setOpen(false)}
              smallerScreen={true}
            />
            <LinkButton
              href="/book-a-demo"
              theme={Theme.LIGHT}
              type={LinkBtnType.SECONDARY}
              style={{ width: "100%" }}
              id="demoButton"
            >
              Book A Demo
            </LinkButton>
            <LinkButton
              href="https://finfloh.com/free-trial"
              theme={Theme.LIGHT}
              type={LinkBtnType.SECONDARY}
              style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
            >
              Try For Free
            </LinkButton>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBarSmallScreen;
