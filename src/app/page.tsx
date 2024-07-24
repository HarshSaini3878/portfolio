import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
export default function Home() {
  return (
   <div className="overflow-clip">
   <Navbar/>
   <HeroSection/>
   <About/>
   <Experience/>
   </div>
  );
}
