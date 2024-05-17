import React from 'react';

function Card({ imageUrl, text, style }) {
    return (
        <div className={style}>
            <div className="flex items-center justify-center h-24">
                <img src={imageUrl} alt="" className="w-[100px] h-[100px]" />
            </div>
            <div className="mt-4 text-center text-white text-lg z-10">{text}</div>
        </div>
    );
}

export default Card;
