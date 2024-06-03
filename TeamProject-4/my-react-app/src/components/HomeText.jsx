import React from 'react';
import ButtonStyled from './ButtonStyled';

export default function HomeText() {
    return (
        <div className="helloworld-div p-[5%] w-full md:w-[70%] h-full flex flex-col justify-end">
            <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl 2xl:text-[5rem] break-words mb-[5%] animate-slideInLeft">
                Let's Learn New Course <br /> <span className="inline-block">Gain More Skills</span>
            </h1>
            <span className="text-[#414b54] text-base md:text-lg lg:text-xl 2xl:text-[1.5rem] 2xl:leading-7 max-w-full leading-none tracking-tight animate-slideInLeft">
                Explore Italy’s ground-breaking research and
                <span className="block">education now. Watch this space, as eligible</span>
                <span className="block">courses will continue to be added as they</span>
                <span className="block">become available</span>
            </span>
            <div className="flex gap-4 w-8 animate-slideInLeft">
                <ButtonStyled className="block" route="/login">
                    Login
                </ButtonStyled>
                <ButtonStyled className="block" route="/login">
                    Altro
                </ButtonStyled>
            </div>
            {/* <img src={Cins} alt="" className="absolute top-[8rem] left-[55rem] h-[43rem]" /> */}
        </div>
    );
}
