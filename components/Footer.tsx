export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-800 text-white py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-4xl font-bold mb-4">
          ZxOra
        </h3>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Transform Your Body. Build Your Confidence.
          Personalized coaching designed to help you achieve
          sustainable results.
        </p>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">

          <a
            href="https://www.instagram.com/zxorafit?igsh=MTZjazhobjNvd3VqcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            Instagram
          </a>

          <a
            href="https://wa.me/919720229969"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            WhatsApp
          </a>

          <a
            href="mailto:zxorafitness@gmail.com"
            className="
              text-gray-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            Email
          </a>

        </div>

        {/* Small Divider */}
        <div className="w-24 h-[1px] bg-zinc-700 mx-auto mb-8" />

        <p className="text-gray-500 text-sm">
          © 2026 ZxOra. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}