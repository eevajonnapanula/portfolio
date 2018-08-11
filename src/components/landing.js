import React from 'react'
import sample from 'lodash/sample'
import Hero from 'grommet/components/Hero'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'
import CoffeeShop from '../assets/coffee-shop.svg'
import Button from 'grommet/components/Button'


class Landing extends React.Component {
  state = {
    color: 'brand',
    colors: [
      'brand',
      'neutral-1',
      'neutral-2',
      'neutral-3',
      'neutral-4',
      'accent-1',
      'accent-2',
      'accent-3',
      'light-2'
    ]
  }

  changeColor() {
    const color = sample(this.state.colors)
    this.setState({color})
  }

  render() {
    return (<Section className="content-container" id="landing">
      <Hero>
        <Box direction='row'
          justify='between'
          align='center'
          colorIndex={this.state.color} >
          <Box basis='1/2'
            align='end'
            pad='medium'>
            <CoffeeShop style={{width: '20em'}} />
          </Box>
          <Box basis='1/2'
            align='start'
            pad='medium'>
            <Box colorIndex={this.state.color}>
              <Card heading='Moi!'
                description='Here will be something!'
                link={<Anchor href='#about'
                primary={true}
                label='Go to next section' />} />
              <Button label='Or change color'
                  onClick={() => this.changeColor()}
                  primary={false}
                  secondary={true} />
            </Box>
          </Box>
        </Box>
      </Hero>
    </Section>
  )
  }
}

export default Landing
