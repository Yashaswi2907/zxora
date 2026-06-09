"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Fat Loss",
    description:
      "Lose body fat sustainably while maintaining strength and energy.",
  },
  {
    title: "Muscle Building",
    description:
      "Structured training and nutrition to maximize muscle growth.",
  },
  {
    title: "Body Recomposition",
    description:
      "Build muscle and lose fat simultaneously through strategic coaching.",
  },
  {
    title: "Lifestyle Optimization",
    description:
      "Improve sleep, recovery, stress management, and daily habits.",
  },
];

export default function Transformation() {
  return (
    <section
      id="programs"
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-gray-400 mb-4">
            Programs
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Transformation Programs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-3xl
                p-10
                hover:border-cyan-400/40
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <h3 className="text-3xl font-bold mb-4">
                {program.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}