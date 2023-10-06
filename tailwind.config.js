/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'header': '0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}

