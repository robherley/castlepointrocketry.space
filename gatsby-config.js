module.exports = {
  siteMetadata: {
    title: `Hudson Space Systems`,
    description: `Hudson Space Systems is building the next generation of suborbital rockets.`,
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
        name: `Hudson Space Systems`,
        short_name: `HSS`,
        start_url: `/`,
        background_color: `#072250`,
        theme_color: `#072250`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
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
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Fathom server URL. Defaults to `cdn.usefathom.com`
        trackingUrl: 'fathom.cprocketry.com',
        // Unique site id
        siteId: 'CALQK',
        // Domain whitelist
        whitelistHostnames: ['hudsonspace.systems'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Alata',
          },
          {
            family: 'Inter',
            weights: ['300', '400', '600'],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
