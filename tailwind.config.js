/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			screens: {
				DEFAULT: "100%",
				sm: "640px",
				md: "768px",
				lg: "990px",
				xl: "1100px",
				"2xl": "1200px",
			},
			padding: {
				DEFAULT: "0.8rem",
				sm: "2rem",
				md: "4rem",
				lg: "4.5rem",
				xl: "5rem",
				"2xl": "5rem",
			},
		},
		extend: {
			colors: {
				primary: "#0284c7",
				secondary: "#6d28d9",
				dark: "#0c1221",
			},
			fontFamily: {
				hindSiliguri: ["Hind Siliguri", "sans-serif"],
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	plugins: [],
};
