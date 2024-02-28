import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// CSS
import './RecommendedMenu.css'

const RecommendedMenu = (props) => {
    const [recommendedMenus, setRecommendedMenus] = useState([]);
    const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);

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
        <div className="recommended">
            <div className="recommended-content">
                <Box sx={{
                    display: 'flex',
                    p: 1,
                    m: 1,
                    height: '100%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <h1>
                                    เมนูแนะนำ
                                </h1>
                                {
                                    recommendedMenus.length > 0 && <img src={recommendedMenus[selectedMenuIdx].imageUrl} alt={recommendedMenus[selectedMenuIdx].imageUrl} className="recommended-show-img"/>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-start' }} style={
                            {
                                backgroundImage: `linear-gradient(to right, rgba(254, 217, 168, 1), rgba(254, 217, 168, 0), rgba(254, 217, 168, 1)), linear-gradient(to bottom, rgba(254, 217, 168, 1), rgba(254, 217, 168, 0), rgba(254, 217, 168, 1)), url("${process.env.REACT_APP_BASE_URL}/assets/images/background-thai.png")`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right'
                            }
                        }>
                            <Box>
                                {
                                    recommendedMenus.length > 0 && <>
                                        <h1 className="recommended-menu-name">
                                            {
                                                recommendedMenus[selectedMenuIdx].title
                                            }
                                        </h1>
                                        {/* <p>
                                            Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.
                                        </p> */}
                                        <Button variant="contained" className="btn-recommend-order" startIcon={<img src={`${process.env.REACT_APP_BASE_URL}/assets/images/btn/thai-icon.png`} alt="icon" width={25} style={
                                            {
                                                filter: 'brightness(0) invert(1)'
                                            }
                                        } />}>
                                            Open Order
                                        </Button>
                                    </>
                                }
                                <Grid container spacing={0} mt={3}>
                                    {
                                        recommendedMenus.slice(0,4).map((menu, index) => {
                                            return (
                                                <Grid item xs={3} sm={3} md={3} key={index}>
                                                    <img src={menu.imageUrl} alt={menu.imageUrl} className="img-other" onClick={() => {
                                                        setSelectedMenuIdx(index);
                                                    }} />
                                                </Grid>
                                            )
                                        })
                                    }
                                    {/* <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="img-other" />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="img-other" />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="img-other" />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="img-other" />
                                    </Grid> */}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default RecommendedMenu;