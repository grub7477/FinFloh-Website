// NOTE: UTM parameters should only be used for EXTERNAL links (email campaigns, social media, paid ads)
// Internal navigation links should use clean URLs to avoid duplicate content issues in sitemaps
const generateUtmUrls = (pageName) => ({
  // Internal navigation - using clean URLs (no UTM parameters)
  pricing_navbar: `/pricing`,
  freeTrial_navbar: `/free-trial`,
  bookDemo_navbar: `/book-a-demo`,
  bookDemo_header: `/book-a-demo`,
  bookDemo_newsLetter: `/book-a-demo`,
  bookDemo_footer: `/book-a-demo`,
  logo_navbar: `/`,
  logo_footer: `/`,
  about_us_navbar: `/about-us`,

  invoice_to_cash: `/invoice-to-cash`,

  accountsReceivableCollections_navbar: `/accounts-receivable-collections`,
  accountsReceivableCollections_otherProducts: `/accounts-receivable-collections`,
  accountsReceivableCollections_footer: `/accounts-receivable-collections`,

  creditdecisioning_navbar: `/credit-decisioning`,
  creditdecisioning_otherProducts: `/credit-decisioning`,
  creditdecisioning_footer: `/credit-decisioning`,

  automatedCashApplication_navbar: `/automated-cash-application-software`,
  automatedCashApplication_otherProducts: `/automated-cash-application-software`,
  automatedCashApplication_footer: `/automated-cash-application-software`,

  integrationsAndInvoiceVerification_navbar: `/invoice-automation`,
  integrationsAndInvoiceVerification_otherProducts: `/invoice-automation`,
  integrationsAndInvoiceVerification_footer: `/invoice-automation`,

  collaborativeCommunication_navbar: `/collaborative-communication`,
  collaborativeCommunication_otherProducts: `/collaborative-communication`,
  collaborativeCommunication_footer: `/collaborative-communication`,
});

// NOTE: UTM parameters should only be used for EXTERNAL links (email campaigns, social media, paid ads)
// Internal navigation links should use clean URLs to avoid duplicate content issues in sitemaps
export const generatehomeUtmUrls = (pageName) => ({
  // Internal navigation - using clean URLs (no UTM parameters)
  homePage_pricing_navbar: `/pricing`,
  homePage_freeTrial_navbar: `/free-trial`,
  homePage_bookDemo_navbar: `/book-a-demo`,
  homePage_bookDemo_header: `/demo-request-successful`,
  homePage_bookDemo_newsLetter: `/demo-request-successful`,
  homePage_bookDemo_footer: `/book-a-demo`,

  homepage_invoice_to_cash: `/invoice-to-cash`,

  homePage_accountsReceivableCollections_navbar: `/accounts-receivable-collections`,
  homePage_accountsReceivableCollections_central: `/accounts-receivable-collections`,
  homePage_accountsReceivableCollections_footer: `/accounts-receivable-collections`,

  homePage_creditdecisioning_navbar: `/credit-decisioning`,
  homePage_creditdecisioning_central: `/credit-decisioning`,
  homePage_creditdecisioning_footer: `/credit-decisioning`,

  homePage_automatedCashApplication_navbar: `/automated-cash-application-software`,
  homePage_automatedCashApplication_central: `/automated-cash-application-software`,
  homePage_automatedCashApplication_footer: `/automated-cash-application-software`,

  homePage_integrationsAndInvoiceVerification_navbar: `/invoice-automation`,
  homePage_integrationsAndInvoiceVerification_central: `/invoice-automation`,
  homePage_integrationsAndInvoiceVerification_footer: `/invoice-automation`,

  homePage_collaborativeCommunication_navbar: `/collaborative-communication`,
  homePage_collaborativeCommunication_central: `/collaborative-communication`,
  homePage_collaborativeCommunication_footer: `/collaborative-communication`,
});

export default generateUtmUrls;
