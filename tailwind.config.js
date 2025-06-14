/* eslint-disable no-undef */
// tailwind.config.js
const {
    default: flattenColorPalette,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("tailwindcss/lib/util/flattenColorPalette");


module.exports = {
    darkMode: 'class',
    // darkMode: 'selector',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/preline/dist/*.js',
    ],
    keyframes: {
        gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
        },
    },
    // Custom animation using the keyframes
    animation: {
        gradient: 'gradient 3s ease infinite',
    },
    theme: {
        extend: {

            backgroundImage: {
                'wave-svg': "url('./src/assets/wavebg.svg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

            },
            background: {
                'primary': '-red-400'
            },
            animation: {
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
                move: "move 5s linear infinite",
                bounce200: 'bounce 1s infinite 200ms',
                bounce400: 'bounce 1s infinite 400ms',
                scroll: "scrollX var(--animation-duration) linear infinite var(--animation-direction)",
                'gradient-x': 'gradient-x 6s ease infinite',
                'gradient-y': 'gradient-y 6s ease infinite',
                'gradient-xy': 'gradient-xy 6s ease infinite',

            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'gradient-y': {
                    '0%, 100%': { 'background-position': '50% 0%' },
                    '50%': { 'background-position': '50% 100%' },
                },
                'gradient-xy': {
                    '0%, 100%': { 'background-position': '0% 0%' },
                    '50%': { 'background-position': '100% 100%' },
                },
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                },
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
                scrollX: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" }, // adjust depending on duplication
                },
            },
        },
    },
    // variants: {
    //     extend: {
    //         backgroundColor: ["hover"],
    //     },
    // },
    plugins: [
        addVariablesForColors,
        require('preline/plugin'),

    ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}