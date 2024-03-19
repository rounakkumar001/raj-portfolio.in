import React from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { FacebookRounded, LinkedIn } from '@mui/icons-material'
import { ReactTyped } from "react-typed";
import { keyframes } from '@emotion/react';
import Lottie from 'lottie-react'

import fb from '../img/fb.png'
import insta from '../img/insta.png'
import twitter from '../img/twitter.png'
import email from '../img/email.png'
import bf from '../img/butterfly.gif'
import bubble from '../img/babble.json'
import dp from '../img/cutee.png'

const spin = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(4px);
    }
`;


const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    marginTop: '3.5rem'
}))

const Home = () => {
    return (
        <Container>
            {/* <Box sx={{ position: 'relative' }}>
                <img src={bf} alt="" style={{ position: 'absolute', left: '0px' }} />
            </Box> */}
            <img src={bf} alt="" style={{ position: 'absolute', top: 60 }} />

            <Lottie animationData={bubble} loop={true} style={{ width: 200, position: 'absolute', top: 90, zIndex: -1 }} />

            <Box mb={5} sx={{ width: 180, height: 180, overflow: 'hidden' }}>
                <img
                    src={dp}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                />
            </Box>

            {/* Hello there! I'm John Doe, a passionate web developer based in San Francisco. With a keen eye for detail and a love for problem-solving, I specialize in crafting responsive and user-friendly websites that leave a lasting impression. Over the past 5 years, I've had the privilege of collaborating with clients from diverse industries, bringing their visions to life through innovative design and cutting-edge technology. Whether you're a startup looking to establish your online presence or a established business aiming to enhance your digital footprint, I'm here to turn your ideas into reality. Let's build something incredible together! */}


            <Box sx={{
                // fontWeight : 'bold'
                fontSize: '1.3rem',
                textShadow: '1px 1px 2px #FFB0B0'
            }}>

                <ReactTyped strings={["<span style='color : #FC6736; font-weight : bold'> Hello there! I'm </span> <span style='font-size: 24px; font-weight : bold; color : #0C2D57 '>Raj Nandani Singh</span>,"]} typeSpeed={40} />
            </Box>

            <Box sx={{
                // fontWeight : 'bold'
                fontSize: '1.3rem',
                fontFamily: 'monospace',
                marginTop: '10px'
            }}>
                <span>I'am </span>
                <ReactTyped strings={[
                    "<span style='font-weight : bold; color : #FC6736'>Programmer!</span>",
                    "<span style='font-weight : bold; color : #FC6736'>Web developer!</span>",
                    "<span style='font-weight : bold; color : #FC6736'>Designer!</span>",
                    "<span style='font-weight : bold; color : #FC6736'>Database Engineer!</span>",
                ]}
                    typeSpeed={120}
                    loop
                />
            </Box>

            <Box sx={{
                // fontWeight : 'bold'
                fontSize: '1rem',
                // fontFamily: 'monospace'
                width: '80%',
                textAlign: 'center ',
                marginTop: '10px'
            }}>

                <ReactTyped strings={[
                    "<span style='font-weight : bold; color : black'>Programmer fluent in C/C++, JavaScript, Java, and more, with a keen eye for design. Let's build something amazing together!!</span>"
                ]}
                    typeSpeed={40}

                />
            </Box>
            <Box mt={1}>
                <img src={fb} alt="" width={20} style={{ margin: '0px 5px', cursor: 'pointer' }} />
                <img src={insta} alt="" width={20} style={{ cursor: 'pointer' }} />
                <img src={twitter} alt="" width={20} style={{ margin: '0px 5px', cursor: 'pointer' }} />
                <img src={email} alt="" width={20} style={{ cursor: 'pointer' }} />
            </Box>



            {/* <ReactTyped
                strings={[
                    "Search for products",
                    "Search for categories",
                    "Search for brands",
                ]}
                typeSpeed={40}
                backSpeed={50}
                
                loop
           /> */}


        </Container>
    )
}

export default Home