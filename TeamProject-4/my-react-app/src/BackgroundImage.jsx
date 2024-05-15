import React from 'react';
import backgroundImage from './assets/backgroundImage_true.png';
import LoginForm from './components/LoginForm';

export default function BackgroundImage() {
    return (
        <div className="divHeroImage relative">
            <img className="heroImage" src={backgroundImage} />
            {/* <LoginForm className="absolute" /> */}
        </div>
    );
}
