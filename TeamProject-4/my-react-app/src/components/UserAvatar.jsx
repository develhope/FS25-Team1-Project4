import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgAvatarDefault from '../assets/imgAvatarDefault.jpeg';

export default function UserAvatar({ username = 'login', email = 'email@example.com', img = imgAvatarDefault }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const avatarRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && avatarRef.current && !avatarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleClick = (event) => handleClickOutside(event);

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClick);
        } else {
            document.removeEventListener('mousedown', handleClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isMenuOpen]);

    return (
        <div className="relative">
            {isMenuOpen && (
                <div ref={menuRef} className="absolute top-4 right-4 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-10" tabIndex="-1">
                    <div className="flex items-center gap-3 p-4">
                        <div className="h-10 w-10">
                            <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src={img} alt="User Avatar" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-secondary-500">{username}</div>
                        </div>
                    </div>
                    <div className="px-4 py-2 text-gray-600">{email}</div>
                    <div className="border-t border-gray-300"></div>
                    <Link to="/avatar-settings" className="block px-4 py-2 text-blue-600 hover:bg-gray-100" tabIndex="0">
                        Impostazioni
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-red-600 hover:bg-gray-100" tabIndex="0">
                        Logout
                    </Link>
                </div>
            )}
            <div
                id="user-avatar"
                ref={avatarRef}
                className={`fixed cursor-pointer top-4 right-4 flex items-center gap-3 z-20 ${isMenuOpen ? 'hidden' : 'block'}`}
                onClick={toggleMenu}
                tabIndex="0"
            >
                <div className="h-10 w-10">
                    <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src={img} alt="User Avatar" />
                </div>
                <div>
                    <div className="text-sm font-medium text-secondary-500">{username}</div>
                </div>
            </div>
        </div>
    );
}
