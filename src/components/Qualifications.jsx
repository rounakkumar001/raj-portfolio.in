import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { CalendarMonth } from '@mui/icons-material'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
                                alignItems: 'center'
                            }}
                        >
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
                                alignItems: 'center'
                            }}
                        >
                            Work
                        </span>
                    </ToggleButtonGroup>
                </Box>

                {alignment === 'edu' ? (
                    <Grid container mt={2} mb={2}>
                        {/* Most Recent Education First */}
                        <Grid item xs={5.8}>
                            <Box sx={{ paddingRight: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    BE Computer Science
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    Rabindranath Tagore University <br />
                                    Mendua, Post: Bhojpur, Chiklod Road, Bhopal, MP 464993
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2020 Jun - 2024 Jun (Currently)</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}></Grid>

                        {/* Next Education */}
                        <Grid item xs={5.8}></Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}>
                            <Box sx={{ paddingLeft: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    Intermediate | National Examinations Board
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    Lord Buddha College, Biratnagar, Nepal.
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2017 Jun - 2019 Jun</span>
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Oldest Education */}
                        <Grid item xs={5.8}>
                            <Box sx={{ paddingRight: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    Matriculation(10th) | National Examinations Board
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    Vinayak Boarding Secondary School, Biratnagar, Nepal.
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>2016 Jun - 2017 Jun</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}></Grid>
                    </Grid>
                ) : (
                    <Grid container mt={2} mb={2}>
                        {/* Most Recent Work First */}

                        {/* Frontend Developer - Current */}
                        <Grid item xs={5.8}>
                            <Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    Software Developer <span style={{ color: '#ff9900ff', fontSize: '1rem', marginLeft: '7px', fontWeight: 700 }}>(Currently Working)</span>
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    Paisalo Digital Ltd <span style={{ color: '#0c2c57ff' }}>- Full-time</span> <br />
                                    IT Park, Indore, Madhya Pradesh 452010
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}> 2024 - Present</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}></Grid>

                        {/* Database Engineer - Previous */}
                        <Grid item xs={5.8}></Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}>
                            <Box sx={{ paddingLeft: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    Database Engineer
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    DataNutts IT Solution <span style={{ color: '#0c2c57ff' }}>- Internship</span> <br />
                                    21, Rohit Nagar, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462026
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>12th July - 14 Aug 2023</span>
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Software Engineer - Oldest */}
                        <Grid item xs={5.8}>
                            <Box sx={{ paddingRight: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#0c2c57ff' }}>
                                    Software Engineer
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '.9rem', color: 'grey' }}>
                                    DataNutts IT Solution <span style={{ color: '#0c2c57ff' }}>- Internship</span> <br />
                                    21, Rohit Nagar, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462026
                                </Typography>
                                <Typography mt={1} sx={{ display: 'flex', alignItems: 'center', fontSize: '.9rem' }}>
                                    <CalendarMonth sx={{ fontSize: '1.3rem', color: '#ff9900ff' }} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>15th Jan - 15th May 2024</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ width: '10px', height: '10px', background: '#ff9900ff', borderRadius: '50%', position: 'absolute' }}></Box>
                            <Box sx={{ width: '5px', height: '100%', background: '#0c2c57ff' }}></Box>
                        </Grid>
                        <Grid item xs={5.8}></Grid>
                    </Grid>
                )}
            </Box>
        </Box>
    )
}

export default Qualifications
