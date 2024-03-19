import React from 'react'
import { Box, styled, Grid } from '@mui/material'
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
  justifyContent: 'center',
  alignItems: 'center'

}))

const SubContainer = styled(Box)(({ theme }) => ({
  width: '60%'
}
))

const App = () => {
  return (
    <Container>
      <SubContainer>
        <Header />

        <Home />
        <About/>
        <Qualifications />
        <Skills />
        <Services/>
        <Discount/>
        <Testimonial/>
        <Contact />
        <Waves />
        <Footer/>
        {/* <Wing/> */}
      </SubContainer>
    </Container>
  )
}

export default App