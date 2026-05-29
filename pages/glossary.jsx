import React, { useRef, useState } from "react";
import HeadComponent from "../components/Common/HeadComponent";
import WebsiteLayout from "../components/Layouts/WebsiteLayout";
import axios from "axios";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/**
 * Decodes common HTML entities returned by the WP REST API.
 * e.g. "&#8220;" → """ | "&amp;" → "&" | "&#8211;" → "–"
 */
const decodeHtmlEntities = (str) =>
  str
    .replace(/&#8220;/g, "\u201C") // "
    .replace(/&#8221;/g, "\u201D") // "
    .replace(/&#8216;/g, "\u2018") // '
    .replace(/&#8217;/g, "\u2019") // '
    .replace(/&#8211;/g, "\u2013") // –
    .replace(/&#8212;/g, "\u2014") // —
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

/**
 * Words that should always appear in a fixed casing.
 * Key   = lowercase version (what comes out of the slug)
 * Value = the display form you want shown in the glossary
 */
const WORD_CASING_MAP = {
  // Acronyms — always uppercase
  ar: "AR",
  ap: "AP",
  ai: "AI",
  ml: "ML",
  cfo: "CFO",
  cfos: "CFOs",
  vp: "VP",
  erp: "ERP",
  ocr: "OCR",
  ach: "ACH",
  dso: "DSO",
  cei: "CEI",
  kpi: "KPI",
  kpis: "KPIs",
  saas: "SaaS",
  b2b: "B2B",
  usa: "USA",
  gaap: "GAAP",
  ifrs: "IFRS",
  asc: "ASC",
  sox: "SOX",
  tds: "TDS",
  gsm: "GSM",
  gst: "GST",
  rpa: "RPA",
  idp: "IDP",
  edi: "EDI",
  ebt: "EBT",
  nsf: "NSF",
  csv: "CSV",
  cpq: "CPQ",
  ctp: "CTP",
  psd2: "PSD2",
  pop: "POP",
  pos: "POS",
  rdc: "RDC",
  grn: "GRN",
  fmcg: "FMCG",
  o2c: "O2C",

  // Proper product / company names — fix casing
  jd: "JD",
  edwards: "Edwards",
  quickbooks: "QuickBooks",
  netsuite: "NetSuite",
  salesforce: "Salesforce",
  finfloh: "FinFloh",
  flohsense: "FlohSense",
  microsoft: "Microsoft",
  dynamics: "Dynamics",
  oracle: "Oracle",
  epicor: "Epicor",
  sage: "Sage",
  intacct: "Intacct",
  odoo: "Odoo",
  xero: "Xero",
  sap: "SAP",
};

/**
 * Applies the casing map to a single word token.
 * Falls back to Title Case for anything not in the map.
 */
const applyWordCasing = (word) => {
  const lower = word.toLowerCase();
  return (
    WORD_CASING_MAP[lower] ??
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
};

/**
 * Filler words stripped from slugs before building the keyword.
 * These are low-value words that bloat the title without adding meaning.
 *
 * "why-b2b-payment-automation-is-a-top-priority-for-cfos"
 *   strip → ["b2b", "payment", "automation", "top", "priority", "cfos"]
 *   cap 5 → "B2B Payment Automation Top Priority CFOs"
 *
 * We intentionally keep words like "not", "vs", "without" because
 * they carry meaning in finance titles.
 */
const FILLER_WORDS = new Set([
  // Question / sentence starters
  "why",
  "how",
  "what",
  "when",
  "where",
  "who",
  "which",
  // Linking verbs & auxiliaries
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "do",
  "does",
  "did",
  "will",
  "would",
  "can",
  "could",
  "should",
  "shall",
  "may",
  "might",
  "must",
  "have",
  "has",
  "had",
  // Articles & prepositions
  "a",
  "an",
  "the",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "by",
  "from",
  "into",
  "onto",
  "per",
  "via",
  "with",
  "about",
  "as",
  // Conjunctions
  "and",
  "or",
  "but",
  "so",
  "yet",
  "nor",
  // Generic filler adjectives / adverbs
  "your",
  "my",
  "our",
  "its",
  "their",
  "top",
  "best",
  "great",
  "good",
  "new",
  "right",
  "every",
  "all",
  "any",
  "some",
  "each",
]);

/**
 * Converts a WordPress slug into a short, meaningful keyword.
 *
 * Steps:
 *  1. Normalise slug (underscores → dashes, dashes → spaces)
 *  2. Apply correct casing per WORD_CASING_MAP
 *  3. Strip filler words (only when result still leaves ≥ 2 words)
 *  4. Cap at 5 meaningful words
 *
 * e.g. "why-b2b-payment-automation-is-a-top-priority-for-cfos"
 *      → "B2B Payment Automation Priority CFOs"
 * e.g. "how-to-improve-accounts-receivable-collections"
 *      → "Improve Accounts Receivable Collections"
 * e.g. "jd-edwards-ar-automation"
 *      → "JD Edwards AR Automation"  (no filler to strip)
 * e.g. "cash-flow-analysis"
 *      → "Cash Flow Analysis"        (no filler to strip)
 */
const slugToKeyword = (slug) => {
  const allWords = slug
    .replace(/_/g, "-")
    .replace(/-+/g, " ")
    .trim()
    .split(" ")
    .map(applyWordCasing);

  // Strip filler words, but only if at least 2 meaningful words remain
  const meaningful = allWords.filter((w) => !FILLER_WORDS.has(w.toLowerCase()));
  const words = meaningful.length >= 2 ? meaningful : allWords;

  // Cap at 5 words for concise glossary entries
  return words.length > 5 ? words.slice(0, 5).join(" ") + "…" : words.join(" ");
};

/**
 * Fetches ALL posts from the WP REST API (handles pagination automatically).
 */
const fetchAllPosts = async () => {
  const BASE = "https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts";
  const perPage = 100;
  let page = 1;
  let allPosts = [];

  // Get first page + total count from headers
  const firstRes = await axios.get(BASE, {
    params: { per_page: perPage, page, _fields: "slug,title" },
  });
  const totalPages = parseInt(firstRes.headers["x-wp-totalpages"] || "1", 10);
  allPosts = [...firstRes.data];

  // Fetch remaining pages in parallel
  if (totalPages > 1) {
    const requests = [];
    for (let p = 2; p <= totalPages; p++) {
      requests.push(
        axios.get(BASE, {
          params: { per_page: perPage, page: p, _fields: "slug,title" },
        }),
      );
    }
    const results = await Promise.all(requests);
    results.forEach((r) => {
      allPosts = [...allPosts, ...r.data];
    });
  }

  return allPosts;
};

/**
 * Given a list of WP posts, build the alphabetical `terms` map.
 * Each entry: { keyword: string, url: string }
 * Sorted alphabetically within each letter bucket.
 */
const buildTermsFromPosts = (posts) => {
  const map = {};

  posts.forEach(({ slug, title }) => {
    // Always derive keyword from slug (already short & clean).
    // Decode entities from WP title as a display-only fallback for very short slugs.
    const fromSlug = slugToKeyword(slug);
    const fromTitle = title?.rendered
      ? decodeHtmlEntities(title.rendered.replace(/<[^>]+>/g, "").trim())
      : null;

    // Use slug keyword; if slug is too short (e.g. "asc606"), prefer the title
    const keyword =
      fromSlug.replace(/…/, "").trim().length <= 4 && fromTitle
        ? fromTitle
        : fromSlug;

    const url = `https://finfloh.com/blog/${slug}`;
    const firstLetter = keyword.trim()[0].toUpperCase();

    // Only index A-Z entries
    if (/[A-Z]/.test(firstLetter)) {
      if (!map[firstLetter]) map[firstLetter] = [];
      map[firstLetter].push({ keyword, url, slug });
    }
  });

  // Sort each bucket alphabetically (case-insensitive)
  Object.keys(map).forEach((letter) => {
    map[letter].sort((a, b) =>
      a.keyword.localeCompare(b.keyword, undefined, {
        sensitivity: "base",
        numeric: true,
      }),
    );
  });

  return map;
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const GlossarySection = ({ terms }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const availableLetters = Object.keys(terms).sort();

  // One ref per letter
  const sectionRefs = useRef(
    alphabet.reduce((acc, letter) => {
      acc[letter] = React.createRef();
      return acc;
    }, {}),
  );

  const scrollOffset = 150;

  const handleScrollToLetter = (letter) => {
    const targetSection = sectionRefs.current[letter]?.current;
    if (targetSection) {
      const topPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - scrollOffset, behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter terms based on search query
  const filteredTerms = searchQuery
    ? Object.entries(terms).reduce((acc, [letter, termList]) => {
        const matched = termList.filter((t) =>
          t.keyword.toLowerCase().includes(searchQuery),
        );
        if (matched.length > 0) acc[letter] = matched;
        return acc;
      }, {})
    : terms;

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
          { "@type": "WebPageElement", name: "Our Latest Episodes" },
          { "@type": "WebPageElement", name: "Features" },
        ]}
        includeBreadcrumbs
        breadcrumbItems={[
          { name: "Glossary", item: "https://finfloh.com/glossary" },
        ]}
      />

      <WebsiteLayout>
        <div className="bg-container">
          <div className="container-main glossary-main">
            {/* ── Header ── */}
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
              {/* ── Search bar ── */}
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

              {/* ── Alphabet navigation (hidden during search) ── */}
              {!searchQuery && (
                <div className="alphabet-navigation">
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleScrollToLetter(letter)}
                      disabled={!availableLetters.includes(letter)}
                      style={{
                        cursor: availableLetters.includes(letter)
                          ? "pointer"
                          : "not-allowed",
                        color: availableLetters.includes(letter)
                          ? "black"
                          : "gray",
                      }}
                      className="alphabet-link"
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              )}

              {/* ── Term sections ── */}
              {searchQuery ? (
                /* Search results */
                <div className="search-results">
                  {Object.keys(filteredTerms).length > 0 ? (
                    Object.entries(filteredTerms)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([letter, termList]) => (
                        <div key={letter} className="alphabet-section">
                          <h2>{letter}</h2>
                          <div className="alphabet-section-main">
                            {termList.map((term, index) => (
                              <TermRow key={index} term={term} />
                            ))}
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="no-keywords">No Keywords Found</div>
                  )}
                </div>
              ) : (
                /* Full alphabetical listing */
                alphabet
                  .filter((letter) => terms[letter]?.length > 0)
                  .map((letter) => (
                    <div
                      key={letter}
                      ref={sectionRefs.current[letter]}
                      className="alphabet-section"
                    >
                      <h2>{letter}</h2>
                      <div className="alphabet-section-main">
                        {terms[letter].map((term, index) => (
                          <TermRow key={index} term={term} />
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

            {/* ── Featured Resources ── */}
            <div className="latest-glossary-section">
              <h2>Explore Other Resources by FinFloh</h2>
              <div className="latest-glossary-section-main">
                <FeaturedBlog
                  img="/images/Hairball-infrastructure-v3.svg"
                  href="https://finfloh.com/blog/how-to-untangle-complex-finance-hairball-infrastructure-build-connected-systems"
                  title="How to Untangle Complex Finance Hairball Infrastructure and Build Connected Systems"
                  author="Amartya Singh (CEO & Cofounder, FinFloh)"
                />
                <FeaturedBlog
                  img="/images/Supercharge-ERP-Automation-V1.svg"
                  href="https://finfloh.com/blog/how-to-supercharge-your-erp-with-automation"
                  title="How to supercharge your ERP with Automation?"
                  author="Subhasis Sahoo (Founding Member - Marketing)"
                />
                <FeaturedBlog
                  img="images/Workflow-SM-03.svg"
                  href="https://finfloh.com/blog/workflow-at-finfloh"
                  title="Workflows at FinFloh"
                  author="Amartya Singh (CEO & Cofounder, FinFloh)"
                />
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const TermRow = ({ term }) => (
  <div className="alphabet-section-contents">
    <a href={term.url} target="_blank" rel="noopener noreferrer">
      {term.keyword}
    </a>
    <a href={term.url} target="_blank" rel="noopener noreferrer">
      <img src="images/arrow_outward.svg" alt="" />
    </a>
  </div>
);

const FeaturedBlog = ({ img, href, title, author }) => (
  <div className="latest-glossary-blog">
    <div className="latest-glossary-img">
      <img src={img} alt={title} />
    </div>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="latest-glossary-content-title">{title}</div>
    </a>
    <div className="latest-glossary-content-subtitle">
      <p className="latest-glossary-content-subtitle-para1">{author}</p>
      <span>4 Min Read</span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Data fetching — runs at request time on the server
// ─────────────────────────────────────────────────────────────────────────────

export async function getServerSideProps() {
  try {
    const posts = await fetchAllPosts();
    const terms = buildTermsFromPosts(posts);

    return { props: { terms } };
  } catch (error) {
    console.error("Glossary: failed to fetch posts", error);
    return { props: { terms: {} } };
  }
}

export default GlossarySection;
