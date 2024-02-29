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
                            <Grid item xs={12} sm={12} md={6} p={3} height={450}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.1907459585398!2d100.64373887858062!3d13.816116197628094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d625e7cda81ab%3A0x72772242f4defcec!2s12%20Rachada-Ramintra%20Rd%2C%20Khwaeng%20Nuanchan%2C%20Khet%20Bueng%20Kum%2C%20Krung%20Thep%20Maha%20Nakhon%2010230!5e0!3m2!1sen!2sth!4v1709210723344!5m2!1sen!2sth"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={
                                        {
                                            borderRadius: '20px',
                                            border: 'solid 0px rgb(0,0,0,0)',
                                            boxShadow: '0 1rem 2rem rgba(0, 0, 0, .175)'
                                        }
                                    }
                                ></iframe>
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