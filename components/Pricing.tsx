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
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Premium Coaching
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Everything You Need
            <br />
            To Transform
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.01,
          }}
          className="
            bg-gradient-to-br
            from-cyan-500/10
            to-white/5
            border
            border-cyan-400/20
            rounded-3xl
            p-10
            shadow-[0_0_40px_rgba(34,211,238,0.08)]
          "
        >
          <h3 className="text-4xl font-bold mb-4">
            Premium Transformation Coaching
          </h3>

          <p className="text-gray-400 mb-10">
            Complete guidance, accountability, and support
            designed around your goals.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3"
              >
                <Check
                  size={22}
                  className="text-cyan-400"
                />

                <span>{feature}</span>
              </motion.div>
            ))}

          </div>

          <motion.a
            href="https://wa.me/919720229969"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-block
              bg-cyan-400
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >
            Apply For Coaching
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}