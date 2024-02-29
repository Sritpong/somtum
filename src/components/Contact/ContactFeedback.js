import { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// MUI ICONS
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// CSS
import './ContactFeedback.css';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ContactFeedback = () => {
    const [image, setImage] = useState({});

    return (
        <>
            <div className="feedback-content">
                <div className="icon-center">
                    <NoteAltRoundedIcon fontSize='large' />
                </div>
                <h1>
                    ติชม / ติดต่อ
                </h1>
                <Box sx={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        m: 1
                    }
                }>
                    <Grid container className="feedback-container">
                        <Grid item xs={12} sm={12} md={12} sx={
                            {
                                backgroundColor: 'white',
                                borderRadius: 5,
                                p: 5
                            }
                        }>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        ชื่อ-นามสกุล
                                    </Typography>
                                    <TextField
                                        id="standard-required"
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
                                        placeholder='ชื่อ-นามสกุล'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        โทร
                                    </Typography>
                                    <TextField
                                        id="standard-required"
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        อีเมล
                                    </Typography>
                                    <TextField
                                        id="standard-required"
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        สาขา
                                    </Typography>
                                    <TextField
                                        id="standard-required"
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
                                        placeholder="โปรดเลือก"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        ข้อความ
                                    </Typography>
                                    <TextField
                                        multiline
                                        rows={5}
                                        maxRows={5}
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} px={1}>
                                    <Typography mt={2} mb={1} fontSize={20}>
                                        เลือกไฟล์
                                    </Typography>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                        className="btn-uploadfiles"
                                    >
                                        {
                                            image.name === undefined ? "เลือกไฟล์" : image.name
                                        }
                                        <VisuallyHiddenInput type="file" onChange={(e) => {
                                            setImage(e.target.files?.[0])
                                        }} />
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} px={1} mt={3}>
                                    <Button
                                        component="label"
                                        variant="contained"
                                        tabIndex={-1}
                                        className="btn-send-feedback"
                                        fullWidth
                                    >
                                        ส่ง
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default ContactFeedback;