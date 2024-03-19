import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import MyWing from '../img/wing.json'
const Wing = () => {
  return (

    <Box sx={{position : 'absolute', bottom : 0}}>
        <Lottie animationData={MyWing} loop />
    </Box>

  )
}

export default Wing