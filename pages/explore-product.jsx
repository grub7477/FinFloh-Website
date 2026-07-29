import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import HeadComponent from "../components/Common/HeadComponent";
import ProductSection from "../components/Sections/ProductSection/productSection";

const ExploreDemo = () => {
  return (
    <>
      <HeadComponent
        title="Explore Product | FinFloh"
        description=""
        canonicalUrl="https://finfloh.com/explore-product"
        includePublisher
      />
      <WebsiteLayout>
        <section className="section section--green">
          <div className="container stack stack--loose">
            <div className="stack stack--tight stack--center text-center">
              <h1>Explore FinFloh Product Demo</h1>
              <p className="text-muted">
                Watch the demo to see how FinFloh transforms your Credit-to-Cash
                lifecycle from credit decisions and invoicing to collections and
                cash application.
              </p>
            </div>
            <div className="video-container">
              <div className="iframe-wrapper">
                <iframe
                  className="responsive-iframe"
                  src="https://app.supademo.com/embed/cm7hro9l602xu1p0i75sslj07?embed_v=2"
                  title="Demo Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
        <ProductSection />
      </WebsiteLayout>
    </>
  );
};

export default ExploreDemo;
