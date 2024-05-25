import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import HomeText from '../components/HomeText';
import { RandomImgHome } from '../components/RandomImgHome';
import UserAvatar from '../components/UserAvatar';

const img = ['ragazza-europea.png', 'ragazza-latina.png', 'ragazzo-asiatico.png', 'ragazzo-europeo.png'];

export default function Home() {
    return (
        <div className="h-screen relative">
            <BackgroundImage />
            <NavbarDefault />
            <div className="w-full flex absolute h-[80%] bottom-0">
                <HomeText />
                <RandomImgHome img={img} />
            </div>
        </div>
    );
}
