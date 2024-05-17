import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonStyled() {
    const navigate = useNavigate();

    return (
        <div className="flex absolute gap-10">
            <button
                className="flex-1 bg-gradient-to-r from-emerald-300 to-cyan-300 drop-shadow-2xl text-[#414b54] text-lg mt-8 py-2 px-10 rounded"
                onClick={() => navigate('/login')}
            >
                Login
            </button>
            <button className="flex-1 bg-gradient-to-r from-emerald-300 to-cyan-300 drop-shadow-2xl text-[#414b54] text-lg mt-8 py-2 px-10 rounded">
                Altro
            </button>
        </div>
    );
}

export default ButtonStyled;
