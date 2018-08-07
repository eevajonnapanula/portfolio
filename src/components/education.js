import React from 'react'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

const Education = () => (
  <Section>
    <Columns
      size='medium'
      maxCount={2}
      justify='center'
      pad={{between: "large"}}>
      <Box>
        <Heading tag="h3">Education</Heading>
      </Box>
      <Box pad="small">
        <Heading tag="h3">University of Tampere</Heading>
        <Heading tag="h5">Master of Arts, Russian language and culture</Heading>
        <Paragraph>Lorem ipsum dolor amet poutine pickled ennui 3 wolf moon echo park. Gluten-free hammock la croix, cronut pug migas succulents raclette. Crucifix whatever truffaut, microdosing coloring book brunch blue bottle woke knausgaard listicle edison bulb artisan YOLO chambray. Vape four dollar toast literally kale chips post-ironic, forage jean shorts. Organic enamel pin jianbing ugh, mustache farm-to-table tousled live-edge master cleanse meditation chambray la croix direct trade activated charcoal roof party.</Paragraph>
        <Heading tag="h3">Haaga Helia University of Applied Sciences</Heading>
        <Heading tag="h5">Bachelor of Business Administration</Heading>
        <Paragraph>Meditation viral farm-to-table portland. Air plant helvetica sriracha distillery iceland. Heirloom hexagon pabst ethical cloud bread retro, seitan squid meh celiac cornhole subway tile letterpress bespoke. Messenger bag occupy yr DIY gastropub.</Paragraph>
      </Box>
    </Columns>
  </Section>
)

export default Education
