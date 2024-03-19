import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { PieChart,  } from '@mui/x-charts/PieChart';
import TechnicalSkillsChart from './subcomponents/TechnicalSkillsChart';


const Skills = () => {
    return (
        <Box mt={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0c2c57ff' }}>Skills</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'grey' }}>My technical level</Typography>
            <Box mt={2}>
               <TechnicalSkillsChart/>
            </Box>
        </Box>
    )
}

export default Skills