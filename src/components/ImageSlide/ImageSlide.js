import React from 'react';
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

const ImageSlide = () => {
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
                    <SwiperSlide>
                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png'/>
                        <ImageListItemBar
                            title={`ตำปูไทย`}
                            subtitle={`Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.`}
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
                    <SwiperSlide>
                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png'/>
                        <ImageListItemBar
                            title={`ตำปูไทย`}
                            subtitle={`Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.`}
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
                    <SwiperSlide>
                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png'/>
                        <ImageListItemBar
                            title={`ตำปูไทย`}
                            subtitle={`Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.`}
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
                    <SwiperSlide>
                        <img src={`${process.env.REACT_APP_BASE_URL}/assets/images/recommended/1.png`} alt='1.png'/>
                        <ImageListItemBar
                            title={`ตำปูไทย`}
                            subtitle={`Lorem ipsum dolor sit amet consectetur. Maecenas elit adipiscing morbi sapien.`}
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
                </Swiper>
            </div>
        </div>
    )
}

export default ImageSlide;