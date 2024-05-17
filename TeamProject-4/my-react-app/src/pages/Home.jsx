import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import HomeText from '../components/HomeText';
import { RandomImgHome } from '../components/RandomImgHome';

const img = [
    'https://placehold.co/300x400?text=Hello+World',
    'https://placehold.co/300x400?text=Hello+World2',
    'https://placehold.co/300x400?text=Hello+World3',
    'https://placehold.co/300x400?text=Hello+World4',
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
