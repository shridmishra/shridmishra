
import Image from "next/image";
import { Header } from "@/components/Lamp";
import { Projects } from "@/components/Projects";



export default function Home() {
  return (
  <div className="font-poppins">
      <Header/>
      <Projects/>
  </div>
  );
}
