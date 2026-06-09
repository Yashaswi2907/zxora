"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/gym-platform.png"
            alt="ZxOra Gym"
            width={600}
            height={700}
            className="
              rounded-3xl
              object-cover
              border
              border-zinc-800
              h-[650px]
              w-full
            "
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[4px] text-cyan-400 mb-4">
            About ZxOra
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            More Than Fitness.
            <br />
            A Complete Transformation.
          </h2>

          <p className="text-gray-400 leading-8 text-lg mb-6">
            At ZxOra, we believe fitness is not just about losing weight
            or building muscle.
          </p>

          <p className="text-gray-400 leading-8 text-lg mb-6">
            Our coaching focuses on discipline, accountability,
            confidence, nutrition, recovery, and long-term habits
            that create lasting results.
          </p>

          <p className="text-gray-400 leading-8 text-lg mb-10">
            Whether your goal is fat loss, muscle gain, or complete
            body recomposition, we provide personalized guidance
            every step of the way.
          </p>

          <div className="grid grid-cols-3 gap-6">

            {[
              { value: "100%", label: "Personalized" },
              { value: "24/7", label: "Support" },
              { value: "1:1", label: "Coaching" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="
                  border
                  border-zinc-800
                  rounded-2xl
                  p-5
                  text-center
                  hover:border-cyan-400/40
                  transition-all
                "
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}