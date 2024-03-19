import React from 'react'
import Lottie from 'lottie-react'
import { Box } from '@mui/material'

import waterWave from '../../img/water-waves.json'
import WW2 from '../../img/waterWaves2.json'

const Waves = () => {
  return (
    <Box sx={{ position: 'relative', height : 300, overflow : 'hidden', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
      <Box sx={{position : 'absolute', top : '5px'}}>
      <Lottie animationData={WW2} loop />
      </Box>
    </Box>
  )
}

export default Waves