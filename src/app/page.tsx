import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
export default function Home() {
  return (
   <div className="overflow-clip">
   <Navbar/>
   <HeroSection/>
   <About/>
   </div>
  );
}
