export const PRODUCT = {
  AIDrivenCollections: 0,
  BuyerIntelligence: 1,
  AutomatedCashApp: 2,
  Integration: 3,
  // CollaborativeCommunication: 4,
};

export const PRODUCT_INFO_MAP = {
  [PRODUCT.Integration]: {
    title: "Invoice Validation Automation",
    url: "/invoice-validation-automation",
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url: "/collaborative-communication",
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url: "/accounts-receivable-collections",
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisioning",
    url: "/credit-decisioning",
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url: "/automated-cash-application-software",
  },
};

const PRODUCT_MAP = {
  [PRODUCT.AIDrivenCollections]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.AIDrivenCollections].url}
    >
      <h3>Receivables Collection</h3>
      <p>
        Reduce DSO & increase collections efficiency with automated collections
        workflows & prioritized worklists as per buyer's credit risk
      </p>
    </a>
  ),
  [PRODUCT.CollaborativeCommunication]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.CollaborativeCommunication].url}
    >
      <h3>Dispute Resolution</h3>
      <p>
        Break the silos, close disputes & get paid faster with collaborative
        workflows, clear owners, TATs & KRAs
      </p>
    </a>
  ),
  [PRODUCT.BuyerIntelligence]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.BuyerIntelligence].url}
    >
      <h3>Credit Scoring & Decisions</h3>
      <p>
        Take faster & more accurate credit decisions with ML-driven credit
        scoring model & AI-based suggestions
      </p>
    </a>
  ),
  [PRODUCT.AutomatedCashApp]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.AutomatedCashApp].url}
    >
      <h3>Cash Application</h3>
      <p>
        Automate invoice-payment matching with auto-extraction of remittance
        data using an OCR engine & ML-based algorithms
      </p>
    </a>
  ),
  [PRODUCT.Integration]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.Integration].url}
    >
      <h3>Invoice Validation Automation</h3>
      <p>
        Automate invoice generation, validation & sending with the least errors,
        <br />
        the right contacts & audit trails
      </p>
    </a>
  ),
};

const ProductArea = ({ currentProduct, PRODUCT_INFO_MAP }) => {
  const products = Object.values(PRODUCT).filter(
    (product) => product != currentProduct
  );

  return (
    <div className="feature-area" style={{ borderRadius: "4px" }}>
      <div className="feature-area-content">
        <h2>Explore the Full Potential&nbsp;of&nbsp;FinFloh</h2>
        <p>Supercharge Your Receivables&nbsp;Performance</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row g-3 justify-content-center">
            <div className="col-lg-5 col-sm-6">
              <a
                className="feature-card"
                href={PRODUCT_INFO_MAP[products[0]].url_otherProducts}
              >
                <h3>{PRODUCT_INFO_MAP[products[0]].title}</h3>
                <p>
                  {PRODUCT_MAP[products[0]].props.children[1].props.children}
                </p>
              </a>
            </div>
            <div className="col-lg-5 col-sm-6">
              <a
                className="feature-card"
                href={PRODUCT_INFO_MAP[products[1]].url_otherProducts}
              >
                <h3>{PRODUCT_INFO_MAP[products[1]].title}</h3>
                <p>
                  {PRODUCT_MAP[products[1]].props.children[1].props.children}
                </p>
              </a>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="row g-3 justify-content-center">
              <div className="col-lg-5 col-sm-6">
                <a
                  className="feature-card"
                  href={PRODUCT_INFO_MAP[products[2]].url_otherProducts}
                >
                  <h3>{PRODUCT_INFO_MAP[products[2]].title}</h3>
                  <p>
                    {PRODUCT_MAP[products[2]].props.children[1].props.children}
                  </p>
                </a>
              </div>
              <div className="col-lg-5 col-sm-6">
                <a
                  className="feature-card"
                  href={PRODUCT_INFO_MAP[products[3]].url_otherProducts}
                >
                  <h3>{PRODUCT_INFO_MAP[products[3]].title}</h3>
                  <p>
                    {PRODUCT_MAP[products[3]].props.children[1].props.children}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
