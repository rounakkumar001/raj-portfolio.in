import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import MyWing from '../img/wing.json'
const Wing = () => {
  return (

    <Box sx={{
      position : 'absolute',
      left : '50%',
      transform : 'translateX(-50%)'
    }}>
        <Lottie animationData={MyWing} loop />
    </Box>

  )
}

export default Wing