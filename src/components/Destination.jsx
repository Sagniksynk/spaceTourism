import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import DestinationNav from "./DestinationNav";
import data from "../assets/data.json";

// Import AR models
const planetARModels = [
  new URL("../assets/models/earth.glb", import.meta.url).href,
//   new URL("../assets/models/mars.glb", import.meta.url).href,
//   new URL("../assets/models/europa.glb", import.meta.url).href,
//   new URL("../assets/models/titan.glb", import.meta.url).href,
];

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(0);

  const planetUrls = [
    "https://prod.spline.design/bm41d5mKG0VBeCHa/scene.splinecode", // Sun
    "https://prod.spline.design/oNUcWhf4OXTgqHKu/scene.splinecode", // Mercury
    "https://prod.spline.design/gHdKcSx6gAb5oFCM/scene.splinecode", // Venus
    "https://prod.spline.design/IqBmzcCXJlAsz4lP/scene.splinecode", // Earth
    "https://prod.spline.design/CJ4YWQN7V3rHnGsp/scene.splinecode", // Mars
    "https://prod.spline.design/C0PUeEQqghNmB8Do/scene.splinecode", // Jupiter
    "https://prod.spline.design/g2ItcebU0x09DTq9/scene.splinecode", // Saturn
  ];

  return (
    <div className="bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop bg-cover bg-center flex flex-col w-full text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto text-center w-full mt-6 sm:mt-12 md:mt-24">
        <h2 className="text-center sm:text-left font-barlow text-base tracking-[2.7px] sm:text-xl sm:tracking-[3.38px] md:mb-16">
          <span className="font-bold opacity-25 mr-[18px]">01</span>
          PICK YOUR DESTINATION
        </h2>
        <div className="md:flex">
          <Helmet>
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"
            ></script>
          </Helmet>
          <div className="h-[40vh] md:h-[300px] aspect-square mx-auto mt-8 mb-5 sm:my-14">
            <spline-viewer
              key={activeDestination}
              loading-anim-type="none"
              url={planetUrls[activeDestination]}
            ></spline-viewer>
          </div>

          <div className="md:flex md:flex-col md:text-left md:max-w-[450px] md:pr-11">
            <DestinationNav
              destination={activeDestination}
              setdestination={setActiveDestination}
            />
            <div className="max-w-80 sm:max-w-[550px] mx-auto mt-8">
              <div className="sm:col-start-1 sm:col-end-3 border-b-2 border-white/[.25] pb-[49px]">
                <h1 className="font-bellefair text-[56px] sm:text-7xl uppercase">
                  {data.destinations[activeDestination].name}
                </h1>
                <p className="text-[15px] text-center md:text-left px-1 font-barlow text-secondary sm:mt-2 sm:text-base sm:leading-6">
                  {data.destinations[activeDestination].description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-evenly py-7 md:pb-0 md:justify-start md:gap-12">
                <div className="my-8">
                  <h4 className="font-barlow text-secondary tracking-[2.36px] text-sm mb-3">
                    AVG. DISTANCE
                  </h4>
                  <span className="font-bellefair text-[28px] uppercase">
                    {data.destinations[activeDestination].distance}
                  </span>
                </div>
                <div className="my-8">
                  <h4 className="font-barlow text-secondary text-sm tracking-[2.36px] mb-3">
                    EST. TRAVEL TIME (at 58,000 km/h)
                  </h4>
                  <span className="font-bellefair text-[28px] uppercase">
                    {data.destinations[activeDestination].travel}
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
              <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => {
                    const arUrl = planetARModels[activeDestination];
                    window.location.href = `intent://arvr.google.com/scene-viewer/1.0?file=${arUrl}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`;
                  }}
                >
                  View in AR
                </button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
