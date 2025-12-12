import { format } from "date-fns";
import axios from "axios";
import WebsiteLayout from "../../components/Layouts/WebsiteLayout";
import HeadComponent from "../../components/Common/HeadComponent";
import { useEffect, useState } from "react";
import generateUtmUrls from "../../utils/utmUrls";
import { PRODUCT } from "../../components/Common/ProductArea";
import Loader from "../../components/Common/Loader";
const utmURLs = generateUtmUrls("blog");
export const PRODUCT_INFO_MAP_blog = {
  [PRODUCT.Integration]: {
    title: "Invoice Validation Automation",
    url_navbar: utmURLs.integrationsAndInvoiceVerification_navbar,
    url_footer: utmURLs.integrationsAndInvoiceVerification_footer,
  },
  [PRODUCT.CollaborativeCommunication]: {
    title: "Dispute Resolution",
    url_navbar: utmURLs.collaborativeCommunication_navbar,
    url_footer: utmURLs.collaborativeCommunication_footer,
  },
  [PRODUCT.AIDrivenCollections]: {
    title: "Collections",
    url_navbar: utmURLs.accountsReceivableCollections_navbar,
    url_footer: utmURLs.accountsReceivableCollections_footer,
  },
  [PRODUCT.BuyerIntelligence]: {
    title: "Credit Scoring & Decisions",
    url_navbar: utmURLs.creditdecisioning_navbar,
    url_footer: utmURLs.creditdecisioning_footer,
  },

  [PRODUCT.AutomatedCashApp]: {
    title: "Cash Application",
    url_navbar: utmURLs.automatedCashApplication_navbar,
    url_footer: utmURLs.automatedCashApplication_footer,
  },
};
const formatDateFromTimeStamp = (timeStamp) => {
  return format(new Date(timeStamp), "dd MMM yyyy");
};
export const CategoryDate = ({ category = "Collections", date }) => (
  <div
    className="d-flex align-items-center"
    style={{ justifyContent: "space-between" }}
  >
    <div
      style={{ color: "#00954A", marginBottom: "0px" }}
      dangerouslySetInnerHTML={{ __html: category }}
    ></div>
    <img src="/images/blog-ellipse.svg" alt="blog ellipse finfloh" />
    <p style={{ color: "#737373" }}>{date}</p>
  </div>
);
export const Author = ({ avatarURL, name }) => (
  <div
    className="d-flex align-items-center"
    style={{ gap: "15px", marginTop: "8px" }}
  >
    <img
      src={avatarURL}
      alt="author avatar finfloh"
      style={{
        maxWidth: "40px",
        maxHeight: "40px",
        borderRadius: "50%",
      }}
    />
    <p style={{ color: "#737373" }}>{name}</p>
  </div>
);

export const Article = ({ post }) => {
  const { title, date, authorDetail, excerpt, category } = post;

  return (
    <div
      className="col-lg-4 col-md-6 blog-home-article"
      style={{ paddingLeft: 0, paddingRight: "calc(var(--bs-gutter-x) * 1)" }}
    >
      <div className="row">
        <div
          className={
            "col-md-12 col-sm-6 col-12" + (!post.imgURL ? " bg_dark" : "")
          }
          style={{ minHeight: !post?.imgURL ? "185.59px" : null }}
        >
          {post.imgURL && <img src={post.imgURL} alt="blog post finfloh"></img>}
        </div>
        <div className="col-md-12 col-sm-6 col-12 article-content">
          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <CategoryDate category={category} date={date} />
          </div>
          <a href={`/blog/${post?.slug}`}>
            <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
          </a>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          <div style={{ paddingTop: "15px" }}>
            <Author
              name={authorDetail.name}
              avatarURL={authorDetail.avatarURL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ initialPosts, totalPosts }) => {
  const [blogList, setBlogList] = useState([...initialPosts]);
  const [searchBlog, setSearchBlog] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalPosts / 12));

  useEffect(() => {
    window?.scrollTo(0, 0); // Scroll to top when currentPage changes
  }, [currentPage]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (currentPage === 1) return; // Skip for initial page as it's already loaded
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/posts`, {
          params: {
            page: currentPage,
            per_page: 12,
          },
        });
        const posts = parsePostList(response.data);
        setBlogList(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredBlogs = !searchBlog.trim()
    ? blogList
    : blogList.filter(
        (blog) =>
          blog.title &&
          blog.title.toLowerCase().includes(searchBlog.toLowerCase())
      );

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 8;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <WebsiteLayout
      utmURLs={utmURLs}
      PRODUCT_INFO_MAP_url={PRODUCT_INFO_MAP_blog}
    >
      <HeadComponent
        title="The FinFloh Blog"
        description="Explore top-notch invoice-to-cash best practices, automation trends, expert reports and insights through FinFloh's blog posts."
        canonicalUrl="https://finfloh.com/blog"
        pageType="Blog"
        includePublisher
        headline="Blog - FinFloh"
        keywords="Receivables, AR, A/R, AR Automation, AI, Accounts Receivable"
        includeMainEntity
        MainEntityProps={{
          entityType: "WebPage",
          headline: "The FinFloh Blog",
          articleSection: [
            "Streamline Invoice Validation to Boost Revenue",
            "All Blogs",
          ],
        }}
        includeBreadcrumbs
        breadcrumbItems={[
          {
            name: "Blog",
            item: "https://finfloh.com/blog",
          },
        ]}
      />
      <div className="bg-container blogParent-container">
        <div className="container-main search-container">
          <h1 className="blog-title">The FinFloh Blog</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
              value={searchBlog}
              onChange={(e) => setSearchBlog(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="bg-container blog-bg">
        <div className="container-main blog-home">
          <div>
            <a
              className="row blog-home-banner"
              href={`/blog/${blogList[0]?.slug}`}
              style={{ marginBottom: "50px", borderRadius: "4px" }}
            >
              <div className="col-md-6 col-12 bg_dark d-flex align-items-center">
                <img src={blogList[0]?.imgURL} alt="blog finfloh" />
              </div>
              <div className="col-md-6 col-12">
                <div className="blog-home-banner-content">
                  <CategoryDate
                    category={blogList[0]?.category}
                    date={blogList[0]?.date}
                  />
                  {blogList?.length > 0 && (
                    <h2
                      dangerouslySetInnerHTML={{ __html: blogList[0]?.title }}
                    ></h2>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogList[0]?.excerpt,
                    }}
                  ></div>
                  <div style={{ marginTop: "10px" }}>
                    <Author
                      avatarURL={blogList[0]?.authorDetail?.avatarURL}
                      name={blogList[0]?.authorDetail?.name}
                    />
                  </div>
                </div>
              </div>
            </a>
            <h2>All Blogs</h2>
          </div>
          {isLoading ? (
            <Loader text="Loading posts..." />
          ) : (
            <>
              <div className="row g-sm-5 g-4 blog-home-articles">
                {filteredBlogs?.length > 0 ? (
                  <>
                    {filteredBlogs?.map((post) => (
                      <Article key={post.id} post={post} />
                    ))}
                  </>
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "24px",
                      padding: "20px",
                    }}
                  >
                    No Data Found
                  </p>
                )}
              </div>
              <div className="pagination-container">
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="pagination-button"
                    style={{
                      padding: "8px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      cursor: "pointer",
                      width: "120px",
                    }}
                  >
                    Previous
                  </button>
                )}
                <div className="pagination-numbers">
                  {getPageNumbers().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`pagination-button ${
                        currentPage === pageNumber ? "active" : ""
                      }`}
                      style={{
                        padding: "8px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        cursor: "pointer",
                        backgroundColor:
                          currentPage === pageNumber ? "#00954A" : "white",
                        color: currentPage === pageNumber ? "white" : "black",
                      }}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="pagination-button"
                    style={{
                      padding: "8px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      cursor: "pointer",
                      width: "120px",
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
              <style jsx>{`
                @media (max-width: 768px) {
                  .pagination-numbers {
                    display: none;
                  }
                }
                @media (min-width: 769px) {
                  .pagination-numbers {
                    display: flex;
                    gap: 10px;
                  }
                }
              `}</style>
            </>
          )}
        </div>
      </div>
    </WebsiteLayout>
  );
};

export const parsePost = (post) => {
  // Get author data from either _embedded or authorDetail
  const authorData = post?._embedded?.author?.[0] || post?.authorDetail;
  const canonicalUrl = post?.yoast_head_json?.canonical || "";
  const updatedCanonicalUrl = canonicalUrl
    ? canonicalUrl.replace(
        /^https?:\/\/blog\.finfloh\.com/gi,
        "https://finfloh.com/blog"
      )
    : "";
  return {
    id: post?.id || "",
    date: post?.date ? formatDateFromTimeStamp(post?.date) : "",
    title: post?.title?.rendered,
    excerpt: post?.excerpt?.rendered,
    content: post?.content?.rendered,

    slug: post?.slug,
    authorDetail: {
      name: authorData?.name || "",
      avatarURL: authorData?.avatar_urls?.["96"] || "",
    },
    imgURL:
      post?.media?.source_url ||
      post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      null,
    category: post?.category || "",
    metaTitle: post?.yoast_head_json?.title,
    description: post?.yoast_head_json?.description || "",
    canonical_url: updatedCanonicalUrl,
    relatedPosts:
      post?.["jetpack-related-posts"]?.map((relatedPost) => {
        // Extract slug from URL (e.g., "https://blog.finfloh.com/example-post/" -> "example-post")
        const url = relatedPost.url || "";
        const slug =
          url
            .split("/")
            .filter(
              (segment) =>
                segment &&
                segment !== "https:" &&
                segment !== "http:" &&
                segment !== "blog.finfloh.com"
            )
            .pop() || "";

        return {
          id: relatedPost.id,
          title: relatedPost.title,
          url: relatedPost.url,
          slug: slug,
          excerpt: relatedPost.excerpt,
          date: relatedPost.date,
          img: relatedPost.img?.src || null,
          context: relatedPost.context,
        };
      }) || [],
  };
};

const parsePostList = (posts) => {
  return posts?.map(parsePost);
};

export async function getServerSideProps({ req }) {
  try {
    // Fetch posts with _embed to get author and media data
    const { data: postList, headers } = await axios.get(
      "https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts",
      {
        params: {
          per_page: 12,
          page: 1,
          _embed: true,
        },
      }
    );

    const totalPosts = parseInt(headers["x-wp-total"]);

    // Get unique author IDs from posts
    const authorIds = [...new Set(postList.map((post) => post.author))];

    // Fetch only the required authors
    const { data: authors } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/users`,
      {
        params: {
          include: authorIds.join(","),
        },
      }
    );

    // Get unique featured media IDs from posts
    const featuredMediaIds = postList.map((post) => post.featured_media);

    // Fetch only the required media items
    const { data: media } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/media`,
      {
        params: {
          include: featuredMediaIds.join(","),
        },
      }
    );

    // Fetch all categories
    const { data: categories } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/categories`
    );

    // Process posts to include media and category data
    const postListWithAuthor = postList.map((post) => {
      const postMedia =
        media?.find((m) => m?.id === post?.featured_media) || null;
      const postCategory =
        categories?.filter((catg) => post?.categories?.includes(catg?.id))?.[0]
          ?.name || "";

      return {
        ...post,
        authorDetail:
          authors.find((author) => author.id === post.author) || null,
        media: postMedia,
        category: postCategory,
      };
    });

    const posts = parsePostList(postListWithAuthor);

    return {
      props: {
        initialPosts: posts,
        totalPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return {
      props: {
        initialPosts: [],
        totalPosts: 0,
      },
    };
  }
}

export default Blog;
