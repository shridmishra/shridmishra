"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative mb-16 sm:mb-24">
      <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-card">
        <Image
          src="/assets/me.jpg"
          width={144}
          height={144}
          alt="Shrid Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl sm:text-3xl font-medium mb-1 mt-6 tracking-tight text-foreground">
        Hi, I&apos;m Shrid
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
        21, Mumbai | Full Stack Engineer
      </p>
      <p className="text-muted-foreground max-w-full sm:max-w-2xl leading-relaxed text-base sm:text-lg">
        I&apos;m a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi
        solutions. From writing secure smart contracts to building intuitive Web3 interfaces,
        I turn complex blockchain concepts into user-friendly experiences.
      </p>
    </section>
  );
};
