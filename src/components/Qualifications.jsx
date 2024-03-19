import React from 'react'
import { Box, styled, Typography, Grid } from '@mui/material'
import { CalendarMonth, School } from '@mui/icons-material'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Lottie from 'lottie-react';

import EduIcon from '../img/eduIcon.json'
import WorkIcon from '../img/suitcase.json'
const Qualifications = () => {

    const [alignment, setAlignment] = React.useState('edu');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Box mt={7}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0c2c57ff' }}>Qualification</Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'grey' }}>My Personal Journey</Typography>
                <Box mt={2}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}

                    >
                        <span
                            onClick={() => handleAlignment(null, 'edu')}
                            style={{
                                color: alignment === 'edu' ? '#fc6735ff' : 'inherit',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                marginRight: '15px',
                                display: 'flex',
                                alignItems: "center"

                            }}
                        >
                            {/* <School sx={{ paddingRight: .5 }} /> Education */}
                            {/* <div style={{ width: '30px' }}>
                                <Lottie animationData={EduIcon} loop />
                            </div> */}
                            Education
                        </span>
                        <span
                            onClick={() => handleAlignment(null, 'work')}
                            style={{
                                color: alignment === 'work' ? '#fc6735ff' : 'inherit',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: "center"
                            }}

                        >
                            {/* <div style={{ width: '60px', padding : 0 }}>
                                <Lottie animationData={WorkIcon} loop />
                            </div> */}
                            Work
                        </span>
                    </ToggleButtonGroup>
                </Box>

                {
                    alignment === 'edu' ?

                        // educations details 
                        <Grid container mt={2} mb={2}>

                            {/* first row */}
                            <Grid item xs={5.8}>
                                {/* Education 1*/}
                                <Box sx={{ paddingRight: '10px' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '1.2rem',
                                            color: '#0c2c57ff'
                                        }}
                                    >BE Computer Science</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '.9rem',
                                            color: 'grey'
                                        }}

                                    >Rabindranath Tagore University <br />  Mendua ,Post:, Bhojpur, Chiklod Road, near Bangrasiya Chouraha, Bhopal, Madhya Pradesh 464993</Typography>
                                    <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                        <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2020 Jun - 2024 Jun (Currently)</span>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                                <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                            </Grid>
                            <Grid item xs={5.8}></Grid>




                            {/* second row  */}
                            <Grid item xs={5.8}></Grid>
                            <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                                <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                            </Grid>

                            <Grid item xs={5.8}>
                                {/* Education 2*/}
                                <Box sx={{ paddingLeft: '10px' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '1.2rem',
                                            color: '#0c2c57ff'
                                        }}
                                    >Intermediate | Natioinal Examinations Board</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '.9rem',
                                            color: 'grey'
                                        }}

                                    >Lord Buddha College, Biratnagar, Nepal.</Typography>
                                    <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                        <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2017 Jun - 2019 Jun</span>
                                    </Typography>
                                </Box>
                            </Grid>



                            {/* third row  */}
                            <Grid item xs={5.8}>
                                {/* Education 1*/}
                                <Box sx={{ paddingRight: '10px' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '1.2rem',
                                            color: '#0c2c57ff'
                                        }}
                                    >Matriculation(10th) | National Examinations Board</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '.9rem',
                                            color: 'grey'
                                        }}

                                    >Vinayak Boarding Secondary Schol, Biratnagar, Nepal.</Typography>
                                    <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                        <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2016 Jun - 2017 Jun</span>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                                <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                            </Grid>
                            <Grid item xs={5.8}></Grid>


                        </Grid>

                        :

                        // work experience 

                        <Grid container mt={2} mb={2}>

                            {/* first row */}
                            <Grid item xs={5.8}>
                                {/* Education 1*/}
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '1.2rem',
                                            color: '#0c2c57ff'
                                        }}
                                    >Software Engineer
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '.9rem',
                                            color: 'grey'
                                        }}

                                    > DataNutts IT Solution <span style={{ color: '#0c2c57ff' }}>- Internship</span> <br /> 21, Rohit Nagar, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462026</Typography>
                                    <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                        <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>15th Jan - 15th May 2024</span>
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                                <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                            </Grid>
                            <Grid item xs={5.8}></Grid>




                            {/* second row  */}
                            <Grid item xs={5.8}></Grid>
                            <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                                <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                            </Grid>

                            <Grid item xs={5.8}>
                                {/* Education 2*/}
                                <Box sx={{ paddingLeft: '10px' }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '1.2rem',
                                            color: '#0c2c57ff'
                                        }}
                                    >Database Engineer
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold', fontSize: '.9rem',
                                            color: 'grey'
                                        }}

                                    > DataNutts IT Solution <span style={{ color: '#0c2c57ff' }}>- Internship</span> <br /> 21, Rohit Nagar, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462026</Typography>
                                    <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                        <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>12th July - 14 Aug 2023</span>
                                    </Typography>

                                </Box>
                            </Grid>






                        </Grid>
                }

            </Box>
        </Box>
    )
}

export default Qualifications