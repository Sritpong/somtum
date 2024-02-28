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
                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' className="recommended-show-img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <div className="recommended-item-two">
                                <h1 className="recommended-menu-name">
                                    ตำปูปลาร้า
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.
                                </p>
                                <Button variant="contained" className="btn-recommend-order">
                                    Open Order
                                </Button>
                                <Grid container spacing={0} mt={3}>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' style={
                                            {
                                                height: '90%',
                                                maxWidth: '100%',
                                                padding: 0,
                                                margin: 0
                                            }
                                        } />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' style={
                                            {
                                                height: '90%',
                                                maxWidth: '100%',
                                                padding: 0,
                                                margin: 0
                                            }
                                        } />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' style={
                                            {
                                                height: '90%',
                                                maxWidth: '100%',
                                                padding: 0,
                                                margin: 0
                                            }
                                        } />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png' style={
                                            {
                                                height: '90%',
                                                maxWidth: '100%',
                                                padding: 0,
                                                margin: 0
                                            }
                                        } />
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