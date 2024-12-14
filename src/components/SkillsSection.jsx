"use client"

import { Skills } from "./SkillsCloud"
import { SkillsPop } from "./SkillsPop"


export const SkillsSection = ()=> {
    return <div className="h-full lg:flex justify-between pt-10 font-sora">
        <Skills/>
       <div className="text-white text-center my-auto text-3xl font-bold font-sora">Tech Stack</div>
        <SkillsPop/>


    </div>
}