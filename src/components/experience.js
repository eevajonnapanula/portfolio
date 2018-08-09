import React from 'react'
import Link from 'gatsby-link'
import Work from './work'
import Education from './education'
import Animate from 'grommet/components/Animate'
import Section from 'grommet/components/Section'

const Experience = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section
      id="experience"
      className="content-container"
      pad="medium"
    >
      <Work />
      <Education />
    </Section>
  </Animate>
)

export default Experience
