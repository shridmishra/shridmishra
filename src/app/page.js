
import Image from "next/image";
import { Header } from "@/components/Lamp";
import { Projects } from "@/components/Projects";
import {Intro} from "../components/Intro";
import { Details} from "../components/Details";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (
  <div className="font-poppins bg-slate-950">
      <Intro/>
      <Header className="h-52"/>
      <Projects/>
      <Details/>
      <Footer/>

  </div>
  );
}
