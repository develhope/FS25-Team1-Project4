import React from 'react';

function Card({ imageUrl, text, style, edit }) {
    return (
        <div className={style}>
            <div className={edit === 1 ? 'flex items-center justify-center h-5' : 'flex items-center justify-center h-21'}>
                <img src={imageUrl} alt="" className={edit ? 'w-[50px] h-[50px]' : 'w-[100px] h-[100px]'} />
            </div>
            <div className={' drop-shadow-xl font-semibold mt-6 text-center text-white text-lg z-10'}>{text}</div>
        </div>
    );
}

export default Card;
