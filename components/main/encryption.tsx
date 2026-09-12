"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Intelligence.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-40px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto px-4">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 my-[16px] z-[20] max-w-[750px]">
          <div className="Welcome-box px-[14px] py-[4px] border border-[#7042F88B] bg-[#7042F815] opacity-90">
            <h1 className="Welcome-text text-[12px] font-semibold">AI &amp; ML at Scale</h1>
          </div>
          <div className="Welcome-box px-[14px] py-[4px] border border-[#10b9818b] bg-[#10b98115] opacity-90">
            <span className="text-[12px] font-semibold text-[#34d399]">MLOps &amp; LLMOps</span>
          </div>
          <div className="Welcome-box px-[14px] py-[4px] border border-[#8b5cf68b] bg-[#8b5cf615] opacity-90">
            <span className="text-[12px] font-semibold text-[#c084fc]">Agentic AIOps</span>
          </div>
          <div className="Welcome-box px-[14px] py-[4px] border border-[#049fd98b] bg-[#049fd920] opacity-90">
            <span className="text-[12px] font-semibold text-[#38bdf8] flex items-center gap-1.5">
              <span>🛡️</span> Cisco CCNA Certified
            </span>
          </div>
        </div>

        {/* Cisco CCNA credential preview */}
        <div className="mt-2 hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#08031d99] border border-[#049fd944] backdrop-blur-md hover:border-[#049fd9] transition-colors">
          <Image
            src="/companies/ccna.svg"
            alt="Cisco CCNA Certified"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
          />
          <div className="text-left text-xs border-l border-gray-700 pl-3">
            <div className="font-bold text-white">Enterprise Networking &amp; Security</div>
            <div className="text-gray-400 text-[11px]">Routing, Switching &amp; System Telemetry</div>
          </div>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-6 max-w-[850px] text-center">
        <div className="cursive text-[18px] md:text-[22px] font-medium text-center text-gray-200 leading-relaxed">
          Architecting robust, secure, high-performance AI systems at scale — backed by Cisco CCNA certified enterprise networking &amp; router diagnostics.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
