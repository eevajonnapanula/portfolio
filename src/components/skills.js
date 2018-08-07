import React from 'react'
import SkillComponent from './SkillComponent'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'

const skillsObject = [
  {value: 90, label: 'HTML'},
  {value: 90, label: 'CSS'},
  {value: 60, label: 'React'},
  {value: 40, label: 'Angular'},
  {value: 50, label: 'NodJS'},
  {value: 50, label: 'NoeJS'},
  {value: 50, label: 'NodeJS'},

]

const Skills = () => (
  <Section justify="center">
    <Box pad="large">
      <Heading tag="h3">Skills</Heading>
        <Columns
          maxCount={10}
          direction='row'
          masonry
          justify='center'>
          {skillsObject.map((skill) => (<SkillComponent value={skill.value} label={skill.label} key={skill.label}/>))}
        </Columns>
    </Box>
  </Section>
)

export default Skills
