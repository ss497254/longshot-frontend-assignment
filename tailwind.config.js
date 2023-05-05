/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./public/index.html"],
    theme: {
        extend: {
            fontSize: {
                tiny: "11px",
            },
        },
    },
    plugins: [],
};
