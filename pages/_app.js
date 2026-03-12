// pages/_app.js
import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/icofont.min.css";
import "../styles/pe-icon-7-stroke.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/pcc.scss";
import "../styles/404.scss";
import "../styles/index.scss";
import "../styles/product-hunt.scss";
import "../styles/bookADemo.scss";
import "../styles/pricing.css";
import "../styles/roi-calculator.scss";
import "../styles/customSlider.scss";
import "../styles/podcast.scss";
import "../styles/creditStyle.scss";
import "../styles/whyFinfloh.scss";
import "../styles/ProductsDropdown.scss";
import "../styles/glossary.scss";
import "../styles/slug.scss";
import "../styles/free-credit-score.scss";
import "../styles/about-us.scss";
import "../styles/PodcastDetails.scss";
import "../styles/flohsense_ai.scss";
import "../styles/PodcastSlider.scss";
import GoTop from "../components/Shared/GoTop";
import { Analytics } from "@vercel/analytics/react";
import Custom404 from "./404";
import "../styles/finfloh-vs-tesorio.scss";
import "../styles/journal-entries.scss";
import AnalyticsScripts from "../components/Scripts/AnalyticsScripts";
import MarketingScripts from "../components/Scripts/MarketingScripts";
import SupportScripts from "../components/Scripts/SupportScripts";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Any componentDidMount logic can be placed here
    return () => {
      // Cleanup logic here, similar to componentWillUnmount
    };
  }, []);

  return (
    <>
      {/* Check if the page is 404 and render the custom 404 page */}
      {Component === Custom404 ? (
        <Custom404 />
      ) : (
        <>
          <Head></Head>

          {/* External Scripts */}
          <AnalyticsScripts />
          <MarketingScripts />
          <SupportScripts />
          <Component {...pageProps} />

          {/* Go Top Button */}
          <GoTop />
          <Analytics />
        </>
      )}
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default MyApp;
