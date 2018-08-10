import React from 'react'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import MailIcon from 'grommet/components/icons/base/Mail'
import ContactButtons from './contact-buttons'


const Contact = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section className="content-container" id="contact" pad="large" align="center" direction="column">
      <Heading tag="h3">Contact me</Heading>
      <ContactButtons />
    </Section>
  </Animate>
)

export default Contact
