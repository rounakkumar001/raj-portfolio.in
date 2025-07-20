import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import TechnicalSkillsChart from './subcomponents/TechnicalSkillsChart'

const Skills = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      mt={7}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.4rem' },
          color: '#0c2c57ff',
          textAlign: 'center',
        }}
      >
        Skills
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.98rem', sm: '1rem' },
          color: 'grey',
          textAlign: 'center',
        }}
      >
        My technical level
      </Typography>
      <Box
        mt={3}
        sx={{
          width: {
            xs: '100%',
            sm: '90%',
            md: 540, // max width for charts if you want
          },
          maxWidth: '100vw',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <TechnicalSkillsChart />
      </Box>
    </Box>
  )
}

export default Skills
