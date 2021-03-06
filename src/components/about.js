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
import ContactButtons from './contact-buttons'


const About = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section className="content-container" id="about" pad="medium">
      <Columns
        size='medium'
        maxCount={2}
        justify='center'>
        <Box>
          <Heading tag="h3">Hello there</Heading>
          <Paragraph margin="small">
            I am a (web) developer, and I gotta say, I'm really proud of it. In the future, I hope to learn also more about things like mobile development and IoT.
          </Paragraph>
          <Paragraph margin="small">
            I am self-taught programmer. While learning skills in different programming languages, I have learnt a lot about how and where to get help if I get stuck. This helps with learning new skills, too. Also, I have Master's degree in Russian language and culture, so academic practices are familiar to me.
          </Paragraph>
          <Paragraph margin="small">
          When I'm not programming, I spend time doing sports and crafts. I run and play Ultimate Frisbee. Knitting and embroidery are the types of crafts that I do. Wearable textiles/e-textiles is a concept I'm planning to go deeper into in the near future.
          </Paragraph>
        </Box>
        <Box direction="column" align="center" pad={{between: 'medium'}}>
          <Image src={eevis} alt="Eeva-Jonna Panula" size="small" />
          <ContactButtons size="small" />
        </Box>
      </Columns>
      <Box pad="large">
        <Skills />
        <Places />
      </Box>
    </Section>
  </Animate>
)

export default About
