/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
    theme: {
        extend: {
            keyframes: {
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
            animation: {
                slideInLeft: 'slideInLeft 0.7s ease-out',
            },
            scale: {
                200: '2', // Aumenta del 200%
                300: '3', // Aumenta del 300%
                // Puoi aggiungere altre scale personalizzate qui
            },
            transitionProperty: {
                height: 'height',
                spacing: 'margin, padding',
            },
            maxHeight: {
                0: '0',
                200: '200px',
            },
            opacity: {
                0: '0',
                1: '1',
            },
        },
    },
    plugins: [flowbite.plugin()],
};
