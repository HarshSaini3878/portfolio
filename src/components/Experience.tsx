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
   <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 w-screen bg-green-900">
  <div className="w-full md:w-[50%] flex flex-col items-center justify-around bg-green-600 md:m-4">
    <div className="w-full text-2xl md:text-4xl font-bold text-white">
      Work Experience
    </div>
    <div className="flex flex-col items-center justify-around gap-5 mt-3 p-4 flex-grow">
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
            <h2 className="font-semibold text-3xl text-white">
              {experience.role},<span className='text-2xl font-semibold'>&nbsp;{experience.companyName}</span>
            </h2>
            <p className="text-xl font-semibold italic text-white">
              {experience.dateFrom} - {experience.dateTo}
            </p>
            <ul className="my-2 list-disc list-inside text-white">
              {experience.work.map((workItem, i) => (
                <li className="custom-list-item" key={i}>
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
    <div className="w-full text-2xl md:text-4xl font-bold text-white">
      Tech Stack
    </div>
    <div className="flex flex-wrap gap-6 flex-grow items-center justify-center">
      {techStack.map((tech, index) => (
        <motion.div 
        key={index}
          className="text-center"
          initial="hidden"
          ref={inViewRef}
          animate={isElementInView ? "visible" : "hidden"}
          variants={shuffleAnimation}
          style={{ transitionDelay: `${index * 0.1}s` }} // Stagger the animation
        >
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mx-auto flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-14 h-auto" />
          </div>
          <div className="mt-2 font-semibold text-xl"
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
