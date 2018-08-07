import React from 'react'
import Link from 'gatsby-link'
import Work from './work'
import Education from './education'
import Animate from 'grommet/components/Animate'

const Experience = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <div
      id="experience"
      className="content-container"
    >
      <Work />
      <Education />
    </div>
  </Animate>
)

export default Experience
