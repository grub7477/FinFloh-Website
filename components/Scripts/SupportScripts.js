import Script from "next/script";

export default function SupportScripts() {
  return (
    <>
      {/* Zoho Chat */}
      <Script id="zoho-init" strategy="lazyOnload">
        {`
          window.$zoho=window.$zoho || {};
          $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
        `}
      </Script>

      <Script
        src="https://salesiq.zohopublic.in/widget?wc=siq8f739920962a0b57f7d897da6b1c5ad67822153e7e8e3bb158e0242f201cfe8d"
        strategy="lazyOnload"
      />

      {/* Elfsight */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}
