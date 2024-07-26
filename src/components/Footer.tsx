"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className="w-screen min-h-40 flex justify-around gap-10 lg:gap-0 items-center p-10 flex-col md:flex-col lg:flex-row bg-gray-900" id="contact"> 
      <div className="flex text-4xl md:text-4xl lg:text-6xl font-bold tracking-wide text-center text-white">
        <span>Get in Touch</span>
        <motion.span
         ref={ref}
      initial={{ y: 200 ,x:-400 }} // Start position (off-screen top)
      animate={isInView ? { y: 0, x: 0 } : { y: 200, x: -400 }}// End position (on-screen)
      transition={{ type: 'spring', stiffness: 20, damping: 4 }}
      
      // Animation properties
      
    >
      

<FontAwesomeIcon className="pb-5 pl-3" size="xs" icon={faPaperPlane} style={{color: "#ffffff",}} />

    </motion.span>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <div className="text-center flex items-center justify-between w-[95vw] md:w-[25rem] gap-4 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src={link.icon} alt={link.name} className="w-11 h-auto" />
              </div>
              <div className="text-2xl tracking-wider font-semibold">
                {link.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

const socialLinks = [
  {
    name: "Github/HarshSaini",
    icon: "/assets/github-icon.svg",
    href: "https://github.com/HarshSaini3878",
  },
  {
    name: "Linkedin/HarshSaini",
    icon: "/assets/linkedin-48.png",
    href: "https://www.linkedin.com/in/harsh-saini-2a2959256/",
  },
  {
    name: "twitter/HarshSaini",
    icon: "/assets/twitterx-50.png",
    href: "https://x.com/HarshSaini3878",
  },

  // Add more social links as needed
];
