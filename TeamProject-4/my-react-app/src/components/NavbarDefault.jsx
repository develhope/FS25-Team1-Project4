import React from 'react';
import { Link } from 'react-router-dom';

export function NavbarDefault() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/App">Home</Link>
                </li>
                <li>
                    <Link to="/content">Content</Link>
                </li>
                <li>
                    <Link to="/my-react-app/src/pages/LoginPage.jsx">Login Pages</Link>
                </li>
                <li>Contact</li>
                <li>About us</li>
            </ul>
        </div>
    );
}
