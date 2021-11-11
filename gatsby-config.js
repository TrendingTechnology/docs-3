module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteTitle: `Bothell.js`,
    defaultTitle: `Bothell.js`,
    siteTitleShort: `Bothell.js`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://bothelljs.github.io`,
    siteAuthor: `@joelerego`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/bothelljs/docs`,
        baseDir: `docs/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bothell.js`,
        short_name: `Bothell.js`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bothelljs.github.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
