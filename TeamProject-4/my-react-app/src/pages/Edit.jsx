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
                <button className="absolute top-0 left-0 flex items-center mt-4 ml-4 text-blue-500 hover:text-blue-700" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                <EditForm />
                {/*FORM PER EDITARE I CONTENUTI*/}
            </div>
        </div>
    );
};

export default Edit;
