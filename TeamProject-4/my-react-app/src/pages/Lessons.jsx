import React from 'react';
import VerticalCarousel from '../components/VerticalCarousel.jsx';
import BackgroundImage from '../components/BackgroundImage';

const videoLessons = [
    { src: '../utils/VideoProva.mp4', title: 'Lesson 1' },
    // { src: '/path/to/video2.mp4', title: 'Lesson 2' },
    // { src: '/path/to/video3.mp4', title: 'Lesson 3' },
];

const Lessons = () => {
    return (
        <div>
            <BackgroundImage />
            <div className="lessons-page">
                <h1 className="page-title">Lessons</h1>
                <VerticalCarousel videos={videoLessons} />
            </div>
        </div>
    );
};

export default Lessons;
