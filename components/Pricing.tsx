"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Personalized Workout Plan",
  "Customized Nutrition Plan",
  "Weekly Check-ins",
  "Exercise Form Correction",
  "Unlimited Chat Support",
  "Progress Tracking",
  "Program Updates",
  "Lifestyle Optimization",
];

export default function Pricing() {
  return (
    <section className="bg-black text-white py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Premium Coaching
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Everything You Need
            <br />
            To Transform
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="
            relative
            overflow-hidden
            bg-white/[0.02]
            backdrop-blur-xl
            border
            border-cyan-400/15
            rounded-3xl
            p-10 md:p-14
            shadow-[0_0_50px_rgba(34,211,238,0.08)]
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-64
              h-64
              bg-cyan-400/10
              rounded-full
              blur-3xl
            "
          />

          <h3 className="text-4xl font-bold mb-4 tracking-tight">
            Premium Transformation Coaching
          </h3>

          <p className="text-zinc-400 mb-10 text-lg">
            Complete guidance, accountability, and support
            designed around your goals.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="flex items-center gap-3"
              >
                <Check
                  size={22}
                  className="
                    text-cyan-400
                    drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
                  "
                />

                <span className="text-zinc-200">
                  {feature}
                </span>
              </motion.div>
            ))}

          </div>

          <motion.a
            href="https://wa.me/919720229969"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block
              bg-cyan-400
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              shadow-[0_0_40px_rgba(34,211,238,0.35)]
              hover:shadow-[0_0_60px_rgba(34,211,238,0.55)]
              transition-all
              duration-500
            "
          >
            Apply For Coaching
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}