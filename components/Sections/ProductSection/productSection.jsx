import { info_map } from "./productSection.data";
import OutwardIcon from "../../../public/icons/outward.svg";
import styles from "./productSection.module.scss";

const ProductSection = () => {
  return (
    <section className="section section--off-white">
      <div className="container stack stack--loose">
        <div className="stack stack--tight stack--center">
          <h2 className="text-center">
            Explore the Full Potential&nbsp;of&nbsp;FinFloh
          </h2>
          <p className="text-muted">
            Supercharge Your Receivables&nbsp;Performance
          </p>
        </div>
        <div className="grid grid--2">
          {Object.entries(info_map).map(([key, index]) => (
            <a href={index.url} key={key}>
              <div className="card card--loose">
                <div className="inline inline--space-between">
                  <h3 className="heading__md">{index.title}</h3>
                  <img
                    className="icon icon--dark"
                    src="../../../icons/outward.svg"
                  ></img>
                </div>
                <p className="para__sm text-muted">{index.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
