export const PRODUCT = {
  AIDrivenCollections: 0,
  BuyerIntelligence: 1,
  AutomatedCashApp: 2,
  Integration: 3,
  ContractIntelligence: 4,
  FlohSenseAI: 5,
  DocSenseAI: 6,
  // CollaborativeCommunication: 4, // retired — number 4 now belongs to ContractIntelligence
};

export const PRODUCT_INFO_MAP = {
  [PRODUCT.Integration]: {
    title: "Invoice Automation",
    url: "/invoice-automation",
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
  [PRODUCT.ContractIntelligence]: {
    title: "Contract Intelligence",
    url: "/contract-intelligence",
  },
  [PRODUCT.FlohSenseAI]: {
    title: "Flohsense AI",
    url: "/flohsense-ai-agent",
  },
  [PRODUCT.DocSenseAI]: {
    title: "DocSense AI",
    url: "/docsense-ai-agent",
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
      <h3>Invoice Automation</h3>
      <p>
        Automate invoice generation, validation & sending with the least errors,
        <br />
        the right contacts & audit trails
      </p>
    </a>
  ),
  [PRODUCT.ContractIntelligence]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.ContractIntelligence].url}
    >
      <h3>Contract Intelligence</h3>
      <p>
        Help businesses transform Accounts Receivable, Credit Risk, Cash
        Application, and Collections with AI-powered automation while creating
        new revenue opportunities for your business.
      </p>
    </a>
  ),
  [PRODUCT.FlohSenseAI]: (
    <a
      className="feature-card"
      href={PRODUCT_INFO_MAP[PRODUCT.FlohSenseAI].url}
    >
      <h3>Flohsense AI</h3>
      <p>
        An AI agent that reads, understands, and responds to customer emails &
        chats while triggering the right finance workflows — just like your team
        would.
      </p>
    </a>
  ),
  [PRODUCT.DocSenseAI]: (
    <a className="feature-card" href={PRODUCT_INFO_MAP[PRODUCT.DocSenseAI].url}>
      <h3>DocSense AI</h3>
      <p>
        Extract structured data, actionable insights, and key information from
        contracts, SOWs, POs, invoices, remittance advices, and bank statements
        without manual document processing.
      </p>
    </a>
  ),
};

const ProductArea = ({ currentProduct }) => {
  const products = Object.values(PRODUCT)
    .filter((product) => product !== currentProduct)
    .slice(0, 4);

  return (
    <div className="feature-area" style={{ borderRadius: "4px" }}>
      <div className="feature-area-content">
        <h2>Explore the Full Potential&nbsp;of&nbsp;FinFloh</h2>
        <p>Supercharge Your Receivables&nbsp;Performance</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row g-3 justify-content-center">
            {products.map((product) => (
              <div className="col-lg-5 col-sm-6" key={product}>
                {PRODUCT_MAP[product]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
