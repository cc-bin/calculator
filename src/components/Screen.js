import React from "react";
import { Textfit } from "react-textfit";

const Screen = ({ result, error }) => {
	return (
		<>
			<Textfit
				max={40}
				min={20}
				mode='single'
				className='relative bg-screenBg justify-end text-primaryText h-[92px] text-right px-6 py-4 rounded-lg my-6 flex items-center'>
				<p className='overflow-hidden'>{result}</p>
				<p className='absolute bottom-[-20px] text-xs left-2 opacity-70'>
					{error}
				</p>
			</Textfit>
		</>
	);
};

export default Screen;
