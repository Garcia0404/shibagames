/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'gray-main':'#212121',
				'rose-main':'#AE4FA1',
				'purple-main':'#482A92',
				'yellow-main':'#D49B6A'
			}
		},
	},
	darkmode: 'class',
	plugins: [],
}
