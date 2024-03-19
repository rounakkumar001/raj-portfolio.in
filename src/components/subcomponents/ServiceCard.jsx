import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import Lottie from 'lottie-react'
import UIux from '../../img/uiuxanim.json'
import WebDev from '../../img/webdevanim.json'
import Click from '../../img/click.json'
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#fc6736ff'
}))
const Description = styled(Typography)(({ theme }) => ({
    fontSize: '.8rem',
    color: 'gray',
    fontWeight: 'lighter'
}))

const Scard = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    position: 'relative',
    padding: "20px",
    borderRadius: "8px",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    // transition: "box-shadow 0.3s ease",
    transition: "transform 0.3s ease", // Add transition for smooth scaling
    '&:hover': {
        transform: 'scale(1.05)', // Scale up by 5% on hover
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    }


}))

const BtnCon = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    marginTop: '1rem',
    background: '#0c2c57ff',
    fontWeight: 'bold'
}))

const ServiceCard = ({ data }) => {
    return (
        <Scard>
            {
                (data.title === 'UI/UX Design')
                    ?
                    <Box sx={{
                        marginBottom: '3rem',
                        marginTop: '2rem'
                    }}>

                        <Lottie animationData={data.logo} loop />
                    </Box>
                    :
                    <Box>

                        <Lottie animationData={data.logo} loop />
                    </Box>
            }

            <Heading>{data.title}</Heading>
            <Description>{data.description}</Description>
            <Link to="contact" smooth={true} duration={500}> {/* Add Link to scroll to contact section */}
                <BtnCon variant='contained'>Hire me</BtnCon>
            </Link>
            <Box sx={{
                width: 50,
                position: 'absolute',
                bottom: 0,
                left: 80
            }}>

                <Lottie animationData={Click} loop />
            </Box>
        </Scard>
    )
}

export default ServiceCard