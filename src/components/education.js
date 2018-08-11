import React from 'react'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Paragraph from 'grommet/components/Paragraph'

const Education = () => (
  <Section>
    <Columns
      size='medium'
      maxCount={2}
      justify='center'>
      <Box>
        <Heading tag="h3">Education</Heading>
      </Box>
      <Box pad="small">
        <Heading tag="h3">Haaga-Helia University of Applied Sciences</Heading>
        <Heading tag="h5">Business Information Technology</Heading>
        <Heading tag="h5">2018- </Heading>
        <Paragraph>I am planning to take courses from <Anchor href="http://www.haaga-helia.fi/fi/opinto-opas/koulutusohjelmat/tietojenkasittelyn-koulutusohjelma-helsinki-monimuoto-182015-jalkeen-1?userLang=fi">two profiles</Anchor>: Digital services and Software Production.</Paragraph>
        <Heading tag="h3">University of Tampere</Heading>
        <Heading tag="h5">2010-2016 Master of Arts</Heading>
        <Heading tag="h5">Russian language and culture</Heading>
      </Box>
    </Columns>
  </Section>
)

export default Education
