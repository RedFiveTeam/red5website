/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    { resolve: `gatsby-plugin-anchor-links`},
    { resolve: `gatsby-plugin-smoothscroll`},
    { resolve: `react-scrollspy`},
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-E9W4B523QY", // Google Analytics / GA
        ],
      },
    },
  ],
  siteMetadata: {
    title: `Red5`,
    author: {
      name: `Red 5 Engineer Team`,
    },
    description: `Website for Red5, DGS-1's local software development team.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `screenshots`,
      `call-to-action`,
      // `pricing`,
      // `testimonials`,
      // `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      { path: 'features', label: 'Our Apps' },
      { path: 'call-to-action', label: 'Contact Us' },
      // {path: 'screenshots', label: 'Screenshots'},
      // {path: 'pricing', label: 'Pricing'},
      // {path: 'testimonials', label: 'Testimonials'},
      // {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`, url: `https://www.facebook.com/497ISRG`, fa: `facebook` },
      { service: `GitLab`, url: `https://gitlab.gs.mil/DGS1SDT`, fa: `gitlab` },
      // { service: `Twitter`,
      //   url : `https://twitter.com/styleshout`,
      //   fa: `twitter` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `images/footer-logo.png`,
      text: ``,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: ``,
      line2: ``,
      line3: ``,
    },
    contacts: [
      // { text: `647.343.8234`, url: `tel:6473438234` },
      // { text: `123.456.7890`, url: `tel:1234567890`},
      { text: `dgslab1@gmail.com`, url: `mailto:dgslab1@gmail.com` },
    ],

    /* Prefix path for gh-pages */
    pathPrefix: '/red5website',
  },
};
