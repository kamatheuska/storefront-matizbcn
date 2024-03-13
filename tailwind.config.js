/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            boxShadow: {
                input: "rgb(18, 18, 18) 0px 0px 0px 2px",
            },
        },
        fontFamily: {
            sans: ["'Work Sans'"],
        },
    },
};
