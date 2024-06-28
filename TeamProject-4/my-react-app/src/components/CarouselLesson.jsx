import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

export function CarouselLesson({ cards, height, width, margin, offset, showArrows }) {
    const [offsetRadius, setOffsetRadius] = useState(4);
    const [goToSlide, setGoToSlide] = useState(0);

    useEffect(() => {
        setOffsetRadius(offset);
    }, [offset]);

    const handleCardClick = (index) => {
        setGoToSlide(index);
    };

    const slides = cards.map((element, index) => ({
        key: element.key,
        content: (
            <div onClick={() => handleCardClick(index)}>
                {element.content}
            </div>
        ),
    }));

    return (
        <div style={{ width, height, margin, position: 'absolute', top: 200, left: 0 }}>
            <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}