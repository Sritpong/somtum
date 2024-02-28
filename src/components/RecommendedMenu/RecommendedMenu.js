// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// CSS
import './RecommendedMenu.css'

const RecommendedMenu = () => {
    return (
        <div className="recommended">
            <div className="recommended-content">
                <Box sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    height: '100%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <h1>
                                เมนูแนะนำ
                            </h1>
                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="recommended-show-img"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} sx={{ display: 'flex', justifyContent: 'flex-end' }} style={
                            {
                                backgroundImage: `linear-gradient(to right, rgba(254, 217, 168, 1), rgba(254, 217, 168, 0), rgba(254, 217, 168, 1)), linear-gradient(to bottom, rgba(254, 217, 168, 1), rgba(254, 217, 168, 0), rgba(254, 217, 168, 1)), url("${process.env.REACT_APP_BASE_URL}/assets/images/background-thai.png")`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right'
                            }
                        }>
                            <div className="recommended-item-two">
                                <h1 className="recommended-menu-name">
                                    ตำปูปลาร้า
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.
                                </p>
                                <Button variant="contained" className="btn-recommend-order" startIcon={<img src={`${process.env.REACT_APP_BASE_URL}/assets/images/btn/thai-icon.png`} alt="icon" width={25} style={
                                    {
                                        filter: 'brightness(0) invert(1)'
                                    }
                                } />}>
                                    Open Order
                                </Button>
                                <Grid container spacing={0} mt={3}>
                                    <Grid item xs={3} sm={3} md={3}>
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
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default RecommendedMenu;