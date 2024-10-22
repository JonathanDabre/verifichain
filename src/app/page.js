import Advertisement from "@/components/Advertisement";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MiscelleanousData from "@/components/MiscelleanousData";
import Project from "@/components/Project";
import Usp from "@/components/Usp";


export default function Home() {
  return (
    <div className="bg-black">
      <div className="hero">
        <Hero/>
        <MiscelleanousData/>
        <Usp/>
        <Project/>
        <Advertisement/>
      </div>
    </div>
  );
}
