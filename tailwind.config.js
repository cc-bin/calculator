/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				// Background colors
				mainBg: "var(--bg-main)",
				keypadBg: "var(--bg-keypad)",
				screenBg: "var(--bg-screen)",
				// Key background colors
				mainKeyBg: "var(--key-bg)",
				resetKeyBg: "var(--reset-key-bg)",
				submitKeyBg: "var(--submit-key-bg)",
			},
			colors: {
				// Text Colors
				primaryText: "var(--primary-text)",
				secondaryText: "var(--secondary-text)",
				whiteText: "hsl(0, 0, 100%)",
				// Key shadows
				mainKeyShadow: "var(--key-shadow)",
				resetKeyShadow: "var(--reset-key-shadow)",
				submitKeyShadow: "var(--submit-key-shadow)",
			},
		},
	},
	plugins: [],
};
