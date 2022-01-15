module.exports = {
  siteMetadata: {
    title: `Hudson Space Systems`,
    description: `Hudson Space Systems is accelerating science and manufacturing by bringing Microgravity as a Service to everyone.`,
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
        short_name: `Hudson Space`,
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
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
            'rdfResource',
            'rdfAbout',
          ],
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
      resolve: 'gatsby-plugin-plausible',
      options: {
        domain: 'plausible.io',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Alata', 'Inter:300,400,600'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
