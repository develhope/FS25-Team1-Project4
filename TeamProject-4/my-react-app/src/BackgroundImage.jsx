import React from 'react';
import backgroundImage from './assets/backgroundImage_true.png';

export default function BackgroundImage() {
    return (
        <div className="divHeroImage">
            <img className="heroImage" src={backgroundImage} />
        </div>
    );
}
