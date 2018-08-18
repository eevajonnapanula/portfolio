import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeaderComponent from '../components/header'
import Notification from 'grommet/components/Notification'
import FooterComponent from '../components/footer'
// Styles and fonts
import '../scss/main.scss'

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
    <Notification message='Just to let you know, this site is not ready yet.'
      closer={true}
      size='medium'
      status='warning'
      style={{position: 'fixed', bottom: 0, width: '100%'}}
    />
  <FooterComponent />
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