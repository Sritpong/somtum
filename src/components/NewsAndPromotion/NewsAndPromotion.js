// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// CSS
import './NewsAndPromotion.css'

const NewsAndPromotion = () => {
    return (
        <div className="newsandpromotion">
            <div className="newsandpromotion-content">
            <Box sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    height: '100%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            <h1>
                                ข่าวและโปรโมชั่นล่าสุด
                            </h1>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/news/1.png`} alt='1.png' style={
                                            {
                                                maxWidth: '100%',
                                                height: 'auto',
                                                padding: 0,
                                                margin: 0,
                                                borderRadius: 15
                                            }
                                        } />
                                    </Grid>

                                    <Grid item xs={8} sm={8} md={8}>
                                        <p className="news-date">December 15, 2022</p>
                                        <p className="news-title">
                                            Lorem ipsum
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur. Eleifend et facilisis volutpat facilisi. Aliquam et ridiculus vulputate aliquam mauris. Posuere tempor sit duis mattis augue at aliquet faucibus. A facilisis augue dui.
                                        <Box mt={3}>
                                            <Button variant="contained" className="btn-readmore" sx={
                                                {
                                                    px: 5
                                                }
                                            }>
                                                READ MORE
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            {/* OTHERS */}
                            <Grid item xs={12} sm={12} md={12} mt={3}>
                                <div className="news-others">
                                    <Grid container spacing={2} mt={3}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={4} sm={4} md={4}>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/news/2.png`} alt='1.png' style={
                                                                {
                                                                    maxWidth: '100%',
                                                                    height: 'auto',
                                                                    padding: 0,
                                                                    margin: 0,
                                                                    borderRadius: 15
                                                                }
                                                            } />
                                                        </Grid>
                                                        <Grid item xs={8} sm={8} md={8}>
                                                            <p className="news-date">December 15, 2022</p>
                                                            <p className="news-title">
                                                                Lorem ipsum
                                                            </p>
                                                            Lorem ipsum dolor sit amet consectetur. Eleifend et facilisis volutpat facilisi. Aliquam et ridiculus vulputate aliquam mauris. Posuere tempor sit duis mattis augue at aliquet faucibus. A facilisis augue dui.
                                                            <Box mt={3}>
                                                                <Button variant="contained" className="btn-readmore" sx={
                                                                    {
                                                                        px: 5
                                                                    }
                                                                }>
                                                                    READ MORE
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={4} sm={4} md={4}>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/news/1.png`} alt='1.png' style={
                                                                {
                                                                    maxWidth: '100%',
                                                                    height: 'auto',
                                                                    padding: 0,
                                                                    margin: 0,
                                                                    borderRadius: 15
                                                                }
                                                            } />
                                                        </Grid>
                                                        <Grid item xs={8} sm={8} md={8}>
                                                            <p className="news-date">December 15, 2022</p>
                                                            <p className="news-title">
                                                                Lorem ipsum
                                                            </p>
                                                            Lorem ipsum dolor sit amet consectetur. Eleifend et facilisis volutpat facilisi. Aliquam et ridiculus vulputate aliquam mauris. Posuere tempor sit duis mattis augue at aliquet faucibus. A facilisis augue dui.
                                                            <Box mt={3}>
                                                                <Button variant="contained" className="btn-readmore" sx={
                                                                    {
                                                                        px: 5
                                                                    }
                                                                }>
                                                                    READ MORE
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={4} sm={4} md={4}>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/news/2.png`} alt='1.png' style={
                                                                {
                                                                    maxWidth: '100%',
                                                                    height: 'auto',
                                                                    padding: 0,
                                                                    margin: 0,
                                                                    borderRadius: 15
                                                                }
                                                            } />
                                                        </Grid>
                                                        <Grid item xs={8} sm={8} md={8}>
                                                            <p className="news-date">December 15, 2022</p>
                                                            <p className="news-title">
                                                                Lorem ipsum
                                                            </p>
                                                            Lorem ipsum dolor sit amet consectetur. Eleifend et facilisis volutpat facilisi. Aliquam et ridiculus vulputate aliquam mauris. Posuere tempor sit duis mattis augue at aliquet faucibus. A facilisis augue dui.
                                                            <Box mt={3}>
                                                                <Button variant="contained" className="btn-readmore" sx={
                                                                    {
                                                                        px: 5
                                                                    }
                                                                }>
                                                                    READ MORE
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={4} sm={4} md={4}>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/news/1.png`} alt='1.png' style={
                                                                {
                                                                    maxWidth: '100%',
                                                                    height: 'auto',
                                                                    padding: 0,
                                                                    margin: 0,
                                                                    borderRadius: 15
                                                                }
                                                            } />
                                                        </Grid>
                                                        <Grid item xs={8} sm={8} md={8}>
                                                            <p className="news-date">December 15, 2022</p>
                                                            <p className="news-title">
                                                                Lorem ipsum
                                                            </p>
                                                            Lorem ipsum dolor sit amet consectetur. Eleifend et facilisis volutpat facilisi. Aliquam et ridiculus vulputate aliquam mauris. Posuere tempor sit duis mattis augue at aliquet faucibus. A facilisis augue dui.
                                                            <Box mt={3}>
                                                                <Button variant="contained" className="btn-readmore" sx={
                                                                    {
                                                                        px: 5
                                                                    }
                                                                }>
                                                                    READ MORE
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default NewsAndPromotion;