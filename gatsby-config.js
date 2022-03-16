require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = require("./gatsby-config/contentfulConfig")

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
}
