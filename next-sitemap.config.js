// next-sitemap.config.js
module.exports = {
  siteUrl: "https://finfloh.com",
  generateRobotsTxt: true,
  sitemapSize: 1000,

  transform: async (config, path) => {
    // Give homepage priority 1
    if (path === "/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Default for all other pages
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async (config) => {
    const paths = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const res = await fetch(
        `https://blogfinflohcom.wpcomstaging.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`,
      );

      if (!res.ok) break;

      const posts = await res.json();
      if (posts.length === 0) {
        hasMore = false;
        break;
      }

      posts.forEach((post) => {
        paths.push({
          loc: `/blog/${post.slug}`,
          changefreq: "weekly",
          priority: 0.65,
          lastmod: post.modified,
        });
      });

      page++;
      if (posts.length < 100) hasMore = false;
    }

    return paths;
  },
};
