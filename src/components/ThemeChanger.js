import React from "react";

const ThemeChanger = ({ theme, setTheme }) => {
	const handleTheme = (e) => {
		switch (e) {
			case "1":
				const darkTheme = { themeId: "1", themeName: "dark-theme" };
				setTheme(darkTheme);
				localStorage.setItem("theme", JSON.stringify(darkTheme));
				break;
			case "2":
				const lightTheme = { themeId: "2", themeName: "light-theme" };
				setTheme(lightTheme);
				localStorage.setItem("theme", JSON.stringify(lightTheme));
				break;
			case "3":
				const purpleTheme = { themeId: "3", themeName: "purple-theme" };
				setTheme(purpleTheme);
				localStorage.setItem("theme", JSON.stringify(purpleTheme));
		}
	};
	return (
		<div>
			<div className='flex justify-around'>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</div>
			<div className='flex'>
				<input
					defaultValue={theme.themeId}
					name='slider'
					type='range'
					min={1}
					max={3}
					step={1}
					onInput={(e) => handleTheme(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ThemeChanger;
