import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgAvatarDefault from '../assets/imgAvatarDefault.jpeg';

export default function UserAvatar({ username = 'login', email = 'email@example.com', img = imgAvatarDefault }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="relative">
            <div id="user-avatar" className="fixed top-4 right-4 flex items-center gap-3" onClick={toggleMenu}>
                <div className="h-10 w-10">
                    <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src={img} alt="" />
                </div>
                <div>
                    <div className="text-sm font-medium text-secondary-500">{username}</div>
                </div>
            </div>

            {isMenuOpen && (
                <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="px-4 py-2 text-gray-800">{username}</div>
                    <div className="px-4 py-2 text-gray-600">{email}</div>
                    <div className="border-t border-gray-300"></div>
                    <Link to="/avatar-settings" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
                        Impostazioni
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
}
