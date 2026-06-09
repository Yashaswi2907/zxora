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
        <div className="w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            Why Clients Choose ZxOra
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Built For Real Results
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A coaching experience focused on long-term progress,
            accountability, and sustainable transformation.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400/40
                hover:bg-white/[0.05]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}