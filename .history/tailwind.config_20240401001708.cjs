/** @type {import('tailwindcss').Config} */

/*

Tool: https://uicolors.app/create

#0BAC5E, #246249, #FDDE2E, #FACD34, #2A3179, #1C2C54

'chateau-green': {
        '50': '#effef6',
        '100': '#dafeeb',
        '200': '#b6fcd9',
        '300': '#7ef7bc',
        '400': '#3fe996',
        '500': '#15d277',
        '600': '#0bac5e',
        '700': '#0d884d',
        '800': '#106b40',
        '900': '#0f5837',
        '950': '#02311c',
    },
    
'candlelight': {
        '50': '#fefce8',
        '100': '#fefac3',
        '200': '#fef18a',
        '300': '#fdde2e',
        '400': '#face15',
        '500': '#eab508',
        '600': '#ca8c04',
        '700': '#a16307',
        '800': '#854e0e',
        '900': '#714012',
        '950': '#422106',
    },
    'bay-of-many': {
        '50': '#eef4ff',
        '100': '#e0ebff',
        '200': '#c6d9ff',
        '300': '#a4befd',
        '400': '#809af9',
        '500': '#6177f3',
        '600': '#444fe7',
        '700': '#363dcc',
        '800': '#2f37a4',
        '900': '#2a3179',
        '950': '#1a1c4c',
    },
    
*/
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [],
	},
	theme: {
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		//lightTheme: "senna",
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
