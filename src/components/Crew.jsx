import React from 'react';
import { useState , useEffect } from 'react';
import Navbar from './Navbar';
import data from '../assets/data.json';
import douglas from '../assets/images/crew/image-douglas-hurley.png';
import anousheh from '../assets/images/crew/image-anousheh-ansari.png';
import mark from '../assets/images/crew/image-mark-shuttleworth.png';
import victor from '../assets/images/crew/image-victor-glover.png';

const Crew = () => {
	const crewImages = [douglas, mark, victor, anousheh];
	const [crew, setcrew] = useState(0);
	const [startX, setStartX] = useState(null);
	const [endX, setEndX] = useState(null);

	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setEndX(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		const deltaX = endX - startX;

		if (deltaX > 90 && crew > 0) {
			setcrew(crew - 1);
		} else if (deltaX < -50 && crew < crewImages.length - 1) {
			setcrew(crew + 1);
		}
	};

	
	const handleArrowKeys = (e) => {
		if (e.key === 'ArrowLeft' && crew > 0) {
			setcrew(crew - 1);
		} else if (e.key === 'ArrowRight' && crew < crewImages.length - 1) {
			setcrew(crew + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleArrowKeys);

		return () => {
			window.removeEventListener('keydown', handleArrowKeys);
		};
	}, [crew]);

	return (
		<div
			className='bg-crewMobile sm:bg-crewTablet md:bg-crewDesktop bg-cover text-white min-h-screen w-full p-6 sm:px-10 md:pl-14 md:pt-10  '
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}>
			<Navbar />
			<main className='grid justify-items-center w-full mt-6 sm:mt-12 md:mt-24 mx-auto'>
				<h2 className='text-center sm:text-left font-barlow text-base tracking-[2.7px] sm:text-xl sm:tracking-[3.38px] md:mb-16'>
					<span className='font-bold opacity-25 mr-[18px]'>02</span>MEET YOUR
					CREW{' '}
				</h2>
				<img
					className='h-[220px] w-full object-contain object-center border-b border-[#383B4B] my-8 '
					src={crewImages[crew]}
					alt=''
				/>
				<div>
					<div className=' '>
						<ul className='flex w-[88px] justify-between mx-auto mb-8'>
							<li
								className={`h-[10px] w-[10px] cursor-pointer bg-white block rounded-full ${
									crew !== 0 ? 'opacity-20' : 'opacity-100'
								}`}
								onClick={() => {
									setcrew(0);
								}}></li>
							<li
								className={`h-[10px] w-[10px] cursor-pointer bg-white block rounded-full ${
									crew !== 1 ? 'opacity-20' : 'opacity-100'
								}`}
								onClick={() => {
									setcrew(1);
								}}></li>
							<li
								className={`h-[10px] w-[10px] cursor-pointer bg-white block rounded-full ${
									crew !== 2 ? 'opacity-20' : 'opacity-100'
								}`}
								onClick={() => {
									setcrew(2);
								}}></li>
							<li
								className={`h-[10px] w-[10px] cursor-pointer bg-white block rounded-full ${
									crew !== 3 ? 'opacity-20' : 'opacity-100'
								}`}
								onClick={() => {
									setcrew(3);
								}}></li>
						</ul>
					</div>
					<div className='text-center space-y-2'>
						<h2 className='text-base opacity-50 font-bellefair text-secondary uppercase'>
							{data.crew[crew].role}
						</h2>
						<h1 className='font-bellefair text-2xl  uppercase'>
							{data.crew[crew].name}
						</h1>
						<p className='text-[15px] text-center md:text-left px-1 font-barlow text-secondary sm:mt-2 sm:text-base sm:leading-6 max-w-72'>
							{data.crew[crew].bio}
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Crew;
