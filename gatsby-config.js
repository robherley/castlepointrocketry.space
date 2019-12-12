module.exports = {
  siteMetadata: {
    title: `Hudson Space Systems`,
    description: `HSS is pushing the cutting edge of aerospace manufacturing.`,
    author: `Hudson Space Systems`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HudsonSpaceSystems`,
        short_name: `HSS`,
        start_url: `/`,
        background_color: `#072250`,
        theme_color: `#072250`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
