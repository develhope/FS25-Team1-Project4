import React from 'react';
import Cins from './assets/ProvaHomeCinex.png';

export default function HomeText() {
    return (
        <div className="helloworld-div ">
            <h1 className="absolute top-[20rem] right-[38rem] left-[10rem] text-white font-semibold text-6xl">
                Let's Learn New Course Gain More Skills
            </h1>
            <p className="absolute text-[#414b54] text-lg top-[30rem] right-[38rem] left-[10rem]">
                Explore Italy’s ground-breaking research and education now. Watch this space, as eligible courses will continue to be added as they
                become available
            </p>
            <img src={Cins} alt="" className="absolute top-[8rem] left-[52rem] h-[40rem]" />
        </div>
    );
}
