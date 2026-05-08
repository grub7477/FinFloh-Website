import styles from "./ValueAddFeature.module.scss";

const ValueAddFeature = ({ features = [] }) => {
  return (
    <section className="section">
      <div className="stack stack--center stack--extra-loose">
        <h2 className="text-center ch20">
          {/* Make it more dynamic */}
          Powering FinFloh Products with{" "}
          <span className="ai-highlight">FlohSense AI</span>
        </h2>
        <div className="grid grid--3">
          {features.map((item, index) => {
            return (
              <div key={index} className="card--noHover">
                <div className="inline">
                  <img
                    className="icon icon--lg icon--container--loose"
                    src={item.icon}
                    alt={item.productName}
                  />
                  <h4 className="heading_xs text-highlight--brand">
                    {item.productName}
                  </h4>
                </div>
                <h3 className="heading_md">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueAddFeature;
