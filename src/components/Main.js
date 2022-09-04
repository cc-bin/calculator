import React from "react";

const Main = () => {
	return (
		<main className='dark-theme w-full h-screen bg-mainBg flex items-center justify-center overflow-y-scroll'>
			{/* Calculator container */}
			<div className=' h-full w-full max-w-lg flex flex-col justify-center p-6 my-auto'>
				{/* Name and theme switch container*/}
				<div className='flex items-center justify-between text-primaryText'>
					<h1 className='text-[32px]'>calc</h1>
					<div className='uppercase text-[14px]'>Theme</div>
				</div>

				{/* Output screen container*/}
				<div className='bg-screenBg text-[40px] text-primaryText text-right px-6 py-4 rounded-lg my-6'>
					<h2>123</h2>
				</div>

				{/* Buttons grid container*/}
				<div className='bg-keypadBg rounded-lg mobile:p-6 p-4 w-full'>
					<div className='grid grid-cols-4 text-[32px] gap-3 md:gap-5 sm:gap-4'>
						<button className='hover:brightness-125 cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg mobile:aspect-auto aspect-square bg-mainKeyBg text-secondaryText'>
							7
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							8
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							9
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-resetKeyShadow rounded-lg before:aspect-square bg-resetKeyBg uppercase text-xl text-white'>
							del
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							4
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							5
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							6
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							+
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							1
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							2
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							3
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							-
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							.
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							0
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							/
						</button>
						<button className='hover:brightness-125 mobile:aspect-auto cursor-pointer shadow-keyShadow shadow-mainKeyShadow rounded-lg aspect-square bg-mainKeyBg text-secondaryText'>
							x
						</button>
						<button className='hover:brightness-125 cursor-pointer shadow-keyShadow shadow-resetKeyShadow rounded-lg py-4 bg-resetKeyBg col-span-2 uppercase text-xl text-white'>
							reset
						</button>
						<button className='hover:brightness-125 cursor-pointer shadow-keyShadow shadow-submitKeyShadow rounded-lg py-4 bg-submitKeyBg col-span-2 text-lg text-tertiaryText'>
							=
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
