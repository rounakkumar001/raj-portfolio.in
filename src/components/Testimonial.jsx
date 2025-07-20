import React from 'react';
import Lottie from 'lottie-react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Replace with your real Lottie file
import Dp from '../img/dp.json';

// ----- Testimonial Data:  --------
const testimonials = [
    {
        name: "Arjun Patel",
        rating: 4.5,
        title: "Creative Visionary",
        message: "Had an outstanding experience—prompt responses and creative solutions!",
    },
    {
        name: "Priya Gupta",
        rating: 5,
        title: "Brand Builder",
        message: "Absolutely exceeded my expectations! I loved the communication and attention to detail.",
    },
    {
        name: "Devansh Mehra",
        rating: 4,
        title: "Problem Solver",
        message: "Went above and beyond to handle a tricky project requirement. Highly reliable!",
    },
    {
        name: "Sara Fernandes",
        rating: 4.5,
        title: "UI/UX Expert",
        message: "Wonderful taste, and a delight to work with. Highly recommended!",
    },
    {
        name: "Amit Bhargava",
        rating: 4,
        title: "Efficiency Expert",
        message: "Streamlined our workflow and helped us achieve more in less time.",
    },
    {
        name: "Rohit Malhotra",
        rating: 3.5,
        title: "Dependable Partner",
        message: "A pleasure to collaborate with, always on time.",
    },
    // Add as many as you need!
];

// ----- Group testimonials into chunks of 3: -----
function groupByRows(data, n = 3) {
    const res = [];
    for (let i = 0; i < data.length; i += n) {
        res.push(data.slice(i, i + n));
    }
    return res;
}

export default function TestimonialCarousel() {
    const theme = useTheme();
    const testimonialRows = groupByRows(testimonials, 3);

    return (
        <Box
            sx={{
                mt: 7, mb: 6, px: 2,
                maxWidth: 1200, mx: 'auto', textAlign: 'center'
            }}
        >
            <Typography variant="h5" fontWeight={700} color="#0c2c57" mb={1}>
                Testimonials
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} color="grey.600" mb={3}>
                My client saying
            </Typography>

            <Carousel
                autoPlay
                interval={3900}
                infiniteLoop
                showArrows
                showStatus={false}
                showIndicators
                showThumbs={false}
                emulateTouch
                swipeable
                renderIndicator={(onClickHandler, isSelected, index, label) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: 8, height: 8, borderRadius: 24, margin: '0 5px',
                            background: isSelected ? theme.palette.primary.main : '#eee', transition: 'background 0.18s'
                        }}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    />
                )}
            >
                {testimonialRows.map((row, slideIdx) => (
                    <Box
                        key={slideIdx}
                        sx={{
                            display: 'flex',
                            gap: { xs: 1, md: 2 },
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            py: 1,
                        }}
                    >
                        {row.map((person, i) => (
                            <Paper
                                key={i}
                                elevation={3}
                                sx={{
                                    flex: '1 1 260px',
                                    minWidth: 230,
                                    maxWidth: 340,
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 0,
                                    background: '#fff',
                                    px: 3,
                                    py: 4,
                                    transition: 'box-shadow 0.3s, transform 0.3s',
                                    '&:hover': {
                                        boxShadow: theme.shadows[6],
                                        transform: 'translateY(-4px) scale(1.03)',
                                    },
                                    mx: { xs: 'auto', md: 0 }
                                }}
                            >
                                <Box sx={{ width: 68, height: 68 }}>
                                    <Lottie animationData={Dp} style={{ height: 68, width: 68 }} loop />
                                </Box>
                                <Typography
                                    fontWeight={700}
                                    variant="subtitle1"
                                    color="#0c2c57"
                                    sx={{ mt: 0.5, mb: 0 }}
                                >
                                    {person.name}
                                </Typography>
                                <Typography variant="subtitle2" color="grey.700" sx={{ mt: 0.1, mb: 0 }}>
                                    {person.title}
                                </Typography>
                                <Stars rating={person.rating} />
                                <Typography
                                    variant="body2"
                                    color="grey.800"
                                    fontStyle="italic"
                                    lineHeight={1.5}
                                    sx={{ mt: 1.2, fontSize: '1.01rem' }}
                                >
                                    &ldquo;{person.message}&rdquo;
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}

// Modular star rendering
function Stars({ rating }) {
    const stars = [];
    let rem = rating;
    for (let i = 0; i < 5; i++) {
        if (rem >= 1) {
            stars.push(<Star key={i} sx={{ color: "#fc6736", fontSize: "1.09rem" }} />);
            rem -= 1;
        } else if (rem >= 0.5) {
            stars.push(<StarHalf key={i} sx={{ color: "#fc6736", fontSize: "1.09rem" }} />);
            rem -= 0.5;
        } else {
            stars.push(<StarBorder key={i} sx={{ color: "#fc6736", fontSize: "1.09rem" }} />);
        }
    }
    return (
        <Box sx={{ display: 'flex', gap: 0.3, justifyContent: 'center' }}>{stars}</Box>
    );
}
