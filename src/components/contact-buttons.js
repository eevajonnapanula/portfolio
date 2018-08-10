import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import MailIcon from 'grommet/components/icons/base/Mail'
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram'


const ContactButtons = ({ size }) => (
  <Box direction="row" justify="between" pad={{between: 'large'}}>
    <OutboundLink href="https://github.com/eevajonnapanula">
      <SocialGithubIcon colorIndex="brand" size={size} />
    </OutboundLink>
    <OutboundLink href="mailto:eevajonna.panula@gmail.com">
      <MailIcon colorIndex="brand" size={size} />
    </OutboundLink>
    <OutboundLink href="https://www.linkedin.com/in/eevajonna/">
      <SocialLinkedinIcon colorIndex="brand" size={size} />
    </OutboundLink>
    <OutboundLink href="https://www.instagram.com/eevajonna_/">
      <SocialInstagramIcon colorIndex="brand" size={size} />
    </OutboundLink>
  </Box>
)

export default ContactButtons
