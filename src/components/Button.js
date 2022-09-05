import React from "react";

const Button = ({ value, text, theme, onClick }) => {
	return (
		<button
			value={value}
			onClick={(e) => onClick(e.target.value)}
			className={
				theme === "key"
					? "hover:brightness-125 cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg mobile:aspect-auto aspect-square bg-mainKeyBg text-secondaryText"
					: theme === "resetKey"
					? "hover:brightness-125 cursor-pointer shadow-keyShadow shadow-resetKeyShadow rounded-lg py-4 bg-resetKeyBg col-span-2 uppercase text-xl text-white"
					: theme === "deleteKey"
					? "hover:brightness-125 cursor-pointer shadow-keyShadow shadow-resetKeyShadow rounded-lg  bg-resetKeyBg uppercase text-xl text-white"
					: "hover:brightness-125 cursor-pointer shadow-keyShadow shadow-submitKeyShadow rounded-lg py-4 bg-submitKeyBg col-span-2 text-lg text-tertiaryText"
			}>
			{text}
		</button>
	);
};

export default Button;
