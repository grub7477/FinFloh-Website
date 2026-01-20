// Shared email validation helpers used across multiple forms.
// Goal: reject common free email providers regardless of TLD (e.g. gmail.com, gmail.xyz, gmail.co.uk).

export const DEFAULT_EXCLUDED_EMAIL_ROOTS = [
  "gmail",
  "yahoo",
  "hotmail",
  "outlook",
  "aol",
  "icloud",
  "live",
  "msn",
  "protonmail",
  "zoho",
  "gmx",
  "mail",
  "yandex",
  "haotuwu",
  "tempmail",
];

function getRootDomainLabel(domain) {
  const cleanDomain = (domain || "").trim().toLowerCase().split(":")[0];
  const labels = cleanDomain.split(".").filter(Boolean);
  if (labels.length === 0) return "";
  // "One label" approach: treat the provider/company as the first label.
  // Examples:
  // - gmail.xyz -> gmail
  // - gmail.com -> gmail
  // - company.co.uk -> company
  // Note: subdomains like eu.company.com will return "eu".
  return labels[0];
}

export function validateBusinessEmail(email, excludedRoots = DEFAULT_EXCLUDED_EMAIL_ROOTS) {
  const value = (email || "").trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidSyntax = emailRegex.test(value);
  if (!isValidSyntax) return false;

  const domainPart = value.includes("@") ? value.split("@")[1] : "";
  const rootLabel = getRootDomainLabel(domainPart);
  if (!rootLabel) return false;

  return !excludedRoots.map((d) => d.toLowerCase()).includes(rootLabel);
}


