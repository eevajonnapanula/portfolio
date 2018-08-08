import React from 'react'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Animate from 'grommet/components/Animate'

const ProjectCard = (project) => (
  <Animate
    enter={{"animation": "slide-up", "duration": 300, "delay": 300}}
    leave={{"animation": "slide-up", "duration": 300, "delay": 300}}
    >
    <Box margin="small">
      <Box colorIndex="grey-1" align="center" pad="small">
        <Heading tag="h3">{project.project.node.frontmatter.title}</Heading>
      </Box>
      <Box colorIndex="grey-2" pad="small">
        <Paragraph>{project.project.node.frontmatter.description}</Paragraph>
        <Heading tag="h3">Technologies</Heading>
        <Paragraph>{project.project.node.frontmatter.tech}</Paragraph>
        {
        project.project.node.frontmatter.filter === 'hobby' &&
          <Paragraph>{project.project.node.frontmatter.repo}</Paragraph>
        }
      </Box>
    </Box>
  </Animate>
)

export default ProjectCard
