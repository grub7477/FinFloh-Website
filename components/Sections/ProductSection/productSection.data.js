export const PRODUCT = {
  Collections: 0,
  BuyerIntelligence: 1,
  CashApp: 2,
  Integrations: 3,
  //   Disputes: 4,
};

export const info_map = {
  [PRODUCT.Integrations]: {
    title: "Invoice Automation",
    description:
      "Automate invoice generation, validation & sending with the least errors the right contacts & audit trails",
    url: "/invoice-automation",
  },

  [PRODUCT.Collections]: {
    title: "AI-Driven Collections",
    description:
      "Reduce DSO & increase collections efficiency with automated collections workflows & prioritized worklists as per buyer's credit risk",
    url: "/accounts-receivable-collections",
  },

  [PRODUCT.CashApp]: {
    title: "Cash Application",
    description:
      "Automate invoice-payment matching with auto-extraction of remittance data using an OCR engine & ML-based algorithms",
    url: "/automated-cash-application-software",
  },

  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    description:
      "Take faster & more accurate credit decisions with ML-driven credit scoring model & AI-based suggestions",
    url: "/credit-decisioning",
  },

  //   [PRODUCT.Disputes]: {
  //     title: "Dispute Resolution",
  //     description:
  //       "Break the silos, close disputes & get paid faster with collaborative workflows, clear owners, TATs & KRAs",
  //     url: "/dispute-resolution",
  //   },
};
