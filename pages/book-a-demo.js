import BookDemoButton from "../components/Common/BookDemoButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import generateUtmUrls from "../utils/utmUrls";
import LinkButton from "../components/Common/LinkButton";
import CompaniesLogo from "../components/Common/CompaniesLogo";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";

const utmURLs = generateUtmUrls("book_a_demo");
import { PRODUCT } from "../components/Common/ProductArea";
export const PRODUCT_INFO_MAP_book_a_demo = {
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
// Testing for code push
const BookADemo = () => {
  return (
    <>
      <HeadComponent
        title="Book a Demo | FinFloh"
        description="Book a demo and experience the FinFloh platform live in action. Get all your questions answered by our accounts receivable experts."
        canonicalUrl="https://finfloh.com/book-a-demo"
        includePublisher
        pageType="ContactPage"
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Book a Demo",
            item: "https://finfloh.com/book-a-demo",
          },
        ]}
      />
      <WebsiteLayout
        utmURLs={utmURLs}
        PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_book_a_demo}
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
                <div className="book-a-demo-form">
                  <h1>Book Your Demo Today</h1>
                  <BookDemoButton
                    text={"Submit"}
                    isShowMobile
                    errorClassName={"bookAdemopage_bookYourDemoToday_error"}
                  />
                </div>
              </div>
            </div>

            {/* use components here */}
            <CompaniesLogo />
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default BookADemo;
