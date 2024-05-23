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
            className="flex flex-col justify-center bg-bisque w-[600px] h-fit p-4 rounded-md"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/watch?v=TxcJ2drr554`}
                allowFullScreen
            />
            <h2>Title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat.
            </p>
            <div className="flex">
                <ButtonCardLesson text="Demo" />
                <ButtonCardLesson text="Code" />
            </div>
        </animated.div>
    );
}
