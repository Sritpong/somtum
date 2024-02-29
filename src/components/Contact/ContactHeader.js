import { Link } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// MUI ICONS
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { FaLine } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

// CSS
import './ContactHeader.css';

const ContactHeader = () => {

    const contactList = [
        {
            label: "ตำลอกอเกษตรนวมิตรทร์โดยวาว",
            link: "https://www.facebook.com/",
            icon: <FacebookIcon fontSize='medium' />
        },
        {
            label: "somtumwow",
            link: "https://www.instagram.com/",
            icon: <InstagramIcon fontSize='medium' />
        },
        {
            label: "somtumwow@gmail.com",
            link: "mailto:somtumwow@gmail.com",
            icon: <EmailIcon fontSize='medium' />
        },
        {
            label: "@wowkitchen (มี @ ด้วยนะคะ)",
            link: "https://www.google.com/",
            icon: <FaLine style={
                {
                    fontSize: '1.5rem'
                }
            } />
        },
        {
            label: "soomtumwow",
            link: "https://www.tiktok.com/",
            icon: <FaTiktok style={
                {
                    fontSize: '1.5rem'
                }
            } />
        },
        {
            label: "Online Delivery",
            link: "#",
            icon: <DeliveryDiningIcon fontSize='medium' />
        },
    ]

    return (
        <div className="contact-header">
            <h1>
                ติดต่อเรา
            </h1>
            <Box sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    m: 1,
                }
            }>
                <Grid container className="grid-contact-container">
                    {
                        contactList.map((list, index) => (
                            <Grid item xs={12} sm={12} md={6} sx={
                                {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 2
                                }
                            } key={index} className="contact-list">
                                {
                                    <Link to={`${list.link}`} target="_blank">
                                        {list.icon}
                                        <p>
                                            {list.label}
                                        </p>
                                    </Link>
                                }
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default ContactHeader;