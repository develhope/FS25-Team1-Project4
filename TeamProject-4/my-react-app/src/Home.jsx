import React from 'react';
import HelloWorld from './HelloWorld';
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
