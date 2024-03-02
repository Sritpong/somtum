import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// CSS
import './../assets/css/Register.css';

// Service
import { axiosService } from '../services/axios';

const SetPassword = () => {
    const navigate = useNavigate();
    const params = useParams();
    
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSetPassword = () => {
        const uuid = params.uuid;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if(password === undefined || password === '' || confirmPassword === undefined || confirmPassword === '')
        {
            return Swal.fire({
                icon: "error",
                text: "กรุณากรอกข้อมูลให้ครบทุกช่อง"
            });
        }

        if(password !== confirmPassword)
        {
            return Swal.fire({
                icon: "error",
                text: "รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่อีกครั้ง"
            });
        }

        try {
            const service = new axiosService();
            service.post(`/user/setting/password`, {
                data: uuid,
                password: password
            }, {}).then((response) => {
                if(response.data.status !== undefined && response.data.status == 200)
                {
                    Swal.fire({
                        icon: "success",
                        text: "ตั้งรหัสผ่านใหม่เรียบร้อยแล้ว"
                    }).then(() => {
                        navigate('/');
                    });
                }
                else
                {
                    Swal.fire({
                        icon: "error",
                        text: response.data.message || "Error"
                    }).then(() => {
                        navigate('/');
                    });
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            <div className="register-content">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 0,
                    height: '100%',
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                className="item-logo"
                            >
                                LOGO
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={
                            {
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${process.env.REACT_APP_BASE_URL}/assets/images/background/register.png")`
                            }
                        } className="item-register">
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box className="box-register">
                                    <h1>
                                        ตั้งรหัสผ่านสำหรับบัญชี
                                    </h1>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/Vector.png`} className="vector" />
                                    </Box>
                                    <Grid container>
                                    <Grid item xs={12} sm={12} md={12} px={4}>
                                            <Typography mt={2} mb={1} fontSize={18} color={'black'}>
                                                รหัสผ่าน
                                            </Typography>
                                            <TextField
                                                id="standard-required"
                                                type="password"
                                                sx={{
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                    borderRadius: 1,
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgba(255, 168, 0,.5)',
                                                        },
                                                    },
                                                }}
                                                fullWidth
                                                inputRef={passwordRef}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} px={4}>
                                            <Typography mt={2} mb={1} fontSize={18} color={'black'}>
                                                ยืนยันรหัสผ่าน
                                            </Typography>
                                            <TextField
                                                id="standard-required"
                                                type="password"
                                                sx={{
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                    borderRadius: 1,
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgba(255, 168, 0,.5)',
                                                        },
                                                    },
                                                }}
                                                fullWidth
                                                inputRef={confirmPasswordRef}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} px={4} mt={3}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    component="label"
                                                    variant="contained"
                                                    tabIndex={-1}
                                                    className="btn-register"
                                                    startIcon={<img src={`${process.env.REACT_APP_BASE_URL}/assets/images/btn/thai-icon.png`} alt="icon" width={25} style={
                                                        {
                                                            filter: 'brightness(0) invert(1)'
                                                        }
                                                    } />}
                                                    onClick={handleSetPassword}
                                                >
                                                    ยืนยันการตั้งรหัสใหม่
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default SetPassword;