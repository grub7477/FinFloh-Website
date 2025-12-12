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
    title: "Invoice Validation Automation",
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
                      Automated Accounts Receivable  & Credit Decisions
                      for Modern Finance Teams
                    </h2>
                    <p className="book-a-demo-subtitle">
                      Schedule a brief call to see the platform live-in-action
                      and understand how it aligns with your business needs.
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

          {/* <div className="why-user-love-us container-main">
            <div className="us-container1">
              <div>
                <span>
                  Why Users <br />
                  Love Us
                </span>
              </div>

              <div className="certificate-banners">
                <img src="/images/SoftwareTopTrending2024.svg" />
                <img src="/images/AccountsReceivable_1.svg" />
                <img src="/images/AccountsReceivable_4.svg" />
                <img src="/images/AccountsReceivable_3.svg" />
              </div>
            </div>
            <div className="us-container">
              <div className="us-container-content">
                <img src="/images/“icon.svg" />
                <p>
                  I think the platform's ability to establish automated
                  follow-ups, tailored to distinct workflows defined by customer
                  risk segments has led our team to never miss a payment
                  reminder.”
                </p>
              </div>
            </div>
            <div className="us-container">
              <div className="us-container-content">
                <img src="/images/“icon.svg" />
                <p>
                  “I am able to manage all my receivables data under a single
                  solution. It has completely removed our team's need to switch
                  between tools to arrive at a particular conclusion or
                  decision.”
                </p>
              </div>
            </div>
          </div> */}
          <div className="container-main">
            <TestimonialsWhyTrust />
          </div>

          <div
            className="collection-cont lending-fold2"
            style={{ flexDirection: "column" }}
          >
            <h2
              className="titleStyle"
              style={{
                maxWidth: "800px",
                fontFamily: "Satoshi",
                color: "#404040",
              }}
            >
              Tailored for Cash Flow Efficiency
            </h2>

            <div
              className="container-main autoPilot"
              style={{ gap: "10px", padding: "0px" }}
            >
              {AR_MANAGEMENT?.map((data) => (
                <div className="card-container">
                  <p
                    style={{
                      color: "#00954A",
                      fontSize: "48px",
                      fontWeight: "600",
                    }}
                  >
                    {data?.title}
                  </p>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      fontWeight: "500",
                      maxWidth: "200px",
                    }}
                  >
                    {data?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container-main book-demo-newsLetter-mb">
            <div className="book-demo-newsLetter">
              <div className="book-demo-newsLetter-content">
                <div className="newsLetter-content-left">
                  <p>FinFloh easily integrates with software you use</p>
                  <LinkButton
                    openInNewTab={true}
                    href="https://finfloh.com/invoice-validation-automation?utm_source=book_a_demo_page_ctar&utm_medium=finfloh_website"
                    style={{ backgroundColor: "#00954A", color: "#fff" }}
                  >
                    Integrate now
                  </LinkButton>
                </div>
                <div className="newsLetter-img newsLetter-content-right">
                  <img
                    src="images/Rectangle 517.svg"
                    alt="newsletter finfloh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default BookADemo;
