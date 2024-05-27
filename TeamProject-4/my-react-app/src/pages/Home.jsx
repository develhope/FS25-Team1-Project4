import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import HomeText from '../components/HomeText';
import { RandomImgHome } from '../components/RandomImgHome';

const img = ['ragazza-europea.png', 'ragazza-latina.png', 'ragazzo-asiatico.png', 'ragazzo-europeo.png'];

export default function Home() {
    return (
        <div>
            <BackgroundImage />
            <HomeText />
            <NavbarDefault />
            <RandomImgHome img={img} />
        </div>
    );
}
