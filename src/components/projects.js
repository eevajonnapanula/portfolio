import React from 'react'
import ProjectCard from './project-card'
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
      project.node.frontmatter.tech.includes(this.state.filter)
    ));
  }

  render() {
    const projects = this.getProjects()
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
              primary={this.state.filter === 'all'}
              onClick={() => this.setFilter('all')} />
            <Button
              label='React'
              primary={this.state.filter === 'React'}
              onClick={() => this.setFilter('React')} />
            <Button
              label='GatsbyJS'
              primary={this.state.filter === 'GatsbyJS'}
              onClick={() => this.setFilter('GatsbyJS')} />
            <Button
              label='GraphQL'
              primary={this.state.filter === 'GraphQL'}
              onClick={() => this.setFilter('GraphQL')} />
            <Button
              label='Grommet'
              primary={this.state.filter === 'Grommet'}
              onClick={() => this.setFilter('Grommet')} />
            <Button
              label='NodeJS'
              primary={this.state.filter === 'NodeJS'}
              onClick={() => this.setFilter('NodeJS')} />
          </Box>
          <Columns maxCount={4}
            masonry={false}
            justify='center'>
            {projects.map(project => (
              <ProjectCard project={project} key={project.node.frontmatter.title} />
            ))}
          </Columns>
        </Section>
      </Animate>
    )
  }
}

export default Projects
