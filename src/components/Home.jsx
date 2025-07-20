import React from 'react'
import { Box, styled, useTheme, useMediaQuery } from '@mui/material'
import { ReactTyped } from "react-typed";
import Lottie from 'lottie-react'

import fb from '../img/fb.png'
import insta from '../img/insta.png'
import twitter from '../img/twitter.png'
import email from '../img/email.png'
import bf from '../img/butterfly.gif'
import bubble from '../img/babble.json'
import dp from '../img/cutee.png'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 400,
  position: 'relative',
  marginTop: '5rem',
  [theme.breakpoints.down('md')]: {
    minHeight: 340,
    marginTop: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 260,
    marginTop: '5rem', // 2rem more on mobile
  },
}));


const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Responsive sizes
  const avatarSize = isMobile ? 180 : isTablet ? 180 : 180;
  const bubbleWidth = isMobile ? 200 : isTablet ? 200 : 200;
  const butterflySize = isMobile ? 200 : isTablet ? 200 : 220;

  return (
    <Container>
      {/* Bubble Lottie - BEHIND avatar (zIndex 0) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: bubbleWidth,
          transform: `translate(-50%, ${isMobile ? 10 : 30}px)`,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <Lottie animationData={bubble} loop style={{ width: '100%' }} />
      </Box>

      {/* Avatar + Butterfly */}
      <Box
        mb={isMobile ? 2 : 5}
        sx={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: '50%',
          overflow: 'hidden',
          zIndex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}
      >
        {/* Butterfly - at the head of avatar, always centered */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: `-${butterflySize * 0.40}px`,
            transform: 'translateX(-50%)',
            zIndex: 3,
            width: butterflySize,
            height: butterflySize,
            pointerEvents: 'none'
          }}
        >
          <img src={bf} alt="Butterfly" width="100%" height="100%" />
        </Box>
        {/* Avatar */}
        <img
          src={dp}
          alt=""
          width={'100%'}
          height={'100%'}
          style={{ display: 'block', borderRadius: '50%' }}
        />
      </Box>

      {/* Greeting text */}
      <Box sx={{
        fontSize: isMobile ? '1rem' : isTablet ? '1.12rem' : '1.3rem',
        textShadow: '1px 1px 2px #FFB0B0',
        textAlign: 'center',
        width: '100%',
        mt: 2
      }}>
        <ReactTyped
          strings={[
            `<span style='color:#FC6736;font-weight:bold'> Hello there! I'm </span> <span style='font-size:${isMobile ? 14 : 22}px; font-weight:bold; color:#0C2D57'>Raj Nandani Singh</span>,`
          ]}
          typeSpeed={40}
        />
      </Box>

      {/* Typed Roles */}
      <Box sx={{
        fontSize: isMobile ? '0.98rem' : isTablet ? '1.1rem' : '1.3rem',
        fontFamily: 'monospace',
        mt: isMobile ? '5px' : '10px',
        textAlign: 'center',
        padding : '0px'
      }}>
        <span>I'm </span>
        <ReactTyped
          strings={[
            "<span style='font-weight:bold;color:#FC6736'>Programmer!</span>",
            "<span style='font-weight:bold;color:#FC6736'>Web developer!</span>",
            "<span style='font-weight:bold;color:#FC6736'>Designer!</span>",
            "<span style='font-weight:bold;color:#FC6736'>Database Engineer!</span>"
          ]}
          typeSpeed={110}
          backSpeed={40}
          loop
        />
      </Box>

      {/* Short Bio */}
      <Box sx={{
        fontSize: isMobile ? '0.92rem' : '1rem',
        width: isMobile ? '97%' : isTablet ? '92%' : '80%',
        textAlign: 'center',
        marginTop: isMobile ? '5px' : '10px',
        mx: 'auto',
      }}>
        <ReactTyped
          strings={[
            "<span style='font-weight:bold; color:black'>Programmer fluent in C/C++, JavaScript, Java, and more, with a keen eye for design. Let's build something amazing together!!</span>"
          ]}
          typeSpeed={38}
        />
      </Box>

      {/* Social Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? 1 : 1.5,
          mt: isMobile ? 1 : 2
        }}
      >
        <img src={fb} alt="Facebook" width={isMobile ? 22 : 24} style={{ margin: '0 5px', cursor: 'pointer' }} />
        <img src={insta} alt="Instagram" width={isMobile ? 22 : 24} style={{ cursor: 'pointer' }} />
        <img src={twitter} alt="Twitter" width={isMobile ? 22 : 24} style={{ margin: '0 5px', cursor: 'pointer' }} />
        <img src={email} alt="Email" width={isMobile ? 22 : 24} style={{ cursor: 'pointer' }} />
      </Box>
    </Container>
  )
}

export default Home
