import React, { useState, useRef, Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import DestinationNav from "./DestinationNav";
import data from "../assets/data.json";
import moon from "../assets/images/destination/image-moon.png";
import mars from "../assets/images/destination/image-mars.png";
import europa from "../assets/images/destination/image-europa.png";
import titan from "../assets/images/destination/image-titan.png";

const Destination = () => {

	const [activeDestination, setactiveDestination] = useState(0);
	const planetUrls = [
		"https://prod.spline.design/bm41d5mKG0VBeCHa/scene.splinecode",//sun
		"https://prod.spline.design/oNUcWhf4OXTgqHKu/scene.splinecode",//mercury
		"https://prod.spline.design/gHdKcSx6gAb5oFCM/scene.splinecode",//venus
		"https://prod.spline.design/IqBmzcCXJlAsz4lP/scene.splinecode",//earth
		"https://prod.spline.design/CJ4YWQN7V3rHnGsp/scene.splinecode",//mars
		"https://prod.spline.design/C0PUeEQqghNmB8Do/scene.splinecode",
		"https://prod.spline.design/g2ItcebU0x09DTq9/scene.splinecode",
	];
	//[mooon , mars , euroopa , titan]
	const pics = [moon, mars, europa, titan];
	return (
		<div className="bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop bg-cover bg-center flex flex-col  w-full text-white min-h-screen">
			<Navbar />
			<main className=" container mx-auto text-center w-full mt-6 sm:mt-12 md:mt-24">
				<h2 className=" text-center sm:text-left font-barlow text-base tracking-[2.7px] sm:text-xl sm:tracking-[3.38px] md:mb-16">
					<span className="font-bold opacity-25 mr-[18px]">01</span>
					PICK YOUR DESTINATION
				</h2>
				<div className="md:flex">
					{/* <img
						className=' rotator h-[170px] sm:h-56 md:h-[300px] aspect-square mx-auto mt-8 mb-5 sm:my-14'
						src={pics[activeDestination]}
						alt=''
					/> */}
					<Helmet>
						<script
							type="module"
							src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"
						></script>
					</Helmet>
					<div className=" h-[40vh] md:h-[300px] aspect-square mx-auto mt-8 mb-5 sm:my-14">
						<spline-viewer
							key={activeDestination}
							loading-anim-type="none"
							url={planetUrls[activeDestination]}
						></spline-viewer>
					</div>

					<div className=" md:flex md:flex-col md:text-left md:max-w-[450px] md:pr-11">
						<DestinationNav
							destination={activeDestination}
							setdestination={setactiveDestination}
						/>
						<div className=" max-w-80 sm:max-w-[550px] mx-auto mt-8">
							<div className="sm:col-start-1 sm:col-end-3 border-b-2 border-white/[.25] pb-[49px]">
								<h1 className="font-bellefair text-[56px] sm:text-7xl  uppercase">
									{data.destinations[activeDestination].name}
								</h1>
								<p className="text-[15px] text-center md:text-left px-1 font-barlow text-secondary sm:mt-2 sm:text-base sm:leading-6 ">
									{
										data.destinations[activeDestination]
											.description
									}
								</p>
							</div>
							<div className="flex flex-col sm:flex-row justify-evenly py-7 md:pb-0 md:justify-start md:gap-12">
								<div className="my-8 ">
									<h4 className="font-barlow text-secondary tracking-[2.36px] text-sm mb-3">
										AVG. DISTANCE
									</h4>
									<span className="font-bellefair text-[28px] uppercase">
										{
											data.destinations[activeDestination]
												.distance
										}
									</span>
								</div>
								<div className="my-8">
									<h4 className="font-barlow text-secondary text-sm tracking-[2.36px] mb-3">
										EST. TRAVEL TIME (at 58,000 km/h)
									</h4>
									<span className="font-bellefair text-[28px] uppercase">
										{
											data.destinations[activeDestination]
												.travel
										}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Destination;
