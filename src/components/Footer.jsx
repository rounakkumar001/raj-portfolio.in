import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import fb from '../img/fb.png'
import insta from '../img/insta.png'
import twitter from '../img/twitter.png'
import email from '../img/email.png'

import Lottie from 'lottie-react'
import MyWing from '../img/wing.json'
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            {/* <Box sx={{ position: 'absolute', top: '527%', right : '34%' }}>
                <Lottie animationData={MyWing} loop />
            </Box> */}
            <Typography variant="body1" color="textSecondary">
                © {new Date().getFullYear()} Raj Nandani Singh. All rights reserved.
            </Typography>
            <Box mt={1}>
                <img src={fb} alt="" width={20} style={{ margin: '0px 5px', cursor: 'pointer' }} />
                <img src={insta} alt="" width={20} style={{ cursor: 'pointer' }} />
                <img src={twitter} alt="" width={20} style={{ margin: '0px 5px', cursor: 'pointer' }} />
                <img src={email} alt="" width={20} style={{ cursor: 'pointer' }} />
            </Box>
            <Typography variant="body2" color="textSecondary" mt={1}>
                <Link href="/privacy-policy" color="inherit" sx={{ mr: 1 }}>
                    Privacy Policy
                </Link>
                |
                <Link href="/terms-of-service" color="inherit" sx={{ ml: 1 }}>
                    Terms of Service
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
