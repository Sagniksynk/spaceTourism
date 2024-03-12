import React, { useState, useRef, Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./Navbar";
import DestinationNav from "./DestinationNav";
import data from "../assets/data.json";
import moon from "../assets/images/destination/image-moon.png";
import mars from "../assets/images/destination/image-mars.png";
import europa from "../assets/images/destination/image-europa.png";
import titan from "../assets/images/destination/image-titan.png";

//mars planet
const Mars = () => {
	const gltf = useLoader(GLTFLoader, "./mars.glb");
	const marsRef = useRef();
	useFrame(() => {
		if (marsRef.current) {
			marsRef.current.rotation.y += 0.004;
		}
	});
	const modelProps = {
		position: [0, -4, 0], // x, y, z
		rotation: [0, 0, 0], // x, y, z (in radians)
		scale: [3, 3, 3], // x, y, z
	};

	return <primitive object={gltf.scene} ref={marsRef} {...modelProps} />;
};
//europa planet
const Europa = () => {
	const gltf = useLoader(GLTFLoader, "./europa.glb");
	const europaRef = useRef();
	useFrame(() => {
		if (europaRef.current) {
			europaRef.current.rotation.y += 0.004;
		}
	});
	const modelProps = {
		position: [-2, -2, -2], // x, y, z
		rotation: [0, 0, 0], // x, y, z (in radians)
		scale: [2, 2, 2], // x, y, z
	};

	return (
	<primitive ref={europaRef} object={gltf.scene} {...modelProps} />
	);
};



const Destination = () => {
	const [activeDestination, setactiveDestination] = useState(0);
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
					<div className="h-[170px] sm:h-56 md:h-[300px] aspect-square mx-auto mt-8 mb-5 sm:my-14 flex items-center justify-center">
						<Canvas className="h-full w-full outline">
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							<Suspense fallback={null}>
								<Europa />
							</Suspense>
							<OrbitControls enableZoom={false} />
						</Canvas>
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
										EST. TRAVEL TIME
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
