"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 text-white py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          ZxOra
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-zinc-400 mb-12 max-w-xl mx-auto leading-8"
        >
          Transform Your Body. Build Your Confidence.
          Personalized coaching designed to help you achieve
          sustainable results.
        </motion.p>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">

          <a
            href="https://www.instagram.com/zxorafit?igsh=MTZjazhobjNvd3VqcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-cyan-400
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Instagram
          </a>

          <a
            href="https://wa.me/919720229969"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-cyan-400
              transition-all
              duration-300
              hover:scale-105
            "
          >
            WhatsApp
          </a>

          <a
            href="mailto:kane@zxora.fit"
            className="
              text-zinc-400
              hover:text-cyan-400
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Email
          </a>

        </div>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto mb-8" />

        <p className="text-zinc-500 text-sm">
          © 2026 ZxOra. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}