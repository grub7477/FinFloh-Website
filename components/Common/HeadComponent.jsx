import Head from "next/head";

// -----------------------------
// Helper Schemas
// -----------------------------

const publisherSchema = () => ({
  "@type": "Organization",
  name: "FinFloh",
  description:
    "AI-powered Credit-to-Cash software for enterprise finance teams.",
  url: "https://finfloh.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://finfloh.com/images/finfloh-logo.svg",
  },
});

const aboutSchema = ({
  type = "Service",
  name = "",
  serviceType = "",
} = {}) => ({
  "@type": type,
  name,
  serviceType,
  provider: {
    "@type": "Organization",
    name: "FinFloh",
    url: "https://finfloh.com/",
  },
});

const isPartOfSchema = () => ({
  "@type": "WebSite",
  name: "FinFloh",
  url: "https://finfloh.com",
});

const authorSchema = ({ datePublished = "", dateModified = "" } = {}) => ({
  "@type": "Organization",
  name: "FinFloh",
  url: "https://finfloh.com",
  datePublished,
  dateModified,
});

const mainEntitySchema = ({
  entityType = "WebPage",
  articleSection = "",
  headline = "",
} = {}) => ({
  "@type": entityType,
  headline,
  articleSection,
});

const hasPartSchema = (hasPart = []) => hasPart;

const breadcrumbsSchema = (items = []) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://finfloh.com/",
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: item.url,
    })),
  ],
});

const offerSchema = () => ({
  "@type": "Offer",
  name: "7-Day Free Trial",
  url: "https://finfloh.com/free-trial",
});

const faqSchema = (faqItems = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// -----------------------------
// Clean Object Helper
// -----------------------------

const cleanObject = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) =>
        v !== undefined &&
        v !== null &&
        v !== "" &&
        !(Array.isArray(v) && v.length === 0) &&
        v !== false,
    ),
  );

// -----------------------------
// Main Webpage Schema Generator
// -----------------------------

const webpageSchema = ({
  pageType = "WebPage",
  url = "",
  title = "",
  description = "",
  mainEntityOfPage = null,
  headline = "",
  keywords = [],

  includePublisher = false,
  includeOffer = false,
  includeIsPartOf = false,
  includeAuthor = false,
  includeMainEntity = false,
  includeBreadcrumbs = false,
  includeAbout = false,
  includeHasPart = false,
  includeFAQ = false,

  aboutProps = {},
  offerProps = {},
  authorProps = {},
  mainEntityProps = {},
  breadcrumbItems = [],
  hasPartProps = [],
  publisher = null,
  FAQProps = [],
}) => {
  const schemas = [];

  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name: title,
    headline: headline || title,
    description,
    url, // ✅ only "url" goes into JSON-LD — "canonicalUrl" is intentionally excluded
    mainEntityOfPage,
    keywords,
  };

  if (includePublisher) {
    schema.publisher = publisher || publisherSchema();
  }

  if (includeOffer) {
    schema.offers = offerSchema(offerProps);
  }

  if (includeIsPartOf) {
    schema.isPartOf = isPartOfSchema();
  }

  if (includeAuthor) {
    schema.author = authorSchema(authorProps);
  }

  if (includeMainEntity) {
    schema.mainEntity = mainEntitySchema(mainEntityProps);
  }

  if (includeHasPart) {
    schema.hasPart = hasPartSchema(hasPartProps);
  }

  if (includeAbout) {
    schema.about = aboutSchema(aboutProps);
  }

  if (includeBreadcrumbs) {
    schema.breadcrumb = breadcrumbsSchema(breadcrumbItems);
  }

  schemas.push(cleanObject(schema));

  // ✅ FAQ is pushed as a separate schema object, not nested inside WebPage
  if (includeFAQ && FAQProps.length > 0) {
    schemas.push(cleanObject(faqSchema(FAQProps)));
  }

  return schemas;
};

// -----------------------------
// Head Component
// -----------------------------

function HeadComponent(props) {
  // ✅ canonicalUrl is destructured out and never passed into webpageSchema
  const { title, description, canonicalUrl, ...schemaProps } = props;

  const schemas = webpageSchema({
    title,
    description,
    url: canonicalUrl, // mapped to the valid "url" property
    ...schemaProps,
  });

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ✅ Each schema is rendered as its own <script> tag, not a combined array */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </Head>
  );
}

export default HeadComponent;
