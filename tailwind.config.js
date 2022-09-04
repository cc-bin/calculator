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
				tertiaryText: "var(--tertiary-text)",
				// Key shadows
				mainKeyShadow: "var(--key-shadow)",
				resetKeyShadow: "var(--reset-key-shadow)",
				submitKeyShadow: "var(--submit-key-shadow)",
			},
			boxShadow: {
				keyShadow: "0px 4px 0px 0px black",
			},
			screens: {
				mobile: "400px",
			},
		},
	},
	plugins: [],
};
