import React from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Meter from 'grommet/components/Meter'
import Value from 'grommet/components/Value'
import Label from 'grommet/components/Label'

const SkillComponent = ({ value, label }) => (
  <Box>
    <Value value={value}
      units='%'
      align='start' />
    <Meter value={value} />
    <Box direction='row'
      justify='between'
      pad={{between: "small"}}
      responsive>
      <Label size='small'>
        {label}
      </Label>
    </Box>
  </Box>
)

export default SkillComponent
