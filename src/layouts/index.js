import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeaderComponent from '../components/header'
import Notification from 'grommet/components/Notification'
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
    <Notification message='This site is still in development'
      size='medium'
      status='warning'
      style={{position: 'fixed', bottom: 0, width: '100%'}}
    />
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
