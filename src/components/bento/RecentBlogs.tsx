"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Blog {
  title: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Connect Node.js to MongoDB: The Right Way",
    link: "https://medium.com/@shridmishra/connect-node-js-to-mongodb-the-right-way-bb30dc27226e",
  },
  {
    title: "Fullstack Blockchain DApp with Next.js & Anchor",
    link: "https://medium.com/@shridmishra/fullstack-blockchain-dapp-nextjs-anchor-123456",
  },
 
];

export const RecentBlogs = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-md ">
      <h2 className="text-lg mb-3 text-secondary-foreground/90 font-light">Recent Blogs</h2>
      <ul className="space-y-2 font-extralight text-secondary">
        {blogs.map((blog, idx) => (
          <li key={idx}>
            <Link
              href={blog.link}
              target="_blank"
              className="text-secondary hover:underline flex"
            >
              {blog.title} 
              <ArrowUpRight/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
