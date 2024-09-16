
import Image from "next/image";
import { Header } from "@/components/Lamp";
import { Projects } from "@/components/Projects";
import {Intro} from "../components/Intro";
import { Details} from "../components/Details";
export default function Home() {
  return (
  <div className="font-poppins">
    <Intro/>

      <Header className="h-52"/>
      <Projects/>
      <Details/>

  </div>
  );
}
