import React from 'react'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'

const FooterComponent = () => (
  <Footer justify='center'>
    <Box direction='row'
      justify='center'
      align='center'
      pad="medium">
      <Paragraph margin='none'>
         Coffee mug icon made by <Anchor href="https://www.freepik.com/">Freepik</Anchor> from <Anchor href="https://www.flaticon.com">www.flaticon.com</Anchor>
      </Paragraph>
    </Box>
  </Footer>
)

export default FooterComponent
