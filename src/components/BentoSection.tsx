"use client"

import React from "react";
import GitHubContributionGraph from "./bento/Github";
import { SkillsCarousel } from "./bento/Skills";
import { RecentBlogs } from "./bento/RecentBlogs";

export default function BentoGrid() {
  const token = process.env.GITHUB_TOKEN;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Top Left */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200 p-6 flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <RecentBlogs/>
        </div>

        {/* Top Right */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200 p-6 flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <SkillsCarousel/>
        </div>

        {/* Bottom Large Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-gray-200 p-6 flex items-center justify-center min-h-[160px] md:min-h-[220px] md:col-span-2">
          <GitHubContributionGraph githubToken={token}/>
        </div>
      </div>
    </div>
  );
}
