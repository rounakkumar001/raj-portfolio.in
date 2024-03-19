import React from 'react';
import { useState } from 'react';
import { Grid, Box, styled, Typography, Button, Dialog } from '@mui/material';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import emailjs from 'emailjs-com'; // Import emailjs

import Contacts from '../img/contact.json';
import Send from '../img/send-email.json';
import sentAnim from '../img/sent.json';

import DoneEmail from '../img/email done.json'
import Lottie from 'lottie-react';

const Label = styled('label')`
    font-size: 16px;
    font-weight: bold;
    color: #0c2d57ff;
`;

const MyInput = styled('input')`
    background: #c4deffff;
    border: none;
    border-radius: 8px;
    height: 35px;
    font-size: 14px;
    padding: 10px;
    color: #0c2d57ff;
    margin: 10px 0px;
    font-weight : bold;
    width : 80% ;
`;

const MytxtArea = styled('textarea')`
    background: #c4deffff;
    border: none;
    border-radius: 8px;
    height: 35px;
    font-size: 14px;
    padding: 10px;
    color: #0c2d57ff;
    margin: 10px 0px;
    font-weight : bold;
`;

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [successMail, setSuccessMail] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

        emailjs.sendForm('service_oa54vxb', 'template_z234usj', e.target, 'vjnl8FC1Cm6V-pHxO')
            .then((result) => {
                console.log(result.text);
                // Optionally, you can reset the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    project: '',
                    message: ''
                });
                setDone(true);
                setTimeout(() => {
                    setDone(false);
                    setSuccessMail(true); // Set successMail to true
                    // setTimeout(() => setSuccessMail(false), 2300); // After 2300ms, set successMail back to false
                }, 2300);

                setLoading(false)
            }, (error) => {
                console.log(error.text);
                setLoading(false);
            });
    };

    return (
        <Box mt={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Dialog open={successMail}>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#000000' }}>
                    <Box sx={{ width: '200px' }}>
                        <Lottie animationData={DoneEmail} />
                    </Box>
                    <Box sx={{ padding: '2rem' }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#ff6f00' }}>Submission received! We'll be in touch shortly.</Typography>
                        <Button size='small' variant='outlined' sx={{ marginTop: '1rem', borderColor: '#ff6f00', color: '#ff6f00', fontWeight: 'bold' }} onClick={() => setSuccessMail(false)}>Ok</Button>
                    </Box>
                </Box>
            </Dialog>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0c2c57ff' }}>Contact Me</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'grey' }}>Get in Touch</Typography>
            <Grid container>
                <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                    <Lottie animationData={Send} loop={true} />
                </Grid>
                <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container mt={2}>
                            <Grid item md={6}>
                                <Label htmlFor="name">Name</Label><br />
                                <MyInput type='text' name='name' id='name' value={formData.name} onChange={handleChange} required />
                            </Grid>
                            <Grid item md={6}>
                                <Label htmlFor="email">Email</Label><br />
                                <MyInput type='email' name='email' id='email' value={formData.email} onChange={handleChange} required />
                            </Grid>
                            <Grid item md={12}>
                                <Label htmlFor="project">Project</Label><br />
                                <MyInput sx={{ width: '93%' }} type='text' name='project' id='project' value={formData.project} onChange={handleChange} required />
                            </Grid>
                            <Grid item md={12}>
                                <Label htmlFor="message">Message</Label><br />
                                <MytxtArea rows={5} type='text' name='message' id='message' value={formData.message} onChange={handleChange} required style={{ width: '93%', height: '100px' }} />
                            </Grid>
                            <Grid item md={12} >
                                <Button disabled={loading || done || successMail} type="submit" variant='contained' sx={{ bgcolor: '#0c2d57ff', textTransform: 'none', fontWeight: 'bold', fontSize: '1rem', borderRadius: '8px' }} endIcon={<NearMeOutlinedIcon />}>Send Message</Button>
                                {
                                    done &&
                                    <Box sx={{
                                        position: 'absolute',
                                        top: -50
                                    }}>
                                        <Lottie animationData={sentAnim} />
                                    </Box>
                                }

                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
