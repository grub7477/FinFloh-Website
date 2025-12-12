import axios from "axios";
import { ca } from "date-fns/locale";

export default async function handler(req, res) {
  const { page = 1, per_page = 12 } = req.query;

  try {
    // Fetch posts
    const response = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts`,
      {
        params: {
          page,
          per_page,
          _embed: true, // This will include author and featured media data
        },
      }
    );

    // Get unique author IDs from posts
    const authorIds = [...new Set(response.data.map(post => post.author))];
    
    // Fetch only the required authors
    const { data: authors } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/users`,
      {
        params: {
          include: authorIds.join(',')
        }
      }
    );

    // Get unique featured media IDs from posts
    const featuredMediaIds = response.data.map(post => post.featured_media);
    
    // Fetch only the required media items
    const { data: media } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/media`,
      {
        params: {
          include: featuredMediaIds.join(',')
        }
      }
    );

    // Fetch all categories
    const { data: categories } = await axios.get(
      `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/categories`
    );

    // Process posts to include media and category data
    const processedPosts = response.data.map((post) => {
      const postMedia = media?.find((m) => m?.id === post?.featured_media) || null;
      const postCategory = categories?.filter((catg) => post?.categories?.includes(catg?.id))?.[0]?.name || "";

      return {
        ...post,
        authorDetail: authors.find((author) => author.id === post.author) || null,
        media: postMedia,
        category: postCategory,
      };
    });

    // Forward the response headers
    res.setHeader("x-wp-total", response.headers["x-wp-total"]);
    res.setHeader("x-wp-totalpages", response.headers["x-wp-totalpages"]);

    // Send the processed data
    res.status(200).json(processedPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(error.response?.status || 500).json({
      error: "Failed to fetch posts",
      details: error.message,
    });
  }
}
