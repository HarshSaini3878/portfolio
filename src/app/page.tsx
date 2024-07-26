"use client"
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import JugglingBallLoader from '@/components/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or animation preparation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time according to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-clip bg-gray-900">
      {loading ? (
        <JugglingBallLoader/>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}
