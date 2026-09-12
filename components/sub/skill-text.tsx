"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-90"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          ML Engineering · MLOps · LLMOps · AgentOps
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] md:text-[34px] text-white font-medium mt-[12px] text-center mb-[10px]"
      >
        Orchestrating Deep Learning, LLMOps &amp; Autonomous Agents
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[18px] md:text-[20px] text-gray-300 mb-10 mt-[8px] text-center max-w-[800px]"
      >
        From token-level linear algebra to enterprise AIOps and distributed GPU serving.
      </motion.div>
    </div>
  );
};
