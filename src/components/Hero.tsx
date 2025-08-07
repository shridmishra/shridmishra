"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative  pb-18 lg:pb-24 px-4">
      <div className="max-w-3xl">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-border/30 shadow-sm bg-card">
            <Image
              src="/assets/me.jpg"
              width={96}
              height={96}
              alt="Shrid Mishra"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 pt-2  ">
            <h1 className="text-xl sm:text-2xl font-medium text-primary mb-1">
              Shrid Mishra
            </h1>
            <p className="text-medium text-muted">
              21, He/Him
            </p>
          </div>
        </div>

        {/* Professional Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-base text-secondary">
              Senior Full Stack Engineer & DeFi Architect
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-base text-secondary">
              Mumbai, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-base text-secondary">
              shrid@example.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <span className="text-base text-secondary">
              shrid.dev
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <span className="text-base text-secondary">
              Available for consulting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};