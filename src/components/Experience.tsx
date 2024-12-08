"use client"

import React, { useEffect,useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Experience = () => {
  const controls = useAnimation();
  const shuffleAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300, // Adjust stiffness for bounciness
        damping: 20,    // Adjust damping for smoothness
        duration: 0.5, // Overall duration
        delay: 0.1
      }
    }
  };
 

  const [isElementInView, setIsElementInView] = useState(false);

  const [inViewRef, inView2] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // The percentage of the element that needs to be visible
  });

  useEffect(() => {
    if (inView2) {
      setIsElementInView(true);
    }
  }, [inView2]);

















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
   <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 w-screen bg-gray-900" id='experience'>
  <div className="w-full md:w-[50%] flex flex-col items-center justify-around bg-gray-900 md:m-6">
    <div className="w-full text-3xl md:text-5xl font-bold text-white text-center my-3 font-roboto">
      Work Experience
    </div>
    <div className="flex flex-col items-center justify-around gap-5 mt-3 p-4 flex-grow">
      {workExperience.map((experience, index) => (
        <motion.div
          ref={ref}
          key={index}
          className="flex w-full items-center justify-center my-3 bg-gray-800 rounded-xl p-4"
          initial="hidden"
          animate={controls}
          whileHover="hover"
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="h-full flex items-center justify-center">
            <div className='hidden'>{experience.icon}</div>
          </div>
          <div>
            <h2 className="font-semibold text-3xl text-white font-robotoMono">
              {experience.role},<span className='text-2xl font-semibold font-montserrat'>&nbsp;{experience.companyName}</span>
            </h2>
            <p className="text-xl font-semibold italic text-white font-robotoMono">
              {experience.dateFrom} - {experience.dateTo}
            </p>
            <ul className="my-2 list-disc list-inside text-white">
              {experience.work.map((workItem, i) => (
                <li className="custom-list-item font-inconsolata" key={i}>
                  {workItem}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="w-full md:w-[40%] bg-gray-900 flex flex-col sm:mb-6  md:m-6 ">
    <div className="w-full font-roboto text-3xl md:text-5xl font-bold text-white text-center my-5">
      Tech Stack
    </div>
    <div className="flex flex-wrap gap-6 flex-grow items-center justify-center mt-4">
      {techStack.map((tech, index) => (
        <motion.div 
        key={index}
          className="text-center text-white"
          initial="hidden"
          ref={inViewRef}
          animate={isElementInView ? "visible" : "hidden"}
          variants={shuffleAnimation}
          style={{ transitionDelay: `${index * 0.1}s` }} // Stagger the animation
        >
          <div className="w-32 h-32 rounded-full font-robotoMono overflow-hidden bg-gray-200 mx-auto flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-[3.75rem] h-auto" />
          </div>
          <div className="mt-2 font-robotoMono font-semibold text-xl"
          >{tech.name}</div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Experience;

const workExperience = [
  {
    companyName:"Sponsogram",
    icon: "👨‍💻",
    role: "Full Stack Developer Intern",
    dateFrom: "July 2024",
    dateTo: "August 2024",
    work: [
      "Collaborated with teams on feature development.",
      "Maintained and updated user interface consistently.",
      "Integrated and optimized features for improved performance.",
      "Enhanced website functionality and user interactions."
    ]
    ,
  },
  {
    companyName:"Satzy Software LTD",
    icon: "👨‍💻",
    role: "Web Developer Intern",
    dateFrom: "Feb 2024",
    dateTo: "June 2024",
    work:[
      "Enhanced the main website using Next.js.",
      "Maintained and updated existing UI for consistency.",
      "Collaborated with teams for cohesive web solutions.",
      "Handled vendor registration form, panorama viewer, and PDF APIs."
    ]
    
    ,
  },
  {
    companyName:"Nexspace.tech",
    icon: "👨‍💻",
    role: "Web Developer Intern",
    dateFrom: "Sep 2024",
    dateTo: "Present",
    work:[
     " Rebuilt website from Flask to Next.js framework.",
"Improved efficiency and user experience significantly.",
"Developed AI interview interface for engagement.",
"Optimized performance through modern web technologies."
    ]
    
    ,
  },
];

const techStack = [
  {
    name: "HTML",
    icon: "/assets/html-icon.svg"
  },
  {
    name: "CSS",
    icon: "/assets/css-icon.svg"
  },
  {
    name: "JavaScript",
    icon: "/assets/javascript-programming-language-icon.svg"
  },
  {
    name: "MongoDB",
    icon: "/assets/mongodb-icon.svg"
  },
  {
    name: "TypeScript",
    icon: "/assets/typescript-programming-language-icon.svg"
  },
  {
    name: "React",
    icon: "/assets/react-js-icon.svg"
  },
  {
    name: "Next.js",
    icon: "/assets/nextjs-icon.png"
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tailwind-css-icon.svg"
  },
  {
    name: "Node.js",
    icon: "/assets/node-js-icon.svg"
  },
  
];
