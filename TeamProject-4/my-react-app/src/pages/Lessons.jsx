import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lessons = () => {
    const navigate = useNavigate();

    return (
        <div>
            <BackgroundImage />
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
                <FaArrowLeft />
            </button>
        </div>
    );
};

export default Lessons;
