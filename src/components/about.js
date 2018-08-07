import React from 'react'
import eevis from '../images/eevis.jpg'
import Skills from './skills'
import Places from './places'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Animate from 'grommet/components/Animate'
import Paragraph from 'grommet/components/Paragraph'

const About = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section className="content-container" id="about" pad="small">
      <Columns
        size='medium'
        maxCount={2}
        justify='center'
        pad={{between: "large"}}>
        <Box>
          <Heading tag="h3">Hello there</Heading>
          <Paragraph>
            I am a web developer, and I gotta say, I'm really proud of it.
          </Paragraph>
          <Paragraph>
          </Paragraph>
        </Box>
        <Box><Image src={eevis} alt="Eeva-Jonna Panula" size="small" /></Box>
      </Columns>
      <Box pad="large">
        <Skills />
        <Places />
      </Box>
    </Section>
  </Animate>
)

export default About
