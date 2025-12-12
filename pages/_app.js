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
          <Head>
            {/* elfsight embded code */}
            <script
              src="https://static.elfsight.com/platform/platform.js"
              data-use-service-core
              defer
            ></script>
            {/* HubSpot Embed Code */}
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js-na1.hs-scripts.com/43524322.js"
            ></script>

            {/* Clarity Analytics Script */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "irxd5ric3w");
                `,
              }}
            />

            {/* Faitracker Script */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  window.faitracker=window.faitracker||function(){
                    this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");
                    return this.init=function(t,e,a){
                      this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,
                      window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))
                    },this.call=function(){
                      var e={k:"",a:[]};
                      if(arguments&&arguments.length>=1){
                        for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);
                        e.k=arguments[0]
                      }
                      this.q.push(e),window.dispatchEvent(t)
                    },this.message=function(){
                      window.addEventListener("message",function(t){
                        "faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)
                      })
                    },this.message(),this.init("jjwg34bck0pk86epb6iqf81krhy94la7",{host:"https://api.dyh8ken8pc.com"}),this
                  }(),function(){
                    var t=document.createElement("script");
                    t.type="text/javascript",t.src="https://asset.dyh8ken8pc.com/dyh8ken8pc.js",
                    t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)
                  }();
                `,
              }}
            />

            {/* Google Ads Script */}
            <script
              type="text/javascript"
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-11394427563"
            ></script>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-11394427563', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />

            {/* Google Tag Manager */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-P8D62VM6');
                `,
              }}
            />

            {/* RB2B Tracking Code */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  !function () {
                    var reb2b = window.reb2b = window.reb2b || [];
                    if (reb2b.invoked) return;
                    reb2b.invoked = true;
                    reb2b.methods = ["identify", "collect"];
                    reb2b.factory = function (method) {
                      return function () {
                        var args = Array.prototype.slice.call(arguments);
                        args.unshift(method);
                        reb2b.push(args);
                        return reb2b;
                      };
                    };
                    for (var i = 0; i < reb2b.methods.length; i++) {
                      var key = reb2b.methods[i];
                      reb2b[key] = reb2b.factory(key);
                    }
                    reb2b.load = function (key) {
                      var script = document.createElement("script");
                      script.type = "text/javascript";
                      script.async = true;
                      script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                      var first = document.getElementsByTagName("script")[0];
                      first.parentNode.insertBefore(script, first);
                    };
                    reb2b.SNIPPET_VERSION = "1.0.1";
                    reb2b.load("W7N850H8R7N1");
                  }();
                `,
              }}
            />
          </Head>

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
