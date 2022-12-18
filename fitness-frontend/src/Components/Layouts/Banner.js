import React from 'react'
import { Box, Card, Typography, CardMedia } from '@mui/material'
// import "@fontsource/roboto"
import img from '../asserts/img1.jpg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[530],
    '&:hover': {
        backgroundColor: blue[900],
    },
}));

const Banner = () => {
    return (
        <Box>
            <Card position='relative'>

                <Typography position='absolute'
                    textAlign='center' 
                    variant='h2' 
                    fontFamily='roboto' 
                    fontStyle='normal' color='white' 
                    marginTop='10%' alignItems='center'
                    sx={{fontSize: { lg: '60px', xs: '35px' }}} >“Strength does not come from physical capacity. It comes from an indomitable will.”
                    <br /><ColorButton variant="contained" fontFamily='roboto' href="#exercises">Explore Exercise</ColorButton>
                </Typography>
                <CardMedia
                    component="img"
                    image={img}
                    alt="home"
                    width='100%' height='600px' />
            </Card>
        </Box>
    )
}

export default Banner;



