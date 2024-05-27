import React from 'react';
import ButtonStyled from './ButtonStyled';

export default function HomeText() {
    return (
        <div className="helloworld-div ">
            <h1 className="absolute top-[20rem] right-[38rem] left-[10rem] text-white font-semibold text-6xl break-before:inline-block">
                Let's Learn New Course <span className="inline-block">Gain More Skills</span>
            </h1>
            <p className="absolute text-[#414b54] text-lg top-[30rem] right-[38rem] left-[10rem] w-full">
                Explore Italy’s ground-breaking research and
                <span className="block">education now. Watch this space, as eligible</span>
                <span className="block">courses will continue to be added as they</span>
                <span className="block">become available</span>
                <ButtonStyled className="block" />
                <ButtonStyled className="block" />
            </p>

            {/* <img src={Cins} alt="" className="absolute top-[8rem] left-[55rem] h-[43rem]" /> */}
        </div>
    );
}
