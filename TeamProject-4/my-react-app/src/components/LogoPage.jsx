import React from 'react';
import logopng from '../assets/LogoDefinitivo-removebg-preview3.png';
import { Link } from 'react-router-dom';

export default function LogoPage() {
    return (
        <div className="logo-page">
            <Link to="/">
                <img
                    src={logopng}
                    alt="Cycodex Logo"
                    class="logo"
                    style={{  width:'90%', height:'90%'}}
                />
            </Link>
        </div>
    );
}
