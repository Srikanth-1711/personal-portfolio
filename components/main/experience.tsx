"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { EXPERIENCE } from "@/constants";
import { getAssetPath } from "@/utils/path";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10 z-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-90 mb-[20px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Career & Background</h1>
      </motion.div>

      <motion.h1
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[36px] md:text-[45px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 text-center"
      >
        Work Experience & Education
      </motion.h1>

      <div className="w-full max-w-[1050px] mt-12 flex flex-col gap-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.period + exp.title}
            variants={slideInFromLeft(index * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-[#2A0E61] bg-[#07021a]/70 backdrop-blur-md hover:border-[#7042F8bb] hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] transition-all duration-300"
          >
            {/* Logo Badge */}
            <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-[#12072b] border border-[#7042f840] p-3 w-fit h-fit shadow-md shadow-purple-900/20 self-start">
              {exp.logos && exp.logos.length > 1 ? (
                <div className="flex items-center gap-2.5">
                  {exp.logos.map((logoUrl, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-[#1a0c3a]/60 p-1.5 border border-[#7042f833]"
                    >
                      <Image
                        src={getAssetPath(logoUrl)}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Image
                    src={getAssetPath(exp.logo)}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Experience Details */}
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#7042f830] text-[#c4a9ff] border border-[#7042f866]">
                      {exp.tag}
                    </span>
                    <span className="text-xs text-gray-400">
                      📍 {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {exp.company}
                  </p>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#030014] border border-[#7042f866] text-xs md:text-sm font-medium text-[#b49bff] self-start whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
                {exp.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] px-2.5 py-1 rounded-md bg-[#160b35] text-gray-300 border border-[#7042f833] hover:border-[#7042f888] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
