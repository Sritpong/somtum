import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './navigation.css';
import './pagination.css';
import './ImageSlide.css';

import ImageListItemBar from '@mui/material/ImageListItemBar';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y } from 'swiper/modules';

const ImageSlide = (props) => {
    const [recommendedMenus, setRecommendedMenus] = useState([]);

    useEffect(() => {
        setRecommendedMenus(props.recommendedMenus);
    }, [props.recommendedMenus]);

    return (
        <div className="slide">
            <div className="slide-app">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y]}
                    style={
                        {
                            borderRadius: 30
                        }
                    }
                >
                    {
                        recommendedMenus.map((menu, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={menu.imageUrl} alt={menu.imageUrl} />
                                    <ImageListItemBar
                                        title={`${menu.title}`}
                                        sx={
                                            {
                                                '.MuiImageListItemBar-title': {
                                                    fontSize: 20
                                                },
                                                '.MuiImageListItemBar-subtitle': {
                                                    fontSize: 16
                                                }
                                            }
                                        }
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ImageSlide;