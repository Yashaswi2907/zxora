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
      className="bg-black text-white py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-cyan-400 mb-4">
            Programs
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                bg-white/[0.02]
                backdrop-blur-xl
                border
                border-white/5
                rounded-3xl
                p-10
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
              "
            >

              {/* Glow Effect */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-40
                  h-40
                  bg-cyan-400/10
                  rounded-full
                  blur-3xl
                "
              />

              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                {program.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-8">
                {program.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}