/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
                robotoMono: ['Roboto Mono', 'monospace'],
            },
            transitionProperty: {
                height: 'height',
            },
            colors: {
                linkedInBlue: '#0077B5',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
    darkMode: 'class',
};
