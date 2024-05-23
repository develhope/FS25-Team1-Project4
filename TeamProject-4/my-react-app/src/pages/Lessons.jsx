import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const Lessons = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: <CardLesson video="PpBdz1ehRFE" />,
        },
        {
            key: 2,
            content: <CardLesson video="PpBdz1ehRFE" />,
        },
        {
            key: 3,
            content: <CardLesson video="PpBdz1ehRFE" />,
        },
        {
            key: 4,
            content: <CardLesson video="PpBdz1ehRFE" />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube-nocookie.com/watch?v=PpBdz1ehRFE" />,
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
                <FaArrowLeft />
            </button>
            <CarouselLesson cards={cards} height="500px" width="100%" margin="0 auto" offset={200} showArrows={false} />
        </div>
    );
};

export default Lessons;
