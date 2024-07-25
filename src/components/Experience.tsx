"use client"

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-screen bg-green-900">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-around bg-green-600 m-4">
        <div className="w-full text-2xl md:text-4xl font-bold text-white">
          Work Experience{" "}
        </div>
        <div className="flex items-center justify-around flex-col gap-5 mt-3 p-4">
          {" "}
          {workExperience.map((experience, index) => (
            <motion.div
            ref={ref}
            key={index}
            className="flex w-full items-center justify-center my-3 bg-gray-900 rounded-xl p-4"
            initial="hidden"
            animate={controls}
            whileHover="hover"
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-full flex items-center justify-center">
                <div>{experience.icon}</div>
              </div>
              <div>
                {" "}
                <h2 className="font-semibold text-3xl text-white">
                  {" "}
                  {experience.role},<span className='text-2xl font-semibold'>&nbsp;{experience.companyName}</span>
                </h2>
                <p className="text-xl font-semibold italic text-white">
                  {experience.dateFrom} - {experience.dateTo}
                </p>
                <ul className="my-2 list-disc list-inside text-white ">
                  {experience.work.map((workItem, i) => (
                    <li className="custom-list-item " key={i}>
                      {workItem}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[40%] bg-green-600 flex flex-col m-4">
        <div className="w-full text-2xl md:text-4xl font-bold text-white ">
          {" "}
          Tech Stack
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;

const workExperience = [
  {
    companyName:"Google",
    icon: "👨‍💻",
    role: "Frontend Developer Intern",
    dateFrom: "March 2024",
    dateTo: "June 2024",
    work: [
      "Developed and maintained the frontend of the main website using React.js.",
      "Created interactive forms and 3D elements for various pages.",
      "Collaborated with mentors and the team to implement new features in the app.",
      "Enhanced user experience through responsive design and dynamic elements.",
    ],
  },
  {
    companyName:"Microsoft",
    icon: "👨‍💻",
    role: "Backend Developer",
    dateFrom: "July 2024",
    dateTo: "Present",
    work: [
      "Implemented authentication and authorization using JWT tokens.",
      "Integrated MongoDB for secure data storage and retrieval.",
      "Worked on backend APIs to support frontend features in an eCommerce application.",
      "Optimized database queries and server performance.",
    ],
  },
];
