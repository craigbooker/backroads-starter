module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine &say yes to adventure.",
    author: "@craigbooker",
    twitterUsername: "@craigbooker",
    image: "/og-image.jpg",
    siteUrl: "https://elastic-sinoussi-88a420.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://elastic-sinoussi-88a420.netlify.app",
        sitemap: "https://elastic-sinoussi-88a420.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}
