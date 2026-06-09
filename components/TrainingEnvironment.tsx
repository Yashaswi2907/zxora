import Image from "next/image";

export default function TrainingEnvironment() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            Training Environment
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Elite Training Environment
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access professional-grade equipment and an environment
            designed to help you push your limits every day.
          </p>

        </div>

        {/* Image Container */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            shadow-2xl
            transition-all
            duration-700
            hover:border-cyan-400/50
            hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
          "
        >

          <Image
            src="/cardio.png"
            alt="Training Environment"
            width={1400}
            height={800}
            className="
              w-full
              h-[450px]
              object-cover
              transition-all
              duration-700
              hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bottom Text */}
          <div className="absolute bottom-8 left-8">

            <h3 className="text-3xl font-bold text-white mb-2">
              Train With Purpose
            </h3>

            <p className="text-gray-300">
              Premium equipment. Professional atmosphere.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}