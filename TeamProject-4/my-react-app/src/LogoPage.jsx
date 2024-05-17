import React from 'react';
import logopng from './assets/LogoDefinitivo-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function LogoPage() {
    return (
        <div className="logo-page">
            <div className="code-verse">
                <Link to="/">
                    <img src={logopng} alt="" />
                </Link>
                <h1 className="font-bold">CodeVerse</h1>
                <p> Let's build something! </p>
            </div>
        </div>
    );
}
