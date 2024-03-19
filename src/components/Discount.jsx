import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import Lottie from 'lottie-react'
import { ArrowForwardRounded } from '@mui/icons-material'

import disanim from '../img/offer.json'

const Discount = () => {
    return (
        <Box sx={{ backgroundColor: '#0c2c57', color: '#fff', padding: '3rem', marginTop: '5rem', borderRadius: '10px' }}>
            <Grid container>
                <Grid item md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            color: '#cfa753'
                        }}
                    >You have a new project?</Typography>
                    <Typography
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}
                    >Dreaming of your next project? Make it a reality today and enjoy a 30% discount when you reach out to us!</Typography>
                    <Box mt={2}>
                        <Button
                            sx={{
                                bgcolor: '#0c2c57',
                                borderColor: '#cfa852',
                                borderWidth: '3px',
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                borderRadius: '8px',
                                transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
                                '&:hover': {
                                    bgcolor: '#006eff',
                                    borderColor: '#cfa852',
                                    borderWidth: '3px',
                                    color: '#FFF',
                                    textTransform: 'none',
                                    fontSize: '1.1rem',

                                }

                            }}
                            variant='outlined' endIcon={<ArrowForwardRounded />}>Contact me</Button>

                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Lottie animationData={disanim} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Discount
