import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";

const CookiePolicy = () => (
  <>
    <HeadComponent title="Cookie Policy - FinFloh" />

    <WebsiteLayout>
      <div className="align-c privacy-policy">
        <h1>Cookie Policy</h1>
      </div>
      <div className="privacy-policy-content">
        <p style={{ textAlign: "center" }}></p>
        <p>
          The Cookies Notice details FinFloh's utilization of cookies and akin
          technologies within our business operations via our website,{" "}
          <a href="www.finfloh.com">www.finfloh.com</a>. It explains what these
          technologies are, and why we use them, as well as your rights to
          control our use of them.
        </p>
        <p>
          Please note that we may periodically update this Cookie Policy to
          ensure its relevance. Therefore, we encourage you to revisit this page
          at your convenience for the most current information.
        </p>
        <p>This policy is effective as of 11 September, 2023.</p>

        <h2>What is a Cookie (🍪)?</h2>
        <p>
          Cookies are small text files that a website asks the user's browser to
          save on the user's system/device, when a user visits the website, in
          order to remember the user's device upon revisiting the website or
          during the session. Cookies set up by the domain{" "}
          <a href="https://finfloh.com/">FinFloh</a>, are called first-party
          cookies and cookies set by other domain(s) than the website(s) you are
          visiting are termed as third-party cookies. Third-party cookies are
          generally used for marketing and advertising purposes.
        </p>

        <h2>Purpose of using cookies?</h2>
        <p>
          Our website <a href="https://finfloh.com/">FinFloh</a> (“FinFloh” or
          “We” or “Our” or “Website”) uses cookies and other tracking
          technologies for the following purposes:
        </p>

        <ol>
          <li>To analyze your use of our website</li>
          <li>For promotional and marketing purposes</li>
          <li>To understand your preferences such as preferred language</li>
          <li>To deliver information that matches your interests</li>
          <li>To help us understand our audience and traffic patterns</li>
          <li>
            To let you automatically log into programs and parts of our site
            that require membership
          </li>
          <li>
            To manage and present the information displayed on our website
          </li>
        </ol>

        <h2>Types of cookies used by FinFloh</h2>
        <ol>
          <li>Strictly Necessary Cookies</li>
          <li>Targeting Cookies</li>
          <li>Functionality Cookies</li>
          <li>Performance Cookies</li>
        </ol>

        <h2>User-Generated Content</h2>
        <p>
          Cookies are not the only way to recognize or track visitors on a
          website. We may use other similar technologies from time to time, like
          web beacons (sometimes called “tracking pixels” or “clear gifs”).
          These are tiny graphics files that contain a unique identifier that
          enables us to recognize when someone has visited our websites or
          opened an e-mail including these. In many instances, these
          technologies are reliant on cookies to function properly, and hence,
          declining cookies will impair their functioning.
        </p>

        <h2>How can I control cookie preferences?</h2>
        <p>
          Most browsers are set to accept cookies by default. However, you may
          remove or reject cookies in your browser's settings. Removing or
          rejecting the cookies may affect the performance of the website.
        </p>
        <p>
          You may opt-out of the cookie by clicking on the floating action
          button at the bottom left corner of the page.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any questions or concerns regarding your privacy, you may contact
          us using the following details:
        </p>
        <p>hello@finfloh.com</p>
      </div>
    </WebsiteLayout>
  </>
);

export default CookiePolicy;
