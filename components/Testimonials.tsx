"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Personalized Coaching",
    description:
      "Every workout and nutrition strategy is tailored to your specific goals.",
  },
  {
    title: "Weekly Accountability",
    description:
      "Stay consistent with regular check-ins, adjustments, and support.",
  },
  {
    title: "Direct Coach Access",
    description:
      "Get answers quickly through WhatsApp support whenever you need help.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            Why Clients Choose ZxOra
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Built For Real Results
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
            A coaching experience focused on long-term progress,
            accountability, and sustainable transformation.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {highlights.map((item, index) => (
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
                relative
                overflow-hidden
                bg-white/[0.02]
                backdrop-blur-xl
                border
                border-white/5
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              "
            >

              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  bg-cyan-400/10
                  rounded-full
                  blur-3xl
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4
                  text-cyan-400
                  tracking-tight
                "
              >
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}