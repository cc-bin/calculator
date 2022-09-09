import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
import ThemeChanger from "./ThemeChanger";

const Home = () => {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || {
			themeName: "dark-theme",
			themeId: "1",
		}
	);
	const [result, setResult] = useState("0");
	const [error, setError] = useState("");

	const handleClick = (value) => {
		setError("");
		if (result.length > 37) {
			return;
		}
		if (result.charAt(0) === "0" && value !== "." && result.charAt(1) !== ".") {
			setResult(result.slice(0, -1) + value);
		} else setResult(result + value);
	};

	const backspace = () => {
		if (result.length <= 1) {
			setResult("0");
			return;
		} else setResult(result.slice(0, -1));
	};

	const clear = () => {
		setResult("0");
		setError("");
	};

	function calc(val) {
		return new Function("return " + val)();
	}

	const calculate = () => {
		try {
			if (result.includes("/0")) {
				setResult("0");
				setError("Cannot divide by 0!");
			} else {
				const resultOutput = calc(result);
				setResult(resultOutput.toString());
			}
		} catch (error) {
			if (error.toString().includes("SyntaxError")) {
				setError("Wrong syntax!");
			}
		}
	};

	return (
		<>
			<main
				className={` transition-all duration-200 ease-linear w-full min-h-screen bg-mainBg flex items-center justify-center  ${theme.themeName}`}>
				{/* Calculator container */}
				<div className=' h-full w-full max-w-lg flex flex-col justify-center p-6 my-auto'>
					{/* Name and theme switch container*/}
					<div className='flex items-center justify-between text-primaryText'>
						<h1 className='text-[32px]'>calc</h1>
						<div className='flex justify-between items-end gap-3 sm:gap-6 text-xs sm:text-sm'>
							<h2 className='uppercase font-thin tracking-widest'>Theme</h2>
							{/* Theme slider */}
							<ThemeChanger theme={theme} setTheme={setTheme} />
						</div>
					</div>

					{/* Output screen container*/}
					<Screen result={result} error={error} />

					{/* Buttons grid container*/}
					<div className='bg-keypadBg rounded-lg mobile:p-6 p-4 w-full'>
						<div className='grid grid-cols-4 text-[32px] gap-3 md:gap-5 sm:gap-4'>
							<Button value='7' theme='key' text='7' onClick={handleClick} />
							<Button value='8' theme='key' text='8' onClick={handleClick} />
							<Button value='9' theme='key' text='9' onClick={handleClick} />
							<Button
								value='del'
								theme='deleteKey'
								text='del'
								onClick={backspace}
							/>

							<Button value='4' theme='key' text='4' onClick={handleClick} />
							<Button value='5' theme='key' text='5' onClick={handleClick} />
							<Button value='6' theme='key' text='6' onClick={handleClick} />
							<Button value='+' theme='key' text='+' onClick={handleClick} />

							<Button value='1' theme='key' text='1' onClick={handleClick} />
							<Button value='2' theme='key' text='2' onClick={handleClick} />
							<Button value='3' theme='key' text='3' onClick={handleClick} />
							<Button value='-' theme='key' text='-' onClick={handleClick} />
							<Button value='.' theme='key' text='.' onClick={handleClick} />
							<Button value='0' theme='key' text='0' onClick={handleClick} />
							<Button value='/' theme='key' text='/' onClick={handleClick} />
							<Button value='*' theme='key' text='x' onClick={handleClick} />

							<Button
								value='reset'
								theme='resetKey'
								text='reset'
								onClick={clear}
							/>
							<Button
								value='='
								theme='submitKey'
								text='='
								onClick={calculate}
							/>
						</div>
					</div>
				</div>
			</main>
			<footer
				className={` transition-all duration-200 ease-linear text-primaryText bg-mainBg text-center text-sm ${theme.themeName}`}>
				Challenge by{" "}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noreferrer'>
					Frontend Mentor
				</a>
				. Coded by <a href='https://github.com/Squashim'>Squashim</a>.
			</footer>
		</>
	);
};

export default Home;
