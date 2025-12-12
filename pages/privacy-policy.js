import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";

const PrivacyPolicy = () => {
  return (
    <>
      <HeadComponent
        title="Privacy Policy - FinFloh"
        description="Learn how FinFloh collects, uses, and protects your data in this transparent policy. Discover your choices and feel confident sharing information with us."
        canonicalUrl="https://finfloh.com/privacy-policy"
        mainEntityOfPage="https://finfloh.com/privacy-policy"
        includeIsPartOf
        includeAuthor
        authorProps={{
          datePublished: "2025-10-17",
          dateModified: "2025-10-17",
        }}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Information We Collect",
          },
          {
            "@type": "WebPageElement",
            name: "Use of Person",
          },
        ]}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Privacy Policy",
            item: "https://finfloh.com/privacy-policy",
          },
        ]}
      />
      <WebsiteLayout>
        <div className="align-c privacy-policy">
          <h1>Privacy Policy</h1>
          <p>
            Last Updated on: <b>17 Aug 2023</b>
          </p>
        </div>
        <div className="privacy-policy-content">
          <p style={{ textAlign: "center" }}>
            At Flohvision Pvt Ltd ("FinFloh," "we," "us," or "our"), we are
            committed to protecting your privacy and safeguarding your personal
            data. This Privacy Policy outlines how we collect, use, disclose,
            and protect the personal data we gather when you access and use our
            receivables automation platform and related services (collectively,
            the "Services").
          </p>

          <h2>Information We Collect</h2>
          <h3>1.1 Personal Data:</h3>
          <p>
            We may collect personal data directly from you when you interact
            with our Services, such as when you create an account, submit forms,
            provide feedback, or contact customer support. The personal data we
            may collect includes your name, email address, contact information,
            and any other information you voluntarily provide.
          </p>
          <h3>1.2 Usage Data:</h3>
          <p>
            We may automatically collect certain information about your use of
            the Services, such as your IP address, device type, operating
            system, browser type, and usage patterns. This information helps us
            analyze trends, administer the Services, and improve the user
            experience.
          </p>

          <h2>Use of Personal Data</h2>
          <p>We use the personal data we collect for the following purposes:</p>
          <h3>2.1 Provision of Services:</h3>
          <p>
            {" "}
            We use your personal data to provide and deliver our Services to
            you, including account creation, processing transactions, and
            customer support.
          </p>
          <h3>2.2 Communication:</h3>
          <p>
            We may use your contact information to send you important updates,
            notifications, and information related to our Services.
          </p>
          <h3>2.3 Improvement of Services:</h3>
          <p>
            We analyze usage data and feedback to improve our Services, develop
            new features, and enhance user experience.
          </p>
          <h3>2.4 Legal Compliance:</h3>
          <p>
            We may process personal data to comply with applicable laws,
            regulations, or legal proceedings.
          </p>

          <h2>Disclosure of Personal Data</h2>
          <h3>3.1 Service Providers:</h3>
          <p>
            We engage trusted third-party service providers to assist us in
            delivering and improving our Services. These providers have access
            to your personal data solely to perform specific tasks on our behalf
            and are obligated to protect its confidentiality.
          </p>
          <h3>3.2 Business Transfers:</h3>
          <p>
            In the event of a merger, acquisition, or sale of our company or
            assets, your personal data may be transferred as part of the
            transaction. We will notify you and provide choices regarding the
            handling of your personal data in such circumstances.
          </p>
          <h3>3.3 Legal Requirements:</h3>
          <p>
            We may disclose your personal data if we believe in good faith that
            such disclosure is necessary to comply with applicable laws,
            regulations, or legal proceedings, or to protect our rights,
            property, or safety, as well as the rights, property, or safety of
            our users or others.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to
            safeguard your personal data against unauthorized access,
            disclosure, alteration, or destruction. However, please be aware
            that no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
          <h2>Your Rights and Choices</h2>
          <h3>5.1 Access and Correction:</h3>
          <p>
            You have the right to access and correct the personal data we hold
            about you. You can update your account information by logging into
            your account or contact us for assistance.
          </p>
          <h3>5.2 Marketing Communications:</h3>
          <p>
            You can opt-out of receiving promotional communications from us by
            following the unsubscribe instructions provided in the messages.
          </p>
          <h3>5.3 Data Retention:</h3>
          <p>
            We retain your personal data for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy, unless a longer retention
            period is required or permitted by law.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Services are not directed to individuals under the age of 18,
            and we do not knowingly collect personal data from children. If we
            become aware that we have collected personal data from a child
            without appropriate consent, we will take steps to delete that
            information.
          </p>

          <h2>Changes to this Privacy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            or through other appropriate communication channels.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal data, please contact
            us by dropping us an email at{" "}
            <a href={"mailto:support@finfloh.com"}>support@finfloh.com</a>. All
            notices shall be deemed to have been given immediately upon delivery
            by electronic mail, or if otherwise delivered upon receipt.
          </p>

          <p>
            By using our Services, you consent to the collection, use, and
            disclosure of your personal data as described in this Privacy
            Policy.
          </p>
        </div>
      </WebsiteLayout>
    </>
  );
};
export default PrivacyPolicy;
