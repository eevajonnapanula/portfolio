import React from 'react'
import ProjectCard from './projectCard'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'

const Projects = ( projects ) => {
  return (
  <Section className="content-container" id="projects" pad="large">
    <Columns maxCount={4}
      masonry={false}
      justify='center'>
      {projects.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </Columns>
  </Section>
)}

export default Projects
