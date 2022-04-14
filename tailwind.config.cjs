const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'xs': '512px',
			...defaultTheme.screens
		}
	},
	plugins: [],
}


// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8,0,1,1);
//   }
//   50% {
//     transform: none;
//     animation-timing-function: cubic-bezier(0,0,0.2,1);
//   }