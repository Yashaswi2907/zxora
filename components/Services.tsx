"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Utensils,
  MessageCircle,
  Activity,
  ClipboardCheck,
  Video,
} from "lucide-react";

const services = [
  {
    title: "1:1 Coaching",
    description:
      "Direct guidance and support throughout your fitness journey.",
    icon: MessageCircle,
  },
  {
    title: "Custom Workout Plans",
    description:
      "Gym and home workouts tailored specifically to your goals.",
    icon: Dumbbell,
  },
  {
    title: "Nutrition Guidance",
    description:
      "Personalized meal plans and flexible macro-based nutrition.",
    icon: Utensils,
  },
  {
    title: "Weekly Check-ins",
    description:
      "Track progress, review performance, and make adjustments.",
    icon: ClipboardCheck,
  },
  {
    title: "Form Analysis",
    description:
      "Video reviews to improve technique and prevent injuries.",
    icon: Video,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor body composition and performance improvements.",
    icon: Activity,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 uppercase tracking-[4px] mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  bg-white/[0.03]
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={42}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}