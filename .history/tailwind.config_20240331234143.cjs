/** @type {import('tailwindcss').Config} */

/*
#0BAC5E, #246249, #FDDE2E, #FACD34, #2A3179, #1C2C54
*/
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [ {
			senna: {			
			"primary": "#e8bb20ff",
			"secondary": "#007bff",
			"accent": "#024c35ff",
			"neutral": "#14213d",
			"base-100": "#33232e",
			"info": "#00c6ff",
			"success": "#5df87e",
			"warning": "#a85900",
			"error": "#fe005b",
			},
		},
		],
	},
	theme: {
		"colors": defaultColors + {
            "custom-yellow": {
                "500": "#FDDE2E",
            }
        },
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
