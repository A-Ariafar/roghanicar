/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.jsx", "./pages/**/*.jsx", "./components/**/*.jsx"],
    theme: {
        fontFamily: {
            sans: "YekanBakh",
        },
        extend: {
            colors: {
                orange: {
                    900: "#FF4800",
                },
            },
            boxShadow: {
                sm: "0px 7px 20px rgba(0, 0, 0, 0.3), 0px 5px 8px rgba(0, 0, 0, 0.3)",
                orange: "0px 7px 15px rgba(255, 74, 0, 0.4)",
            },
        },
    },
    plugins: [],
};
