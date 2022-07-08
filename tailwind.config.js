/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: 'Roboto, sans-serif',
            },
        },
    },
    plugins: [],
};
