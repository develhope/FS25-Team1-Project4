import React from 'react';
import backgroundImage from '../assets/backgroundImage_true.png';

export default function BackgroundImage() {
    return (
        <div className="fixed inset-0 z-0">
            <img className="w-full h-full object-cover" src={backgroundImage} />
        </div>
    );
}
