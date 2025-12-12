import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import BookDemoButton from "./BookDemoButton";

const ProductBanner = ({
  productBanner,
  showTrial = true,
  utmURLs,
  isStaticContent = false,
  staticBannerContent,
  staticButton = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { bookDemo_header } = utmURLs || {};
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % productBanner?.words?.length
      );
    }, 1400); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-container">
      <div className="container-main feature-page">
        <div className="collection-banner-container position-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="collection-banner">
                {isStaticContent ? (
                  <>
                    <div className="new-collection-banner">
                      <h1>
                        <span>{staticBannerContent?.spanHeading}</span>{" "}
                        {staticBannerContent?.heading}
                        <span>{staticBannerContent?.subspanHeading}</span>{" "}
                      </h1>
                      <p>{staticBannerContent?.paragraph}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {productBanner.beforeWords}
                    <div
                      style={productBanner?.wordWrapperStyle}
                      className={productBanner?.wordWrapperClassName}
                    >
                      <h2
                        style={{
                          color: "#96D300",
                          animation: "fadeIn 1s",
                          transition: "opacity 1s ease-in-out",
                        }}
                      >
                        {productBanner?.words[currentIndex]}
                      </h2>
                    </div>
                    {productBanner?.afterWords}
                  </>
                )}

                {staticButton ? (
                  <LinkButton openInNewTab={true} href={bookDemo_header}>
                    Talk To Us
                  </LinkButton>
                ) : (
                  <>
                    <BookDemoButton utmURLs={utmURLs} />
                    {/* <LinkButton href={productBanner.btnLink}>
                  {productBanner?.btnText || "Get Started"}
                </LinkButton> */}
                    {!productBanner?.showTrail && (
                      <a
                        href="/free-trial"
                        style={{
                          color: "#96D300",
                          fontWeight: "700",
                          fontSize: "18px",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        <img
                          style={{ width: "36px", height: "36px" }}
                          src="/images/Vector.png" alt="Vector finfloh"
                        />{" "}
                        Get a 7-day free trial
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              {showTrial && (
                <div className="collection-banner-img-cont">
                  <img src={productBanner?.imgUrl} alt={productBanner?.alt}/>
                </div>
              )}
            </div>
          </div>
          {!showTrial && (
            <img
              className="ppc-dashboardImg d-none d-md-block"
              src={"/images/Dashboard-02.png"}
              alt="dashboard"
            />
          )}
          {!showTrial && (
            <img
              className="d-block d-md-none p-3"
              src={"/images/Group-mobile.png"}
              alt="dashboard"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
