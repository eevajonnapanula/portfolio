import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeaderComponent from '../components/header'
// Styles and fonts
import '../scss/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Eeva-Jonna\'s portfolio' },
        { name: 'keywords', content: 'developer, web development, portfolio' },
      ]}
    />
    <HeaderComponent siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
