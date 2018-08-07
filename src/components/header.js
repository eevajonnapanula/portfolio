import React from 'react'
import Link from 'gatsby-link'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

const HeaderComponent = ({ siteTitle }) => (
  <Header fixed >
    <Menu
      dropAlign={{left: 'left', top: 'bottom'}}
      fill
      responsive
      inline={true}
      direction='row'
      justify="center">
      <Anchor href="#landing">Home</Anchor>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#experience">Résumé</Anchor>
      <Anchor href="#projects">Projects</Anchor>
      <Anchor href="#contact">Contact me</Anchor>
    </Menu>
  </Header>
)

export default HeaderComponent
