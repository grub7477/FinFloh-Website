import Head from "next/head";

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

const ispartofSchema = () => ({
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

const MainEntitySchema = (
  entityType = "WebPage",
  articleSection,
  headline
) => ({
  "@type": entityType,
  headline,
  articleSection,
});

const hasPartSchema = (hasPart = []) => ({
  hasPart,
});

const breadcrumbsSchema = (items = []) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://finfloh.com/",
    },
    items.map((item, index) => ({
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

// define webpageSchema outside of HeadComponent
const webpageSchema = ({
  pageType = "WebPage",
  url = "",
  canonicalUrl = url,
  title = "",
  description = "",
  mainEntityOfPage = null,
  isPartOf = null,
  about = null,
  headline = "",
  keywords = [],
  includePublisher = false,
  includeOffer = false,
  includeIsPartOf = false,
  includeAuthor = false,
  includeMainEntity = false,
  includeBreadcrumbs = false,
  includeAbout = false,
  aboutProps = {},
  offerProps = {},
  authorProps = {},
  MainEntityProps = {},
  breadcrumbItems = [],
  includeHasPart = false,
  hasPartProps = [],
  publisher = null,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name: title,
    description,
    url,
    canonicalUrl,
    headline,
    keywords,
    mainEntityOfPage,
  };

  if (includePublisher) {
    schema.publisher = publisher || publisherSchema();
  }

  if (includeOffer) {
    schema.offers = offerSchema(offerProps);
  }
  if (includeIsPartOf) {
    schema.isPartOf = ispartofSchema();
  }
  if (includeAuthor) {
    schema.author = authorSchema(authorProps);
  }
  if (includeMainEntity) {
    schema.MainEntity = MainEntitySchema(MainEntityProps);
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

  const cleanObject = (obj) =>
    Object.fromEntries(
      Object.entries(obj).filter(
        ([, v]) =>
          v !== undefined &&
          v !== null &&
          v !== "" &&
          !(Array.isArray(v) && v.length === 0) &&
          v !== false
      )
    );

  return cleanObject(schema);
};

function HeadComponent(props) {
  const { title, description, canonicalUrl, ...schemaProps } = props;

  // Ensure title, description, and url are passed for schema correctly
  const schema = webpageSchema({
    title,
    description,
    url: canonicalUrl,
    ...schemaProps,
  });

  if (!schema) return null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        key="ldjson"
      />
    </Head>
  );
}

export default HeadComponent;
