import React from 'react';
import logopng from './assets/LogoDefinitivo-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function LogoPage() {
    return (
        <div className="logo-page">
            <div className="code-verse">
                <img src={logopng} alt="" />
                <h1>CodeVerse</h1>
                <p> Let's build something! </p>
            </div>
        </div>
    );
}
