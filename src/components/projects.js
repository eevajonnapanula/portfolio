import React from 'react'
import ProjectCard from './projectCard'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Animate from 'grommet/components/Animate'

const Projects = ( projects ) => {
  return (
    <Animate
      enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
      keep={true}
      leave={{"animation": "fade", "duration": 0, "delay": 0}}
      visible="scroll">
      <Section className="content-container" id="projects" pad="large">
        <Columns maxCount={4}
          masonry={false}
          justify='center'>
          {projects.projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </Columns>
      </Section>
    </Animate>
)}

export default Projects
