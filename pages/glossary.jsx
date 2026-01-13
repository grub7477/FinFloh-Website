import React, { useRef, useState, useEffect } from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import axios from "axios";
import { Article, parsePost } from "./blog";

// const parsePostList = (posts) => {
//   return posts?.map(parsePost);
// };
// export async function getServerSideProps({ req }) {
//   const { data: postList } = await axios.get(
//     "https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts?per_page=3"
//   );
//   const { data: authorsUnparsed } = await axios.get(
//     "https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/users"
//   );
//   const { data: media } = await axios.get(
//     `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/media?per_page=100`
//   );

//   const { data: categories } = await axios.get(
//     `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/categories`
//   );
//   // console.log("post", postList[0]);
//   const postListWithAuthor = postList.map((post) => ({
//     ...post,
//     authorDetail: authorsUnparsed?.filter(
//       (author) => author.id === post.author
//     )[0],
//     media:
//       media?.filter((m) => m?.post === post?.id)?.length > 0
//         ? media?.filter((m) => m?.post === post?.id)[0]
//         : "",
//     category:
//       categories?.filter((catg) => post?.categories?.includes(catg?.id))[0]
//         ?.name || "",
//   }));

//   const posts = parsePostList(postListWithAuthor);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const terms = {
  A: [
    {
      keyword: "ACH Payment",
      url: "https://finfloh.com/blog/ach-payment",
    },
    {
      keyword: "Account Audit",
      url: "https://finfloh.com/blog/accounting-audit-process",
    },
    {
      keyword: "Account Receivable Process",
      url: "https://finfloh.com/blog/account-receivable-process",
    },
    {
      keyword: "Account Reconciliation",
      url: "https://finfloh.com/blog/account-reconciliation",
    },
    {
      keyword: "Accounting Accuracy",
      url: "https://finfloh.com/blog/accounting-accuracy",
    },
    {
      keyword: "Accounting Automation",
      url: "https://finfloh.com/blog/accounting-automation",
    },
    {
      keyword: "Accounts Receivable Collections",
      url: "https://finfloh.com/blog/accounts-receivable-collections",
    },
    {
      keyword: "Accounts Receivable Days",
      url: "https://finfloh.com/blog/accounts-receivable-days",
    },
    {
      keyword: "Accounts Receivable Management",
      url: "https://finfloh.com/blog/manage-accounts-receivable",
    },
    {
      keyword: "Accounts Receivable Process",
      url: "https://finfloh.com/blog/accounts-receivable-process",
    },
    {
      keyword: "Accounts Receivable Report",
      url: "https://finfloh.com/blog/accounts-receivable-reports",
    },
    {
      keyword: "Accounts Receivable Technology",
      url: "https://finfloh.com/blog/accounts-receivable-technology",
    },
    {
      keyword: "Accounts receivable Kpis",
      url: "https://finfloh.com/blog/accounts-receivable-kpis",
    },
    {
      keyword: "Advance Billing",
      url: "https://finfloh.com/blog/advance-billing",
    },
    {
      keyword: "Aging Report",
      url: "https://finfloh.com/blog/aging-report",
    },
    {
      keyword: "AR Accounting",
      url: "https://finfloh.com/blog/ar-accounting",
    },
    {
      keyword: "ASC 606",
      url: "https://finfloh.com/blog/asc606",
    },
    {
      keyword: "Asset Based Lending",
      url: "https://finfloh.com/blog/asset-based-lending",
    },
    {
      keyword: "At Risk Account",
      url: "https://finfloh.com/blog/at-risk-account",
    },
    {
      keyword: "Automated Billing",
      url: "https://finfloh.com/blog/automated-billing-system",
    },
    // {
    //   keyword: "Automated Billing System",
    //   url: "https://finfloh.com/blog/automated-billing-system-your-key-to-efficiency-and-growth",
    // },
    {
      keyword: "Automated Correspondence",
      url: "https://finfloh.com/blog/automated-correspondence",
    },
    // {
    //   keyword: "Average Collection Period",
    //   url: "https://finfloh.com/blog/average-collection-period-formula-cash-flow-optimization",
    // },
    // {
    //   keyword: "Average Days Delinquent",
    //   url: "https://finfloh.com/blog/master-average-days-delinquent",
    // },
  ],
  B: [
    {
      keyword: "B2B Collections",
      url: "https://finfloh.com/blog/b2b-collections",
    },
    {
      keyword: "Bad Debt Expense",
      url: "https://finfloh.com/blog/bad-debt-formula-master-calculation-management-tips",
    },
    {
      keyword: "Balance Reconciliation",
      url: "https://finfloh.com/blog/master-average-days-delinquent",
    },
    {
      keyword: "Balance Sheet Reconciliation",
      url: "https://finfloh.com/blog/balance-sheet-reconciliation-guide",
    },
    {
      keyword: "Balance of Payment",
      url: "https://finfloh.com/blog/balance-of-payment",
    },
    {
      keyword: "Banking Partner",
      url: "https://finfloh.com/blog/banking-partner",
    },
    {
      keyword: "Bill of Lading",
      url: "https://finfloh.com/blog/bill-of-lading",
    },
    {
      keyword: "Biller Service Provider",
      url: "https://finfloh.com/blog/biller-service-provider-bsp",
    },
    {
      keyword: "Billing Cycle",
      url: "https://finfloh.com/blog/billing-cycle",
    },
    {
      keyword: "Blocked Orders",
      url: "https://finfloh.com/blog/blocked-orders",
    },
    {
      keyword: "Budgeting",
      url: "https://finfloh.com/blog/budgeting",
    },
    {
      keyword: "Business Accounting",
      url: "https://finfloh.com/blog/what-is-business-accounting",
    },
    {
      keyword: "Business Credit Score",
      url: "https://finfloh.com/blog/business-credit-score",
    },
  ],
  C: [
    {
      keyword: "CEI",
      url: "https://finfloh.com/blog/master-collection-effectiveness-index",
    },
    {
      keyword: "Cash Application",
      url: "https://finfloh.com/blog/cash-application-guide",
    },
    {
      keyword: "Cash Conversion",
      url: "https://finfloh.com/blog/cash-conversion-cycle",
    },
    {
      keyword: "Cash Conversion Cycle",
      url: "https://finfloh.com/blog/cash-conversion-cycle",
    },
    {
      keyword: "Cash Flow Modeling",
      url: "https://finfloh.com/blog/cash-flow-modeling-business-guide",
    },
    {
      keyword: "Cash Flow Optimization",
      url: "https://finfloh.com/blog/cash-flow-optimization-for-business-growth",
    },
    {
      keyword: "Cash Flow Projection",
      url: "https://finfloh.com/blog/cash-flow-projection-guide-template",
    },
    {
      keyword: "Cash Forecasting",
      url: "https://finfloh.com/blog/cash-forecast",
    },
    {
      keyword: "Cash Management",
      url: "https://finfloh.com/blog/mastering-cash-flow-for-financial-success",
    },
    {
      keyword: "Cash Management Bill",
      url: "https://finfloh.com/blog/cash-management-bills-explained",
    },
    {
      keyword: "Cash Positioning",
      url: "https://finfloh.com/blog/cash-positioning-understanding-your-financial-lifeblood",
    },
    {
      keyword: "Cash Posting",
      url: "https://finfloh.com/blog/cash-posting-from-receipts-to-records",
    },
    {
      keyword: "Cash Posting",
      url: "https://finfloh.com/blog/zero-touch-cash-posting",
    },
    {
      keyword: "Cash Surrender Value (CSV)",
      url: "https://finfloh.com/blog/cash-surrender-value-csv",
    },
    {
      keyword: "Cash Variance",
      url: "https://finfloh.com/blog/variance-analysis-comprehensive-guide",
    },
    {
      keyword: "Certified Treasury Professional (CTP)",
      url: "https://finfloh.com/blog/certified-treasury-professional",
    },
    {
      keyword: "Check Lockbox",
      url: "https://finfloh.com/blog/cost-savings-with-lockbox-payment",
    },
    {
      keyword: "Close Management",
      url: "https://finfloh.com/blog/close-management",
    },
    {
      keyword: "Collection Call Scripts",
      url: "https://finfloh.com/blog/collection-call-scripts-ethical-effective",
    },
    {
      keyword: "Collection Dispute Letter",
      url: "https://finfloh.com/blog/collection-dispute-letters",
    },
    {
      keyword: "Collection Effectiveness Index (CEI)",
      url: "https://finfloh.com/blog/collection-effectiveness-index-cei",
    },
    {
      keyword: "Collection Letters",
      url: "https://finfloh.com/blog/collection-letters-guide",
    },
    {
      keyword: "Collection Policy",
      url: "https://finfloh.com/blog/build-a-winning-collection-policy",
    },
    {
      keyword: "Collection Policy",
      url: "https://finfloh.com/blog/collection-policy",
    },
    {
      keyword: "Connected Systems",
      url: "https://finfloh.com/blog/how-to-untangle-complex-finance-hairball-infrastructure-build-connected-systems",
    },
    {
      keyword: "Controllership",
      url: "https://finfloh.com/blog/controllership-department-essential-function",
    },
    {
      keyword: "Credit Hold",
      url: "https://finfloh.com/blog/dealing-with-credit-holds",
    },
    {
      keyword: "Credit Limit Request",
      url: "https://finfloh.com/blog/requested-credit-limit",
    },
    {
      keyword: "Credit Memo",
      url: "https://finfloh.com/blog/mastering-credit-memos-a-complete-guide",
    },
    {
      keyword: "Credit Risk Management",
      url: "https://finfloh.com/blog/credit-risk-management-guide-challenges-benefits-best-practices",
    },
    {
      keyword: "Credit Scoring Models",
      url: "https://finfloh.com/blog/credit-scoring-models-explained",
    },
    {
      keyword: "Credit Union",
      url: "https://finfloh.com/blog/credit-union",
    },
    {
      keyword: "Credit Worthiness",
      url: "https://finfloh.com/blog/creditworthiness-assessment-master-your-profits",
    },
    {
      keyword: "Current Yield",
      url: "https://finfloh.com/blog/current-yield",
    },
    {
      keyword: "Customer Master",
      url: "https://finfloh.com/blog/customer-master",
    },
    {
      keyword: "Customer Onboarding in Salesforce",
      url: "https://finfloh.com/blog/ai-customer-onboarding-salesforce",
    },
  ],
  D: [
    {
      keyword: "Day Sales Outstanding",
      url: "https://finfloh.com/blog/dso",
    },
    {
      keyword: "Days Inventory Outstanding",
      url: "https://finfloh.com/blog/days-inventory-outstanding-formula",
    },
    {
      keyword: "Days Inventory Outstanding (DIO)",
      url: "https://finfloh.com/blog/days-inventory-outstanding-formula",
    },
    {
      keyword: "Days Payable Outstanding",
      url: "https://finfloh.com/blog/days-payable-outstanding-benchmark",
    },
    {
      keyword: "Deal Sheet",
      url: "https://finfloh.com/blog/understanding-deal-sheets-explained",
    },
    {
      keyword: "Deal Sheets",
      url: "https://finfloh.com/blog/deal-sheets",
    },
    {
      keyword: "Debt Collection Agency",
      url: "https://finfloh.com/blog/debt-collection-agency-dca",
    },
    {
      keyword: "Delinquent Invoices",
      url: "https://finfloh.com/blog/delinquent-invoices-definition-causes-and-collection-strategies",
    },
    {
      keyword: "Depreciation in Accounting",
      url: "https://finfloh.com/blog/depreciation-in-accounting",
    },
    {
      keyword: "Disclosure Management",
      url: "https://finfloh.com/blog/disclosure-management",
    },
    {
      keyword: "Dispute Management",
      url: "https://finfloh.com/blog/accounts-receivable-dispute-management",
    },
    {
      keyword: "Double entry Accounting",
      url: "https://finfloh.com/blog/double-entry-accounting-system",
    },
    {
      keyword: "DSO - Best Possible DSO",
      url: "https://finfloh.com/blog/best-possible-dso",
    },
    {
      keyword: "DSO - Best Possible DSO vs Standard DSO",
      url: "https://finfloh.com/blog/best-possible-dso-vs-standard-dso",
    },
    {
      keyword: "DSO Optimization",
      url: "https://finfloh.com/blog/dso-optimization",
    },
    {
      keyword: "Dunning Letters",
      url: "https://finfloh.com/blog/dunning-letters",
    },
  ],
  E: [
    {
      keyword: "eChecks vs ACH payments",
      url: "https://finfloh.com/blog/echecks-vs-ach-payments",
    },
    {
      keyword: "e-Lockbox",
      url: "https://finfloh.com/blog/e-lockbox",
    },
    {
      keyword: "Earned Discounts",
      url: "https://finfloh.com/blog/earned-discount",
    },
    {
      keyword: "Electronic Benefits Transfer (EBT)",
      url: "https://finfloh.com/blog/electronic-benefits-transfer-ebt",
    },
    {
      keyword: "Email Parsing",
      url: "https://finfloh.com/blog/email-parsing",
    },
    {
      keyword: "Excel for Accounting",
      url: "https://finfloh.com/blog/excel-for-accountants-essential-skills-and-best-practices",
    },
  ],
  F: [
    {
      keyword: "Factoring Accounts Receivable",
      url: "https://finfloh.com/blog/accounts-receivable-factoring-a-guide",
    },
    {
      keyword: "Financial Bubble",
      url: "https://finfloh.com/blog/financial-bubble",
    },
    {
      keyword: "Financial Consolidation",
      url: "https://finfloh.com/blog/financial-consolidation",
    },
    {
      keyword: "Financial Ratios",
      url: "https://finfloh.com/blog/financial-ratio",
    },
    {
      keyword: "FlohSense AI",
      url: "https://finfloh.com/blog/flohsense-ai-agent-blog",
    },
    {
      keyword: "FMCG",
      url: "https://finfloh.com/blog/fast-moving-consumer-goods-fmcg",
    },
    {
      keyword: "Fractional CFOs",
      url: "https://finfloh.com/blog/fractional-cfo",
    },
  ],
  G: [
    {
      keyword: "GAAP impact",
      url: "https://finfloh.com/blog/gaap-impact-on-o2c-2025",
    },
    {
      keyword: "Goods Receipt Note (GRN)",
      url: "https://finfloh.com/blog/grn-goods-receipt-note",
    },
  ],
  H: [
    {
      keyword: "High Intereste Debt",
      url: "https://finfloh.com/blog/high-interest-debt",
    },
    {
      keyword: "Holdback",
      url: "https://finfloh.com/blog/holdback",
    },
  ],
  I: [
    {
      keyword: "IFRS 15",
      url: "https://finfloh.com/blog/ifrs15",
    },
    {
      keyword: "Invoice recon with Payment Gateway",
      url: "https://finfloh.com/blog/invoice-reconciliation-payment-gateways",
    },
  ],
  J: [
    {
      keyword: "Journal Entry",
      url: "https://finfloh.com/blog/journal-entry",
    },
  ],
  K: [
    {
      keyword: "Key Accounts",
      url: "https://finfloh.com/blog/key-account",
    },
    {
      keyword: "Key Rate Duration",
      url: "https://finfloh.com/blog/key-rate-duration",
    },
  ],
  L: [
    {
      keyword: "Late Payment",
      url: "https://finfloh.com/blog/late-payment",
    },
    {
      keyword: "Liquidity Forecasting",
      url: "https://finfloh.com/blog/liquidity-forecast",
    },
    {
      keyword: "Loan Journal Entry Automation ",
      url: "https://finfloh.com/blog/automate-loan-journal-entries-in-erp",
    },
    {
      keyword: "Lockbox",
      url: "https://finfloh.com/blog/lockbox-payment-automation",
    },
  ],
  M: [
    {
      keyword: "Machine Learning for Credit Scoring",
      url: "https://finfloh.com/blog/machine-learning-for-credit-scoring",
    },
    {
      keyword: "Market Risk",
      url: "https://finfloh.com/blog/market-risk",
    },
    {
      keyword: "Microsoft Dynamics 365 AR Automation",
      url: "https://finfloh.com/blog/msd365-ar-automation",
    },
    {
      keyword: "Modern Finance Teams",
      url: "https://finfloh.com/blog/modern-finance-teams",
    },
    {
      keyword: "Month End Close",
      url: "https://finfloh.com/blog/month-end-close-guide",
    },
    {
      keyword: "Month-End Reconciliation",
      url: "https://finfloh.com/blog/month-end-reconciliation-guide",
    },
  ],
  N: [
    {
      keyword: "Near-Term Applications",
      url: "https://finfloh.com/blog/near-term-applications",
    },
    {
      keyword: "Non-paying Customers",
      url: "https://finfloh.com/blog/managing-non-paying-b2b-customers",
    },
    {
      keyword: "Not required - Ignore",
      url: "https://finfloh.com/blog/finfloh-wins-best-ar-software-usa-2024-wealth_and_finance_international",
    },
    {
      keyword: "NSF Checks",
      url: "https://finfloh.com/blog/nsf-checks",
    },
  ],
  O: [
    {
      keyword: "Open item",
      url: "https://finfloh.com/blog/open-item",
    },
    {
      keyword: "Order Management",
      url: "https://finfloh.com/blog/order-management",
    },
    {
      keyword: "Order to Cash Process",
      url: "https://finfloh.com/blog/order-to-cash-process-optimization-boost-revenue",
    },
    {
      keyword: "Over Payments",
      url: "https://finfloh.com/blog/over-payments",
    },
    {
      keyword: "Outstanding Invoices",
      url: "https://finfloh.com/blog/outstanding-invoices",
    },
  ],
  P: [
    {
      keyword: "Past Due",
      url: "https://finfloh.com/blog/past-due",
    },
    {
      keyword: "Past Due Accounts Receivable",
      url: "https://finfloh.com/blog/past-due-accounts-receivable-management",
    },
    {
      keyword: "Past Due Collection Email Templates",
      url: "https://finfloh.com/blog/7-proven-email-templates-for-collecting-past-due-invoices",
    },
    {
      keyword: "Past Due Invoice",
      url: "https://finfloh.com/blog/past-due-invoice-emails-recovery-strategies",
    },
    {
      keyword: "Past Due Invoice Emails",
      url: "https://finfloh.com/blog/past-due-invoice-email-templates",
    },
    {
      keyword: "Payment discounts",
      url: "https://finfloh.com/blog/payment-discounts",
    },
    {
      keyword: "Payment Penalty",
      url: "https://finfloh.com/blog/payment-penalty",
    },

    {
      keyword: "Payment Terms",
      url: "https://finfloh.com/blog/payment-terms",
    },
    {
      keyword: "Payments Service Directive 2 (PSD2)",
      url: "https://finfloh.com/blog/payments-service-directive-2-psd2",
    },
    {
      keyword: "Pledging Receivable",
      url: "https://finfloh.com/blog/pledging-receivables-for-working-capital",
    },
    {
      keyword: "Point of Purchase",
      url: "https://finfloh.com/blog/point-of-purchase-pop",
    },
    {
      keyword: "POS Transactions",
      url: "https://finfloh.com/blog/pos-transactions-for-b2b-sellers",
    },
    {
      keyword: "Predictive Analytics in Finance",
      url: "https://finfloh.com/blog/finance-predictive-analytics-unlocking-future-insights",
    },
    {
      keyword: "Prepaid Expense Amortization",
      url: "https://finfloh.com/blog/prepaid-expense-amortization-explained",
    },
    {
      keyword: "Promise to Pay",
      url: "https://finfloh.com/blog/promise-to-pay-for-debt-recovery",
    },
    {
      keyword: "Pay to the Order of checks",
      url: "https://finfloh.com/blog/pay-to-the-order-of-checks",
    },
    {
      keyword: "Profit Center",
      url: "https://finfloh.com/blog/profit-center",
    },
    {
      keyword: "Proof of Debt",
      url: "https://finfloh.com/blog/proof-of-debt",
    },
  ],
  R: [
    {
      keyword: "Reconciliation",
      url: "https://finfloh.com/blog/reconciliation-process",
    },
    {
      keyword: "Receivables Balance",
      url: "https://finfloh.com/blog/receivables-balance-management-strategies",
    },
    {
      keyword: "Refinancing",
      url: "https://finfloh.com/blog/refinancing",
    },
    {
      keyword: "Remittance Advice",
      url: "https://finfloh.com/blog/remittance-advice-a-comprehensive-guide-for-efficient-management",
    },
    {
      keyword: "Remote Desktop Capture (RDS)",
      url: "https://finfloh.com/blog/remote-deposit-capture-rdc",
    },
    {
      keyword: "Revenue Forecasting",
      url: "https://finfloh.com/blog/revenue-forecasting",
    },
    {
      keyword: "Robotic Process Automation",
      url: "https://finfloh.com/blog/rpa-ar-automation",
    },
  ],
  S: [
    {
      keyword: "SAGE AR Automation",
      url: "https://finfloh.com/blog/sage-accounts-receivable-automation",
    },
    {
      keyword: "Security Role",
      url: "https://finfloh.com/blog/security-role",
    },
    {
      keyword: "Shared Services",
      url: "https://finfloh.com/blog/shared-services-department",
    },
    {
      keyword: "Ship to Process",
      url: "https://finfloh.com/blog/ship-to-process",
    },
    {
      keyword: "Sight Draft",
      url: "https://finfloh.com/blog/sight-draft-sd",
    },
    {
      keyword: "SOX Compliance",
      url: "https://finfloh.com/blog/sox-compliance",
    },
    {
      keyword: "Subledger Reconciliation",
      url: "https://finfloh.com/blog/subledger-reconciliation",
    },
  ],
  T: [
    {
      keyword: "Third Party Collections",
      url: "https://finfloh.com/blog/third-party-collection-agencies-explained",
    },
    {
      keyword: "Trade Receivables",
      url: "https://finfloh.com/blog/trade-receivables-formula-calculation-management",
    },
    {
      keyword: "Trade References",
      url: "https://finfloh.com/blog/trade-reference-guide-buyers-suppliers",
    },
    {
      keyword: "Transfer Pricing",
      url: "https://finfloh.com/blog/transferpricing",
    },
    {
      keyword: "Treasury Operations",
      url: "https://finfloh.com/blog/guide-to-treasury-operations",
    },
    {
      keyword: "Trust Account",
      url: "https://finfloh.com/blog/trust-account",
    },
  ],
  U: [
    {
      keyword: "Unapplied Credit",
      url: "https://finfloh.com/blog/unapplied-credit",
    },
    {
      keyword: "Unmatched Payments",
      url: "https://finfloh.com/blog/unmatched-payments",
    },
    {
      keyword: "Unpaid Receivables",
      url: "https://finfloh.com/blog/understanding-the-true-cost-of-unpaid-receivables",
    },
    {
      keyword: "Unused Credits",
      url: "https://finfloh.com/blog/unused-credits",
    },
    {
      keyword: "US GAAP",
      url: "https://finfloh.com/blog/us-gaap",
    },
  ],
  V: [
    {
      keyword: "VP of Finance",
      url: "https://finfloh.com/blog/vp-of-finance",
    },
  ],
  W: [
    {
      keyword: "Workflows at FinFloh",
      url: "https://finfloh.com/blog/workflow-at-finfloh",
    },
    {
      keyword: "Working Capital",
      url: "https://finfloh.com/blog/navigating-the-working-capital-maze-through-in-depth-receivables-management",
    },
  ],
  X: [
    {
      keyword: "Xero Accounting Software",
      url: "https://finfloh.com/blog/xero-accounts-receivable-automation",
    },
  ],
  Y: [
    {
      keyword: "Year-End Closing",
      url: "https://finfloh.com/blog/year-end-closing",
    },
  ],
};
const podcastData = [
  {
    id: 1,
    title:
      "How can CFOs unify Business, Finance, AR, AP, FP&A & Controllership functions?",
    author: "Alyssa Shadinger",
    position: "CFO, Sisense",
    episode: 6,
    isNew: true,
    thumbnail: "/images/alyssa-ep6-banner.svg",
    thumbnail_mobile: "/images/alyssa-ep6-banner-mobile.svg",
    video_url:
      "https://www.youtube.com/embed?v=3k4xsfzrL7I&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=1&autoplay=1",
  },
  {
    id: 2,
    title: "Need for CFO Leadership at Small & Mid-sized Firms",
    author: "Darren Farry",
    position: "CEO, The Thoughtful CFO",
    episode: 5,
    isNew: false,
    thumbnail: "/images/darren-ep5-banner.svg",
    thumbnail_mobile: "/images/darren-ep5-banner-mobile.svg",
    video_url:
      "https://www.youtube.com/embed?v=XFBnARwf9QI&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=2&autoplay=1",
  },
  {
    id: 3,
    title: "Bridging the gaps between finance, revenue & operations",
    author: "Ruchi Kasliwal",
    position: "Finance Leader at MongoDB, Confluent & Telenav",
    episode: 4,
    isNew: false,
    thumbnail: "/images/Ruchi_Kasliwal-ep4-banner.svg",
    thumbnail_mobile: "/images/Ruchi_Kasliwal-ep4-banner-mobile.svg",

    video_url:
      "https://www.youtube.com/embed?v=IFXqk-lmUT0&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=3&autoplay=1",
  },
  {
    id: 4,
    title: "Scaling Finance Functions At High Growth Software Companies",
    author: "Josh Troy",
    position: "CFO, PatchRx",
    episode: 3,
    isNew: false,
    thumbnail: "/images/Josh_Troy-ep3-banner.svg",
    thumbnail_mobile: "/images/Josh_Troy-ep3-banner-mobile.svg",

    video_url:
      "https://www.youtube.com/embed?v=UxF1GUju16s&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=4&autoplay=1",
  },
  {
    id: 5,
    title: "Navigating The Finance, Sales & Strategy Conundrum",
    author: "Dustin Walsted",
    position: "VP of Finance Tech, Strategy & HR Smart City Apartment",
    episode: 2,
    isNew: false,
    thumbnail: "/images/Dustin-ep2-banner.svg",
    thumbnail_mobile: "/images/Dustin-ep2-banner-mobile.svg",

    video_url:
      "https://www.youtube.com/embed?v=AjgzwfOTL8o&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=5&autoplay=1",
  },
  {
    id: 6,
    title: "Journey Beyond Balance Sheets",
    author: "Rachel C.",
    position: "Head of F&A, Filson",
    episode: 1,
    isNew: false,
    thumbnail: "/images/racheal-ep1-banner.svg",
    thumbnail_mobile: "/images/racheal-ep1-banner-mobile.svg",

    video_url:
      "https://www.youtube.com/embed?v=OukEygEM7R8&mute=1&list=PLSh1ycsSrby_3SuyzC9HppRHwkFo9spp3&index=6&autoplay=1",
  },
];
const AiInFinanceData = [
  {
    id: 11,
    title: "Applications of AI in CFOTech & why should CFOs care?",
    author: "Amartya Singh",
    position: "Co-Founder & CEO, FinFloh",
    episode: 1,
    isNew: true,
    thumbnail: "/images/Amartya_Sing-ep1-banner.svg",
    thumbnail_mobile: "/images/Amartya_Sing-ep1-banner-mobile.svg",
    video_url:
      "https://www.youtube.com/embed/-6t_6lsaZ9A?si=lxqUDNsHdQ6dIEWN&mute=1&autoplay=1",
  },
];

const GlossarySection = ({ posts: postList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef(
    alphabet.reduce((acc, letter) => {
      acc[letter] = React.createRef();
      return acc;
    }, {})
  );
  // Step 1: Get the available letters from the terms object keys
  const availableLetters = Object.keys(terms);
  // const handleScroll = (letter) => {
  //   if (availableLetters.includes(letter)) {
  //     setSelectedLetter(letter);
  //     sectionRefs.current[letter].current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // Define the height of any fixed elements (e.g., header or navbar)
  const scrollOffset = 150; // Adjust this value based on your header height

  const handleScroll = (letter) => {
    if (Object.keys(sectionRefs.current).includes(letter)) {
      setSelectedLetter(letter);

      const targetSection = sectionRefs.current[letter].current;
      if (targetSection) {
        const topPosition =
          targetSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: topPosition - scrollOffset,
          behavior: "smooth",
        });
      }
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredTerms = searchQuery
    ? Object.entries(terms).reduce((acc, [letter, termList]) => {
        const matchedTerms = termList.filter((term) =>
          term.keyword.toLowerCase().includes(searchQuery)
        );
        if (matchedTerms.length > 0) acc[letter] = matchedTerms;
        return acc;
      }, {})
    : terms;

  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [AiInFinancePlayingVideoId, setAiInFinancePlayingVideoId] =
    useState(false);

  const handleVideoClick = (id) => {
    setPlayingVideoId(id);
    setAiInFinancePlayingVideoId(false); // Close AI video if the podcast is played
  };

  const handleAiInFinanceVideoClick = (id) => {
    setAiInFinancePlayingVideoId(id);
  };
  const handleClose = () => {
    setPlayingVideoId(null);
    setAiInFinancePlayingVideoId(false);
  };
  // Handle scrolling visibility for the back-to-top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const latestPodcast = podcastData[0];
  const latestAiInFinancePodcast = AiInFinanceData[0];

  return (
    <>
      <HeadComponent
        title="Accounts Receivable Glossary | FinFloh"
        description="Explore essential accounts receivable terms with simple, clear definitions to enhance your understanding of AR concepts and practices."
        canonicalUrl="https://finfloh.com/glossary"
        mainEntityOfPage="https://finfloh.com/glossary"
        includeIsPartOf
        includeAbout
        includeHasPart
        aboutProps={{
          "@type": "EducationalOccupationalProgram",
          name: "Accounts Receivable Glossary",
          educationalLevel: "Professional",
        }}
        hasPartProps={[
          {
            "@type": "WebPageElement",
            name: "Key terms and concepts in accounts receivable management",
          },
          {
            "@type": "WebPageElement",
            name: "Our Latest Episodes",
          },
          {
            "@type": "WebPageElement",
            name: "Features",
          },
        ]}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Glossary",
            item: "https://finfloh.com/glossary",
          },
        ]}
      />
      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main glossary-main">
            <div className="glossary-header">
              <h1 className="glossary-heading">
                Accounts Receivable <br />
                Glossary
              </h1>
              <h2 className="glossary-subHeading">
                Key terms and concepts in accounts receivable management
              </h2>
            </div>
            <div className="search-section">
              {/* Search bar */}
              <div className="search-section-header">
                <div className="search-bar-icon">
                  <img src="/images/search.svg" alt="search-icon" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="search-bar"
                />
              </div>

              {/* Alphabet navigation */}
              {!searchQuery && (
                <div className="alphabet-navigation">
                  {/* {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleScroll(letter)}
                      className="alphabet-link"
                    >
                      {letter}
                    </button>
                  ))} */}
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleScroll(letter)}
                      disabled={!availableLetters.includes(letter)}
                      style={{
                        cursor: availableLetters.includes(letter)
                          ? "pointer"
                          : "not-allowed",
                        color: availableLetters.includes(letter)
                          ? "black"
                          : "gray",

                        // hover effect when hover on the alphabet
                      }}
                      className="alphabet-link"
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              )}

              {/* Display filtered terms if there's a search query */}
              {searchQuery ? (
                <div className="search-results">
                  {Object.keys(filteredTerms).length > 0 ? (
                    Object.entries(filteredTerms).map(([letter, termList]) => (
                      <div key={letter} className="alphabet-section">
                        <h2>{letter}</h2>
                        <div className="alphabet-section-main">
                          {termList.map((term, index) => (
                            <div
                              key={index}
                              className="alphabet-section-contents"
                            >
                              <a
                                href={term.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {term.keyword}
                              </a>
                              <a
                                href={term.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src="images/arrow_outward.svg" alt="" />
                              </a>
                            </div>
                          ))}
                        </div>
                        {showBackToTop && (
                          <button
                            className="back-to-top-float"
                            onClick={handleBackToTop}
                          >
                            ↑
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="no-keywords">No Keywords Found</div>
                  )}
                </div>
              ) : (
                // Display alphabet sections only for letters with terms when there's no search query
                alphabet
                  .filter((letter) => terms[letter]?.length > 0)
                  .map((letter) => (
                    <div
                      key={letter}
                      ref={sectionRefs.current[letter]}
                      className="alphabet-section"
                    >
                      <h2>{letter}</h2>
                      <div className="alphabet-section-main" key={letter}>
                        {terms[letter].map((term, index) => (
                          <div
                            key={index}
                            className="alphabet-section-contents"
                          >
                            <a
                              href={term.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {term.keyword}
                            </a>
                            <a
                              href={term.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src="images/arrow_outward.svg" alt="" />
                            </a>
                          </div>
                        ))}
                      </div>
                      {showBackToTop && (
                        <button
                          className="back-to-top-float"
                          onClick={handleBackToTop}
                        >
                          <img
                            src="images/arrow_upward.svg"
                            alt="Back to top"
                          />
                        </button>
                      )}
                    </div>
                  ))
              )}
            </div>

            {/* latest podcast and blog section start here */}
            <div className="latest-glossary-section">
              <h2>Explore Other Resources by FinFloh</h2>
              <div className="latest-glossary-section-main">
                <div className="latest-glossary-blog">
                  <div className="latest-glossary-img">
                    <img src="/images/Hairball-infrastructure-v3.svg"></img>
                  </div>
                  <a
                    href="https://finfloh.com/blog/how-to-untangle-complex-finance-hairball-infrastructure-build-connected-systems"
                    target="_blank"
                  >
                    {" "}
                    <div className="latest-glossary-content-title">
                      How to Untangle Complex Finance Hairball Infrastructure
                      and Build Connected Systems
                    </div>
                  </a>

                  <div className="latest-glossary-content-subtitle">
                    <p className="latest-glossary-content-subtitle-para1">
                      Amartya Singh (CEO & Cofounder, FinFloh){" "}
                    </p>
                    <span>4 Min Read</span>
                  </div>
                </div>
                <div className="latest-glossary-blog">
                  <div className="latest-glossary-img">
                    <img src="/images/Supercharge-ERP-Automation-V1.svg"></img>
                  </div>

                  <a
                    href="https://finfloh.com/blog/how-to-supercharge-your-erp-with-automation"
                    target="_blank"
                  >
                    {" "}
                    <div className="latest-glossary-content-title">
                      How to supercharge your ERP with Automation?
                    </div>
                  </a>
                  <div className="latest-glossary-content-subtitle">
                    <p className="latest-glossary-content-subtitle-para1">
                      Subhasis Sahoo (Founding Member - Marketing)
                    </p>
                    <span>4 Min Read</span>
                  </div>
                </div>
                <div className="latest-glossary-blog">
                  <div className="latest-glossary-img">
                    <img src="images/Workflow-SM-03.svg"></img>
                  </div>
                  <a
                    href="https://finfloh.com/blog/workflow-at-finfloh"
                    target="_blank"
                  >
                    {" "}
                    <div className="latest-glossary-content-title">
                      Workflows at FinFloh
                    </div>
                  </a>
                  <div className="latest-glossary-content-subtitle">
                    <p className="latest-glossary-content-subtitle-para1">
                      Amartya Singh (CEO & Cofounder, FinFloh)
                    </p>
                    <span>4 Min Read</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="latest-blog-section">
              <section>
                <div className="row g-sm-5 g-4 blog-home-articles">
                  {postList?.map((post) => (
                    <Article post={post} key={post.id} />
                  ))}
                </div>
              </section>
            </div> */}
            <div>
              <h3 className="latest-podcast-heading">Our Latest Episodes</h3>
            </div>
            <div
              className="latest-podcast-section"
              style={{ marginBottom: "120px" }}
            >
              <div className="latest-podcast-container">
                <div
                  className="latest-podcast-episode"
                  onClick={() => handleVideoClick(latestPodcast.id)}
                >
                  <div className="thumbnail-container">
                    <img
                      src={latestPodcast.thumbnail}
                      alt={latestPodcast.title}
                      className="latest-podcast-episode-thumbnail"
                    />
                    <img
                      src={latestPodcast.thumbnail_mobile}
                      alt={latestPodcast.title}
                      className="latest-podcast-episode-thumbnail-mobile"
                    />
                    <img
                      src="images/play_circle.svg"
                      alt="Play"
                      className="latest-play-circle"
                    />
                  </div>
                  <div className="podcast-common-content">
                    <div className="podcast-info">
                      <span>{`EPISODE ${latestPodcast.episode}`}</span>
                      {latestPodcast.isNew && (
                        <span className="new-episode green-text">
                          NEW EPISODE
                        </span>
                      )}
                    </div>
                    <div className="latest-podcast-title">
                      How can CFOs unify Business, Finance, AR, AP, FP&A...
                      {/* {latestPodcast.title} */}
                    </div>
                    <div className="latest-podcast-author">
                      {latestPodcast.author}
                    </div>
                    <div className="latest-podcast-position">
                      {latestPodcast.position}
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-podcast-container">
                <div
                  className="latest-podcast-episode"
                  onClick={() =>
                    handleAiInFinanceVideoClick(latestAiInFinancePodcast.id)
                  }
                >
                  <div className="thumbnail-container">
                    <img
                      src={latestAiInFinancePodcast.thumbnail}
                      alt={latestAiInFinancePodcast.title}
                      className="latest-podcast-episode-thumbnail"
                    />
                    <img
                      src={latestAiInFinancePodcast.thumbnail_mobile}
                      alt={latestAiInFinancePodcast.title}
                      className="latest-podcast-episode-thumbnail-mobile"
                    />
                    <img
                      src="images/play_circle.svg"
                      alt="Play"
                      className="latest-play-circle"
                    />
                  </div>
                  <div className="podcast-common-content">
                    <div className="podcast-info">
                      <span>{`EPISODE ${latestAiInFinancePodcast.episode}`}</span>
                      {latestAiInFinancePodcast.isNew && (
                        <span className="new-episode green-text">
                          NEW EPISODE
                        </span>
                      )}
                    </div>
                    <div className="latest-podcast-title">
                      {latestAiInFinancePodcast.title}
                    </div>
                    <div className="latest-podcast-author">
                      {latestAiInFinancePodcast.author}
                    </div>
                    <div className="latest-podcast-position">
                      {latestAiInFinancePodcast.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* latest podcast and blog section end here */}
          </div>
        </div>
        {/* Conditional rendering of the iframe */}
        {(playingVideoId !== null || AiInFinancePlayingVideoId !== false) && (
          <div className="iframe-overlay" onClick={handleClose}>
            <div
              className="iframe-container"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={
                  AiInFinancePlayingVideoId
                    ? AiInFinanceData.find(
                        (podcast) => podcast.id === AiInFinancePlayingVideoId
                      )?.video_url
                    : podcastData.find(
                        (podcast) => podcast.id === playingVideoId
                      )?.video_url
                }
                title="Podcast Video"
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </WebsiteLayout>
    </>
  );
};

export default GlossarySection;
