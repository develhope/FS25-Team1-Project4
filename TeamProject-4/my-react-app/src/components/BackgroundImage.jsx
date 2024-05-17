import React from 'react';
import backgroundImage from '../assets/backgroundImage_true.png';

export default function BackgroundImage() {
    return (
        <div className="divHeroImage relative">
            <img className="heroImage" src={backgroundImage} />
            {/* <LoginForm className="absolute" /> */}
        </div>
    );
}
