"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen min-h-40 flex justify-around gap-10 lg:gap-0 items-center p-10 flex-col md:flex-col lg:flex-row">
      <div className="flex text-4xl md:text-4xl lg:text-6xl font-bold tracking-wide text-center">
        <span>Get in Touch</span>
        <span><Image src="/assets/send.png" height={35} width={35} alt="send"/></span>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <div className="text-center flex items-center justify-between w-[25rem] gap-4 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
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
    name: "Github.com/HarshSaini",
    icon: "/assets/github-icon.svg",
    href: "https://github.com/HarshSaini3878",
  },
  {
    name: "Linkedin/Harsh-Saini",
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
