"use client";
import React from "react";
import Link from "next/link";

interface Blog {
  title: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Intro to Solana Token Program with Anchor",
    link: "https://medium.com/@shridmishra/intro-to-solana-token-program-with-anchor-123456",
  },
  {
    title: "Fullstack Blockchain DApp with Next.js & Anchor",
    link: "https://medium.com/@shridmishra/fullstack-blockchain-dapp-nextjs-anchor-123456",
  },
 
];

export const RecentBlogs = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-md border-2">
      <h2 className="text-lg  mb-3  font-light">Recent Blogs</h2>
      <ul className="space-y-2 font-extralight">
        {blogs.map((blog, idx) => (
          <li key={idx}>
            <Link
              href={blog.link}
              target="_blank"
              className="text-primary hover:underline "
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
