
import Image from "next/image";
import { Projects } from "@/components/Projects";
import {Intro} from "../components/Intro";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (
  <div className="font-poppins bg-slate-950 lg:px-20">
      <Intro/>
    
      <Projects/>
     
      <Footer/>

  </div>
  );
}
