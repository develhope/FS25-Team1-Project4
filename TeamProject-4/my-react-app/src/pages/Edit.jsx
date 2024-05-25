// src/pages/Edit.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BackgroundImage from '../components/BackgroundImage';
import EditForm from '../components/EditForm';

const Edit = () => {
    const navigate = useNavigate();

    return (
        <div>
            <BackgroundImage />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                    <FaArrowLeft />
                </button>
                <EditForm />
                {/*FORM PER EDITARE I CONTENUTI*/}
            </div>
        </div>
    );
};

export default Edit;
