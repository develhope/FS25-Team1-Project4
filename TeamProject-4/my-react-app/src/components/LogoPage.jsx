import React from 'react';
import logopng from '../assets/LogoDefinitivo-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function LogoPage() {
    return (
        <div className="logo-page m-12">
            <Link to="/">
                <img
                    src={logopng}
                    alt="Cycodex Logo"
                    className="w-auto h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-64 mt-1"
                    style={{ maxWidth: '80%', height: 'auto' }}
                />
            </Link>
        </div>
    );
}
