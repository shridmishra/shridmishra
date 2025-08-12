"use client"

import React from "react";
import GitHubContributionGraph from "./bento/Github";
import { SkillsCarousel } from "./bento/Skills";
import { RecentBlogs } from "./bento/RecentBlogs";

export default function BentoGrid() {


  return (
    <div className="w-full max-w-3xl  mx-auto px-4 pt-12">
       <div className="text-muted py-6 flex">still not sure? Check out my  <a
              href={"https://github.com/shridmishra"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/50 transition-colors flex px-1"
            >
              
              Github
            </a>&<span className="text-foreground px-1">Blogs</span>.</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {/* Top Left */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200  flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <RecentBlogs/>
        </div>

        {/* Top Right */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200  flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <SkillsCarousel/>
        </div>

        {/* Bottom Large Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-gray-200  md:flex items-center justify-center min-h-[160px] md:min-h-[220px] md:col-span-2 hidden ">
          <GitHubContributionGraph />
        </div>
      </div>
    </div>
  );
}
