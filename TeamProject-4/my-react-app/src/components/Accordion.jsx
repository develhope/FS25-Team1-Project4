import React, { useState } from 'react';

function Accordion({ title, exercises }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded mb-4">
            <div className="flex items-center justify-between px-4 py-2 cursor-pointer bg-gray-100 rounded-[10px]" onClick={toggleAccordion}>
                <h2 className="font-semibold">{title}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="px-4 py-2">
                    <ul>
                        {exercises.map((exercise, index) => (
                            <li key={index}>{exercise}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Accordion;
