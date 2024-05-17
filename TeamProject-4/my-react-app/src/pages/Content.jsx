import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Card from '../components/Card';
import Icona1 from '../assets/Rct.png';
import Icona2 from '../assets/Exers.png';
import Icona3 from '../assets/AI.png';
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <div>
            <BackgroundImage />
            {/* <NavbarDefault /> */}
            <Link>
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute bottom-[16rem] left-[22rem] transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona2}
                    text="Lessons"
                />
            </Link>
            <Link to="/my-react-app/src/pages/Exercise.jsx">
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona1}
                    text="Exercise"
                ></Card>
            </Link>
            <Link>
                <Card
                    style={
                        'bg-gradient-to-r from-teal-300 to-blue-400 rounded-[2.5rem] p-6 mx-auto absolute bottom-[16rem] right-[8rem] transform -translate-x-1/2 -translate-y-1/2 w-[14rem] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-blue-400 hover:to-teal-300'
                    }
                    imageUrl={Icona3}
                    text="AI Learn"
                ></Card>
            </Link>
        </div>
    );
}
