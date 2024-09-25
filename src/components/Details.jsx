import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Details() {
  const data = [
    
    {
      title: "Crypto Wallet",
      content: (
        <div className="flex flex-wrap">
        <div className="text-white text-lg md:text-lg font-normal mb-8 font-poppins">
          <strong>Purpose:</strong> A wallet for Crypto currencies. <br />
           <strong>Tech Stack: </strong>   Next.js, Tailwind CSS. <br />
            <strong>Features: </strong> Generate mnemonics, add ETH & SOL wallets.
         
            </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/crypto2.png" // Updated path
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          {/* Repeat for other images if needed */}
        </div>
      </div>
      ),
    },
    {
      title: "Sgsits Notes",
      content: (
        <div className="flex flex-wrap">
        <div className="text-white text-lg md:text-lg font-normal mb-8 font-poppins">
          <strong>Purpose:</strong>  Note-sharing platform for college students. <br />
           <strong>Tech Stack: </strong>   Next.js, Tailwind CSS. <br />
            <strong>Features: </strong> Upload, browse, and download notes.
         
            </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/gsnotes2.png" // Updated path
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          {/* Repeat for other images if needed */}
        </div>
      </div>
      ),
    },
    {
      title: "Zerodha",
      content: (
        <div className="flex flex-wrap">
        <div className="text-white text-lg md:text-lg font-normal mb-8 font-poppins">
          <strong>Purpose:</strong> A basic landing page. <br />
           <strong>Tech Stack: </strong> HTML, CSS, JavaScript. <br />
            <strong>Features: </strong> Responsive in all views.
         
            </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/zerodha2.png" // Updated path
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          {/* Repeat for other images if needed */}
        </div>
      </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-slate-950">
      <Timeline data={data} />
    </div>
  );
}
