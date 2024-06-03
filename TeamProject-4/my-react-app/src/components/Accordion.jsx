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
                <span>{isOpen ? '-' : '+'}</span>
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
