import React from 'react';
import { useState } from 'react';
import data from '../assets/data.json';
import launchVehicleLandscape from '../assets/images/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../assets/images/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/images/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../assets/images/technology/image-space-capsule-portrait.jpg';
import spaceportLandscape from '../assets/images/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../assets/images/technology/image-spaceport-portrait.jpg';
import Navbar from './Navbar';
const Technology = () => {
	const techImages = [
		launchVehicleLandscape,
		spaceportLandscape,
		spaceCapsuleLandscape,
	];
	const techImagesforDesktop = [
		launchVehiclePortrait,
		spaceportPortrait,
		spaceCapsulePortrait,
	];
	const [activeTech, setactiveTech] = useState(0);
	return (
		<div className='bg-techMobile sm:bg-techTablet md:bg-techDesktop bg-cover bg-center bg-no-repeat min-h-screen w-full text-white sm:pb-24 md:pb-0 '>
			<Navbar />
			<h2 className=' text-center sm:text-left font-barlow text-base tracking-[2.7px] sm:text-xl sm:tracking-[3.38px] sm:mt-12 md:mt-24 mb-12 sm:ml-10 md:ml-40 md:mb-0'>
				<span className='font-bold opacity-25 mr-[18px]'>03</span>SPACE LAUNCH
				101
			</h2>
			<main className='space-y-8 sm:space-y-12 md:flex justify-between items-start md:ml-40'>
				<div className='w-full h-[170px] sm:h-[310px] md:size-[450px] flex md:order-2'>
					<img
						className='object-cover w-full object-center md:hidden'
						src={techImages[activeTech]}
						alt=''
					/>
					<img
						className='hidden md:block object-cover w-full object-center '
						src={techImagesforDesktop[activeTech]}
						alt=''
					/>
				</div>
				<ul className='flex justify-center items-center gap-4 md:gap-12 font-bellefair text-base sm:text-2xl md:flex-col'>
					<li
						onClick={() => {
							setactiveTech(0);
						}}
						className={`transition-all duration-200 ease-in-out cursor-pointer size-10 sm:size-14 flex justify-center items-center rounded-full border-2 border-white/25 md:hover:border-white 
          ${activeTech === 0 ? 'bg-white text-primary' : ''}`}>
						1
					</li>
					<li
						onClick={() => {
							setactiveTech(1);
						}}
						className={`transition-all duration-200 ease-in-out cursor-pointer size-10 sm:size-14 flex justify-center items-center rounded-full border-2 border-white/25 md:hover:border-white 
          ${activeTech === 1 ? 'bg-white text-primary' : ''}`}>
						2
					</li>
					<li
						onClick={() => {
							setactiveTech(2);
						}}
						className={`transition-all duration-200 ease-in-out cursor-pointer size-10 sm:size-14 flex justify-center items-center rounded-full border-2 border-white/25 md:hover:border-white 
          ${activeTech === 2 ? 'bg-white text-primary' : ''}`}>
						3
					</li>
				</ul>
				<div className='text-center md:text-left space-y-2 sm:space-y-4 md:space-y-6'>
					<h3 className='text-sm sm:text-base tracking-[2.36px] sm:tracking-[2.7px] opacity-50 font-bellefair text-secondary uppercase'>
						THE TERMINOLOGY ...
					</h3>
					<h1 className='font-bellefair text-4xl sm:text-5xl md:text-[56px] uppercase'>
						{data.technology[activeTech].name}
					</h1>
					<p className='text-[15px] sm:text-base md:text-lg text-center md:text-left px-1 font-barlow text-secondary sm:mt-2 sm:leading-6 max-w-72 sm:max-w-80 md:max-w-96 mx-auto md:mx-0 '>
						{data.technology[activeTech].description}
					</p>
				</div>
			</main>
		</div>
	);
};

export default Technology;
