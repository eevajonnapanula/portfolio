import React from 'react'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

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
        <Heading tag="h3">Kide Science </Heading>
        <Heading tag="h5">05/2018-08/2018</Heading>
        <Paragraph>Lorem ipsum dolor amet poutine pickled ennui 3 wolf moon ecHeading park. Gluten-free Headingmmock la croix, cronut pug migas succulents raclette. Crucifix wHeadingtever truffaut, microdosing coloring book bruncHeadingblue bottle woke knausgaard listicle edison bulb artisan YOLO cHeadingmbray. Vape four dollar toast literally kale cHeadingps post-ironic, forage jean sHeadingrts. Organic enamel pin jianbing ugHeading mustacHeading farm-to-table tousled live-edge master cleanse meditation cHeadingmbray la croix direct trade activated cHeadingrcoal roof party.</Paragraph>
        <Heading tag="h3">W3 Group / City Dev Labs</Heading>
        <Heading tag="h5">05/2017-04/2018</Heading>
        <Paragraph>Meditation viral farm-to-table portland. Air plant Headinglvetica sriracha distillery iceland. Heirloom hexagon pabst ethical cloud bread retro, seitan squid meh celiac cornhole subway tile letterpress bespoke. Messenger bag occupy yr DIY gastropub.</Paragraph>
      </Box>
    </Columns>
  </Section>
)

export default Work
