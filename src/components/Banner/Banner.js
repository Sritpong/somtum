// MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';

// IMPORT CSS
import './Banner.css'

// COMPONENTS
import ImageSlide from '../ImageSlide/ImageSlide'

const Banner = () => {
    return (
            <div className="banner">
                <div className="banner-content">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        height: '100%'
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={4}>
                                <ImageSlide />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} style={
                                    {
                                        backgroundImage: `linear-gradient(to right, rgba(255, 168, 0, 1), rgba(255, 168, 0, 0), rgba(255, 168, 0, 1)), linear-gradient(to bottom, rgba(255, 168, 0, 1), rgba(255, 168, 0, 0), rgba(255, 168, 0, 1)), url("${process.env.REACT_APP_BASE_URL}/assets/images/background-thai.png")`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right'
                                    }
                                }>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/kunwow.png`} alt="" className="image-kunwow" width={500} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
    )
}

export default Banner;