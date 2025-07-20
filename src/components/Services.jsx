import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import ServiceCard from './subcomponents/ServiceCard';
import Logo from '../img/uiuxanim.json';
import WebDev from '../img/webdevanim.json';
import UIux from '../img/logoanim.json';

const services = [
  {
    logo: WebDev,
    title: "Website Development",
    description: "Create responsive and user-friendly websites tailored to your needs using the latest web technologies such as HTML5, CSS3, and JavaScript.",
  },
  {
    logo: UIux,
    title: "UI/UX Design",
    description: "Design intuitive and visually appealing user interfaces (UI) and optimize user experiences (UX) to enhance engagement and usability.",
  },
  {
    logo: Logo,
    title: "Logo Design",
    description: "Craft unique and memorable logos that effectively represent your brand identity and leave a lasting impression on your audience.",
  }
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      mt={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, sm: 2, md: 0 }
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.18rem', sm: '1.28rem', md: '1.4rem' },
          color: '#0c2c57ff',
          textAlign: 'center',
        }}
      >
        Services
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.98rem', sm: '1rem' },
          color: 'grey',
          textAlign: 'center',
        }}
      >
        What I offer.
      </Typography>
      <Grid
        mt={2}
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          width: '100%',
          maxWidth: 1100,
          mx: 'auto',
          justifyContent: 'center',
        }}
      >
        {services.map((s, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ServiceCard data={s} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
