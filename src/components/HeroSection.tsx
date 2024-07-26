"use client";
import React, { useState } from "react";

import { DownloadIcon } from "@chakra-ui/icons";
import { motion, spring } from "framer-motion";
import Lottie from 'lottie-react'
import work from "./work.json"

const HeroSection = () => {

  const handleDownload = () => {
    // Create a link element
    console.log("hello")
    const link = document.createElement("a");

    // Set the href to the file location
    link.href = "/HARSH_SAINI_Resume.pdf"; // Path to your ODF file
    link.download = "/HARSH_SAINI_Resume.pdf"; // Filename for the downloaded file

    // Append the link to the body (it needs to be in the DOM to trigger the download)
    document.body.appendChild(link);

    // Programmatically click the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col md:flex-row h-[100vh] md:h-[90vh] w-[100vw]">
      <div className="h-[50%] md:h-auto w-full md:w-[50%] bg-gray-900 flex flex-col items-center justify-center gap-4 md:gap-8 text-center md:text-left">
        <div className="animate-typing overflow-hidden whitespace-nowrap font-extrabold text-2xl md:text-3xl lg:text-5xl w-[100%] md:w-[90%] text-gray-200 font-robotoMono">
          Hello I'm Harsh Saini
        </div>
        <motion.div 
        className=" text-xl md:text-2xl lg:text-3xl w-[100%] md:w-[90%] text-gray-300 font-inconsolata"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        >
          I am a Passionate Fullstack Developer Experienced in front-end and back-end
          technologies. Dedicated to building dynamic, responsive web
          applications. Let's connect if you'd like to learn more!
        </motion.div>
        <div className="w-[100%] md:w-[90%] flex items-center justify-center md:justify-start">
          <motion.button
            onClick={handleDownload}
            className="flex items-center justify-around gap-3 text-xl md:text-3xl font-semibold rounded-full text-white px-5 py-5 bg-black"
            initial={{ x: -400 }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
          >
            Download CV <DownloadIcon />
          </motion.button>
          
        </div>
      </div>
      <div className="h-[50%] md:h-auto w-full md:w-[50%] bg-gray-900 flex items-center justify-center">
        <motion.div
          className="w-[65%] h-[80%] bg-gray-900 rounded-full overflow-hidden flex items-center justify-center"
          animate={{ y: ["0%", "-4%", "4%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop", // Ensures the animation loops continuously
            ease: "easeInOut", // Smooth easing for a natural bounce effect
          }}
        >
          <Lottie animationData={work}/>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
