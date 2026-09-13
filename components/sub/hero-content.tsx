"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import { getAssetPath } from "@/utils/path";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI &amp; ML Engineer · MLOps · LLMOps · Agentic AIOps
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto leading-tight"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              production AI &amp; ML
            </span>{" "}
            systems at scale.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-5 max-w-[620px] leading-relaxed"
        >
          I&apos;m Lakshmi Srikanth Polavarapu — bridging Deep Learning Engineering, MLOps, LLMOps, AIOps, and AgentOps. Production AI at scale is 60–70% core software engineering and system design, and 30–40% deep math, neural inference, and autonomous agent loops.
        </motion.p>

        <div className="flex flex-wrap items-center gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:scale-105 transition"
            href="#projects"
          >
            Explore my work
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1.1)}
            className="py-2.5 px-6 border border-[#7042f88b] bg-[rgba(3,0,20,0.6)] hover:bg-[#7042f833] text-center text-gray-200 hover:text-white cursor-pointer rounded-lg font-medium transition flex items-center gap-2 hover:scale-105"
            href={getAssetPath("/resume.pdf")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Resume</span>
            <span className="text-purple-400">↗</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={getAssetPath("/hero-bg.svg")}
          alt="AI engineering system diagram"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
