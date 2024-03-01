import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';

// IMPORT CSS
import './Banner.css'

// COMPONENTS
import ImageSlide from '../ImageSlide/ImageSlide'

const Banner = (props) => {
    const [recommendedMenus, setRecommendedMenus] = useState([]);

    useEffect(() => {
        const setData = async () => {
            const temp_recommendedMenus = await Promise.all(props.allMenus.filter((element) => {
                return element.isRecommended === 1
            }));

            setRecommendedMenus(temp_recommendedMenus);
        }

        setData();
    }, [props.allMenus]);

    return (
            <div className="banner" style={
                {
                    marginTop: 50
                }
            }>
                <div className="banner-content">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 1,
                        height: '100%'
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={5} mt={3}>
                                <ImageSlide recommendedMenus={recommendedMenus} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
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