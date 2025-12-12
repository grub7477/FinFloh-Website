import axios from "axios";
import HeadComponent from "../../components/Common/HeadComponent";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import Newsletter from "../../components/Common/Newsletter";
import { CategoryDate, parsePost } from ".";
import { useEffect, useState } from "react";
import NewNewsLetter from "../../components/Common/NewNewsLetter";

const RelatedPost = ({ post }) => (
  <div className="related-post-container">
    <div className="related-post-img">
      {post?.img && <img src={post?.img} alt={post?.title} />}
    </div>
    <div className="related-post-content">
      <CategoryDate category={post?.context} date={post?.date} />

      <a href={`/blog/${post?.slug}`}>
        <h4 dangerouslySetInnerHTML={{ __html: post?.title }}></h4>
      </a>
      <div
        className="related-post-excerpt"
        dangerouslySetInnerHTML={{ __html: post?.excerpt }}
      ></div>
    </div>
  </div>
);

const RelatedPosts = ({ posts }) => {
  if (!posts?.length) return null;

  const limitedPosts = posts.slice(0, 3);

  return (
    <div className="related-posts-grid">
      {limitedPosts.map((post) => (
        <RelatedPost key={post.id} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  const [isFixed, setIsFixed] = useState(true);

  const rewriteContentUrls = (html) => {
    if (!html) return html;
    let updated = html.replace(
      /https:\/\/blog\.finfloh\.com/g,
      "https://finfloh.com/blog"
    );

    const siteSlugs = [
      "book-a-demo",
      "pricing",
      "about-us",
      "privacy-policy",
      "terms-of-use",
      "podcast",
      "why-finfloh",
      "free-trial",
      "get-a-quote",
      "refer",
      "roi-calculator",
      "glossary",
      "awards",
      "cookie-policy",
      "credit-decisioning",
      "collaborative-communication",
      "invoice-validation-automation",
      "accounts-receivable-collections",
      "flohsense-ai-agent",
      "product-hunt",
      "lp",
      "homePage-pricing",
      "free-credit-score",
    ];

    const slugAlternation = siteSlugs.join("|");
    const rootPageRegex = new RegExp(
      `https://finfloh\\.com/blog/(${slugAlternation})(?=[$/\\"?#])|https://finfloh\\.com/blog/(${slugAlternation})$`,
      "g"
    );

    updated = updated.replace(rootPageRegex, (match) => {
      return match.replace("https://finfloh.com/blog/", "https://finfloh.com/");
    });

    return updated;
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const blogContent = document.querySelector(".container-main");
  //     const header = document.querySelector(".blog-header-content");
  //     const newsletter = document.querySelector(".newsletter");

  //     if (!blogContent || !header || !newsletter) return;

  //     const blogBottom = blogContent.getBoundingClientRect().bottom;
  //     const headerHeight = header.offsetHeight;
  //     console.log("blogBottom", blogBottom);
  //     console.log("headerHeight", headerHeight);

  //     if (blogBottom <= headerHeight) {
  //       // Stop fixing the header when it reaches the end of the blog content
  //       setIsFixed(false);
  //     } else {
  //       // Keep the header fixed while inside the blog content
  //       setIsFixed(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const handleAnchorClick = (event) => {
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault(); // Prevent default scroll behavior

        const targetId = event.target.hash.substring(1); // Remove the `#`
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerOffset = 80; // Adjust this value based on your fixed header height
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
  return (
    <WebsiteLayout>
      <HeadComponent
        title={post?.title}
        description={post?.description}
        canonicalUrl={post?.canonical_url}
      />
      <div className="bg-container">
        <div className="container-main">
          <div className="blog-header">
            <div className="blog-header-content">
              <div className="blog-header-start">
                <div
                  style={{ color: "#00954A", marginBottom: "0px" }}
                  dangerouslySetInnerHTML={{ __html: post?.category }}
                ></div>
                <div
                  style={{ color: "#fff" }}
                  dangerouslySetInnerHTML={{ __html: post?.date }}
                ></div>
              </div>
              <div className="blog-header-middle">
                <h1
                  style={{ color: "#fff" }}
                  dangerouslySetInnerHTML={{ __html: post?.title }}
                ></h1>
              </div>
              <div className="blog-header-end">
                <img
                  src={post?.authorDetail?.avatarURL}
                  alt="blog post finfloh"
                />
                <p
                  style={{ color: "#fff" }}
                  dangerouslySetInnerHTML={{ __html: post?.authorDetail?.name }}
                ></p>
              </div>
            </div>
            <div className="blog-header-img">
              <img src={post?.imgURL} alt="blog post finfloh" />
            </div>
          </div>
          <div className="blog-imgAndContents">
            <div
              className="blog-post-content-all"
              dangerouslySetInnerHTML={{
                __html: rewriteContentUrls(post?.content),
              }}
            ></div>

            <RelatedPosts posts={post?.relatedPosts} />

            {/* newsletters section */}

            <div
              className="about-calculate-container"
              style={{ margin: "86px 0px" }}
            >
              <div className="about-calculate-content">
                <p
                  className="about-calculate-heading"
                  style={{ color: "#fff" }}
                >
                  Take Control of Your <br /> Order-to-Cash Journey Today!
                </p>
              </div>
              <div className="cal-btn">
                <a
                  target="_blank"
                  // className="quote_anchor"
                  href={
                    "https://finfloh.com/book-a-demo?utm_source=blog_page_cta&utm_medium=finfloh_website"
                  }
                >
                  <button className="quote-roi-btn">
                    Talk to us
                    <img src="/images/Redirect-roi.svg" alt="redirect-logo" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Newsletter
        heading="Subscribe to FinFloh's Blog"
        text="Stay updated with the latest Invoice-to-Cash insights, best practices & trends"
        type="blogSubscribe"
      /> */}
      <NewNewsLetter
        heading="Subscribe to FinFloh's Blog"
        text="Stay updated with the latest Invoice-to-Cash insights, best practices & trends"
      />
    </WebsiteLayout>
  );
};

export async function getServerSideProps({ req, query }) {
  const { data: post } = await axios.get(
    `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts?slug=${query.slug}`
  );
  if (post.length === 0) {
    return {
      notFound: true,
    };
  }

  const author = await axios
    .get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/users/${post[0]?.author}`
    )
    .catch(() => {});

  const media = await axios
    .get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/media/${post[0]?.featured_media}`
    )
    .catch(() => {});

  const categories = await axios
    .get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/categories?include=${post[0]?.categories?.join(
        ","
      )}`
    )
    .catch(() => {});

  // Fetch author data for related posts
  const relatedPosts = post[0]?.["jetpack-related-posts"] || [];

  return {
    props: {
      post: parsePost({
        ...post[0],
        authorDetail: author?.data || {
          avatar_urls: {
            ["96"]: "",
          },
        },
        media: media?.data,
        category: categories?.data[0]?.name,
        "jetpack-related-posts": relatedPosts,
      }),
    },
  };
}

export default Post;
