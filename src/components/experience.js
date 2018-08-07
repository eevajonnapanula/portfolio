import React from 'react'
import Link from 'gatsby-link'
import Work from './work'
import Education from './education'
import Skills from './skills'

const Experience = () => (
  <div
    id="experience"
    className="content-container"
  >
    <Work />
    <Education />
    <Skills />
  </div>
)

export default Experience
