import Script from "next/script";

export default function MarketingScripts() {
  return (
    <>
      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11394427563"
        strategy="lazyOnload"
      />

      <Script id="google-ads" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11394427563');
        `}
      </Script>

      {/* Faitracker */}
      <Script id="faitracker" strategy="afterInteractive">
        {`window.faitracker=window.faitracker||function(){/* existing code */}`}
      </Script>
    </>
  );
}
