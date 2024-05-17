import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import HomeText from '../components/HomeText';
import { RandomImgHome } from '../components/RandomImgHome';

const img = [
    'ragazzo-africano.png',
    'ragazzo-asiatico.png',
    'ragazzo-europeo.png',
    'ragazzo-asiatico2.png',
    'ragazza-asiatica.png',
]

export default function Home() {
    return (
        <div>
            <BackgroundImage />
            <HomeText />
            <NavbarDefault />
            <RandomImgHome img={img}/>
        </div>
    );
}
