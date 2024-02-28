import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// CSS
import './MenusHeader.css';

const MenusHeader = (props) => {
    const [allCategories, setAllCategories] = useState([]);
    
    useEffect(() => {
        setAllCategories(props.allCategories);
    }, [props.allCategories])

    return (
        <div className="menus-header">
            <h1>
                เมนู
            </h1>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 1,
                }}
            >
                <Grid container sx={
                    {
                        maxWidth: 1050
                    }
                }>
                    {
                        allCategories.map((category, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} sx={
                                    {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 2,
                                        cursor: 'pointer'
                                    }
                                } key={index} onClick={() => {
                                    props.setSelectedCategory(category.id)
                                }}>
                                    <ImageListItem sx={
                                        {
                                            width: '90%'
                                        }
                                    }>
                                        <img src={category.image == null ? `https://static.wixstatic.com/media/ce3281_2de14da17a7747cd95ac55678445f8cf~mv2.jpg/v1/fill/w_275,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce3281_2de14da17a7747cd95ac55678445f8cf~mv2.jpg` : category.image} alt={'123'} style={
                                            {
                                                borderRadius: 20
                                            }
                                        } />
                                        <ImageListItemBar
                                            title={`${category.name}`}
                                            sx={
                                                {
                                                    '.MuiImageListItemBar-title': {
                                                        fontSize: 20,
                                                        textAlign: 'center'
                                                    },
                                                    '.MuiImageListItemBar-subtitle': {
                                                        fontSize: 16
                                                    },
                                                    '.MuiImageListItemBar-titleWrap': {
                                                        backgroundColor: 'rgb(238, 77, 45)',
                                                        borderRadius: '0px 0px 20px 20px'
                                                    },
                                                    borderRadius: '0px 0px 20px 20px'
                                                }
                                            }
                                        />
                                    </ImageListItem>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            
        </div>
    )
}

export default MenusHeader;