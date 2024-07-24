"use client";
import React, { useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { DownloadIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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
      <div className="h-[50%] md:h-auto w-full md:w-[50%] bg-red-400 flex flex-col items-center justify-center gap-4 md:gap-8 text-center md:text-left">
        <div className="animate-typing overflow-hidden whitespace-nowrap font-extrabold text-2xl md:text-3xl lg:text-5xl w-[100%] md:w-[90%]">
          Hello I'm Harsh saini
        </div>
        <div className=" text-xl md:text-3xl lg:text-4xl w-[100%] md:w-[90%]">
          Passionate Fullstack Developer Experienced in front-end and back-end
          technologies. Dedicated to building dynamic, responsive web
          applications. Let's connect if you'd like to learn more!
        </div>
        <div className="w-[100%] md:w-[90%] flex items-center justify-center md:justify-start">
          <button
            onClick={handleDownload}
            className="flex items-center justify-around gap-3 text-xl md:text-3xl font-semibold rounded-full text-white px-5 py-5 bg-black"
          >
            Download CV <DownloadIcon />
          </button>
          
        </div>
      </div>
      <div className="h-[50%] md:h-auto w-full md:w-[50%] bg-green-500 flex items-center justify-center">
        <motion.div
          className="w-[65%] h-[80%] bg-blue-500 rounded-full overflow-hidden flex items-center justify-center"
          animate={{ y: ["0%", "-4%", "4%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop", // Ensures the animation loops continuously
            ease: "easeInOut", // Smooth easing for a natural bounce effect
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            alt="Description of Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
