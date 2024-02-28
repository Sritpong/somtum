import { useEffect, useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// CSS
import './NewsHeader.css';

const NewsHeader = (props) => {
    const [selectedMenu, setSelectedMenu] = useState(props.selectedMenu);

    useEffect(() => {
        setSelectedMenu(props.selectedMenu);
    }, [props.selectedMenu]);

    return (
        <div className="news-header">
            <Box>
                <h1>
                    ข่าว, โปรโมชั่น, และบทความล่าสุด
                </h1>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                    }}
                >
                    <Button variant="contained" className={`btn-menu ` + (selectedMenu === 'all' && 'active')} onClick={() => {
                        props.setSelectedMenu("all");
                    }}>
                        ทั้งหมด
                    </Button>
                    <Button variant="contained" className={`btn-menu ` + (selectedMenu === 'news' && 'active')} onClick={() => {
                        props.setSelectedMenu("news");
                    }}>
                        ข่าวสาร
                    </Button>
                    <Button variant="contained" className={`btn-menu ` + (selectedMenu === 'blogs' && 'active')} onClick={() => {
                        props.setSelectedMenu("blogs");
                    }}>
                        บทความ
                    </Button>
                    <Button variant="contained" className={`btn-menu ` + (selectedMenu === 'promotions' && 'active')} onClick={() => {
                        props.setSelectedMenu("promotions");
                    }}>
                        โปรโมชั่น
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default NewsHeader;