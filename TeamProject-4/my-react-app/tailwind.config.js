/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
    plugins: [],
};
