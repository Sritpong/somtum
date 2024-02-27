// MUI
import Box from '@mui/material/Box'

// IMPORT CSS
import './Banner.css'

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
                        <div className="banner-item">
                            1
                        </div>
                        <div></div>
                        <div className="banner-item" style={
                            {
                                backgroundImage: `linear-gradient(rgba(255, 168, 0, 1), rgba(255, 168, 0, 0), rgba(255, 168, 0, 1)), url("${process.env.REACT_APP_BASE_URL}/assets/images/background-thai.png")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right',
                                display: 'flex',
                                alignItems: 'right',
                                height: '93%',
                                justifyContent: 'flex-end'
                            }
                        }>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                m: 1,
                                height: '97%'
                            }}>
                                <div className="banner-text-kunwow">
                                    <p>แซ่บจัดจ้าน</p>
                                    <p>ทุกระดับความเผ็ด</p>
                                    <p>โดย วาว</p>
                                </div>
                                <div>
                                    <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/kunwow.png`} style={
                                        {
                                            height: '98%'
                                        }
                                    } alt={`kunwow`} />
                                </div>
                            </Box>
                        </div>
                    </Box>
                </div>
            </div>
    )
}

export default Banner;