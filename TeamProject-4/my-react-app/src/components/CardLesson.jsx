import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ButtonCardLesson } from './ButtonCardLesson';

export function CardLesson({ video }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        opacity: 1,
        transform: show ? 'scale(1.03)' : 'scale(1)',
        boxShadow: show ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 2px 10px rgb(0 0 0 / 8%)',
    });
    return (
        <animated.div
            className="flex flex-col justify-start bg-gradient-to-b from-[#9DE5DC] to-white w-[600px] h-[600px] p-4 rounded-md items-center"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <iframe
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            <div className='flex flex-col items-center m-4'>
                <h2 className='text-2xl font-semibold py-2'>Title</h2>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat.
                </p>
                <div className="flex">
                    <ButtonCardLesson text="Vai agli esercizi" />
                </div>
            </div>
        </animated.div>
    );
}
