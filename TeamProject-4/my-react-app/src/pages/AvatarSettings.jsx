import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import imgAvatarDefault from '../assets/imgAvatarDefault.jpeg';

function AvatarSettings() {
    const [user, setUser] = useState({
        username: 'deblewis',
        about: '',
        firstName: '',
        lastName: '',
        url: '',
        company: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div>
            <BackgroundImage />
            <button className="absolute top-0 left-0 flex items-center mt-4 ml-4 text-blue-500 hover:text-blue-700" onClick={() => navigate(-1)}>
                <FaArrowLeft className="mr-2" />
                Back
            </button>
            <div className="absolute container mx-auto p-4 mt-[10rem] right-0 left-0">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 p-4">
                        <nav className="bg-white shadow rounded-lg p-4">
                            <ul>
                                <li className="mb-4">
                                    <a href="#profile" className="text-blue-600">
                                        Profile
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#account" className="text-gray-600">
                                        Account
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#password" className="text-gray-600">
                                        Password
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full md:w-3/4 p-4">
                        <div id="profile" className="bg-white shadow rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-semibold mb-4">Profile</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                                    <img className="w-full h-full object-cover" src={imgAvatarDefault} alt="User avatar" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-600">Username</span>
                                    <div className="text-lg font-medium">workcation.com/{user.username}</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">About</label>
                                <textarea
                                    name="about"
                                    value={user.about}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                    rows="4"
                                />
                                <p className="text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                            </div>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">First name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">URL</label>
                                <input type="text" name="url" value={user.url} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={user.company}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            </div>
                        </div>
                        <div id="privacy" className="bg-white shadow rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">Privacy</h2>
                            <p className="text-gray-600">Ornare eu a volutpat eget vulputate. Fringilla commodo amet.</p>
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-700 mr-2">Available to hire</span>
                                <input type="checkbox" className="toggle-checkbox" />
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvatarSettings;
