import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalCarousel = ({ videos }) => {
    const settings = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        speed: 500,
        arrows: true,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div key={index} className="carousel-slide">
                        <video width="100%" height="100%" controls>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-title">{video.title}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VerticalCarousel;
