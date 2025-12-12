import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LinkButton from "../components/Common/LinkButton";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";

const pageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    // Check if the page is not in a loading state (404 error)
    if (!router.isFallback) {
      // Check if the current route is '/404'
      if (router.asPath === "/404") {
        // Redirect the user to the home page or another page
        router.replace("/");
      }
    }
  }, [router.isFallback, router.asPath]);
  return (
    <WebsiteLayout>
      <div className="bg-container ">
        <div className="container-main feature-page">
          <div className="parent-container">
            <div className="page-not-found">
              <div className="page-content">
                <p className="large-number">
                  Looks like a digital detour from your cash flow route.
                </p>
                <p className="subHeading">Let us guide you back smoothly.</p>
                <div className="redirectionBtn">
                  <LinkButton
                    openInNewTab={true}
                    href="/"
                    style={{ color: "#002211" }}
                  >
                    Return to Website
                  </LinkButton>
                  <a href="/book-a-demo" className="transparentBtn" target="_blank" >
                    Talk to our Experts
                    <img src="/images/blackuparrow.svg" alt="Black up arrow icon FinFloh" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};
export default pageNotFound;
