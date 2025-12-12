import React from "react";
import Link from "next/link";
import { PRODUCT, PRODUCT_INFO_MAP } from "../Common/ProductArea";
import {
  BookDemoRedirectInNewTab,
  BookDemoRedirectLink,
} from "../../utils/constants";

const AboutFinFloh = ({ utmURLs = {} }) => (
  <div className="aboutFinFooter">
    <div className="aboutFinFooterTop">
      <Link href={utmURLs?.logo_footer || "/"}>
        <a>
          <img src="/images/FinFloh-Primary-Logo.svg" alt="logo" />
        </a>
      </Link>
      <p>
        AI agents purpose-built for the CFO's office - transforming data chaos
        into streamlined cash flow by thinking and acting like your finance team
      </p>
    </div>
    <div className="footeremailsection">
      <p>
        You can contact us at{" "}
        <a href="mailto:sales@finfloh.com">sales@finfloh.com</a>
      </p>
    </div>
    {/* <div className="aboutFinFooterOffices">
      <p>
        Offices <br /> <span>Atlanta | Bangalore</span>
      </p>
    </div> */}
    <div className="aboutFinFooterBottom">
      <p>Our Social Handles</p>
      <div className="footerSocialHandles">
        <a href="https://www.linkedin.com/company/finfloh" target="_blank">
          <img src="/images/linkedin-logo.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/FinFloh" target="_blank">
          <img src="/images/twitter-logo.svg" alt="Twitter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCNraxyYw72Q87xncGvzs4-g"
          target="_blank"
        >
          <img src="/images/youtube-logo.svg" alt="youtube" />
        </a>
      </div>
    </div>
  </div>
);

const Features = ({ PRODUCT_INFO_MAP_url = {} }) => (
  <div className="footerFeatures">
    <h3>Features</h3>
    <div className="footerFeaturesInner">
      {Object.values(PRODUCT).map((product) => (
        <a
          key={product}
          className="footerFeaturesBtn"
          href={
            PRODUCT_INFO_MAP_url[product]?.url_footer ||
            PRODUCT_INFO_MAP[product]?.url
          }
        >
          {PRODUCT_INFO_MAP[product].title}
        </a>
      ))}
    </div>
  </div>
);

const Resources = ({ utmURLs = {} }) => (
  <div className="footerResources">
    <h3>Resources</h3>
    <div className="footerResourcesInner">
      <a href="/blog" className="footerResourcesBtn">
        Blog
      </a>
      <a href="/podcast" className="footerResourcesBtn">
        Podcast
      </a>
      <a href="/roi-calculator" className="footerResourcesBtn">
        ROI Calculator
      </a>
      <a href="/glossary" className="footerResourcesBtn">
        AR Glossary
      </a>
    </div>
    {/* Book a demo */}
    <div className="resourcesBookDemoContainer">
      <a
        href={
          utmURLs.bookDemo_footer ||
          utmURLs.homePage_bookDemo_footer ||
          BookDemoRedirectLink
        }
        target={BookDemoRedirectInNewTab ? "_blank" : null}
        className="footerResourcesBookADemoBtn"
        style={{ width: "116px" }}
      >
        Book a demo
      </a>
      <img src="/images/arrow-right.svg" alt="arrow-right" />
    </div>
  </div>
);

const Company = () => (
  <div className="footerCompany">
    <h3>Company</h3>
    <div className="footerCompanyInner">
      <a href="/why-finfloh" className="footerCompanyBtn">
        Why FinFloh
      </a>
      <a href="/pricing" className="footerCompanyBtn">
        Pricing
      </a>
      <a href="/about-us" className="footerCompanyBtn">
        About Us
      </a>
      <a href="/terms-of-use" className="footerCompanyBtn">
        Terms Of Use
      </a>
      <a href="/privacy-policy" className="footerCompanyBtn">
        Privacy Policy
      </a>
    </div>
  </div>
);

const Footer = (props) => {
  const { utmURLs = {}, PRODUCT_INFO_MAP_url = {} } = props;
  let currentYear = new Date().getFullYear();
  return (
    <div
      className="bg-container"
      style={{ marginTop: "120px", marginBottom: "24px" }}
    >
      <div className="container-main">
        <footer className="footerArea">
          <div className="footerAreaInner">
            <AboutFinFloh utmURLs={utmURLs} />

            <div className="footerAreaInnerRight">
              <Features
                utmURLs={utmURLs}
                PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_url}
              />
              <Resources />
              <Company utmURLs={utmURLs} />
            </div>
          </div>

          <div className="footerSocialHandles mobile-only">
            <p>Our Social Handles</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/finfloh"
                target="_blank"
              >
                <img src="/images/linkedin-logo.svg" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/FinFloh" target="_blank">
                <img src="/images/twitter-logo.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNraxyYw72Q87xncGvzs4-g"
                target="_blank"
              >
                <img src="/images/youtube-logo.svg" alt="youtube" />
              </a>
            </div>
          </div>

          <div className="copyrightArea">
            <p>Copyright &copy; {currentYear} Flohvision</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
