const autoprefixer = require('autoprefixer')

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
    'gatsby-plugin-react-helmet'
  ],
}
