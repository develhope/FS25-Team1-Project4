import React, { useEffect, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsHtml = () => {
    const navigate = useNavigate();
    const [lesson, setLesson] = useState([])

    async function fetchLesson() {
        try {
            const response = await fetch('http://localhost:3001/lessons')
            const data = await response.json()

            console.log(data)

            const filteredData = data.filter(les => les.topic === 'HTML')

            console.log(filteredData)

            setLesson(filteredData)
        } catch (error) {
            console.error({msg: 'Bad request'})
        }
    }

    useEffect(() => {
        fetchLesson()
    }, [])

    let cards = lesson.map((lessonItem) => ({
        key: lessonItem.id, 
        content: (
            <CardLesson
                video={lessonItem.video}
                title={lessonItem.title}
                text={lessonItem.description}
            />
        ),
    }));


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

export default LessonsHtml;
