"use client";
import Image from "next/image";
import Link from "next/link";
import BorderFrame from "./ui/BorderFrame";

export const Hero = () => {
  return (
    <section className="relative pt-6 pb-6 lg:pt-12 lg:pb-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-start gap-8 mb-12">

<BorderFrame className="w-32 h-32 flex-shrink-0">
  <Image
    src="/pfp.webp"
    width={128}
    height={128}
    alt="Shrid Mishra"
    className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
    priority
  />
</BorderFrame>


          <div className="flex-1 pt-2">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-3 leading-tight">
              Shrid Mishra
            </h1>
            <p className="text-md sm:text-lg text-muted-foreground/80 font-medium">
              21, He/Him
            </p>
          </div>
        </div>

        {/* Professional Info */}
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl text-muted-foreground font-medium">
              Full Stack & Blockchain Engineer
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-lg text-muted-foreground">
              Mumbai, India
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Link
              href="mailto:shridmishra00@gmail.com"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              shridmishra00@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <Link
              href="https://shrid.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
            >
              shrid.in
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse shadow-sm"></div>
            </div>
            <div className="text-lg text-muted-foreground font-medium">
              Available for projects
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};