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
            content: <CardLesson video="https://www.youtube.com/embed/PpBdz1ehRFE?si=2QIF5_mKnnXsq5zQ" />,
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/JRJNvxoh844?si=PA8kKEWnozDb87y_" />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/TxcJ2drr554?si=qfuKyFDAmrlvYCCf" />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/YwyjQKpW2GM?si=poCNE0w52FqjUnDi" />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/y8EfGG-5s3I?si=Zf820udNWk-EBzqk" />,
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

export default Lessons;
