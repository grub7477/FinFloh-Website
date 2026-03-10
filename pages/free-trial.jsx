import BookDemoButton from "../components/Common/BookDemoButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import { PRODUCT } from "../components/Common/ProductArea";
import LinkButton from "../components/Common/LinkButton";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";

import { useState } from "react";
const utmURLs = generateUtmUrls("try_for_free");
export const PRODUCT_INFO_MAP_try_for_free = {
  [PRODUCT.Integration]: {
    title: "Invoice Automation",
    url_navbar: utmURLs.integrationsAndInvoiceVerification_navbar,
    url_footer: utmURLs.integrationsAndInvoiceVerification_footer,
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url_navbar: utmURLs.collaborativeCommunication_navbar,
    url_footer: utmURLs.collaborativeCommunication_footer,
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url_navbar: utmURLs.accountsReceivableCollections_navbar,
    url_footer: utmURLs.accountsReceivableCollections_footer,
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    url_navbar: utmURLs.creditdecisioning_navbar,
    url_footer: utmURLs.creditdecisioning_footer,
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url_navbar: utmURLs.automatedCashApplication_navbar,
    url_footer: utmURLs.automatedCashApplication_footer,
  },
};
const AR_MANAGEMENT = [
  { title: "30%", description: "Reduction in DSO" },
  { title: "20%", description: "Increase in Cash Flows" },
  { title: "70%", description: "Reduction in Decision Making Time" },
  { title: "50%", description: "Increase in Collections Efficiency" },
];
const BookADemo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <>
      <HeadComponent
        title="Get a 7-Day Free Trial | FinFloh "
        description="Gain a 7-day full free access to FinFloh's end-to-end invoice-to-cash platform and wave your path to become best-in-class."
        canonicalUrl="https://finfloh.com/free-trial"
        includeIsPartOf
        includeAbout
        aboutProps={{
          name: "AI-Driven Accounts Receivable & Credit Automation",
        }}
        includeOffer
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Free Trial",
            item: "https://finfloh.com/free-trial",
          },
        ]}
      />

      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_try_for_free}
      >
        <div className="book-a-demo-container bg-container">
          <div className=" container-main">
            <div className="book-a-demo-heroSection book-a-demo-bgcolor">
              <div className="book-a-demo-left">
                <div className="book-a-demo-left-first">
                  <div className="book-a-demo-content">
                    <h2 className="book-a-demo-title">
                      Automated Accounts Receivable & Credit Decisions
                      for Modern Finance Teams
                    </h2>
                    <p className="book-a-demo-subtitle">
                      Start your free trial to see how FinFloh streamlines AR,
                      improves credit decisions, accelerates collections, and
                      enhances cash flow visibility.
                    </p>
                  </div>

                  <div className="book-a-demo-icons">
                    <div className="book-a-demo-icon">
                      <img
                        src="/images/Rectangle 2.svg"
                        alt="Collections finfloh"
                      />
                      <p>Collections</p>
                    </div>
                    <div className="book-a-demo-icon">
                      <img
                        src="/images/Rectangle 3.svg"
                        alt="cash Application finfloh"
                      />
                      <p>Cash Application</p>
                    </div>
                    <div className="book-a-demo-icon">
                      <img src="/images/Rectangle 4.svg" alt="Credit finfloh" />
                      <p>Credit Decisions</p>
                    </div>
                    <div className="book-a-demo-icon">
                      <img
                        src="/images/Rectangle 5.svg"
                        alt="Invoice finfloh"
                      />
                      <p>Invoice Automation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="formSection-right">
                <div className="book-a-demo-form " id="freeTrail-form">
                  <h1>
                    Start Your{" "}
                    <span style={{ color: "#00954A" }}>Free Trial</span> Today
                  </h1>
                  <BookDemoButton
                    text={"Submit"}
                    isShowMobile
                    showFreeTrail
                    templateID={"template_yse6rfm"}
                    errorClassName={"bookAdemopage_bookYourDemoToday_error"}
                  />
                </div>
              </div>
            </div>
            <CompaniesLogo />
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default BookADemo;
