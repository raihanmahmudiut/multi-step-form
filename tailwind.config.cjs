/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				marineBlue: {
					DEFAULT: "hsl(213, 96%, 18%)",
				},
				purplishBlue: {
					DEFAULT: "hsl(243, 100%, 62%)",
				},
				pastelBlue: {
					DEFAULT: "hsl(228, 100%, 84%)",
				},
				lightBlue: {
					DEFAULT: "hsl(206, 94%, 87%)",
				},
				strawberryRed: {
					DEFAULT: "hsl(354, 84%, 57%)",
				},
				coolGray: {
					DEFAULT: "hsl(231, 11%, 63%)",
				},
				lightGray: {
					DEFAULT: "hsl(229, 24%, 87%)",
				},
				magnolia: {
					DEFAULT: "hsl(217, 100%, 97%)",
				},
				alabaster: {
					DEFAULT: "hsl(231, 100%, 99%)",
				},
				white: {
					DEFAULT: "hsl(0, 0%, 100%)",
				},
			},
			fontFamily: {
				ubuntu: ["Ubuntu", "sans-serif"],
			},
			backgroundImage: {
				desktop: "url('/src/assets/images/bg-sidebar-desktop.svg')",
				mobile: "url('/src/assets/images/bg-sidebar-mobile.svg')",
			},
		},
	},
	plugins: [],
};
