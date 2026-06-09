"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrainingEnvironment() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            Training Environment
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Elite Training Environment
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-8">
            Access professional-grade equipment and an environment
            designed to help you push your limits every day.
          </p>

        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-400/15
            shadow-[0_0_40px_rgba(34,211,238,0.08)]
            transition-all
            duration-700
            hover:border-cyan-400/30
            hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]
          "
        >

          <Image
            src="/cardio.png"
            alt="Training Environment"
            width={1400}
            height={800}
            className="
              w-full
              h-[450px]
              object-cover
              transition-all
              duration-700
              hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Bottom Text */}
          <div className="absolute bottom-8 left-8">

            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Train With Purpose
            </h3>

            <p className="text-zinc-300">
              Premium equipment. Professional atmosphere.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}