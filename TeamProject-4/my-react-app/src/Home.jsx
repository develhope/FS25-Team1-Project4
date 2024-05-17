import React from 'react';
import HelloWorld from './HomeText';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
import HomeText from './HomeText';
export default function Home() {
    return (
        <div>
            <BackgroundImage />
            <HomeText />
            <NavbarDefault />
        </div>
    );
}
