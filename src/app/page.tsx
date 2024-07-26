import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home() {
  return (
   <div className="overflow-clip bg-gray-900">
   <Navbar/>
   <HeroSection/>
   <About/>
   <Experience/>
   <Projects/>
   <Footer/>
   </div>
  );
}
