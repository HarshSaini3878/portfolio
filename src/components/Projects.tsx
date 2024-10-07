"use client"
import React from "react";
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <div className="my-8 bg-gray-900 " id="projects">
      <div className="text-4xl font-bold text-center w-full text-gray-100 my-3 "> Projects</div>
      <div className="flex flex-wrap items-center justify-center">
        {projects.map((project, index) => (
          <motion.div key={index} className="w-full sm:w-1/2 p-4 flex"
          whileHover={{ scale: 1.02 }} // Scale up to 1.1 times the original size on hover
      transition={{ type: 'spring', stiffness: 300 }}>
            <div className="w-full bg-gray-800 rounded-lg p-4 flex flex-col justify-between h-full">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 sm:h-[200px]"
                style={{ width: "100%", height: "300px" }}
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-200 font-robotoMono">{project.name}</h2>
              <p className="mb-4 text-gray-300 font-montserrat">{project.description}</p>
              <h4 className="text-xl text-gray-200 font-semibold font-robotoMono mb-2">Technologies Used:</h4>
              <ul className="list-disc list-inside mb-4 text-white font-inconsolata">
                {project.technologiesUsed.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="mt-auto text-white font-poppins">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:underline"
                >
                  GitHub
                </a>{" "}
                |
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:underline ml-2"
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center w-full text-2xl font-semibold my-4 text-gray-200">
        ...Many more to come
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    image: "/assets/e-commerce.png",
    name: "E-Commerce App",
    description:
      "Developed a dynamic eCommerce platform using the MERN stack, featuring user authentication, product listings, shopping cart, and secure checkout.",
    technologiesUsed: ["React.js", "MongoDB", "Express.js"],
    githubLink: "https://github.com/HarshSaini3878/e-commerce-app",
    demoLink: "https://youtu.be/0KS34YZwsy8",
  },
  {
    image: "/assets/youtube (2).png",
    name: "Youtube Clone",
    description:
      "Built a YouTube frontend clone using React.js and Rapid API, providing video search, playback, and user interaction features.",
    technologiesUsed: ["React.js", "Api Handling", "Rapid API"],
    githubLink: "https://github.com/HarshSaini3878/youtube2.O",
    demoLink: "https://youtu.be/GoiFgaQ_o2g",
  },
  {
    image: "assets/cryptoArth.png",
    name: "Crypto Arth 💰",
    description:
      "A sleek, responsive web-based wallet with modern gradient, key management (public/private visibility toggle), and integrated secure key storage.",
    technologiesUsed: ["Next.js", "Cryptography", "Javascript"],
    githubLink:
      "https://github.com/HarshSaini3878/web-based-wallet",
    demoLink: "https://web-based-wallet-murex.vercel.app/",
  },
  {
    image: "/assets/music-academy.png",
    name: "Music Academy Frontend",
    description:
      "Created a modern Music Academy frontend using Next.js and Aceternity UI, featuring interactive course listings and seamless user experience.",
    technologiesUsed: ["Next.js", "React.js", "Aceternity ui"],
    githubLink: "https://github.com/HarshSaini3878/nextjs-1st-Project",
    demoLink: "https://youtu.be/ei7aXtzgOD0",
  },
  {
    image: "/assets/quiz.png",
    name: "KBC based Quiz app",
    description:
      "Designed a KBC-style quiz app frontend with React.js, featuring interactive questions, dynamic scoring, and user-friendly navigation for an engaging quiz experience.",
    technologiesUsed: ["React.js", "React hooks", "Javascript"],
    githubLink:
      "https://github.com/HarshSaini3878/kaun-banega-crorepati-quiz-project",
    demoLink: "https://youtu.be/zil7Yd9yleo",
  },
  
];
