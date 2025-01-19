import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

const Playground = () => {
  return (
    <div className="h-screen w-screen bg-black text-white relative">
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"
        ></script>
      </Helmet>
      
      <Navbar />
     
      <spline-viewer
        url="https://prod.spline.design/EKg9p-Lq4avgz0Hj/scene.splinecode"
        loading-anim-type="none"
        className="absolute top-0 left-0 h-full w-full"
      ></spline-viewer>
    </div>
  );
};

export default Playground;
