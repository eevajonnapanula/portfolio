import React from 'react'
import Hero from 'grommet/components/Hero'
import Section from 'grommet/components/Section'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'
const Landing = () => (
  <Animate
    enter={{"animation": "slide-right", "duration": 2000, "delay": 300}}
    keep={true}
    leave={{"animation": "fade", "duration": 0, "delay": 0}}
    visible="scroll">
    <Section className="content-container" id="landing" pad="small">
      <Hero>
        <Box direction='row'
          justify='center'
          align='center'>
          <Box
            align='start'
            pad='medium'>
            <Box colorIndex='brand'>
              <Card heading='Moi!'
                description='Here will be something!'
                link={<Anchor href='#about'
                primary={true}
                label='Go to next section' />} />
            </Box>
          </Box>
        </Box>
      </Hero>
    </Section>
  </Animate>
)

export default Landing
