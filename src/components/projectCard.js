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
    <Box pad="medium">
      <Box colorIndex="grey-1-a" pad="small">
        <Heading tag="h3">{project.project.node.frontmatter.title}</Heading>
      </Box>
      <Box colorIndex="neutral-1" pad="small">
        <Paragraph>{project.project.node.excerpt}</Paragraph>
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
