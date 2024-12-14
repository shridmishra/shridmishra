"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

export function Footer() {
  return (
    <div className="flex justify-center items-center flex-col h-auto pt-20 px-4 bg-slate-950 pb-4">
      {/* Footer Header */}
      <div className="flex flex-col items-center md:flex-row md:space-x-2 ">
        <p className="text-slate-100 text-lg md:text-2xl text-center font-light">
          Designed & Developed By
        </p>
        <p className="text-white text-lg md:text-2xl text-center font-bold">
          <LinkPreview
            url="https://www.linkedin.com/in/shridmishra/"
            className="bg-clip-text text-transparent bg-blue-500 hover:from-blue-400 hover:to-slate-100 transition-colors duration-300"
          >
            Shrid Mishra
          </LinkPreview>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex  md:flex-row space-y-6 md:space-y-0 md:space-x-8 mt-5 ">
        {/* LinkedIn */}
        <LinkPreview
          url="https://www.linkedin.com/in/shridmishra/"
          className="font-bold text-white hover:scale-110 transition-transform duration-300"
        >
          <div className="p-3 rounded-full shadow-lg">
            <FaLinkedin className="text-white sm:w-5 sm:h-5 md:w-10 md:h-10" /> {/* Responsive size */}
          </div>
          <span className="sr-only">LinkedIn</span>
        </LinkPreview>

        {/* Instagram */}
        <LinkPreview
          url="https://instagram.com/shridmishra"
          className="font-bold text-white hover:scale-110 transition-transform duration-300"
        >
          <div className="p-3 rounded-full shadow-lg">
            <FaInstagram className="text-white sm:w-5 sm:h-5 md:w-10 md:h-10" /> {/* Responsive size */}
          </div>
          <span className="sr-only">Instagram</span>
        </LinkPreview>

        {/* Twitter */}
        <LinkPreview
          url="https://twitter.com/shridmishra"
          className="font-bold text-white hover:scale-110 transition-transform duration-300"
        >
          <div className="p-3 rounded-full shadow-lg">
            <FaTwitter className="text-white sm:w-5 sm:h-5 md:w-10 md:h-10" /> {/* Responsive size */}
          </div>
          <span className="sr-only">Twitter</span>
        </LinkPreview>

        {/* GitHub */}
        <LinkPreview
          url="https://github.com/shridmishra"
          className="font-bold text-white hover:scale-110 transition-transform duration-300"
        >
          <div className="p-3 rounded-full shadow-lg">
            <FaGithub className="text-white sm:w-5 sm:h-5 md:w-10 md:h-10" /> {/* Responsive size */}
          </div>
          <span className="sr-only">GitHub</span>
        </LinkPreview>
      </div>
    </div>
  );
}
