import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Card from '../components/Card';
import Icona1 from '../assets/Rct.png';
import Icona2 from '../assets/Exers.png';
import Icona3 from '../assets/AI.png';
import Icona4 from '../assets/editIcon.png';
// import imgAvatarDefault from '../assets/imgAvatarDefault.jpeg';

import { Link } from 'react-router-dom';
import UserAvatar from '../components/UserAvatar';

export default function Content() {
    return (
        <div>
            <BackgroundImage />
            {/* <NavbarDefault /> */}
            <div className='content-card-container '>
            <div className='card1'>    
            <Link to="/menu-lessons">
                <Card
                    style={
                         'w-48  bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6  absolute  transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona2}
                    text="Lessons"
                    edit={0}
                />
            </Link>
            </div>
            <div className='card2'>
            <Link to="/exercise">
                <Card
                    style={
                        'w-48  bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona1}
                    text="Exercise"
                    edit={0}
                ></Card>
            </Link>
            </div>
            <div className='card3'>
            <Link>
                <Card
                    style={
                        'w-48  bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona3}
                    text="AI Learn"
                    edit={0}
                ></Card>
            </Link>
            </div>
            <div className='card4'>
            <Link to="/edit">
                <Card
                    style={
                        'w-48  bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute transform -translate-x-1/2 -translate-y-1/2 w-[10rem] transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona4}
                    text="Edit"
                    edit={1}
                ></Card>
            </Link>
            </div>
            </div>
            {/* <UserAvatar username="Login"></UserAvatar> */}
        </div>
    );
}
