import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// CSS
import './MenusList.css';

const MenusList = (props) => {
    const [allMenus, setAllMenus] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(props.selectedCategory);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        if(props.allCategories.length <= 0)
        {
            return;
        }

        if(props.selectedCategory === 0)
        {
            setSelectedCategory(props.allCategories[0].id);
            setCategoryName(props.allCategories[0].name);
            return;
        }
        setSelectedCategory(props.selectedCategory);
        const idxCategory = props.allCategories.findIndex((element) => {
            return element.id === props.selectedCategory
        })

        if(idxCategory === -1)
        {
            setCategoryName("");
        }
        else
        {
            setCategoryName(props.allCategories[idxCategory].name);
        }
    }, [props.allCategories, props.selectedCategory]);

    useEffect(() => {
        setAllMenus(props.allMenus);
    }, [props.allMenus]);

    return (
        <div className="menus-list">
            <h1>
                {
                    categoryName
                }
            </h1>
            <Grid container>
                {
                    allMenus.length > 0 && selectedCategory !== 0 && allMenus.filter((element) => {
                        return element.category_id === selectedCategory
                    }).map((menu, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={
                                    {
                                        backgroundColor: 'white',
                                        margin: 3,
                                        padding: 1,
                                        borderRadius: 5
                                    }
                                }>
                                    <img src={menu.imageUrl} alt={menu.imageUrl} style={
                                        {
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }
                                    }/>
                                    <h2>
                                        {menu.title}
                                    </h2>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default MenusList;