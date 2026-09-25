export const caseStudies = [
  {
    slug: "yellow-ai",
    logo: "/assets/logos/yellow-ai.svg",
    customerName: "Yellow.ai",
    industry: "CPaaS / Conversational AI",
    pdfFile: "/pdfs/case-study/finfloh-case-study-yellow-ai.pdf",
    pdfIllustration: "/images/customer/yellowai-websiteBanner.svg", // book/doc illustration for the download side

    // Hero section
    hero: {
      headline:
        "How a CPaaS Firm reduced DSO by 40% and saved 400 Man-Hours per month with FinFloh?",
      quote:
        "FinFloh has transformed our invoice-to-cash processes from invoice management to collections. Using AI-driven automated workflows, native ERP-CRM sync and buyer intelligence, we are saving 200 man-hours per month in collections. We have also reduced DSO by 50% and increased on-time payments by 20% for 30 days past due invoices.",
      quoteAuthor: {
        name: "Gopal Agarwal",
        title: "Vice President and Head of Finance",
        company: "Yellow.ai",
      },
    },

    // Key metrics / stat cards
    stats: [
      { value: "50%", label: "Reduction in DSO" },
      { value: "25%", label: "Reduction in Overdues" },
      { value: "200", label: "Man Hours Saved" },
      { value: "50%", label: "Reduction in Aging Overdues" },
    ],

    // Two-column challenge/solution intro block
    challengeSolutionSummary: {
      challengeTitle: "Biggest Business Challenges",
      challengeBody:
        "A/R is already an uphill task for firms due to varying customer profiles, billing schedules, changing credit risk and behaviour, and need for control & predictability of collections. In Yellow.ai's case, manual A/R processes and ERP-CRM sync were resulting in payment delays, manual overheads, disputes and surprises.",
      solutionTitle: "How does FinFloh solve them?",
      solutionBody:
        "With FinFloh, Yellow.ai automated its collections and Invoice-to-Cash processes, and segmented customers as per credit risk to accelerate collections and predictability. This significantly reduced past-due receivables & DSO. Further, by synchronizing data across its ERP and CRM, FinFloh could enable better communications, tracking and dispute resolution.",
    },

    // Detailed challenge -> solution table
    challengeSolutionTable: [
      {
        challenge: "Manual collection reminders without account prioritization",
        solution:
          "Automated AI-driven collection reminders focused on customer's credit risk, overdue aging & amount",
      },
      {
        challenge:
          "Manual interventions due to ERP-CRM a-sync in invoice/customer data, Customer/internal PoC, etc.",
        solution:
          "FinFloh's native sync b/w ERP-CRM for a single source of truth for PoC & data (invoices/payments)",
      },
      {
        challenge:
          "4 Collection FTEs working on 1000+ accounts with their own lifecycle of payments/payment delays",
        solution:
          "AI-powered collector's worklist prioritized the right customer with timely, correct actions for max efficiency",
      },
      {
        challenge:
          "No single-view access for customers to invoices, ledger statements, disputes and payments made",
        solution:
          "Buyer dashboard to download invoices and ledger statements, & share payment details",
      },
      {
        challenge:
          "Occurrence of many disputes without resolution workflows leading to delayed collections",
        solution:
          "Automated dispute resolution workflows with clear owners, TATs & tracking, solved disputes 5x faster",
      },
    ],

    // About FinFloh block (reused across case studies, kept here for per-page override if needed)
    about: {
      title: "About FinFloh's AI-Powered Credit-to-Cash Software",
      body: [
        "FinFloh is a modern finance tech firm that leverages ERP-CRM native sync, AI-ML and market intelligence to solve for A/R and credit scoring/credit decisions. FinFloh enables AI-driven collections worklist, workflows & reminders, disputes, automated invoice creation in ERP, & ML-driven Invoice-payment recon. FinFloh also provides ML-driven credit scoring models and AI-driven Credit Onboarding Decisions (credit/contract/pricing terms), directly in CRMs like Salesforce.",
        "FinFloh is more than just a finance product; it's a catalyst for efficiency, better cashflows, and smarter decision-making in modern financial operations.",
      ],
      ctaLabel: "Learn More About FinFloh Software",
      ctaLink: "https://www.finfloh.com",
    },

    productBanner: {
      heading: "Supercharge your A/R with FinFloh",
      subheading:
        "Talk to our finance experts and begin your AR transformation journey today",
      buttonLabel: "BOOK A DEMO",
      buttonLink: "/book-a-demo",
    },
  },
  {
  slug: "gupshup",
  logo: "/assets/logos/gupshup.svg",
  customerName: "Gupshup",
  industry: "CPaaS / Conversational Messaging",
  pdfFile: "/pdfs/case-study/finfloh-case-study-gupshup.pdf",
  pdfIllustration: "/images/customer/gupshup-websiteBanner.svg", // book/doc illustration for the download side

  // Hero section
  hero: {
    headline:
      "How Gupshup reduced DSO by 40% and saved 450 Man-Hours per month with FinFloh?",
    // No named customer quote provided in source material
  },

  // Key metrics / stat cards
  stats: [
    { value: "40%", label: "Reduction in DSO" },
    { value: "450", label: "Man Hours Saved" },
    { value: "40%", label: "Growth in Month-wise Collections" },
  ],

  // Two-column challenge/solution intro block
  challengeSolutionSummary: {
    challengeTitle: "Biggest Business Challenges",
    challengeBody:
      "Managing the Invoice-to-Cash cycle becomes increasingly complex as businesses scale, with multiple customers, billing entities and contacts during invoicing and collections. For Gupshup, ensuring invoice and reminder emails reached the right stakeholders across different customers required considerable manual effort and was error-prone. Finance teams also needed visibility into email deliverability for better payment closure and control.",
    solutionTitle: "How does FinFloh solve them?",
    solutionBody:
      "With FinFloh, Gupshup automated its invoice delivery and collection follow-up workflows, ensuring invoices and reminders reached the right POCs at the right time. FinFloh provided deliverability analytics to track invoice communication and automated reminders to drive timely payments. This helped Gupshup streamline invoice-to-cash operations, reduce manual follow-ups and improve visibility across customer communications.",
  },

  // Detailed challenge -> solution table
  challengeSolutionTable: [
    {
      challenge:
        "Invoices had to be manually sent to multiple POCs across different sites and customers",
      solution:
        "Automated invoice distribution to the correct POCs based on customers and billing config",
    },
    {
      challenge:
        "Reminder emails needed to be sent and tracked at a customer level",
      solution:
        "Automated sending of reminder emails at a customer level with open invoices and SoA",
    },
    {
      challenge:
        "Customer contacts were managed offline and not stored in a centralized platform",
      solution:
        "Centralized management of contacts across systems and teams with easier updations",
    },
    {
      challenge:
        "Invoice emails and payment reminders weren't connected, creating gaps in payment follow-up",
      solution:
        "Connected invoice-to-reminders for follow-ups with correct aging balances and invoice status",
    },
    {
      challenge:
        "Finance teams had limited visibility into customer-level invoice communication history",
      solution:
        "Centralized communication system between customers and POC",
    },
  ],

  // About FinFloh block (reused across case studies, kept here for per-page override if needed)
  about: {
    title: "About FinFloh's AI-Powered Credit-to-Cash Software",
    body: [
      "FinFloh is an AI-native finance platform that connects ERP, CRM, banking, and other finance systems into one intelligent Contract-to-Cash workbench. Its AI agents power Contract Intelligence, Invoice Automation, Collections, and Cash Application to prevent revenue leakage, accelerate invoicing and cash realization, and reduce manual effort.",
      "By bringing fragmented data and processes together, FinFloh creates a single source of truth that enables finance teams to operate with greater visibility, control, and efficiency.",
    ],
    ctaLabel: "Learn More About FinFloh Software",
    ctaLink: "https://www.finfloh.com",
  },

  productBanner: {
    heading: "Supercharge your A/R with FinFloh",
    subheading:
      "Talk to our finance experts and begin your AR transformation journey today",
    buttonLabel: "BOOK A DEMO",
    buttonLink: "/book-a-demo",
  },
},
];
