import Head from "next/head";
import React from "react";
import { Theme } from "../../utils/constants";
import Footer from "./Footer";
import Navbar from "./Navbar";
import InvoiceNavbar from "./invoiceNavbar";

const WebsiteLayout = (props) => {
  const {
    noNavbar = true,
    showNavber = false,
    currentNavbar = 0,
    scrollToSection = {},
    utmURLs,
    PRODUCT_INFO_MAP_url,
    showMainBannerTop = false,
  } = props;

  return (
    <div className="w-100">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Receivables, AR, A/R, AR Automation, AI, Accounts Receivable"
        />
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/43524322.js"
        ></script>

        {/* End of HubSpot Embed Code */}
        <script
          type="text/javascript"
          data-cookiescript="accepted"
          data-cookiecategory="targeting"
        >
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "irxd5ric3w");
  `}
        </script>
        <script
          type="text/javascript"
          data-cookiescript="accepted"
          data-cookiecategory="targeting"
        >
          {`window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("jjwg34bck0pk86epb6iqf81krhy94la7",{host:"https://api.dyh8ken8pc.com"}),this}(),function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://asset.dyh8ken8pc.com/dyh8ken8pc.js",t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)}();`}
        </script>
        <script
          type="text/javascript"
          data-cookiescript="accepted"
          data-cookiecategory="targeting"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11394427563`}
        />
        <script
          type="text/javascript"
          data-cookiescript="accepted"
          data-cookiecategory="targeting"
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11394427563', {
          page_path: window.location.pathname,
          });
        `}
        </script>
        {/* Google Tag Manager */}
        <script type="text/javascript">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P8D62VM6');`}
        </script>
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P8D62VM6"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {showNavber ? (
        <InvoiceNavbar
          currentNavbar={currentNavbar}
          scrollToSection={scrollToSection}
        />
      ) : (
        <Navbar
          theme={props.theme || Theme.LIGHT}
          noNavbar={noNavbar}
          utmURLs={utmURLs}
          PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_url}
          showMainBannerTop ={showMainBannerTop}
        />
      )}

      <div>{props.children}</div>
      {!noNavbar ? (
        ""
      ) : (
        <Footer utmURLs={utmURLs} PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_url} />
      )}
    </div>
  );
};

export default React.memo(WebsiteLayout);
