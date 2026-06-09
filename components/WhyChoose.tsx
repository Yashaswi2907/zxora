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
        <div className="w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Why ZxOra
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Results Through
            <br />
            Accountability
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Consistency, support, and personalized guidance
            designed to help you achieve sustainable results.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/[0.03]
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400/40
                hover:bg-white/[0.05]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                {item.number}
              </h3>

              <p className="text-gray-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}