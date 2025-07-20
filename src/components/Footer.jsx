// Footer.js

import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { Facebook, Instagram, Twitter, Email } from '@mui/icons-material';
import Lottie from 'lottie-react';
import MyWing from '../img/wing.json'; // Your Lottie wave

// Social links configuration
const socialLinks = [
  { icon: <Facebook fontSize="medium" />, link: 'https://facebook.com/', aria: 'Facebook' },
  { icon: <Instagram fontSize="medium" />, link: 'https://instagram.com/', aria: 'Instagram' },
  { icon: <Twitter fontSize="medium" />, link: 'https://twitter.com/', aria: 'Twitter' },
  { icon: <Email fontSize="medium" />, link: 'mailto:yourmail@example.com', aria: 'Email' },
];

const Footer = () => (
  <>
    {/* Wave Lottie just above footer, negative margin closes gap */}
    <Box sx={{ mb: '-4px', background: '#26364a', lineHeight: 0 }}>
      {/* <Lottie animationData={MyWing} loop style={{ width: '100%', display: 'block', margin: 0 }} /> */}
    </Box>
    <Box
      component="footer"
      sx={{
        backgroundColor: '#26364a',
        color: '#e1e8ef',
        position: 'relative',
        pt: { xs: 3, md: 4 },
        pb: 2,
        px: 2,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography variant="body1" color="inherit" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} | Raj Nandani Singh. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 1, mt: 0 }}
      >
        {socialLinks.map(({ icon, link, aria }) => (
          <Link
            key={aria}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={aria}
            sx={{
              color: 'inherit', // Icon inherits text color
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 0.8,
              borderRadius: '50%',
              transition: 'background 0.2s, transform 0.15s, color 0.15s',
              '&:hover': {
                background: 'rgba(236,237,240, 0.11)',
                transform: 'scale(1.13)',
                color: '#fff', // optional: brighten on hover
              },
            }}
          >
            {icon}
          </Link>
        ))}
      </Stack>

      <Typography variant="body2" sx={{ color: '#bac7d5', mt: 1 }}>
        <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ mx: 0.8 }}>
          Privacy Policy
        </Link>
        |
        <Link href="/terms-of-service" color="inherit" underline="hover" sx={{ mx: 0.8 }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  </>
);

export default Footer;
