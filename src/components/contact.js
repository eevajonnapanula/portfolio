import React from 'react'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'

const Contact = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section className="content-container" id="contact" pad="large" align="center" direction="column">
      <Heading tag="h3">Contact me</Heading>
      <Box direction="row" justify="between" pad={{between: 'large'}}>
        <Anchor href="https://github.com/eevajonnapanula">
          <i className="fab fa-github fa-3x p-5"></i>
        </Anchor>
        <Anchor href="mailto:eevajonna.panula@gmail.com">
          <i className="far fa-envelope fa-3x p-5"></i>
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/eevajonna/">
          <i className="fab fa-linkedin fa-3x p-5"></i>
        </Anchor>
      </Box>
    </Section>
  </Animate>
)

export default Contact
