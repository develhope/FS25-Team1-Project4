import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import HomeText from '../components/HomeText';
export default function Home() {
    return (
        <div>
            <BackgroundImage />
            <HomeText />
            <NavbarDefault />
        </div>
    );
}
