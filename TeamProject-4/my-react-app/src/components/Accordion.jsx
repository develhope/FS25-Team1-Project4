import React, { useState, useEffect } from 'react';

function Accordion({ title, exercises, contentClassName, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        setIsOpen(defaultOpen);
    }, [defaultOpen]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded mb-4 bg-gray-200">
            <div
                className={`flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-100 rounded-[10px] drop-shadow-lg ${contentClassName}`}
                onClick={toggleAccordion}
            >
                <h2 className="font-semibold">{title}</h2>
                <span>
                    {isOpen ? (
                        <svg
                            class="w-6 h-6 text-gray-400 transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6 text-gray-800 transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className="transition duration-300 ease-in-out"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                            />
                        </svg>
                    )}
                </span>
            </div>
            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? '' : 'max-h-0'}`}>
                <div className={`px-4 py-2`}>
                    <ul>
                        {exercises.map((exercise, index) => (
                            <li key={index} className="mb-2">
                                {exercise}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
