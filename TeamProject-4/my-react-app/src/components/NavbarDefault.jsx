import React from 'react';
import { Link } from 'react-router-dom';

export function NavbarDefault() {
    return (
        <div className="z-10">
            <ul className='flex'>
                <li className="hover:text-[#034d8f] hover:bg-[#bff3e5] px-3 py-2 rounded-lg transition duration-300 ease-in-out">
                    <Link to="/">
                        <b>Home</b>
                    </Link>
                </li>
                {/* <li className="hover:text-[#034d8f] hover:bg-[#bff3e5] hover:font-bold px-3 py-2 rounded-lg transition duration-300 ease-in-out">
                    <Link to="/my-react-app/src/pages/LoginPage.jsx">Login Pages</Link>
                </li> */}
                <li className="hover:text-[#034d8f] hover:bg-[#bff3e5] hover:font-bold px-3 py-2 rounded-lg transition duration-300 ease-in-out">
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className="hover:text-[#034d8f] hover:bg-[#bff3e5] hover:font-bold px-3 py-2 rounded-lg transition duration-300 ease-in-out">
                    <Link to="/about-us">About us</Link>
                </li>
            </ul>
        </div>
    );
}
