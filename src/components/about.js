import React from 'react'
import eevis from '../images/eevis.jpg'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'

const About = () => (
  <Section className="content-container" id="about" pad="large">
    <Columns
      size='medium'
      maxCount={2}
      justify='center'
      pad={{between: "large"}}>
      <Box><Heading tag="h3">Hello, my name is Eeva-Jonna</Heading></Box>
      <Box><Image src={eevis} alt="Eeva-Jonna Panula" size="small" /></Box>
    </Columns>
  </Section>
)

export default About
