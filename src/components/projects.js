import React from 'react'
import ProjectCard from './projectCard'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Animate from 'grommet/components/Animate'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'

class Projects extends React.Component {
  state = {
    filter: 'all',
    allProjects: this.props.projects,
  }

  setFilter(filter) {
    this.setState({filter})
  }

  getProjects() {
    if(this.state.filter === 'all') {
      return this.state.allProjects
    }
    return this.state.allProjects.filter((project) => (
      project.node.frontmatter.filter === this.state.filter
    ));
  }

  render() {
    console.log(this.props.projects)
    const projects = this.getProjects()
    console.log('projects', projects)
    return (
      <Animate
        enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
        keep={true}
        leave={{"animation": "fade", "duration": 0, "delay": 0}}
        visible="scroll">
        <Section className="content-container" id="projects" pad="large">
          <Box direction="row" justify="center" pad={{between: 'small'}}>
            <Button
            label='All'
            onClick={() => this.setFilter('all')} />
            <Button
              label='Work'
              onClick={() => this.setFilter('work')} />
            <Button
              label='Hobby'
              onClick={() => this.setFilter('hobby')} />
          </Box>
          <Columns maxCount={4}
            masonry={false}
            justify='center'>
            {projects.map(project => (
              <ProjectCard project={project} />
            ))}
          </Columns>
        </Section>
      </Animate>
    )
  }
}

export default Projects
