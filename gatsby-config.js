const autoprefixer = require('autoprefixer')
const constants = require('./src/constants')

module.exports = {
  siteMetadata: {
    title: 'Eeva-Jonna\'s portfolio',
  },
  pathPrefix: '/portfolio',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: constants.gaId,
        head: false,
        respectDNT: true
      },
    },
  ],
}
