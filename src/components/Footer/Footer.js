import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// MUI ICONS
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// CSS
import './Footer.css';

const Footer = () => {
    const location = useLocation();
    const [show, setShow] = useState(true);
    
    useEffect(() => {
        if(location.pathname == '/register')
        {
            setShow(false);
            return;
        }
        
        setShow(true);
    }, [location])

    return (
        <>
            {
                show && <footer>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        mx: 1,
                        height: '100%'
                    }}>
                        <Grid container spacing={2} mb={6}>
                            <Grid item xs={12} sm={12} md={6}>
                                <h1>
                                    LOGO
                                </h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur. Enim eget feugiat pharetra suspendisse non nunc dapibus tortor.
                                </p>
                                <FacebookIcon style={
                                    {
                                        marginRight: 3
                                    }
                                } />
                                <TwitterIcon style={
                                    {
                                        marginRight: 3
                                    }
                                } />
                                <InstagramIcon style={
                                    {
                                        marginRight: 3
                                    }
                                } />
                                <p className="description sm">
                                    © Copyright 2023
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography mt={2} mb={1} fontSize={20}>
                                    ลงทะเบียนติดตามข่าวสาร
                                </Typography>
                                <TextField
                                    id="standard-required"
                                    sx={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: 1,
                                        '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'rgba(131, 60, 64,.5)',
                                        },
                                        },
                                    }}
                                    fullWidth
                                    placeholder='อีเมลล์ที่ต้องการสมัครรับข้อมูล'
                                />
                                <Button variant="contained" className="btn-follow" sx={
                                    {
                                        px: 5,
                                        mt: 1
                                    }
                                }>
                                    ติดตาม
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </footer>
            }
        </>
    )
}

export default Footer;