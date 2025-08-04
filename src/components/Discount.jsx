import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import Lottie from 'lottie-react'
import { ArrowForwardRounded } from '@mui/icons-material'
import { Link } from 'react-scroll'

import disanim from '../img/offer.json'

const Discount = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0c2c57',
        color: '#fff',
        px: { xs: 3, sm: 4, md: 8 },         // Responsive horizontal padding
        py: { xs: 3, sm: 4 },                // Responsive vertical padding
        mt: { xs: 5, sm: 7 },
        borderRadius: '14px',
        width: '100%',
        maxWidth: 1100,
        mx: 'auto',
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        {/* Text Content */}
        <Grid item xs={12} md={8} sx={{ mb: { xs: 2, md: 0 } }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.8rem' },
              color: '#cfa753',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            You have a new project?
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '0.98rem', sm: '1.08rem', md: '1.05rem' },
              mt: 1.3,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Dreaming of your next project? Make it a reality today and enjoy a 30% discount when you reach out to us!
          </Typography>
          <Box sx={{ mt: { xs: 3, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Link to="contact" smooth={true} duration={500}>
              <Button
                sx={{
                  bgcolor: '#0c2c57',
                  borderColor: '#cfa852',
                  borderWidth: '3px',
                  color: '#FFF',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  px: 3,
                  py: 1,
                  mt: { xs: 1, md: 0 },
                  '&:hover': {
                    bgcolor: '#006eff',
                    borderColor: '#cfa852',
                    borderWidth: '3px',
                    color: '#FFF',
                  }
                }}
                variant='outlined'
                endIcon={<ArrowForwardRounded />}
              >
                Contact me
              </Button>
            </Link>
          </Box>
        </Grid>
        {/* Lottie Animation */}
        <Grid item xs={12} md={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{
            width: { xs: '90%', sm: 260, md: 300 },
            maxWidth: 340, minWidth: 160,
            mx: 'auto'
          }}>
            <Lottie animationData={disanim} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Discount
