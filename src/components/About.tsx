"use client";
import React from "react";
import { motion } from "framer-motion";
import { SlGraph } from "react-icons/sl";
import { HiLightBulb } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="w-screen bg-gray-900 flex items-center justify-center" id="about">
      <div className="lg:w-[90%] md:w-full md:h-full bg-gray-950 rounded-lg p-4 m-8 gap-5 flex flex-col items-center justify-center ">
        <div className="text-5xl w-full text-white mt-3 font-bold tracking-wider font-robotoMono">About</div>

        {data.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            key={index}
            className="w-full font-semibold mx-3 bg-gray-300 flex gap-6 py-3 px-2 mb-5 min-h-40 md:min-h-36  rounded-lg font-inconsolata"
          >
            <div className="w-[10%] md:flex items-center justify-center hidden   ">
              {" "}
              {/* <img
                src={item.icon}
                alt={`${item.heading} icon`}
                className="item-icon"
              /> */}
              {item.icon}
            </div>
            <div className="flex flex-col items-center justify-center ">
              <h2 className="text-3xl w-full pb-2 font-bold">{item.heading}</h2>
              <p className="text-xl">{item.text}</p>
            </div>
            <motion.div
        className="card-overlay"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
          </motion.div>
          
        ))}
      </div>
    </div>
  );
};

export default About;

const data = [
  {
    heading: "Introduction",
    text: "Hello! I’m Harsh Saini, currently pursuing  B.Tech in Computer Science from DTU. I have a deep passion for web development, problem-solving, and programming in C++. I thrive on creating innovative solutions and exploring new technologies in the realm of web development.",
icon: <LiaChalkboardTeacherSolid size={"4em"}/>,
  },
  {
    heading: "Skills & Technologies",
    text: "I specialize in the MERN stack. Currently, I am expanding my expertise by learning Next.js and TypeScript. My technical skills also encompass a variety of programming languages, frameworks, and tools that support my passion for building dynamic and efficient web applications.",
    icon: <HiLightBulb size={"4em"}/>,
  },
 
  {
    heading: "Aspirations",
    text: "I am driven by a desire to continuously evolve as a developer and to tackle challenging projects that push the boundaries of technology. My goal is to contribute to innovative solutions and to stay at the forefront of emerging trends in web development. I am eager to deepen my expertise in full-stack development and to make meaningful contributions to impactful projects.",
    icon: <SlGraph size={"4em"}/>,
  },
];
