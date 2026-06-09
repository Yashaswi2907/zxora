import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ZxOra Logo"
            width={50}
            height={50}
            priority
          />

          <span className="text-xl font-semibold text-white tracking-wide">
            ZxOra
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-white">

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition"
          >
            Services
          </a>

          <a
            href="#programs"
            className="hover:text-cyan-400 transition"
          >
            Programs
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/919720229969"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white
            text-black
            px-6
            py-3
            rounded-full
            font-semibold
            hover:bg-cyan-400
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Book Free Consultation
        </a>

      </div>
    </nav>
  );
}