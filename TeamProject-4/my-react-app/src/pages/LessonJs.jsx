import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsJs = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: <CardLesson video="https://www.youtube.com/embed/84TYC44ezIU?si=TbxcG-WwLP1rOsES"/>,
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/JyHtBUU2w5g?si=j012-cNQ-OMgm0va" />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/Ld4aYNClh3g?si=9MIbYX0U-KAxQKC6" />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/iGU1zgQ9oLw?si=LheIH0PB4pMKQfPC" />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/AnKY6wVOjQo?si=UHEsPY3qdBELgOom" />,
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

export default LessonsJs;
