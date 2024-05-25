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
            <Link to="/my-react-app/src/pages/Lessons.jsx">
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute bottom-[16rem] left-[22rem] transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona2}
                    text="Lessons"
                    edit={0}
                />
            </Link>
            <Link to="/my-react-app/src/pages/Exercise.jsx">
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona1}
                    text="Exercise"
                    edit={0}
                ></Card>
            </Link>
            <Link>
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute bottom-[16rem] right-[8rem] transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona3}
                    text="AI Learn"
                    edit={0}
                ></Card>
            </Link>
            <Link to="/my-react-app/src/pages/Edit.jsx">
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute top-3/4 left-1/2 my-10 transform -translate-x-1/2 -translate-y-1/2 w-[10rem] transition-transform duration-700 ease-in-out transform hover:scale-150 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona4}
                    text="Edit"
                    edit={1}
                ></Card>
            </Link>
            <UserAvatar username="Login"></UserAvatar>
        </div>
    );
}
