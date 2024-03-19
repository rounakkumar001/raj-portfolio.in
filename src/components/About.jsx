import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { PieChart, BarChart } from '@mui/x-charts/PieChart';
import TechnicalSkillsChart from './subcomponents/TechnicalSkillsChart';
import Lottie from 'lottie-react';
import ProfilePhoto from '../img/profilePic.json'

const About = () => {
    return (
        <Box mt={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0c2c57ff' }}>About me</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'grey' }}>My introduction</Typography>
            <Grid container mt={3}>
                <Grid item xs={6} align='center'>
                    <Box sx={{ width: '50%' }}>
                        <Lottie animationData={ProfilePhoto} loop />
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem', color : '#0c2c57ff' }}>Experienced web developer proficient in web technologies and UI/UX design, with a strong track record of delivering high-quality work.</Typography>
                    <Box mt={3} sx={{ display: 'flex', justifyContent : 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '1.4rem',
                                color : '#fc6735ff' 
                            }}>1+</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>years</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>experience</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '1.4rem',
                                color : '#fc6735ff'
                            }}>4+</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>completed</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>projects</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '1.4rem',
                                color : '#fc6735ff'
                            }}>1+</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>companies</Typography>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '.9rem',
                                color : 'grey'
                            }}>worked</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About