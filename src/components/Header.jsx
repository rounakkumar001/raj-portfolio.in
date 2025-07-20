import React from 'react';
import { Box, Grid, styled, Typography, Button } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material'
import Lottie from 'lottie-react';
import fish from '../img/fish.json'
import pdf from './RAJ-NANDANI-SINGH.pdf';

const Header = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const onDownload = () => {
        const link = document.createElement('a');
        link.href = pdf;
        link.setAttribute('download', 'RAJ-NANDANI-SINGH.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: '#fff', padding: '10px 20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Box>
                {/* <Lottie animationData={fish} loop={true} style={{position : 'absolute', width : 200, height : 100, top : 0}}/> */}
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    margin: '10px 0px',
                    textShadow: '1px 1px 2px #FFB0B0'
                }}>
                    <span style={{ color: '#FC6736' }}>Raj</span> <span style={{ color: '#0C2D57' }}> Nandani</span> 🌟
                </Typography>
            </Box>
            <Box>
                <Button endIcon={<FileDownloadOutlined />} onClick={onDownload} size='small' variant='contained' sx={{ marginRight: 1, boxShadow: 'none', background: '#FC6736', fontWeight: 'bold', '&:hover': { background: '#FC6736' } }}>Download CV</Button>
                <Button size='small'
                    onClick={() => {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant='outlined' sx={{
                        boxShadow: 'none', borderColor: '#0C2D57', color: '#0C2D57', fontWeight: 'bold', '&:hover': {
                            borderColor: '#0C2D57'
                        }
                    }}>Contact me</Button>
            </Box>
            {/* <Grid container>
                <Grid item md={4}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        margin: '10px 0px',
                        textShadow: '1px 1px 2px #FFB0B0'
                    }}>
                        <span style={{ color: '#FC6736' }}>Raj</span> <span style={{ color: '#0C2D57' }}> Nandani</span> 🌟
                    </Typography>
                </Grid>
                <Grid item md={8} style={{ margin: '10px 0px' }} align='end' >
                    <Button size='small' variant='contained' sx={{ marginRight: 1, boxShadow: 'none', background: '#FC6736', fontWeight: 'bold', '&:hover': { background: '#FC6736' } }}>Download CV</Button>
                    <Button size='small' variant='outlined' sx={{
                        boxShadow: 'none', borderColor: '#0C2D57', color: '#0C2D57', fontWeight: 'bold', '&:hover': {
                            borderColor: '#0C2D57'
                        }
                    }}>Contact me</Button>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default Header;
