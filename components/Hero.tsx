"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="uppercase tracking-[8px] text-gray-400 mb-6">
            Online Fitness Coaching
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Transform Your Body.
            <br />
            Build Your Confidence.
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-xl">
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
                hover:bg-gray-200
                hover:scale-105
                transition-all
                duration-300
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
                border-white/20
                px-8
                py-4
                rounded-full
                hover:border-white
                hover:scale-105
                transition-all
                duration-300
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
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ y: -10 }}
        >

          <Image
            src="/hero-gym.png"
            alt="Fitness Transformation"
            width={450}
            height={650}
            priority
            className="
              rounded-3xl
              object-cover
              border
              border-zinc-800
              shadow-2xl
            "
          />

        </motion.div>

      </div>
    </section>
  );
}