"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "100%",
    title: "Personalized Plans",
  },
  {
    number: "24/7",
    title: "Coach Support",
  },
  {
    number: "Weekly",
    title: "Check-ins",
  },
  {
    number: "1:1",
    title: "Coaching",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Why ZxOra
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Results Through
            <br />
            Accountability
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
            Consistency, support, and personalized guidance
            designed to help you achieve sustainable results.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white/[0.02]
                backdrop-blur-xl
                border
                border-white/5
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              "
            >
              <h3
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-cyan-400
                  mb-4
                  drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
                "
              >
                {item.number}
              </h3>

              <p className="text-zinc-400">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}