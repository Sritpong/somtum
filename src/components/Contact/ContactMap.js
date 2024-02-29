// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//CSS
import './ContactMap.css';

const ContactMap = () => {
    return (
        <div className="contact-map">
            <Box sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    m: 1
                }
            }>
                <Grid container className="map-container">
                    <Grid item xs={12} sm={12} md={12} sx={
                        {
                            backgroundColor: 'white',
                            border: 'solid 2px #ee4d2d',
                            borderRadius: 5
                        }
                    }>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} p={3}>
                                MAP
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} p={3}>
                                <h2 className="map-title f-black">
                                    สาขา
                                </h2>
                                <h2 className="f-or">
                                    Lorem ipsum dolor sit amet
                                </h2>
                                <p>
                                    3077 S Water Street, South Kristyton 08522-8188
                                </p>
                                <Box sx={
                                    {
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }
                                }>
                                    <Button variant="contained" className="btn-go-to-map">
                                        คลิกเพื่อนำทาง
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ContactMap;