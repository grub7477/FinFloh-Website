import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";

const TermsOfUse = () => {
  return (
    <>
      <HeadComponent
        title="Terms of use - FinFloh"
        description="Know your rights & responsibilities! Read our user-friendly Terms of Use for clear guidelines."
        canonicalUrl="https://finfloh.com/terms-of-use"
        mainEntityOfPage="https://finfloh.com/terms-of-use"
        includeIsPartOf
        includeAbout
        includeHasPart
        includeAuthor
        authorProps={{
          datePublished: "2025-10-17",
          dateModified: "2025-10-17",
        }}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Acceptance of Terms",
          },
          {
            "@type": "WebPageElement",
            name: "Eligibility and Registration",
          },
          {
            "@type": "WebPageElement",
            name: "3.1 Grant of Rights",
          },
          {
            "@type": "WebPageElement",
            name: "3.2 Account Responsibility",
          },
        ]}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Terms of Use",
            item: "https://finfloh.com/terms-of-use",
          },
        ]}
      />
      <WebsiteLayout>
        <div className="align-c privacy-policy">
          <h1>Terms Of Use</h1>
          <p>
            Last Updated on: <b>17 Aug 2023</b>
          </p>
        </div>
        <div className="privacy-policy-content">
          <p style={{ textAlign: "center" }}>
            Welcome to Flohvision Pvt Ltd! These Terms ("Agreement") outline the
            terms and conditions that govern your use of our services. By
            accessing and using our services, you agree to be bound by this
            Agreement. Please review this Agreement carefully as it sets forth
            important rights and responsibilities.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you acknowledge that you have
            read, understood, and agreed to this Agreement. If you do not agree
            to these terms, please refrain from using our services.
          </p>

          <h2>Eligibility and Registration</h2>
          <p>
            You represent and warrant that you have the necessary legal capacity
            to enter into this Agreement. If you are accessing our services on
            behalf of an entity, you represent and warrant that you have the
            authority to bind that entity to this Agreement.
          </p>

          <h2>Use of Services</h2>
          <h3>3.1 Grant of Rights</h3>
          <p>
            Subject to the terms of this Agreement, we grant you a limited,
            non-exclusive, and non-transferable right to access and use our
            services for your internal business purposes.
          </p>
          <h3>3.2 Account Responsibility</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account or any other breach of security.
          </p>
          <h3>3.3 Acceptable Use</h3>
          <p>
            You agree to use our services in compliance with all applicable
            laws, regulations, and this Agreement. You shall not engage in any
            activity that may interfere with or disrupt the functionality of our
            services.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All intellectual property rights in our services, including but not
            limited to trademarks, copyrights, and trade secrets, belong to us.
            You agree not to use, copy, or distribute any content from our
            services without our prior written consent.
          </p>

          <h2>Third-Party Services and Links</h2>
          <p>
            Our services may include links to third-party websites or services.
            We are not responsible for the content, accuracy, or availability of
            such third-party sites or services. Your use of any third-party
            services is subject to their respective terms and conditions.
          </p>

          <h2>Fees and Payments</h2>
          <p>
            If there are any fees associated with our services, they will be
            clearly stated. You agree to pay all fees and charges incurred in
            connection with your use of our services in a timely manner.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate this Agreement at any time for any
            reason. Upon termination, you shall cease all use of our services
            and any related content.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for
            any direct, indirect, incidental, consequential, or special damages
            arising out of or in connection with your use of our services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims,
            damages, losses, liabilities, costs, and expenses arising out of or
            related to your use of our services or any violation of this
            Agreement.
          </p>

          <h2>Modifications to the Agreement</h2>
          <p>
            We reserve the right to modify or update this Agreement at any time
            without prior notice. Your continued use of our services after any
            modifications indicates your acceptance of the revised terms.
          </p>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default TermsOfUse;
