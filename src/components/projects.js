import React from 'react'
import ProjectCard from './project-card'
import Section from 'grommet/components/Section'
import Columns from 'grommet/components/Columns'
import Animate from 'grommet/components/Animate'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import PersonalComputerIcon from 'grommet/components/icons/base/PersonalComputer'
import CodeIcon from 'grommet/components/icons/base/Code'
import FavoriteIcon from 'grommet/components/icons/base/Favorite'


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
              icon={<CodeIcon />}
              label='All'
              primary={this.state.filter === 'all'}
              onClick={() => this.setFilter('all')} />
            <Button
              icon={<PersonalComputerIcon />}
              label='Work'
              primary={this.state.filter === 'work'}
              onClick={() => this.setFilter('work')} />
            <Button
              icon={<FavoriteIcon />}
              label='Hobby'
              primary={this.state.filter === 'hobby'}
              onClick={() => this.setFilter('hobby')} />
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
