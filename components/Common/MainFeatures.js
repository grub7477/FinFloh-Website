const MainFeatures = ({ mainFeatures}) => {
  return (
    <div className="bg-container">
      <div className="container-main feature-page">
        <div className="row" style={{ rowGap: "20px", margin: 0 }}>
          {mainFeatures.map((feature, i) => {
            return (
              <div id={`section-${i}`} key={i} className="row">
                <div
                  className={
                    i % 2 === 0
                      ? "col-sm-6 collection-feature"
                      : "col-sm-6 order-sm-1 collection-feature"
                  }
                  // style={{ padding: changePadding }} // Apply the custom padding
                >
                  <div className="collection-feature-content">
                    {feature.content}
                  </div>
                </div>
                <div
                  className="col-sm-6 collection-feature-image"
                  // style={{ background: changeBackground }}
                >
                  <img src={feature.imgUrl} alt={feature.alt}></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
