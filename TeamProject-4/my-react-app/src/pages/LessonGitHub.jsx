import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsGitHub = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: <CardLesson video="https://www.youtube.com/embed/NVpwCzeFPD8?si=k487ePBg9fDj5wtn"/>,
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/V5d49WePfqo?si=gaqVHdZXNJaboVNE" />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/BVfAOwISn3w?si=HrQh8LyjCqq1ky6D" />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/IXSNTvJmyp8?si=hP1U8MfN7KGB8djD" />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/LF3-dgRxS_w?si=c1VD-WvAGRTc8qd7" />,
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

export default LessonsGitHub;
