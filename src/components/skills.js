import React from 'react'
import SkillComponent from './SkillComponent'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'

const skillsObject = [
  {value: 90, label: 'HTML'},
  {value: 90, label: 'CSS'},
  {value: 70, label: 'Bootstrap'},
  {value: 60, label: 'React'},
  {value: 50, label: 'Express'},
  {value: 40, label: 'Angular'},
  {value: 40, label: 'Loopback'},
  {value: 40, label: 'Grommet'},
  {value: 40, label: 'GatsbyJS'},
  {value: 10, label: 'Java'},
  {value: 10, label: 'Ruby on Rails'},
]

const Skills = () => (
  <Section justify="center">
    <Box pad="large">
      <Heading tag="h3">Skills</Heading>
        <Columns
          maxCount={3}
          direction='row'
          masonry
          justify='center'>
          {skillsObject.map((skill) => (<SkillComponent value={skill.value} label={skill.label} key={skill.label}/>))}
        </Columns>
    </Box>
  </Section>
)

export default Skills
