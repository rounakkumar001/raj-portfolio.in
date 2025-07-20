import React from 'react'
import { Box, styled, useTheme, useMediaQuery } from '@mui/material'
import Home from './components/Home'
import Header from './components/Header'
import Qualifications from './components/Qualifications'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import Waves from './components/subcomponents/Waves'
import Skills from './components/Skills'
import About from './components/About'
import Services from './components/Services'
import Discount from './components/Discount'
import Footer from './components/Footer'
import Wing from './components/Wing'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // Full width and always at least 100vh for safe area
  width: '100%',
  minHeight: '100vh',
  alignItems: 'center',
  background: '#f9fbfc', // optional: light background
}));

const SubContainer = styled(Box)(({ theme }) => ({
  // Default: Desktop
  width: '60%',
  [theme.breakpoints.down('lg')]: {
    width: '75%',
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(0, 1), // 0 top/bottom, 1 left/right
  },
  transition: 'width 0.3s'
}));

const App = () => {
  // Optional: for per-device tweak (JS logic, not required here)
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <SubContainer>
        <Header />
        <Home />
        <About />
        <Qualifications />
        <Skills />
        <Services />
        <Discount />
        <Testimonial />
        <Contact />
        {/* <Wing /> */}
        <Waves />
        <Footer />
      </SubContainer>
    </Container>
  )
}

export default App
