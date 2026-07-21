import BookDemoButton from "../components/Common/BookDemoButton.js";
import WebsiteLayout from "../components/Layouts/WebsiteLayout.js";
import HeadComponent from "../components/Common/HeadComponent.jsx";
import generateUtmUrls from "../utils/utmUrls.js";
import LinkButton from "../components/Common/LinkButton.js";
import CustomerLogos from "../components/Sections/CustomerLogos/CustomerLogos.jsx";
import TestimonialsWhyTrust from "../components/Common/TestimonialsWhyTrust.jsx";
import { partnerProgramData } from "../data/partner-program.data.js";
import EmailJsButton from "../components/Common/EmailJsButton.js";
import PartnerWithUsButton from "../components/Common/partnerWithUsButton.js";

const PartnerWithUs = (isShowMobile = false, errorClassName) => {
  return (
    <>
      <HeadComponent
        title="Partner With Us | FinFloh"
        description="Join the FinFloh Partner Program and help finance teams transform accounts receivable, credit decisions, and collections. Grow together with FinFloh."
        canonicalUrl="https://finfloh.com/partner-with-us"
        includePublisher
        pageType="ContactPage"
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Partner With Us",
            item: "https://finfloh.com/partner-with-us",
          },
        ]}
      />
      <div className="custom-bg">
        <WebsiteLayout>
          <section className="section section--sm container">
            <div className="stack card--noHover cardnoHover--loose">
              <div className="inline--responsive inline--responsive--loose">
                <div className="stack">
                  <h1>{partnerProgramData.partnerWithUs.title}</h1>
                  <p>{partnerProgramData.partnerWithUs.description}</p>
                </div>
                <div className="stack">
                  <PartnerWithUsButton
                    onSuccess={() => alert("Thank you for partnering with us")}
                    templateID="template_mf4qcim"
                    serviceID="service_duwcr2b"
                    userID="eYpYIaQsGFViF3_LO"
                    layout="stacked"
                  />
                </div>
              </div>
              <div>
                <CustomerLogos />
              </div>
            </div>
          </section>
        </WebsiteLayout>
      </div>
    </>
  );
};

export default PartnerWithUs;
