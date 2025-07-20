import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Lottie from 'lottie-react'
import ProfilePhoto from '../img/profilePic.json'

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      mt={7}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        px: { xs: 1, sm: 3, md: 0 }
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
        About me
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.98rem', sm: '1rem' },
          color: 'grey',
          textAlign: 'center',
        }}
      >
        My introduction
      </Typography>
      <Grid
        container
        mt={3}
        spacing={isMobile ? 2 : 4}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? 'column' : 'row'}
        sx={{
          width: '100%',
          maxWidth: 900, // keep it nice on big screens
          mx: 'auto'
        }}
      >
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: isMobile ? 2 : 0,
        }}>
          <Box sx={{
            width: { xs: '75%', sm: '60%', md: '50%' },
            minWidth: 160,
            maxWidth: 300
          }}>
            <Lottie animationData={ProfilePhoto} loop />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.08rem', md: '1.1rem' },
              color: '#0c2c57ff',
              textAlign: isMobile ? 'center' : 'start',
            }}
          >
            Experienced web developer proficient in web technologies and UI/UX design, with a strong track record of delivering high-quality work.
          </Typography>
          {/* Stats Row */}
          <Box
            mt={3}
            sx={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'space-between',
              alignItems: 'center',
              gap: isMobile ? 2.5 : 4,
              width: isMobile ? '100%' : '90%',
              mt: isMobile ? 2 : 3
            }}
          >
            {/* Stats Block */}
            {[
              { value: '1+', label1: 'years', label2: 'experience' },
              { value: '4+', label1: 'completed', label2: 'projects' },
              { value: '1+', label1: 'companies', label2: 'worked' },
            ].map((stat, idx) => (
              <Box key={idx} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 85,
              }}>
                <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.19rem', sm: '1.27rem', md: '1.4rem' },
                  color: '#fc6735ff'
                }}>{stat.value}</Typography>
                <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: '.9rem',
                  color: 'grey'
                }}>{stat.label1}</Typography>
                <Typography sx={{
                  fontWeight: 'bold',
                  fontSize: '.9rem',
                  color: 'grey'
                }}>{stat.label2}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
