import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonStyled({ route, children }) {
    const navigate = useNavigate();

    return (
        <button
            className="flex-1 bg-gradient-to-r from-emerald-300 to-cyan-300 drop-shadow-2xl text-[#414b54] text-lg mt-8 py-2 px-10 rounded"
            onClick={() => navigate(route)}
        >
            {children}
        </button>
    );
}

export default ButtonStyled;
