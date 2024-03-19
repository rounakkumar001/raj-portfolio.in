import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ServiceCard from './subcomponents/ServiceCard'
import Logo from '../img/uiuxanim.json'
import WebDev from '../img/webdevanim.json'
import UIux from '../img/logoanim.json'
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
    return (
        <Box mt={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0c2c57ff' }}>Services</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'grey' }}>What i offer.</Typography>
            <Grid mt={1} container spacing={1}>
                {
                    services.map((s) => (
                        <Grid item md={4} >
                            <ServiceCard data={s} />
                        </Grid>
                    ))

                }
            </Grid>
        </Box>
    )
}

export default Services