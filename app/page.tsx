import React from 'react';
import { Twitter, Github, ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

const PortfolioPage = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden font-sans antialiased"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Subtle Grid Background */}
      <div className=" inset-0 pointer-events-none z-0 opacity-100 hidden sm:block fixed">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-80 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">
        {/* Profile Section */}
        <section className="relative mb-16 sm:mb-24">
          {/* Image & Icons Wrapper */}
          <div className="flex items-start justify-between w-full mb-4 lg:flex-row sm:flex-col  sm:mb-6">
            {/* Profile Image */}
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border border-[var(--card-border)] shadow-lg">
              <Image
                src="/assets/me.jpg"
                width={144}
                height={144}
                alt="Shrid Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Icons */}
            <div className="flex items-center  gap-3 ">
              {[
                { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourprofile' },
                { Icon: Github, label: 'GitHub', href: 'https://github.com/yourprofile' },
                { Icon: ExternalLink, label: 'Portfolio', href: 'https://yourportfolio.com' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full hover:bg-[var(--hover-background)] transition-transform transform hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl font-medium mb-1 mt-6 tracking-tight text-[var(--text-primary)]">
            Hi, I&apos;m Shrid
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-4 sm:mb-6 ">
            21, Mumbai | Full Stack Engineer
          </p>

          {/* Bio */}
          <p className="text-[var(--text-secondary)] max-w-full sm:max-w-2xl leading-relaxed text-base sm:text-lg">
            I&apos;m a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-t border-[var(--card-border)] opacity-30 mb-10 sm:mb-2" />

        {/* Experience Section */}
        <section className="mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-blue-400 mb-3 sm:mb-4">Experience</h2>
          <p className="text-[var(--text-muted)] mb-6 sm:mb-8 text-base sm:text-lg max-w-full sm:max-w-2xl">
            A snapshot of my professional journey, highlighting key roles and achievements in blockchain and full-stack development.
          </p>

          {/* Experience Card */}
          <div className="bg-[var(--card-background)] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[var(--card-border)] shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex-shrink-0">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                    Full-Stack Blockchain Engineer
                  </h3>
                  <span className="px-3 py-1 bg-gray-700/30 text-gray-300 text-xs sm:text-sm rounded-lg font-medium border border-gray-600/20">
                    Wildcard
                  </span>
                </div>

                <p className="text-blue-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">June 2024 – Present</p>

                <p className="text-[var(--text-muted)] mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  Leading development of smart wallet infrastructure, on-chain permission modules, and intuitive dApp frontends.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['Rust', 'Solana', 'EVM', 'Next.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-700/20 text-xs sm:text-sm rounded-full border border-gray-600/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
