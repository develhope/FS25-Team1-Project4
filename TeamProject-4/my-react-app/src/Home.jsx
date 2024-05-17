import React from 'react';
import HelloWorld from './HomeText';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
export default function Home() {
    return (
        <div>
            <BackgroundImage />
            <HelloWorld />
            <NavbarDefault />
        </div>
    );
}
