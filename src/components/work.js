import React from 'react'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Work = () => (
  <Section>
    <Columns
      size='medium'
      maxCount={2}
      justify='center'>
      <Box>
        <Heading tag="h3">Relevant work experience</Heading>
      </Box>
      <Box pad='small'>
        <Heading tag="h3"><OutboundLink href="https://kidescience.com">Kide Science</OutboundLink></Heading>
        <Heading tag="h5">05/2018-08/2018</Heading>
        <Heading tag="h5">Developer</Heading>
        <Paragraph>Lorem ipsum dolor amet poutine pickled ennui 3 wolf moon ecHeading park. Gluten-free Headingmmock la croix, cronut pug migas succulents raclette. Crucifix wHeadingtever truffaut, microdosing coloring book bruncHeadingblue bottle woke knausgaard listicle edison bulb artisan YOLO cHeadingmbray. Vape four dollar toast literally kale cHeadingps post-ironic, forage jean sHeadingrts. Organic enamel pin jianbing ugHeading mustacHeading farm-to-table tousled live-edge master cleanse meditation cHeadingmbray la croix direct trade activated cHeadingrcoal roof party.</Paragraph>
        <Heading tag="h3"><OutboundLink href="https://citydevlabs.fi/">W3 Group / City Dev Labs</OutboundLink></Heading>
        <Heading tag="h5">05/2017-04/2018</Heading>
        <Heading tag="h5">Web Developer</Heading>
        <Paragraph margin="small">In W3 Group / City Dev Labs I worked in small scrum teams of 3-6 people depending on the project. My role was either Full Stack or Front End Developer, and in many projects I was also the Internal Product Owner, communicating with customer's Product Owner.</Paragraph>
        <Paragraph margin="small">Some of the technologies we used were React, Angular, Loobpack and some Python. More details about projects can be found in Projects-section.</Paragraph>
      </Box>
    </Columns>
  </Section>
)

export default Work
