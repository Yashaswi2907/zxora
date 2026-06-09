"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center px-6 overflow-hidden"
    >
      {/* Premium Background Glow */}
      <div className="absolute inset-0">

        <div
          className="
            absolute
            top-[-150px]
            left-[-150px]
            w-[500px]
            h-[500px]
            bg-cyan-500/10
            rounded-full
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-150px]
            w-[500px]
            h-[500px]
            bg-cyan-500/10
            rounded-full
            blur-[140px]
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="uppercase tracking-[8px] text-cyan-400 mb-6">
            Online Fitness Coaching
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-8
              tracking-[-0.04em]
            "
          >
            Transform Your Body.
            <br />
            Build Your Confidence.
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-8">
            Get personalized workouts, nutrition guidance,
            weekly accountability, and direct coaching
            designed around your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-cyan-400
                hover:scale-105
                shadow-[0_0_30px_rgba(255,255,255,0.15)]
                hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
                transition-all
                duration-500
                inline-block
                text-center
              "
            >
              Start My Transformation
            </a>

            <a
              href="#services"
              className="
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                px-8
                py-4
                rounded-full
                hover:border-cyan-400/30
                hover:bg-white/[0.05]
                transition-all
                duration-500
                inline-block
                text-center
              "
            >
              Learn More
            </a>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ y: -10 }}
        >

          {/* Cyan Glow Behind Image */}
          <div
            className="
              absolute
              w-[420px]
              h-[420px]
              bg-cyan-500/15
              rounded-full
              blur-[120px]
            "
          />

          <Image
            src="/hero-gym.png"
            alt="Fitness Transformation"
            width={450}
            height={650}
            priority
            className="
              relative
              rounded-3xl
              object-cover
              border
              border-cyan-400/20
              shadow-[0_0_50px_rgba(34,211,238,0.12)]
            "
          />

        </motion.div>

      </div>
    </section>
  );
}