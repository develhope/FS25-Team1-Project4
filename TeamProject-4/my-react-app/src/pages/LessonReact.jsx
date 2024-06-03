import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsReact = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: <CardLesson video="https://www.youtube.com/embed/TCYnHcngPLc?si=NmJGuT-HirzzfXtM"/>,
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/OD2d2sDz5Mg?si=jKd5K_OdIwuKv66p" />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/fV1nDbzKano?si=QGwMtsOYR3y6GMwi" />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/YdL_zBx4Blg?si=HlwySssBAWlwxo-J" />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/BR1uPIRiGnE?si=EVknAHKjxe97u_Fa" />,
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <button className="absolute top-0 left-0 flex items-center mt-4 ml-4 text-blue-500 hover:text-blue-700" onClick={() => navigate(-1)}>
                <FaArrowLeft className="mr-2" />
                Back
            </button>
            <CarouselLesson cards={cards} height="600px" width="100%" margin="0 auto" offset={200} showArrows={true} />
        </div>
    );
};

export default LessonsReact;
